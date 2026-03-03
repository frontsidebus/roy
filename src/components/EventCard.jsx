export default function EventCard({ event, outcome, onChoice, onAdvance }) {
  if (!event) return null

  // Outcome mode — show result, then advance button
  if (outcome) {
    return (
      <div className="event-card event-card--outcome">
        <div className="outcome-icon">📖</div>
        <p className="outcome-text">{outcome}</p>
        <button className="btn-primary" onClick={onAdvance}>
          Continue →
        </button>
      </div>
    )
  }

  return (
    <div className="event-card">
      <div className="event-age-badge">Age {event.age}</div>
      <h2 className="event-title">{event.title}</h2>
      <p className="event-text">{event.text}</p>

      <div className="choices">
        {event.choices.map((choice, i) => (
          <button
            key={i}
            className={[
              'choice-btn',
              choice.canonical ? 'choice-btn--canonical' : '',
              choice.wild ? 'choice-btn--wild' : '',
            ].filter(Boolean).join(' ')}
            onClick={() => onChoice(event.id, i)}
          >
            <span className="choice-number">{i + 1}</span>
            <span className="choice-text">{choice.text}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
