function HomeSlide() {
  return (
    <div className="slide">
      <div className="badge-container">
        <p className="badge">DEV ACADEMY</p>
        <p className="badge badge--yellow">⚡️LIGHTNING TALK</p>
      </div>

      <div className="contents content--center text--center">
        <h1>
          Cross-Site <span className="--blue">Scripting</span>{' '}
          <span className="--red">(XSS)</span>
        </h1>

        <p className="--grey">
          "The Vulnerability of Web Security: Mechanics and Mitigation"
        </p>

        <p>
          <span className="text--sm">Presented By</span>{' '}
          <span className="--yellow">Young</span>
        </p>
      </div>
    </div>
  )
}

export default HomeSlide
