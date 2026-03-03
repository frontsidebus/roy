import { STAGES } from '../data/events.js'

const STAT_CONFIG = {
  health:        { label: 'Health',        emoji: '❤️',  color: '#FF6B35' },
  happiness:     { label: 'Happiness',     emoji: '😊',  color: '#39FF14' },
  career:        { label: 'Career',        emoji: '💼',  color: '#00B4D8' },
  relationships: { label: 'Relationships', emoji: '👥',  color: '#F15BB5' },
  money:         { label: 'Money',         emoji: '💵',  color: '#FFD60A' },
}

function StatBar({ statKey, value }) {
  const cfg = STAT_CONFIG[statKey]
  const pct = Math.max(0, Math.min(100, value))
  const isLow = pct < 25
  const color = isLow ? '#FF3333' : cfg.color

  return (
    <div className="stat-row">
      <div className="stat-label">
        <span className="stat-emoji">{cfg.emoji}</span>
        <span className="stat-name">{cfg.label}</span>
        <span className="stat-value" style={{ color }}>{value}</span>
      </div>
      <div className="stat-track">
        <div
          className="stat-fill"
          style={{
            width: `${pct}%`,
            background: color,
            boxShadow: `0 0 8px ${color}`,
          }}
        />
      </div>
    </div>
  )
}

function RoyFace({ happiness }) {
  // Expression changes based on happiness
  const isHappy = happiness >= 60
  const isOkay = happiness >= 30
  const expression = isHappy ? 'happy' : isOkay ? 'neutral' : 'sad'

  return (
    <div className={`roy-face roy-face--${expression}`}>
      <div className="roy-head">
        {/* Eyes */}
        <div className="roy-eyes">
          <div className="roy-eye left" />
          <div className="roy-eye right" />
        </div>
        {/* Mouth */}
        <div className={`roy-mouth roy-mouth--${expression}`} />
      </div>
    </div>
  )
}

export default function StatsPanel({ stats, age, stage }) {
  const stageInfo = STAGES[stage] || { label: stage, color: '#39FF14' }

  return (
    <div className="stats-panel">
      <div className="stats-header">
        <RoyFace happiness={stats.happiness} />
        <div className="stats-identity">
          <div className="stats-name">ROY</div>
          <div className="stats-age">Age {age}</div>
          <div className="stats-stage" style={{ color: stageInfo.color }}>
            {stageInfo.label}
          </div>
        </div>
      </div>

      <div className="stats-divider" />

      <div className="stats-bars">
        {Object.keys(STAT_CONFIG).map(key => (
          <StatBar key={key} statKey={key} value={stats[key]} />
        ))}
      </div>
    </div>
  )
}
