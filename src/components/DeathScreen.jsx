const STAT_LABELS = {
  health:        '❤️  Health',
  happiness:     '😊 Happiness',
  career:        '💼 Career',
  relationships: '👥 Relationships',
  money:         '💵 Money',
}

function FinalStatBar({ label, value }) {
  const pct = Math.max(0, Math.min(100, value))
  return (
    <div className="final-stat-row">
      <span className="final-stat-label">{label}</span>
      <div className="final-stat-track">
        <div className="final-stat-fill" style={{ width: `${pct}%` }} />
      </div>
      <span className="final-stat-value">{value}</span>
    </div>
  )
}

export default function DeathScreen({ summary, finalAge, causeOfDeath, stats, highlights, onPlayAgain }) {
  // Score: weighted average of stats
  const score = Math.round(
    (stats.health * 0.25 +
      stats.happiness * 0.3 +
      stats.career * 0.15 +
      stats.relationships * 0.2 +
      stats.money * 0.1)
  )

  const rating =
    score >= 80 ? 'LEGENDARY'
    : score >= 65 ? 'WELL LIVED'
    : score >= 50 ? 'DECENT RUN'
    : score >= 35 ? 'ROUGH PATCHES'
    : 'NEXT TIME'

  return (
    <div className="death-screen">
      <div className="death-header">
        <div className="death-icon">🪦</div>
        <h1 className="death-title">GAME OVER</h1>
        <div className="death-subtitle">Roy's story has ended</div>
      </div>

      <div className="death-layout">
        {/* Left: Summary */}
        <div className="death-summary-panel">
          <h2 className="death-section-title">LIFE SUMMARY</h2>
          <div className="death-summary-text">
            {summary}
          </div>

          <div className="death-cause">
            <div className="death-cause-label">CAUSE OF DEATH</div>
            <div className="death-cause-text">{causeOfDeath}</div>
          </div>

          <div className="death-age-banner">
            Roy lived to be <span className="death-age-number">{finalAge}</span> years old.
          </div>
        </div>

        {/* Right: Final stats + rating */}
        <div className="death-stats-panel">
          <h2 className="death-section-title">FINAL STATS</h2>
          <div className="death-rating" data-rating={rating}>
            {rating}
          </div>
          <div className="death-score">Life Score: {score}/100</div>

          <div className="final-stats">
            {Object.entries(STAT_LABELS).map(([key, label]) => (
              <FinalStatBar key={key} label={label} value={stats[key]} />
            ))}
          </div>

          {highlights.length > 0 && (
            <div className="death-highlights">
              <div className="death-highlights-title">LIFE HIGHLIGHTS</div>
              <ul className="death-highlights-list">
                {highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="death-actions">
        <button className="btn-primary btn-large" onClick={onPlayAgain}>
          PLAY AGAIN
        </button>
        <p className="death-tagline">
          "Nobody exists on purpose. Nobody belongs anywhere. Everybody's gonna die."
          <br />
          <em>— Morty Smith</em>
        </p>
      </div>
    </div>
  )
}
