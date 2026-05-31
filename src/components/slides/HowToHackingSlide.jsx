function HowToHackingSlide() {
  return (
    <div className="slide">
      <h2>
        How to <span className="--red">Hacking</span>
      </h2>

      <div className="contents">
        <div className="contents--flex">
          <div className="box">
            <h3 className="box-title">
              1. <span className="--green">Session</span> Hijacking
            </h3>
            <p>Stealing session User's Cookie allows to log in.</p>

            <img src="src/assets/cookie-image.webp" alt="Cookie Hijacking" />

            <h3 className="--green text--right">Cookie!</h3>
          </div>

          <div className="box">
            <h3 className="box-title">
              2. <span className="--blue">Defacement</span> Attack
            </h3>
            <p>Render fake login or payment forms.</p>

            <img src="src/assets/dom-image.webp" alt="DOM Hijacking" />

            <h3 className="--blue text--right">DOM Structure!</h3>
          </div>

          <div className="box">
            <h3 className="box-title">
              3. XSS <span className="--red">Worm</span>
            </h3>
            <p>Creating an uncontrollable viral loop.</p>

            <img src="src/assets/loop-image.webp" alt="XSS Worm" />

            <h3 className="--red text--right">Loop!</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowToHackingSlide
