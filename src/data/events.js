// Roy: A Life Well Lived — All Life Events
// Each choice: text, effects (stat deltas), highlight (death summary), outcome (shown to player)
// 4th choices are always the wild/chaotic option.
// New conditional events fire only when specific flags are set.

export const STAGES = {
  childhood:   { label: 'Childhood',     color: '#39FF14' },
  teen:        { label: 'Teen Years',    color: '#00B4D8' },
  youngAdult:  { label: 'Young Adult',   color: '#9B5DE5' },
  adult:       { label: 'Adult',         color: '#F15BB5' },
  middleAge:   { label: 'Middle Age',    color: '#FF6B35' },
  senior:      { label: 'Senior Years',  color: '#FFD60A' },
}

export const EVENTS = [

  // ── CHILDHOOD ──────────────────────────────────────────────────────────────

  {
    id: 'school_first_day',
    stage: 'childhood',
    age: 6,
    title: 'First Day of School',
    text:
      "Roy clutches his Thundercats lunchbox as the school bus pulls up. " +
      "His stomach is doing flips. Does he charge in like he owns the place, " +
      "or stick close to the teacher?",
    choices: [
      {
        text: 'March in confidently and make friends',
        effects: { happiness: 10, relationships: 8, health: 0, career: 2, money: 0 },
        outcome:
          "Roy walks straight to the kid with the coolest sneakers and says 'Nice shoes.' " +
          "Best. Move. Ever. He doesn't sit alone at lunch once.",
        highlight: 'made friends on his first day of school like he owned the place',
      },
      {
        text: 'Stay close to the teacher, observe quietly',
        effects: { happiness: 3, relationships: 2, health: 2, career: 5, money: 0 },
        outcome:
          "Roy absorbs everything. He knows where every classroom is by noon. " +
          "He'll be useful before he's popular — but that's fine.",
        highlight: 'quietly figured out how everything worked before anyone else did',
      },
      {
        text: 'Cry and hide behind the bus',
        effects: { happiness: -8, relationships: -5, health: -3, career: 0, money: 0 },
        outcome:
          "The bus driver finds Roy under seat 4. It's a rough start. " +
          "Mrs. Patterson is very patient. Roy is less so with himself.",
        highlight: 'had a rough first day of school that he never quite forgot',
      },
      {
        text: '🌀 Challenge the biggest kid to a staring contest for dominance',
        wild: true,
        effects: { happiness: 8, relationships: 5, health: 0, career: 3, money: 0 },
        outcome:
          "Roy stares at Brett Kowalski for eleven minutes without blinking. Brett cries. " +
          "Roy is instantly feared and respected. Mrs. Patterson is not thrilled. " +
          "This is not the healthy foundation she was hoping for.",
        highlight: 'won a kindergarten staring contest and ruled first grade through sheer intimidation',
      },
    ],
  },

  {
    id: 'football_tryouts',
    stage: 'childhood',
    age: 9,
    title: 'Football Tryouts',
    text:
      "Every kid in town is trying out for the Pee-Wee football team. " +
      "Roy's dad played in high school — it's kind of a big deal in the family. " +
      "Roy's fast, but he's never actually practiced. What does he do?",
    choices: [
      {
        text: 'Give it everything — run drills until he drops',
        effects: { happiness: 12, health: 5, career: 5, relationships: 8, money: 0 },
        outcome:
          "Roy makes the team. First string. His dad actually shows up to a game sober. " +
          "Roy will remember that afternoon for the rest of his life.",
        highlight: 'played Pee-Wee football and made his dad proud',
        canonical: true,
      },
      {
        text: "Tryout half-heartedly — it's just a game",
        effects: { happiness: 2, health: 2, career: 0, relationships: 2, money: 0 },
        outcome:
          "Roy makes second string. He mostly warms the bench. " +
          "His dad shrugs. That's about what Roy expected.",
        highlight: 'played on the Pee-Wee football bench but learned the game',
      },
      {
        text: "Skip tryouts — sports aren't his thing",
        effects: { happiness: -5, health: 0, career: 0, relationships: -5, money: 5 },
        outcome:
          "Roy stays home and reads comic books. His dad doesn't say anything at dinner. " +
          "That somehow feels worse than being yelled at.",
        highlight: 'skipped football tryouts and spent the afternoon reading alone',
      },
      {
        text: "🌀 Organize the team to strike for better equipment",
        wild: true,
        effects: { happiness: 10, health: 0, career: 12, relationships: 8, money: 0 },
        outcome:
          "Roy hands out handwritten flyers at 8am. 'NO NEW HELMETS, NO TRYOUTS.' " +
          "The Pee-Wee Wildcats stage the first organized youth sports strike in county history. " +
          "They get new helmets. Coach Henderson quietly, deeply respects this nine-year-old.",
        highlight: 'organized his Pee-Wee football team to strike for better equipment at age nine',
        setFlag: 'organizer',
      },
    ],
  },

  {
    id: 'dads_shadow',
    stage: 'childhood',
    age: 11,
    title: "Dad's Shadow",
    text:
      "Roy's dad drinks. It's not a secret — everyone on the street knows. " +
      "Tonight he's stumbling again, and Roy's little sister is scared. " +
      "Mom's working the late shift. Roy is the oldest. He's eleven.",
    choices: [
      {
        text: 'Step up. Get sister to her room. Handle it.',
        effects: { happiness: -5, health: -5, career: 8, relationships: 10, money: 0 },
        outcome:
          "Roy becomes the adult in the room three years early. " +
          "It costs him something he can't name yet. But his sister trusts him completely from that night on.",
        highlight: 'learned to be strong for his family before he was ready',
      },
      {
        text: 'Call mom at work',
        effects: { happiness: -8, health: -3, career: 3, relationships: 5, money: 0 },
        outcome:
          "Mom is home in twenty minutes. She's furious and exhausted. " +
          "She hugs Roy so hard his ribs creak. 'You did the right thing,' she says.",
        highlight: 'called for help when it mattered and learned that was okay',
      },
      {
        text: "Lock himself in his room and pretend it isn't happening",
        effects: { happiness: -15, health: -8, career: 0, relationships: -8, money: 0 },
        outcome:
          "Roy puts his headphones on. The walls aren't thick enough. " +
          "He carries this night around for a long time.",
        highlight: 'had a childhood that asked too much of him too soon',
      },
      {
        text: "🌀 Pour out every bottle in the house and fill them with water",
        wild: true,
        effects: { happiness: 10, health: 3, career: 3, relationships: 8, money: -3 },
        outcome:
          "Roy empties fifteen bottles of Wild Turkey and refills each one with tap water. " +
          "Puts them back exactly. His dad drinks two glasses the next morning and feels weirdly okay. " +
          "Roy considers this a complete victory. He never tells anyone.",
        highlight: "replaced his dad's entire liquor supply with water at age eleven and got away with it",
      },
    ],
  },

  // ── TEEN ───────────────────────────────────────────────────────────────────

  {
    id: 'high_school_identity',
    stage: 'teen',
    age: 14,
    title: 'High School Identity',
    text:
      "Freshman year. The cafeteria is a minefield of social factions. " +
      "Roy could go jock, science nerd, or just... float. " +
      "Who does Roy want to be?",
    choices: [
      {
        text: 'Jock — lean into the football thing',
        effects: { happiness: 8, health: 10, career: 5, relationships: 8, money: 0 },
        outcome:
          "Roy joins the JV team. The varsity guys call him 'Rookie Roy.' " +
          "He hates it and loves it in equal measure.",
        highlight: 'found his identity on the football field in high school',
      },
      {
        text: "Join the science club — there's a state competition",
        effects: { happiness: 6, health: 0, career: 15, relationships: 3, money: 5 },
        outcome:
          "Roy discovers he's actually good at chemistry. His lab partner becomes his best friend. " +
          "They take third at regionals and Roy feels like he won the Super Bowl.",
        highlight: 'found his tribe in the science lab and won a regional competition',
        setFlag: 'science_kid',
      },
      {
        text: 'Float — eat lunch wherever, be friendly to everyone',
        effects: { happiness: 5, health: 0, career: 2, relationships: 12, money: 0 },
        outcome:
          "Roy becomes the guy everyone knows but nobody really knows. " +
          "He's invited to every party. He belongs to none of them. That's fine for now.",
        highlight: 'floated through high school known by everyone and belonging to no one',
      },
      {
        text: "🌀 Run an underground dice game in the back of the locker room",
        wild: true,
        effects: { happiness: 14, health: 0, career: 8, relationships: 12, money: 18 },
        outcome:
          "Roy runs the cleanest dice operation Westview High has ever seen. " +
          "He takes a reasonable rake. He settles disputes fairly. " +
          "He is suspended for three weeks when Vice Principal Goff finds the operation. " +
          "His customers write him a card. It's touching, honestly.",
        highlight: 'ran an underground gambling ring at fourteen and only got caught once',
        setFlag: 'entrepreneur',
      },
    ],
  },

  {
    id: 'summer_job',
    stage: 'teen',
    age: 16,
    title: 'Summer Job',
    text:
      "Sixteen, summer, and Roy needs cash. " +
      "Three options: bag groceries at Food Lion, mow lawns in the neighborhood, " +
      "or work the register at his uncle's carpet store downtown.",
    choices: [
      {
        text: 'Food Lion — steady paycheck, air conditioning',
        effects: { happiness: 3, health: 0, career: 5, relationships: 5, money: 15 },
        outcome:
          "Roy learns to be invisible and efficient. Gets promoted to produce in six weeks. " +
          "The assistant manager tells him he has 'real potential in retail.'",
        highlight: 'learned the value of showing up on time every single day',
      },
      {
        text: 'Lawn mowing — his own schedule, outdoors',
        effects: { happiness: 8, health: 12, career: 3, relationships: 3, money: 10 },
        outcome:
          "Roy has twelve clients by August. He's tanned, built, and saving. " +
          "Mr. Henderson tips him twenty bucks and says he's the most reliable kid in town.",
        highlight: 'ran a small lawn business at sixteen and saved every dollar',
      },
      {
        text: "Uncle Larry's carpet store — family discount on everything",
        effects: { happiness: 4, health: 0, career: 10, relationships: 6, money: 8 },
        outcome:
          "Roy learns to sell. Uncle Larry shows him how to read a customer in thirty seconds. " +
          "He doesn't know it yet, but he's going to remember this place.",
        highlight: 'first learned the carpet business from his Uncle Larry at sixteen',
        foreshadow: 'carpet',
      },
      {
        text: "🌀 Sell homemade fireworks out of the garage — maximum profit, minimum safety",
        wild: true,
        effects: { happiness: 16, health: -8, career: 5, relationships: 5, money: 25 },
        outcome:
          "'Premier Pyrotechnics' sells $800 worth of product by the Fourth of July. " +
          "One small garage fire. Zero injuries. Mr. Henderson from next door buys twelve boxes " +
          "and calls Roy 'America's future.' Roy's mom disagrees loudly.",
        highlight: 'ran an illegal fireworks business from his garage at sixteen and only started one fire',
        setFlag: 'entrepreneur',
      },
    ],
  },

  {
    id: 'graduation_plans',
    stage: 'teen',
    age: 18,
    title: 'Graduation Plans',
    text:
      "Cap and gown. Roy's whole life is supposedly ahead of him. " +
      "His guidance counselor has been on his case about 'next steps.' " +
      "College, work, or something else entirely?",
    choices: [
      {
        text: "State university — everyone's going",
        effects: { happiness: 6, health: 0, career: 10, relationships: 8, money: -15 },
        outcome:
          "Roy gets in. His mom cries at the dinner table — happy tears this time. " +
          "He packs his whole life into a duffel bag and a borrowed truck.",
        highlight: 'was the first in his family to go to college',
      },
      {
        text: 'Community college — cheaper, stay local',
        effects: { happiness: 4, health: 2, career: 7, relationships: 5, money: -5 },
        outcome:
          "Roy commutes. He saves money, keeps his job, and still learns what he needs to. " +
          "People underestimate him. He's used to that.",
        highlight: 'put practicality over prestige and never regretted it',
      },
      {
        text: "Get a job — college isn't for everyone",
        effects: { happiness: 2, health: 0, career: 5, relationships: 3, money: 20 },
        outcome:
          "Roy skips the whole thing. Making real money by October while his friends are broke freshmen. " +
          "He'll wonder sometimes. But not often.",
        highlight: 'skipped college and hit the ground running',
      },
      {
        text: "🌀 Enlist in the military — Roy needs to see the world",
        wild: true,
        effects: { happiness: 5, health: 20, career: 12, relationships: -8, money: 15 },
        outcome:
          "Roy ships out three weeks after graduation. Two years later he comes back " +
          "with a posture like a steel beam, arms like bridge cables, " +
          "and zero patience for people who complain about their commute.",
        highlight: 'enlisted in the military straight out of high school and saw more of the world than he expected',
        setFlag: 'veteran',
      },
    ],
  },

  // ── YOUNG ADULT ────────────────────────────────────────────────────────────

  {
    id: 'college_choice',
    stage: 'youngAdult',
    age: 21,
    title: 'College Choice',
    text:
      "Roy's at a crossroads with his education. " +
      "His business professor says he has 'uncommon people skills.' " +
      "His chemistry professor says Roy has 'a gift he's wasting.' " +
      "What does Roy pursue?",
    choices: [
      {
        text: 'Business degree — practical, pays the bills',
        effects: { happiness: 5, health: 0, career: 12, relationships: 5, money: 5 },
        outcome:
          "Roy graduates with a business degree and three job offers. " +
          "Not exactly his dream, but since when does that matter?",
        highlight: 'got a practical business degree and immediately had options',
      },
      {
        text: 'Kinesiology — stay close to sports',
        effects: { happiness: 10, health: 8, career: 8, relationships: 8, money: 0 },
        outcome:
          "Roy loves it. He coaches junior league on weekends for free. " +
          "Money's tight but he's never once dreaded Monday.",
        highlight: 'studied kinesiology and never stopped being a jock at heart',
      },
      {
        text: "Drop out — the idea was always someone else's",
        effects: { happiness: -5, health: 0, career: -5, relationships: -3, money: 10 },
        outcome:
          "Roy walks. He tells himself he'll figure it out. " +
          "He's right — but it takes longer than he expected.",
        highlight: 'dropped out of college and had to find his own way from scratch',
      },
      {
        text: "🌀 Become a professional poker player — Roy's got the math and the face for it",
        wild: true,
        effects: { happiness: 14, health: -3, career: -5, relationships: -5, money: 28 },
        outcome:
          "Roy grinds the regional circuit for two years. He's disciplined. Cold under pressure. " +
          "He cashes six tournaments and tells himself he'll go pro once he hits six figures. " +
          "He doesn't. He quits before he loses it all. Barely.",
        highlight: 'spent two years as a semi-professional poker player and made a profit most days',
      },
    ],
  },

  // ── CONDITIONAL: veteran homecoming ───────────────────────────────────────
  {
    id: 'veteran_homecoming',
    stage: 'youngAdult',
    age: 22,
    title: 'Coming Home',
    checkFlag: 'veteran',
    text:
      "Roy's back from two years of service. He's different in ways he can't fully explain. " +
      "His high school friends are at the same bar, same jokes, same everything. " +
      "Roy has done things that make small talk feel like a foreign language. What now?",
    choices: [
      {
        text: "Find other veterans — they'll actually understand",
        effects: { happiness: 12, relationships: 15, health: 8, career: 5, money: 0 },
        outcome:
          "Roy finds a group of guys who get it. They don't talk about what they saw — " +
          "they play poker and fix each other's cars and that's enough. " +
          "This is the most comfortable Roy has felt since he got back.",
        highlight: 'found his people in a veterans group that never once talked about feelings',
      },
      {
        text: 'Throw himself into work — action is the only medicine',
        effects: { happiness: -5, health: 0, career: 15, relationships: -5, money: 12 },
        outcome:
          "Roy works sixty hours a week. He doesn't know what he's running from " +
          "but the motion helps. His boss calls him 'a machine.' " +
          "Roy isn't sure if that's a compliment.",
        highlight: 'came back from service and buried himself in work until the noise got quiet',
      },
      {
        text: 'Try to pick up exactly where he left off — pretend nothing happened',
        effects: { happiness: -12, health: -5, career: 0, relationships: -8, money: 0 },
        outcome:
          "Roy sits with his beer and his two years of things he can't say. " +
          "He eventually stops returning calls. His mom is worried. She's right to be.",
        highlight: "came home from the military a different person and tried to be the old Roy, which didn't work",
      },
      {
        text: '🌀 Re-enlist. Civilian life makes no sense yet.',
        wild: true,
        effects: { happiness: -5, health: 15, career: 18, relationships: -18, money: 12 },
        outcome:
          "Roy re-enlists. Eight more years of structure and unambiguous purpose. " +
          "When he finally gets out for good, he's thirty, " +
          "built like a wall, and completely unsure what to do with a Tuesday afternoon.",
        highlight: 're-enlisted because civilian life made no sense and served a total of ten years',
      },
    ],
  },

  {
    id: 'carpet_store',
    stage: 'youngAdult',
    age: 23,
    title: 'The Carpet Store',
    text:
      "Uncle Larry offers Roy a full-time position at the carpet store. " +
      "It's not glamorous, but there's a real future there — Larry's ready to retire in ten years " +
      "and Roy's the only family who'd want it. Meanwhile, a startup in the city is hiring.",
    choices: [
      {
        text: "Take the carpet store job — family, roots, future ownership",
        effects: { happiness: 8, health: 0, career: 10, relationships: 10, money: 8 },
        outcome:
          "Roy ties on an apron with 'Roy' stitched on the front. It fits. " +
          "He's going to spend a lot of his life in this building. He doesn't know that yet.",
        highlight: 'took over at the family carpet store and built something real',
        canonical: true,
        setFlag: 'carpet_store',
      },
      {
        text: 'Take the startup job — bigger risk, bigger potential',
        effects: { happiness: 6, health: -3, career: 15, relationships: 3, money: 15 },
        outcome:
          "Roy puts on a lanyard and a ten-hour-a-day work week. " +
          "The ping-pong table is a lie. The salary is not.",
        highlight: 'bet on himself at a startup and worked himself to the bone',
      },
      {
        text: 'Turn both down — keep looking for the right thing',
        effects: { happiness: -5, health: 0, career: -3, relationships: -2, money: -10 },
        outcome:
          "Roy waits for a better offer. Three months later, Uncle Larry hires someone else. " +
          "The startup gets acquired. Roy is not part of either story.",
        highlight: 'waited too long for the perfect opportunity and missed two good ones',
      },
      {
        text: "🌀 Follow the Grateful Dead on tour instead — what's the worst that can happen",
        wild: true,
        effects: { happiness: 25, health: -3, career: -15, relationships: -10, money: -25 },
        outcome:
          "Roy follows the Dead through seventeen states in a converted VW van with a guy named Fuzz. " +
          "He runs out of money in Tulsa and calls his mom collect at 2am. " +
          "She drives eight hours. He never regrets a single night. She kind of does.",
        highlight: 'followed the Grateful Dead across seventeen states until the money ran out in Tulsa',
      },
    ],
  },

  {
    id: 'first_love',
    stage: 'youngAdult',
    age: 25,
    title: 'First Love',
    text:
      "Her name is Sandra. She's a teacher, she laughs at his dumb jokes, " +
      "and she's been hinting at being exclusive for two months now. " +
      "Roy's been single his whole adult life. What's the move?",
    choices: [
      {
        text: "Commit — she's the one, go all in",
        effects: { happiness: 18, health: 5, career: 0, relationships: 20, money: -5 },
        outcome:
          "Roy asks her to be his girlfriend at a diner. She says yes before he finishes the sentence. " +
          "He tips forty percent and walks home on air.",
        highlight: 'fell head over heels for a schoolteacher named Sandra',
      },
      {
        text: "Keep it casual — you're still young",
        effects: { happiness: 5, health: 3, career: 5, relationships: 5, money: 5 },
        outcome:
          "Roy says he 'wants to take it slow.' Sandra nods. " +
          "She meets someone else six months later. Roy tells himself it was the right call.",
        highlight: 'played it cool with love and paid for it later',
      },
      {
        text: "End it — something feels off",
        effects: { happiness: -8, health: 0, career: 5, relationships: -10, money: 0 },
        outcome:
          "Roy breaks up with Sandra via voicemail. He lies awake that night. " +
          "He will lie awake about this for years.",
        highlight: 'let the best thing in his young life walk away',
      },
      {
        text: "🌀 Propose immediately — Vegas chapel, this Tuesday, to someone he just met",
        wild: true,
        effects: { happiness: 8, health: 0, career: -3, relationships: -12, money: -15 },
        outcome:
          "Roy marries Denise at the Viva Las Vegas Wedding Chapel by an Elvis impersonator. " +
          "It's a Tuesday. The marriage lasts eight months. " +
          "Roy keeps the casino chip from their honeymoon in his wallet until he dies.",
        highlight: 'had a Las Vegas marriage to a woman named Denise that lasted eight months and was completely worth it',
        setFlag: 'divorced_once',
      },
    ],
  },

  // ── CONDITIONAL: rock bottom ───────────────────────────────────────────────
  {
    id: 'rock_bottom',
    stage: 'adult',
    age: 27,
    title: 'Rock Bottom (Or Close Enough)',
    checkFlag: 'divorced_once',
    text:
      "Roy's Vegas marriage is over. He's twenty-seven, living in a studio apartment, " +
      "eating cereal for dinner more nights than he'd like to admit. " +
      "This isn't where he expected to be. What does he do with this?",
    choices: [
      {
        text: 'Get actual therapy. Deal with it properly.',
        effects: { happiness: 15, relationships: 12, health: 8, career: 3, money: -8 },
        outcome:
          "Roy sits across from Dr. Reyes and says 'I don't know why I'm here.' " +
          "She says 'Yes you do.' Somehow that's enough to start. " +
          "He goes for eleven months. He's a measurably better person by the end.",
        highlight: 'went to therapy at twenty-seven and came out the other side worth knowing',
      },
      {
        text: 'Channel it — start running at 5am, burn through the misery',
        effects: { happiness: 10, health: 15, career: 5, relationships: 3, money: -3 },
        outcome:
          "Roy runs because misery needs somewhere to go. By month three: 7-minute miles. " +
          "He doesn't write the song he planned to write. He writes a lot of journal entries " +
          "that are basically songs. He never shows anyone.",
        highlight: 'ran off a broken heart at twenty-seven and kept the habit for life',
      },
      {
        text: 'Call Denise — maybe they made a mistake',
        effects: { happiness: -8, relationships: -15, health: -3, career: -3, money: -5 },
        outcome:
          "Denise is open to talking. They spend three months in an exhausting will-they-won't-they " +
          "that ends with both of them worse than before. The final call is forty minutes. " +
          "Neither says anything useful. They never speak again.",
        highlight: 'tried to fix his Vegas marriage six months after the divorce and made everything worse',
      },
      {
        text: "🌀 Embrace the chaos — take a bus to New Orleans, no plan, no timeline",
        wild: true,
        effects: { happiness: 22, health: 5, career: -5, relationships: -5, money: -12 },
        outcome:
          "Roy takes the 8am Greyhound to New Orleans because he'd never been. " +
          "He stays six weeks. He eats things he can't pronounce. He makes friends he'll never find again. " +
          "He comes back broke and clear-headed. That's the trade. It was fair.",
        highlight: 'took a Greyhound to New Orleans alone at twenty-seven with no plan and found it clarifying',
      },
    ],
  },

  // ── ADULT ──────────────────────────────────────────────────────────────────

  {
    id: 'marriage_decision',
    stage: 'adult',
    age: 28,
    title: 'Marriage Decision',
    text:
      "Roy's been with Linda for three years. She's patient, smart, completely in love with him. " +
      "His buddy Jeff just got divorced. Roy's not sure what he believes about marriage anymore. " +
      "He's got a ring in his sock drawer.",
    choices: [
      {
        text: 'Propose — she makes everything better',
        effects: { happiness: 20, health: 5, career: 3, relationships: 25, money: -15 },
        outcome:
          "Roy kneels in the kitchen. Linda is holding a spatula. She cries and says yes " +
          "and they eat burnt eggs for dinner and it's the best meal of his life.",
        highlight: 'married Linda in a small ceremony with everyone who mattered',
      },
      {
        text: "Wait — Jeff's divorce has him spooked",
        effects: { happiness: -5, health: 0, career: 5, relationships: -8, money: 5 },
        outcome:
          "Linda gives him six more months, then asks what they're doing. " +
          "Roy doesn't have a good answer. She leaves. He keeps the ring.",
        highlight: 'waited too long and let Linda walk out the door',
      },
      {
        text: "Break up — he's not built for this",
        effects: { happiness: -15, health: -5, career: 5, relationships: -20, money: 10 },
        outcome:
          "Roy is alone in a very clean apartment. He has a lot of time for hobbies. " +
          "He takes up fishing. He hates fishing.",
        highlight: 'ended things with Linda and spent a decade regretting it',
      },
      {
        text: "🌀 Propose on the Jumbotron at a baseball game — without warning her first",
        wild: true,
        effects: { happiness: 15, health: 3, career: 3, relationships: 18, money: -8 },
        outcome:
          "Forty thousand people watch Linda's face cycle through shock, fury, and then — impossibly — joy. " +
          "Roy has absolutely no idea how that worked. He still doesn't. " +
          "Linda tells the story at every dinner party for thirty years.",
        highlight: 'proposed to Linda on a stadium Jumbotron without warning and somehow got a yes',
      },
    ],
  },

  {
    id: 'the_big_idea',
    stage: 'adult',
    age: 35,
    title: 'The Big Idea',
    checkFlag: 'entrepreneur',
    text:
      "Roy's had a business idea for years: premium flooring showrooms with in-home consultation " +
      "— the kind of service big box stores can't compete with. He has the knowledge. " +
      "He might have a partner. He definitely does not have the capital. Does he bet on himself?",
    choices: [
      {
        text: 'Go for it — second mortgage, full launch',
        effects: { happiness: 12, health: -8, career: 22, relationships: -8, money: -25 },
        outcome:
          "Roy Flooring & Design opens in the spring. The first year almost kills him. " +
          "The second year almost doesn't. Year five: four locations. " +
          "He is the most stressed and most alive he has ever simultaneously been.",
        highlight: 'mortgaged his house to start a flooring business empire and somehow made it work',
        setFlag: 'business_empire',
      },
      {
        text: 'Find investors — share the risk, share the upside',
        effects: { happiness: 8, health: -3, career: 16, relationships: 5, money: 8 },
        outcome:
          "Roy pitches fourteen people. Three say yes. He gives up 40% equity but keeps his house. " +
          "His partners are annoying. The money is not.",
        highlight: "built a flooring business empire with other people's money and their frequent opinions",
      },
      {
        text: "Start small — test it on weekends first",
        effects: { happiness: 8, health: 0, career: 8, relationships: 3, money: -5 },
        outcome:
          "Roy runs premium consultations on Saturdays. Within six months: a waiting list. " +
          "By year two it's a real business. Not the empire he dreamed, but something real.",
        highlight: 'built a side business from weekend consultations and kept his day job just in case',
      },
      {
        text: "🌀 Take the idea to a Shark Tank-style pitch competition — go full television",
        wild: true,
        effects: { happiness: 18, health: -3, career: 15, relationships: 5, money: 20 },
        outcome:
          "Roy stands in front of five investors under fluorescent lights and pitch-yells for six minutes. " +
          "Two of them pass. One writes a check on the spot. " +
          "Roy is briefly on regional TV. His mom records it on VHS and watches it forty times.",
        highlight: 'pitched his flooring business on regional television and got a check on the spot',
        setFlag: 'business_empire',
      },
    ],
  },

  {
    id: 'starting_family',
    stage: 'adult',
    age: 33,
    title: 'Starting a Family',
    text:
      "Roy's wife wants kids. Two, maybe three. Roy loves the idea in theory. " +
      "In practice: they're not exactly rolling in money, and Roy's been " +
      "working fifty-hour weeks. Is now the time?",
    choices: [
      {
        text: "Yes — you're never fully ready, let's do it",
        effects: { happiness: 15, health: -5, career: -3, relationships: 20, money: -20 },
        outcome:
          "Nine months later Roy is crying in a hospital parking lot — happy crying. " +
          "He has a son. He names him Danny. He is terrified and complete.",
        highlight: 'became a father at thirty-three and loved every exhausting minute of it',
      },
      {
        text: 'Wait two more years — get finances right first',
        effects: { happiness: 3, health: 0, career: 8, relationships: 5, money: 15 },
        outcome:
          "They wait. They save. They travel. It's good. " +
          "They have their first kid at thirty-six, right on schedule.",
        highlight: 'planned carefully and started a family when the time was right',
      },
      {
        text: "Not for him — he's not dad material",
        effects: { happiness: -10, health: 3, career: 10, relationships: -15, money: 20 },
        outcome:
          "Roy says he doesn't want kids. His wife doesn't leave, but something leaves with her. " +
          "They never talk about it directly again.",
        highlight: 'chose career over family and lived in the quiet that followed',
      },
      {
        text: "🌀 Adopt Marcus, a twelve-year-old nobody else is taking",
        wild: true,
        effects: { happiness: 18, health: 0, career: -5, relationships: 25, money: -15 },
        outcome:
          "Marcus doesn't say much the first month. He's waiting for the other shoe to drop. " +
          "By month three Roy finds him in the garage fixing the lawnmower 'because it was broken.' " +
          "He says 'Dad' for the first time a year later, during football. " +
          "Roy pretends not to notice so Marcus won't feel embarrassed. Marcus knows he noticed.",
        highlight: 'adopted a twelve-year-old named Marcus who nobody else would take and gave him everything',
        setFlag: 'adopted_marcus',
      },
    ],
  },

  {
    id: 'the_diagnosis',
    stage: 'adult',
    age: 38,
    title: 'The Diagnosis',
    text:
      "Roy went in for a routine physical. It was not routine. " +
      "The doctor uses the word 'cancer' and Roy's ears stop working for thirty seconds. " +
      "It's treatable — but the treatment is brutal. How does Roy approach this?",
    choices: [
      {
        text: 'Full treatment, maximum effort. Fight it.',
        effects: { happiness: -10, health: 5, career: -5, relationships: 10, money: -20 },
        outcome:
          "Roy starts chemo. He loses weight, his hair, three months of his life. " +
          "His family shows up every single day. He doesn't take that for granted.",
        highlight: 'got cancer at thirty-eight and fought it with everything he had',
        setFlag: 'fighting_cancer',
      },
      {
        text: 'Do the minimum — try to keep living normally',
        effects: { happiness: -5, health: -10, career: 0, relationships: 5, money: -10 },
        outcome:
          "Roy manages it around his schedule. His color isn't right for two years. " +
          "His doctor is frustrated.",
        highlight: "got cancer at thirty-eight and tried to pretend it wasn't happening",
        setFlag: 'fighting_cancer_weak',
      },
      {
        text: "Ignore it — maybe they're wrong",
        effects: { happiness: 5, health: -25, career: 5, relationships: -5, money: 0 },
        outcome:
          "Roy gets a second opinion. Then a third. Each one says the same thing. " +
          "He loses six months.",
        highlight: "couldn't accept his diagnosis and lost valuable time",
        setFlag: 'fighting_cancer_weak',
      },
      {
        text: "🌀 Try crystals, a shaman, and something called 'vibrational healing'",
        wild: true,
        effects: { happiness: 8, health: -28, career: 0, relationships: -10, money: -15 },
        outcome:
          "Roy spends four months and $11,000 on a shaman named Brad, " +
          "amethyst crystals, and a retreat in Sedona where a man reads his aura for $400 an hour. " +
          "Brad says Roy's 'energy signature is improving.' " +
          "Roy's oncologist says his tumor absolutely is not. Six months wasted.",
        highlight: 'spent eleven thousand dollars on crystal healing before accepting his cancer was real',
        setFlag: 'fighting_cancer_weak',
      },
    ],
  },

  {
    id: 'beating_it',
    stage: 'adult',
    age: 41,
    title: 'Beating It',
    text:
      "Three years have passed. Roy's in remission — maybe. The numbers are better. " +
      "But the doctor says Roy needs to completely change his lifestyle or the odds tilt the wrong way. " +
      "What does Roy do?",
    checkFlag: 'fighting_cancer_weak',
    choices: [
      {
        text: 'Total lifestyle overhaul — diet, exercise, no more junk',
        effects: { happiness: 8, health: 30, career: -3, relationships: 8, money: -5 },
        outcome:
          "Roy becomes the guy who talks about kale. Insufferably. " +
          "But his scans come back clean. He cries in the car. Clean, ugly, grateful tears.",
        highlight: 'beat cancer through sheer stubbornness and an obscene amount of kale',
        clearFlag: 'fighting_cancer_weak',
      },
      {
        text: "Mostly comply — it's hard to change everything at once",
        effects: { happiness: 3, health: 10, career: 0, relationships: 3, money: -2 },
        outcome:
          "Roy is in a kind of limbo. Better, but not clear. " +
          "The doctor calls it 'managed.' Roy calls it 'not dead,' which is good enough.",
        highlight: 'fought his cancer to a draw and learned to live with uncertainty',
      },
      {
        text: "Don't change — if it comes back, it comes back",
        effects: { happiness: -5, health: -35, career: 0, relationships: -10, money: 5 },
        outcome:
          "Roy decides not to fight what he can't see. The cancer disagrees. " +
          "The numbers go the wrong way. Fast.",
        highlight: 'decided fate would decide and paid a terrible price for it',
        deathEvent: true,
        deathCause:
          "The cancer came back. Roy was fifty-one years old. He didn't suffer — " +
          "the end was faster than anyone expected. His family was with him.",
        deathAge: 51,
      },
      {
        text: "🌀 Move to a cabin in Montana. Disappear. Deal with it alone.",
        wild: true,
        effects: { happiness: 18, health: -15, career: -8, relationships: -20, money: -10 },
        outcome:
          "Roy builds a cabin with his own hands. No treatment, no doctors, no carpet store. " +
          "No phone. Sixteen months. He is genuinely, completely at peace. " +
          "The cancer is still there when he surfaces. His family is furious. He is not sorry.",
        highlight: 'fled to a cabin in Montana for sixteen months to deal with cancer entirely on his own terms',
      },
    ],
  },

  // ── MIDDLE AGE ─────────────────────────────────────────────────────────────

  {
    id: 'lifestyle_choices',
    stage: 'middleAge',
    age: 47,
    title: 'Lifestyle Choices',
    text:
      "Middle age arrives like a slow punch. Roy's back hurts. He's heavier than he'd like. " +
      "His doctor keeps mentioning cholesterol. Some guys at work hike every weekend. " +
      "Roy's wife bought him a gym membership he hasn't used. What's the move?",
    choices: [
      {
        text: 'Hit the gym — actually use that membership',
        effects: { happiness: 10, health: 20, career: 3, relationships: 5, money: -3 },
        outcome:
          "Roy goes at 6am because it's the only time he can. He hates it for three weeks. " +
          "Then he loves it. His back stops hurting. His doctor stops mentioning cholesterol.",
        highlight: 'finally got serious about his health in his late forties',
      },
      {
        text: 'Take up hiking with the guys from work',
        effects: { happiness: 12, health: 15, career: 5, relationships: 10, money: -2 },
        outcome:
          "Roy buys boots that give him blisters for a month. Then he's hooked. " +
          "He and Dave from accounting summit a 4,000-footer. Roy cries a little at the top.",
        highlight: 'discovered hiking late in life and dragged everyone he knew along',
      },
      {
        text: "Keep doing what he's doing — he feels fine",
        effects: { happiness: 0, health: -10, career: 0, relationships: 0, money: 5 },
        outcome:
          "Roy feels fine right up until he doesn't. Nothing catastrophic. " +
          "Just a slow draining. He takes more ibuprofen than he probably should.",
        highlight: 'coasted through his late forties and let his body write the checks his habits signed',
      },
      {
        text: "🌀 Buy a Harley-Davidson and join a biker gang",
        wild: true,
        effects: { happiness: 20, health: -8, career: -5, relationships: -12, money: -25 },
        outcome:
          "Roy's wife calls this 'the motorcycle situation' for three years. " +
          "Roy's biker name is 'Carpet King.' He earns it after explaining his job to the gang leader, " +
          "who says: 'That's the most normal thing anyone's told me.' " +
          "Roy rides every weekend. He feels twenty-five.",
        highlight: "joined a biker gang in his late forties and went by 'Carpet King'",
        setFlag: 'biker',
      },
    ],
  },

  // ── CONDITIONAL: open road ─────────────────────────────────────────────────
  {
    id: 'open_road',
    stage: 'middleAge',
    age: 49,
    title: 'The Open Road',
    checkFlag: 'biker',
    text:
      "The Sons of Suburbia MC is doing a three-week run to Sturgis. " +
      "Roy has three weeks of vacation saved. His wife has not been fully briefed on this plan. " +
      "Who does Roy bring?",
    choices: [
      {
        text: "Invite his wife — she might actually love it",
        effects: { happiness: 15, relationships: 22, health: 3, career: 0, money: -12 },
        outcome:
          "Linda says yes, which Roy absolutely did not expect. " +
          "She rides better than Roy by day two. The gang loves her. " +
          "She gets a biker name before Roy does. Hers is 'Midnight.' " +
          "Roy remains 'Carpet King.'",
        highlight: 'talked his wife into a Sturgis motorcycle run and she immediately became cooler than him',
      },
      {
        text: "Bring Danny — father-son trip of a lifetime",
        effects: { happiness: 18, relationships: 18, health: 5, career: 0, money: -10 },
        outcome:
          "Danny is quietly terrified and doesn't say so. By day three something loosens between them. " +
          "They don't talk much at seventy miles an hour — there's no room for it. " +
          "Pulling into Sturgis, Danny says it's the coolest thing he's ever done. Roy agrees.",
        highlight: 'took his son Danny on a cross-country motorcycle run that neither of them ever forgot',
      },
      {
        text: 'Go alone — this is the entire point',
        effects: { happiness: 22, health: 5, career: -3, relationships: -5, money: -8 },
        outcome:
          "Twenty-one states. Two broken-down bikes. One brawl Roy didn't start and immediately left. " +
          "The longest he's been alone with his thoughts since he was young. " +
          "He comes back knowing something he couldn't have said before the trip. " +
          "He still can't quite say it. But he knows it.",
        highlight: 'rode across twenty-one states alone at forty-nine and came back knowing something new',
      },
      {
        text: "🌀 Ride all the way to Mexico — the route plan is purely theoretical",
        wild: true,
        effects: { happiness: 25, health: -5, career: -8, relationships: -15, money: -20 },
        outcome:
          "Roy and three guys from the gang make it to Oaxaca in eleven days. " +
          "Two bikes break down. Roy's passport expires mid-trip. " +
          "Getting back across the border takes sixteen hours and a very confident handshake. " +
          "It is the greatest adventure of his adult life.",
        highlight: 'rode a Harley to Oaxaca with an expired passport and made it home through sheer confidence',
      },
    ],
  },

  {
    id: 'kids_growing_up',
    stage: 'middleAge',
    age: 52,
    title: 'Kids Growing Up',
    text:
      "Roy's kid is heading to college. The house is about to get quiet in a way Roy isn't ready for. " +
      "His kid wants to study art. Roy thinks that's impractical but doesn't want to be his dad. " +
      "What does Roy do?",
    choices: [
      {
        text: "Support him fully — it's his life, his call",
        effects: { happiness: 15, health: 0, career: 0, relationships: 20, money: -10 },
        outcome:
          "He studies illustration. He's actually good. He sends Roy a framed print for Christmas: " +
          "a cartoon of the carpet store. Roy hangs it in his office. It stays there forever.",
        highlight: "supported his kid's art career even when he didn't understand it",
      },
      {
        text: "Suggest a 'practical double major' — just as backup",
        effects: { happiness: 5, health: 0, career: 5, relationships: 5, money: -5 },
        outcome:
          "He takes business as a minor and kind of resents it for two years. " +
          "They work through it. Roy was trying to help. His kid knows that.",
        highlight: 'gave his son unsolicited advice that took a few years to forgive',
      },
      {
        text: 'Tell him to be practical — Roy knows the real world',
        effects: { happiness: -5, health: 0, career: 3, relationships: -15, money: 0 },
        outcome:
          "He switches to accounting. He's miserable for ten years before he quits anyway. " +
          "Roy can't say anything because he said the wrong thing once and his son hasn't forgotten.",
        highlight: 'gave his son the wrong advice and spent years making it right',
      },
      {
        text: "🌀 Audit his college classes — show up as a fellow student",
        wild: true,
        effects: { happiness: 15, health: 3, career: 3, relationships: 12, money: -8 },
        outcome:
          "Roy registers as an audit student and shows up to Intro to Art History with a thermos. " +
          "He raises his hand seventeen times in the first lecture. " +
          "His son switches sections. Roy shows up to that one too. " +
          "They laugh about this for thirty years.",
        highlight: "crashed his kid's college classes as a fifty-two-year-old and embarrassed him perfectly",
      },
    ],
  },

  {
    id: 'the_roof',
    stage: 'middleAge',
    age: 57,
    title: 'The Roof',
    text:
      "There's a section of the roof that's been leaking for two years. " +
      "Roy finally bought the materials to fix it himself. " +
      "It's Saturday morning. He's up there with a hammer and way too much confidence.",
    checkDeath: true,
    choices: [
      {
        text: 'Fix it himself — he watches YouTube, he can do this',
        effects: { happiness: 5, health: -5, career: 0, relationships: 3, money: 10 },
        outcome:
          "Roy fixes the roof. It looks rough but it holds. He texts his wife a photo: " +
          "'Roof fixed. I'm a genius.' She sends back a thumbs up.",
        highlight: 'fixed his own roof at fifty-seven and only slipped once (minor)',
        roofSurvived: true,
      },
      {
        text: 'Push through even though the ladder is wobbly',
        effects: { happiness: -3, health: -15, career: 0, relationships: -3, money: 8 },
        outcome:
          "Roy nearly goes over. He grabs the gutter. It holds — barely. " +
          "His heart doesn't stop pounding for the rest of the day.",
        highlight: 'had a close call on a roof and laughed about it later',
        roofSurvived: true,
      },
      {
        text: "Call a professional — this is above his pay grade",
        effects: { happiness: 3, health: 5, career: 0, relationships: 5, money: -8 },
        outcome:
          "Roy calls Dave's Roofing. The guy fixes it in forty minutes. " +
          "Roy watches from the lawn with a beer and zero regrets.",
        highlight: 'knew when to call for help and lived to tell about it',
        roofSurvived: true,
      },
      {
        text: "🌀 Fix the roof AND install a rooftop hot tub. While up there. Why not.",
        wild: true,
        effects: { happiness: 22, health: -10, career: 0, relationships: 10, money: -30 },
        outcome:
          "Roy builds the world's most structurally questionable rooftop hot tub. " +
          "His wife refuses to use it. His neighbors use it constantly. " +
          "It collapses into the attic during a heavy snow in 2009. No one is hurt. " +
          "The insurance claim is extremely difficult to explain. Roy calls it 'one of the better decisions.'",
        highlight: 'installed an unauthorized rooftop hot tub that lasted six years before collapsing into his attic',
        roofSurvived: true,
      },
    ],
  },

  // ── SENIOR ─────────────────────────────────────────────────────────────────

  {
    id: 'retirement',
    stage: 'senior',
    age: 64,
    title: 'Retirement',
    text:
      "Roy is sixty-four. The carpet store has run fine without him for years. " +
      "His knees protest every morning. His wife has been hinting about Florida. " +
      "Is it time to stop?",
    choices: [
      {
        text: 'Retire fully — fish, travel, enjoy it',
        effects: { happiness: 18, health: 10, career: 0, relationships: 15, money: -5 },
        outcome:
          "Roy retires in the spring. He fishes badly. He travels everywhere. " +
          "He and his wife dance in the kitchen on Thursday nights. It's embarrassing and wonderful.",
        highlight: 'retired in time to enjoy it, dancing in the kitchen on Thursday nights',
      },
      {
        text: 'Semi-retire — consult part time, stay involved',
        effects: { happiness: 10, health: 5, career: 5, relationships: 8, money: 5 },
        outcome:
          "Roy comes in three days a week. He is annoying about it. " +
          "But the business is better for his presence and he knows it.",
        highlight: "couldn't fully let go of the store and was probably right not to",
      },
      {
        text: "Keep working — what else would he do",
        effects: { happiness: 3, health: -5, career: 8, relationships: -5, money: 10 },
        outcome:
          "Roy works until he can't. He misses things. " +
          "He's respected and slightly lonely in a way he can't explain.",
        highlight: "worked until the end because he didn't know who he was without it",
      },
      {
        text: "🌀 Move to Thailand. Open a beach bar. Stop explaining himself.",
        wild: true,
        effects: { happiness: 25, health: 5, career: 0, relationships: -18, money: -15 },
        outcome:
          "Roy's bar in Koh Samui has six kinds of beer, no shoes allowed, and one rule: " +
          "no sad stories before noon. He is the only English speaker for two years. " +
          "Business is excellent. His knees eventually stage a protest and he comes home. " +
          "He has no regrets whatsoever. None.",
        highlight: 'ran a beach bar in Thailand for four years before his knees forced him home',
      },
    ],
  },

  {
    id: 'legacy',
    stage: 'senior',
    age: 70,
    title: 'Legacy',
    text:
      "Roy is seventy. He sits on the porch in the evening and watches the neighborhood. " +
      "He's been thinking about what he wants to leave behind. " +
      "Is there anything left unsaid? Undone?",
    isLast: true,
    choices: [
      {
        text: 'Write letters to everyone he loves',
        effects: { happiness: 20, health: 5, career: 0, relationships: 20, money: -2 },
        outcome:
          "Roy writes fifteen letters over three weeks. He doesn't give them out — not yet. " +
          "He keeps them in the top drawer. Everyone who matters will get one someday.",
        highlight: 'wrote letters to everyone he loved and meant every word',
      },
      {
        text: "Donate to the youth football program he grew up in",
        effects: { happiness: 15, health: 0, career: 5, relationships: 10, money: -15 },
        outcome:
          "Roy calls the league. They name the scoreboard after him. " +
          "He says that's too much. They say it isn't.",
        highlight: 'gave back to the football program that shaped him',
      },
      {
        text: "Nothing needs doing — his life speaks for itself",
        effects: { happiness: 12, health: 3, career: 0, relationships: 5, money: 0 },
        outcome:
          "Roy sits on the porch. A neighbor waves. He waves back. " +
          "That's enough. It always was.",
        highlight: 'decided his life had spoken for itself, and sat quietly on the porch',
      },
      {
        text: "🌀 Start a podcast at seventy",
        wild: true,
        effects: { happiness: 18, health: 3, career: 5, relationships: 10, money: 5 },
        outcome:
          "'A Good Life: Conversations with Roy' gets 847 regular listeners by year two. " +
          "His demographic is exclusively 65-to-80-year-olds who found him by accident. " +
          "He records episodes about carpet, football, cancer, the Grateful Dead, and Denise. " +
          "It's surprisingly good. He records until he's seventy-eight.",
        highlight: 'started a podcast at seventy and found his most loyal audience yet',
      },
    ],
  },
]

export function getEventById(id) {
  return EVENTS.find(e => e.id === id)
}

export function getEventsByStage(stage) {
  return EVENTS.filter(e => e.stage === stage)
}
