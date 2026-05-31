function HowToDefendSlide() {
  return (
    <div className="slide">
      <h2>
        How to <span className="--blue">Defend</span>
      </h2>

      <div className="contents">
        <div className="contents--flex">
          <div>
            <h4>
              Context-Aware HTML <span className="--green">Escaping</span>
            </h4>
            <code className="code-box">
              <p className="hint">// JS Code Tag e.g.</p>
              <p className="--green">{`<script>`}</p>

              <div className="spacer" />

              <p className="hint">// Convert HTML special letter to string</p>
              <p>
                {`< → `}
                <span className="--red">{`&lt;`}</span>
              </p>
              <p>
                {`> → `}
                <span className="--red">{`&gt;`}</span>
              </p>
              <p>
                {`" → `}
                <span className="--red">{`&quot;`}</span>
              </p>

              <div className="spacer" />

              <p className="hint">// Using</p>

              <p className="--yellow">.replace</p>
              <p>
                <span className="--blue">innerHTML</span> →{' '}
                <span className="--blue">textContent</span> or{' '}
                <span className="--blue">innerText</span>
              </p>

              <div className="spacer" />

              <p className="hint">
                // React automatically escapes data within curly brackets.
              </p>
              <p className="--blue">{`{comment.content}`}</p>
            </code>
          </div>

          <div>
            <h4>
              HTML <span className="--blue">Sanitization</span>
            </h4>
            <code className="code-box"></code>
          </div>

          <div>
            <h4>
              Content Security Policy <span className="--red">(CSP)</span>
            </h4>
            <code className="code-box"></code>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowToDefendSlide
