function HomeSlide() {
  return (
    <div className="slide">
      <h1>Cross Site Scripting (XSS)</h1>

      <div className="contents">
        <p>XSS Attack Successful! Session Hijacked!</p>
        <p>
          Presented By <span className="--yellow">Young</span>
        </p>
      </div>
    </div>
  )
}

export default HomeSlide
