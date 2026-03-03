// Roy: A Life Well Lived — All 18 Life Events
// Each choice has: text, effects (stat deltas), highlight (for death summary), outcome (shown to player)

export const STAGES = {
  childhood: { label: 'Childhood', color: '#39FF14' },
  teen: { label: 'Teen Years', color: '#00B4D8' },
  youngAdult: { label: 'Young Adult', color: '#9B5DE5' },
  adult: { label: 'Adult', color: '#F15BB5' },
  middleAge: { label: 'Middle Age', color: '#FF6B35' },
  senior: { label: 'Senior Years', color: '#FFD60A' },
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
          "Roy makes second string. He mostly warms the bench but he's technically on the team. " +
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
        text: 'Lock himself in his room and pretend it isn\'t happening',
        effects: { happiness: -15, health: -8, career: 0, relationships: -8, money: 0 },
        outcome:
          "Roy puts his headphones on. The walls aren't thick enough. " +
          "He carries this night around for a long time.",
        highlight: 'had a childhood that asked too much of him too soon',
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
      "Roy could go jock, band geek, stoner, or just... float. " +
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
        text: 'Join the science club — there\'s a state competition',
        effects: { happiness: 6, health: 0, career: 15, relationships: 3, money: 5 },
        outcome:
          "Roy discovers he's actually good at chemistry. His lab partner becomes his best friend. " +
          "They take third at regionals and Roy feels like he won the Super Bowl.",
        highlight: 'found his tribe in the science lab and won a regional competition',
      },
      {
        text: 'Float — eat lunch wherever, be friendly to everyone',
        effects: { happiness: 5, health: 0, career: 2, relationships: 12, money: 0 },
        outcome:
          "Roy becomes the guy everyone knows but nobody really knows. " +
          "He's invited to every party. He belongs to none of them. That's fine for now.",
        highlight: 'floated through high school known by everyone and belonging to no one',
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
          "Roy learns to be invisible and efficient. He gets promoted to produce in six weeks. " +
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
      "College, work, or something else?",
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
          "Roy skips the whole thing. He's making real money by October while his friends are broke freshmen. " +
          "He'll wonder sometimes. But not often.",
        highlight: 'skipped college and hit the ground running',
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
        text: 'Drop out — the idea was always someone else\'s',
        effects: { happiness: -5, health: 0, career: -5, relationships: -3, money: 10 },
        outcome:
          "Roy walks. He tells himself he'll figure it out. " +
          "He's right — but it takes longer than he expected.",
        highlight: 'dropped out of college and had to find his own way from scratch',
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
        text: 'Commit — she\'s the one, go all in',
        effects: { happiness: 18, health: 5, career: 0, relationships: 20, money: -5 },
        outcome:
          "Roy asks her to be his girlfriend at a diner. She says yes before he finishes the sentence. " +
          "He tips forty percent and walks home on air.",
        highlight: "fell head over heels for a schoolteacher named Sandra",
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
    ],
  },

  // ── ADULT ──────────────────────────────────────────────────────────────────
  {
    id: 'marriage_decision',
    stage: 'adult',
    age: 28,
    title: 'Marriage Decision',
    text:
      "Roy's been with Linda for three years. She's patient, smart, and completely in love with him. " +
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
          "Linda gives him six more months, then asks him what they're doing. " +
          "Roy doesn't have a good answer. She leaves. He keeps the ring.",
        highlight: 'waited too long and let Linda walk out the door',
      },
      {
        text: 'Break up — he\'s not built for this',
        effects: { happiness: -15, health: -5, career: 5, relationships: -20, money: 10 },
        outcome:
          "Roy is alone in a very clean apartment. He has a lot of time for hobbies now. " +
          "He takes up fishing. He hates fishing.",
        highlight: 'ended things with Linda and spent a decade regretting it',
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
          "They have their first kid at thirty-six, right on schedule. Roy's wife cries with relief.",
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
    ],
  },

  {
    id: 'the_diagnosis',
    stage: 'adult',
    age: 38,
    title: 'The Diagnosis',
    text:
      "Roy went in for a routine physical. It was not routine. " +
      "The doctor uses the word 'cancer' and Roy's ears stop working for about thirty seconds. " +
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
        text: 'Do the minimum treatment, try to keep living normally',
        effects: { happiness: -5, health: -10, career: 0, relationships: 5, money: -10 },
        outcome:
          "Roy manages it around his schedule. He doesn't tell most people. " +
          "His color isn't right for two years. His doctor is frustrated.",
        highlight: 'got cancer at thirty-eight and tried to pretend it wasn\'t happening',
        setFlag: 'fighting_cancer_weak',
      },
      {
        text: 'Ignore the second opinion — maybe they\'re wrong',
        effects: { happiness: 5, health: -25, career: 5, relationships: -5, money: 0 },
        outcome:
          "Roy decides to get a second opinion. Then a third. " +
          "Each one says the same thing. He loses six months.",
        highlight: 'couldn\'t accept his diagnosis and lost valuable time',
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
        highlight: 'beat cancer through sheer stubbornness and too much kale',
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
        setFlag: 'cancer_returning',
        deathEvent: true,
        deathCause: "The cancer came back. Roy was fifty-one years old. He didn't suffer — the end was faster than anyone expected. His family was with him.",
        deathAge: 51,
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
      "Middle age arrives like a slow punch. Roy's back hurts. He's heavier than he wants to be. " +
      "His doctor keeps mentioning cholesterol. Some guys at work go hiking every weekend. " +
      "Roy's wife bought him a gym membership he hasn't used. What's the move?",
    choices: [
      {
        text: 'Hit the gym — time to actually use that membership',
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
    ],
  },

  {
    id: 'kids_growing_up',
    stage: 'middleAge',
    age: 52,
    title: 'Kids Growing Up',
    text:
      "Roy's kid Danny is heading to college. The house is about to get quiet in a way Roy isn't ready for. " +
      "Danny wants to study art. Roy thinks that's impractical but doesn't want to be his dad. " +
      "What does Roy do?",
    choices: [
      {
        text: "Support Danny fully — it's his life, his call",
        effects: { happiness: 15, health: 0, career: 0, relationships: 20, money: -10 },
        outcome:
          "Danny studies illustration. He's actually good. He sends Roy a framed print for Christmas: " +
          "a cartoon of the carpet store. Roy hangs it in his office. It stays there forever.",
        highlight: 'supported his son Danny\'s art career even when he didn\'t understand it',
      },
      {
        text: "Suggest a 'practical double major' — just as a backup",
        effects: { happiness: 5, health: 0, career: 5, relationships: 5, money: -5 },
        outcome:
          "Danny takes business as a minor and kind of resents it for two years. " +
          "They work through it. Roy was trying to help. Danny knows that.",
        highlight: 'gave his son unsolicited advice that took a few years to forgive',
      },
      {
        text: 'Tell him to be practical — Roy knows the real world',
        effects: { happiness: -5, health: 0, career: 3, relationships: -15, money: 0 },
        outcome:
          "Danny switches to accounting. He's miserable for ten years before he quits anyway. " +
          "Roy can't say anything because he said the wrong thing once and Danny hasn't forgotten.",
        highlight: 'gave his son the wrong advice and spent years making it right',
      },
    ],
  },

  {
    id: 'the_roof',
    stage: 'middleAge',
    age: 57,
    title: 'The Roof',
    text:
      "There's a section of the roof on the house that's been leaking for two years. " +
      "Roy finally bought the materials to fix it himself. " +
      "It's a Saturday morning. He's up there with a hammer and way too much confidence.",
    checkDeath: true,
    choices: [
      {
        text: 'Fix the roof himself — he watches YouTube, he can do this',
        effects: { happiness: 5, health: -5, career: 0, relationships: 3, money: 10 },
        outcome:
          "Roy fixes the roof. It looks rough but it holds. He texts his wife a photo with the caption: " +
          "'Roof fixed. I'm a genius.' She sends back a thumbs up.",
        highlight: 'fixed his own roof at fifty-seven and only fell once (minor)',
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
        text: 'Call a professional — this is above his pay grade',
        effects: { happiness: 3, health: 5, career: 0, relationships: 5, money: -8 },
        outcome:
          "Roy calls Dave's Roofing. The guy fixes it in forty minutes. " +
          "Roy watches from the lawn with a beer and no regrets.",
        highlight: 'knew when to call for help and lived to tell about it',
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
      "Roy is sixty-four. The carpet store has run fine without him for years now. " +
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
        highlight: 'couldn\'t fully let go of the store and was probably right not to',
      },
      {
        text: "Keep working — what else would he do",
        effects: { happiness: 3, health: -5, career: 8, relationships: -5, money: 10 },
        outcome:
          "Roy works until he can't. He misses things. " +
          "He's respected and slightly lonely in a way he can't explain.",
        highlight: 'worked until the end because he didn\'t know who he was without it',
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
    ],
  },
]

export function getEventById(id) {
  return EVENTS.find(e => e.id === id)
}

export function getEventsByStage(stage) {
  return EVENTS.filter(e => e.stage === stage)
}
