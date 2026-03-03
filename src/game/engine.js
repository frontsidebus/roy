import { EVENTS } from '../data/events.js'

// ── Life stage boundaries ──────────────────────────────────────────────────
export const STAGES_ORDER = ['childhood', 'teen', 'youngAdult', 'adult', 'middleAge', 'senior']

export const STAGE_EVENTS = {
  childhood:  ['school_first_day', 'football_tryouts', 'dads_shadow'],
  teen:       ['high_school_identity', 'summer_job', 'graduation_plans'],
  // veteran_homecoming only fires if 'veteran' flag set (military enlistment path)
  youngAdult: ['college_choice', 'veteran_homecoming', 'carpet_store', 'first_love'],
  // rock_bottom only fires if 'divorced_once' flag set (Vegas marriage path)
  // the_big_idea only fires if 'entrepreneur' flag set (gambling ring / fireworks paths)
  adult:      ['rock_bottom', 'marriage_decision', 'the_big_idea', 'starting_family', 'the_diagnosis', 'beating_it'],
  // open_road only fires if 'biker' flag set (Harley path)
  middleAge:  ['lifestyle_choices', 'open_road', 'kids_growing_up', 'the_roof'],
  senior:     ['retirement', 'legacy'],
}

// ── Initial state ──────────────────────────────────────────────────────────
export function createInitialState() {
  return {
    screen: 'title',
    age: 5,
    stage: 'childhood',
    stats: { health: 100, happiness: 50, career: 0, relationships: 0, money: 20 },
    eventQueue: [...STAGE_EVENTS.childhood],
    currentEvent: null,
    outcome: null,
    highlights: [],
    flags: {},
    causeOfDeath: null,
    finalAge: null,
  }
}

// ── Stat helpers ───────────────────────────────────────────────────────────
export function clamp(val, min = 0, max = 100) {
  return Math.max(min, Math.min(max, val))
}

export function applyEffects(stats, effects) {
  const next = { ...stats }
  for (const [key, delta] of Object.entries(effects)) {
    next[key] = clamp(next[key] + delta)
  }
  return next
}

// ── Death check ────────────────────────────────────────────────────────────
export function checkInstantDeath(stats) {
  return stats.health <= 0
}

// Roof death: health < 40 means very high risk, roll dice on moderate health
export function checkRoofDeath(stats, choiceIndex) {
  if (stats.health < 30) return true
  if (stats.health < 50 && choiceIndex === 1) return true // wobbly ladder choice
  return false
}

// ── Natural death age calculation ──────────────────────────────────────────
export function calcNaturalDeathAge(stats) {
  // Base: 75, each stat contributes
  const healthBonus = (stats.health - 50) * 0.1  // up to ±5 years
  const happinessBonus = (stats.happiness - 50) * 0.04
  const relationshipBonus = (stats.relationships - 50) * 0.04
  const base = 75 + healthBonus + happinessBonus + relationshipBonus
  // Add small random variance ±3 years
  const variance = Math.floor(Math.random() * 7) - 3
  return Math.round(clamp(base + variance, 71, 90))
}

