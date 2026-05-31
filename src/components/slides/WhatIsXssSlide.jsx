function WhatIsXssSlide() {
  return (
    <div className="slide">
      <h2>
        What is <span className="--blue">Cross-Site Scripting (XSS)</span>
      </h2>

      <div className="contents">
        <div className="contents--flex">
          <img
            src="src/assets/browser-image.webp"
            alt="Browser Operation Screen"
          />

          <div className="box--col">
            <div className="box box--flex">
              <h4 className="--white">
                Crafting Malicious{' '}
                <span className="--green">&lt;Script /&gt;</span>
              </h4>
              <h1 className="--blue">01</h1>
            </div>

            <div className="box box--flex">
              <h4 className="--white">
                Injecting the <span className="--yellow">Payload</span>
              </h4>
              <h1 className="--blue">02</h1>
            </div>

            <div className="box box--flex">
              <h4 className="--white">
                Execution via <span className="--blue">User's Browser</span>
              </h4>
              <h1 className="--blue">03</h1>
            </div>

            <div className="box box--flex">
              <h4 className="--white">
                Data & Session <span className="--red">Hijacked!</span>
              </h4>
              <h1 className="--blue">04</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhatIsXssSlide
