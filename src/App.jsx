import { useReducer, useCallback } from 'react'
import TitleScreen from './components/TitleScreen.jsx'
import GameScreen from './components/GameScreen.jsx'
import DeathScreen from './components/DeathScreen.jsx'
import {
  createInitialState,
  startGame,
  applyChoice,
  advanceEvent,
} from './game/engine.js'

function gameReducer(state, action) {
  switch (action.type) {
    case 'START_GAME':
      return startGame()

    case 'MAKE_CHOICE':
      return applyChoice(state, action.eventId, action.choiceIndex)

    case 'ADVANCE':
      // Called after outcome is shown — move to next event
      return advanceEvent({ ...state, outcome: null, currentEvent: null })

    case 'RESET':
      return createInitialState()

    default:
      return state
  }
}

export default function App() {
  const [state, dispatch] = useReducer(gameReducer, createInitialState())

  const handleStart = useCallback(() => {
    dispatch({ type: 'START_GAME' })
  }, [])

  const handleChoice = useCallback((eventId, choiceIndex) => {
    dispatch({ type: 'MAKE_CHOICE', eventId, choiceIndex })
  }, [])

  const handleAdvance = useCallback(() => {
    dispatch({ type: 'ADVANCE' })
  }, [])

  const handleReset = useCallback(() => {
    dispatch({ type: 'RESET' })
  }, [])

  if (state.screen === 'title') {
    return <TitleScreen onStart={handleStart} />
  }

  if (state.screen === 'death') {
    return (
      <DeathScreen
        summary={state.summary}
        finalAge={state.finalAge}
        causeOfDeath={state.causeOfDeath}
        stats={state.stats}
        highlights={state.highlights}
        onPlayAgain={handleReset}
      />
    )
  }

  return (
    <GameScreen
      state={state}
      onChoice={handleChoice}
      onAdvance={handleAdvance}
    />
  )
}
