function HowToDefendSlide() {
  return (
    <div className="slide">
      <h2>
        How to <span className="--blue">Defend</span>
      </h2>

      <div className="contents">
        <div className="contents--flex">
          <div className="box">
            <h3 className="box-title">
              Context-Aware HTML <span className="--green">Escaping</span>
            </h3>

            <p>Convert HTML special letter to string.</p>

            <code className="code-box">
              <p className="hint">// JS Code Tag e.g.</p>
              <p className="--green">{`<script>`}</p>

              <p className="hint">// Convert</p>
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

              <p className="hint">// React within curly brackets.</p>
              <p className="--blue">{`{comment.content}`}</p>
            </code>
          </div>

          <div className="box">
            <h3 className="box-title">
              HTML <span className="--blue">Sanitisation</span>
            </h3>

            <p>Use sanitising library to filter dangerous tags.</p>

            <code className="code-box">
              <p className="hint">// Example of 'DOMPurify'</p>
              <p>
                <span className="--blue">import</span> DOMPurify{' '}
                <span className="--blue">from</span>{' '}
                <span className="--green">'dompurify'</span>;
              </p>

              <div className="spacer" />

              <p className="hint">// export function to reuse</p>
              <p>
                <span className="--blue">export</span>{' '}
                <span className="--green">function</span>{' '}
                <span className="--red">safeHtml</span>
                <span className="--yellow">(Data) {`{`}</span>
              </p>
              <p className="tab">
                <span className="--blue">return</span> DOMPurify.
                <span className="--red">sanitize</span>
                <span className="--yellow">(Data)</span>
              </p>
              <span className="--yellow">{`}`}</span>

              <div className="spacer" />

              <p className="hint">// This filters dangerous tags</p>
              <p className="hint">// {`<script>`} - Block (X)</p>
              <p className="hint">// {`<h1>, <p>`} - Pass (O)</p>
            </code>
          </div>

          <div className="box">
            <h3 className="box-title">
              Content Security Policy <span className="--red">(CSP)</span>
            </h3>

            <p>Declare security rules in the browser HTTP header.</p>

            <code className="code-box">
              <p>HTTP</p>
              <p className="--blue">Content-Security-Policy:</p>
              <p className="tab hint">// contents to allow...</p>

              <div className="spacer" />

              <p>HTML</p>
              <p>
                &lt;<span className="--green">meta</span>
              </p>
              <p className="tab --blue">
                http-equiv=
                <span className="--yellow">"Content-Security-Policy"</span>
              </p>
              <p className="tab hint">// contents to allow...</p>
              <p>/&gt;</p>
            </code>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowToDefendSlide
