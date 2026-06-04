function HowToDefendSlide() {
  return (
    <div className="slide">
      <h2>
        How to <span className="--blue">Defend</span>
      </h2>

      <div className="contents">
        <div className="contents--flex">
          <div className="row">
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

          <div className="row">
            <h4>
              HTML <span className="--blue">Sanitisation</span>
            </h4>
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
                <span className="--blue">export const</span> shtml ={' '}
                <span className="--yellow">(dirtyData)</span>
                =&gt;
              </p>
              <p className="tab">
                DOMPurify.sanitize<span className="--yellow">(dirtyData)</span>;
              </p>

              <div className="spacer" />

              <p className="hint">// This filters dangerous tags</p>
              <p className="hint">// {`<script>`} - Block</p>
              <p className="hint">// {`<h1>, <p>`} - Pass</p>
            </code>
          </div>

          <div className="row">
            <h4>
              Content Security Policy <span className="--red">(CSP)</span>
            </h4>
            <code className="code-box">
              <p className="hint">// HTTP</p>
              <p>Content-Security-Policy:</p>
              <p className="tab">
                default-src
                <span className="--blue">'self'</span>;
              </p>
              <p className="tab">
                script-src
                <span className="--blue">'self'</span>
                <span className="--green">https://trusted-cdn.com</span>;
              </p>
              <p className="tab">
                object-src
                <span className="--red">'none'</span>;
              </p>

              <div className="spacer" />

              <p className="hint">// HTML</p>
              <p>
                &lt;<span className="--blue">meta</span>
              </p>
              <p className="tab">
                http-equiv=
                <span className="--yellow">"Content-Security-Policy"</span>
              </p>
              <p className="tab">
                content=
                <span className="--green">
                  "default-src 'self'; script-src 'self'; object-src 'none';"
                </span>
              </p>
              <p>/&gt;</p>
            </code>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowToDefendSlide
