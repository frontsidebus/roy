import StatsPanel from './StatsPanel.jsx'
import EventCard from './EventCard.jsx'
import { STAGES } from '../data/events.js'

export default function GameScreen({ state, onChoice, onAdvance }) {
  const { stats, age, stage, currentEvent, outcome } = state
  const stageInfo = STAGES[stage] || { label: stage, color: '#39FF14' }

  // Progress bar uses age as the most reliable indicator (5 to ~70)
  const progressPct = Math.min(100, Math.round(((age - 5) / 65) * 100))

  return (
    <div className="game-screen">
      {/* Top bar */}
      <div className="game-topbar">
        <div className="game-title-small">ROY: A LIFE WELL LIVED</div>
        <div className="life-progress">
          <div className="life-progress-label">Life Progress</div>
          <div className="life-progress-track">
            <div
              className="life-progress-fill"
              style={{ width: `${progressPct}%` }}
            />
          </div>
          <div className="life-progress-pct">{progressPct}%</div>
        </div>
        <div className="stage-badge" style={{ color: stageInfo.color, borderColor: stageInfo.color }}>
          {stageInfo.label}
        </div>
      </div>

      {/* Main layout */}
      <div className="game-layout">
        <aside className="game-sidebar">
          <StatsPanel stats={stats} age={age} stage={stage} />
        </aside>

        <main className="game-main">
          {currentEvent ? (
            <EventCard
              event={currentEvent}
              outcome={outcome}
              onChoice={onChoice}
              onAdvance={onAdvance}
            />
          ) : (
            <div className="loading-card">
              <div className="portal-spin-small" />
              <p>Loading next life event...</p>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
