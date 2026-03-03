export default function TitleScreen({ onStart }) {
  return (
    <div className="title-screen">
      <div className="portal-ring">
        <div className="portal-inner">
          <div className="portal-core" />
        </div>
      </div>

      <div className="title-content">
        <div className="title-eyebrow">BLIPS AND CHITZ PRESENTS</div>
        <h1 className="title-main">ROY</h1>
        <h2 className="title-sub">A Life Well Lived</h2>
        <p className="title-tagline">
          Experience the complete human journey — from first day of school
          to whatever the universe has planned for you.
        </p>

        <button className="btn-primary btn-large" onClick={onStart}>
          INSERT COIN TO PLAY
        </button>

        <div className="title-meta">
          <span>18 life events</span>
          <span className="dot">·</span>
          <span>Infinite choices</span>
          <span className="dot">·</span>
          <span>One life</span>
        </div>
      </div>

      <div className="title-footer">
        Based on Rick and Morty S2E2 "Mortynight Run"
      </div>
    </div>
  )
}