// ── Choice application ─────────────────────────────────────────────────────
export function applyChoice(state, eventId, choiceIndex) {
  const event = EVENTS.find(e => e.id === eventId)
  if (!event) return state

  const choice = event.choices[choiceIndex]
  const newStats = applyEffects(state.stats, choice.effects)
  const newFlags = { ...state.flags }

  if (choice.setFlag) newFlags[choice.setFlag] = true
  if (choice.clearFlag) delete newFlags[choice.clearFlag]

  const newHighlights = choice.highlight
    ? [...state.highlights, choice.highlight]
    : [...state.highlights]

  // Check for event-specific death
  if (choice.deathEvent || checkInstantDeath(newStats)) {
    const deathAge = choice.deathAge || state.age
    const cause =
      choice.deathCause ||
      "His health finally gave out. He lived fully to the end."
    return {
      ...state,
      stats: newStats,
      flags: newFlags,
      highlights: newHighlights,
      screen: 'death',
      currentEvent: null,
      outcome: null,
      causeOfDeath: cause,
      finalAge: deathAge,
      summary: buildSummary(newHighlights, deathAge, cause),
    }
  }

  // Roof death check
  if (event.checkDeath && checkRoofDeath(newStats, choiceIndex)) {
    const deathAge = 57
    const cause =
      "Roy fell off the roof fixing that leak he should have called someone about. " +
      "They say he died doing something he loved. That's a stretch, but it's a nice thing to say."
    return {
      ...state,
      stats: newStats,
      flags: newFlags,
      highlights: [...newHighlights, 'fell off a roof at fifty-seven trying to save a few bucks'],
      screen: 'death',
      currentEvent: null,
      outcome: null,
      causeOfDeath: cause,
      finalAge: deathAge,
      summary: buildSummary(
        [...newHighlights, 'fell off a roof at fifty-seven trying to save a few bucks'],
        deathAge,
        cause,
      ),
    }
  }

  return {
    ...state,
    stats: newStats,
    flags: newFlags,
    highlights: newHighlights,
    currentEvent: event,
    outcome: choice.outcome,
  }
}

// ── Event queue advancement ────────────────────────────────────────────────
export function advanceEvent(state) {
  // Pop the next event from the queue
  const [nextId, ...remaining] = state.eventQueue

  // No more events in queue — advance stage or end game
  if (!nextId) {
    return advanceStage(state)
  }

  const nextEvent = EVENTS.find(e => e.id === nextId)
  if (!nextEvent) return advanceStage(state)

  // Skip event if flag condition not met (e.g., beating_it only relevant if cancer flag set)
  if (nextEvent.checkFlag && !state.flags[nextEvent.checkFlag]) {
    return advanceEvent({ ...state, eventQueue: remaining })
  }

  return {
    ...state,
    eventQueue: remaining,
    currentEvent: nextEvent,
    age: nextEvent.age,
    outcome: null,
  }
}

// ── Stage transition ───────────────────────────────────────────────────────
function advanceStage(state) {
  const currentIndex = STAGES_ORDER.indexOf(state.stage)

  // End of game — natural death
  if (currentIndex >= STAGES_ORDER.length - 1 || state.currentEvent?.isLast) {
    const deathAge = calcNaturalDeathAge(state.stats)
    const cause = buildNaturalDeathCause(state)
    return {
      ...state,
      screen: 'death',
      currentEvent: null,
      outcome: null,
      causeOfDeath: cause,
      finalAge: deathAge,
      summary: buildSummary(state.highlights, deathAge, cause),
    }
  }

  const nextStage = STAGES_ORDER[currentIndex + 1]
  const nextQueue = [...STAGE_EVENTS[nextStage]]
  const firstEventId = nextQueue[0]
  const firstEvent = EVENTS.find(e => e.id === firstEventId)

  return {
    ...state,
    stage: nextStage,
    eventQueue: nextQueue.slice(1),
    currentEvent: firstEvent || null,
    age: firstEvent?.age || state.age,
    outcome: null,
  }
}

// ── Death summaries ────────────────────────────────────────────────────────
function buildNaturalDeathCause(state) {
  const { stats } = state
  if (stats.health > 70) return "Roy passed peacefully in his sleep at a very old age."
  if (stats.happiness > 70) return "Roy died with a smile on his face, surrounded by the people he loved."
  return "Roy died as he lived — quietly, and on his own terms."
}

export function buildSummary(highlights, age, cause) {
  if (!highlights || highlights.length === 0) {
    return `Roy lived to be ${age} years old. ${cause}`
  }

  const sentences = highlights.map((h, i) => {
    if (i === 0) return `Roy ${h}.`
    return `He ${h}.`
  })

  return sentences.join(' ') + ` He lived to be ${age} years old.`
}

// ── Game start helper ──────────────────────────────────────────────────────
export function startGame() {
  const init = createInitialState()
  const firstId = init.eventQueue[0]
  const firstEvent = EVENTS.find(e => e.id === firstId)
  return {
    ...init,
    screen: 'game',
    eventQueue: init.eventQueue.slice(1),
    currentEvent: firstEvent,
    age: firstEvent?.age || 6,
  }
}
