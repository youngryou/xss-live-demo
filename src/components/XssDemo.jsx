import { useState } from 'react'
import CopyButton from './CopyButton'

function XssDemo() {
  // Sample Payload
  const payloadString = `<img src="x" onerror="alert('XSS Attack Successful! Session Hijacked!')">`

  const nzDate = new Date()

  const dateOptions = {
    // weekday: 'long', // weekday (e.g. Sunday) -> 'short: Sun'
    // year: 'numeric', // year (e.g. 2026)
    month: 'short', // month (e.g. May) -> 'short: May'
    day: 'numeric', // day (e.g. 31)
    hour: '2-digit', // hour (e.g. 03 PM)
    minute: '2-digit', // minute (e.g. 42)
    hour12: true, // (e.g. AM/PM)
  }

  const [comments, setComments] = useState([
    { id: 1, date: '12 Mar, 02:20 pm', name: 'Bob', comment: 'Hello World!' },
    {
      id: 2,
      date: '22 Apr, 08:40 am',
      name: 'Alice',
      comment: 'This is a normal comment.',
    },
    {
      id: 3,
      date: '02 May, 12:05 pm',
      name: 'Eve',
      comment: 'Do you know XSS?',
    },
  ])
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!input) return

    const newComment = {
      id: comments.length + 1,
      date: nzDate,
      name: 'Anonymous',
      comment: input,
    }
    setComments([...comments, newComment])
    setInput('')
  }

  return (
    <div className="slide">
      <h2>
        <span className="--red">XSS</span> Live{' '}
        <span className="--blue">Demo</span>
      </h2>

      <div className="contents">
        <h3 className="text--center">
          Vulnerable <span className="--green">Free Board</span>
        </h3>
        <p className="hint text--center">
          <span className="--red">※ Warning:</span> This component renders raw
          input directly, making it highly vulnerable to XSS.
        </p>
        {/* Comment List Area */}
        <div className="box">
          <h4 className="box-title">Comments ({comments.length}):</h4>
          {comments.map((comment) => (
            <div key={comment.id} className="text--inline text--mono">
              <p>{comment.name}:</p>
              {/* IMPORTANT! DANGEROUS ZONE!
              Render raw HTML 
              (bypasses React's default XSS protection, using 'dangerouslySetInnerHTML') 
            */}
              <p dangerouslySetInnerHTML={{ __html: comment.comment }} />

              <p className="hint">
                - ({comment.date.toLocaleString('en-NZ', dateOptions)})
              </p>
            </div>
          ))}
        </div>

        {/* Comment Input Area */}
        <form onSubmit={handleSubmit}>
          <textarea
            placeholder="Type your comment here... (or copy the below payload)"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="text--mono"
          />
          <button type="submit">Submit Comment</button>
        </form>

        {/* Payload / Attack JS Code */}
        {/* <img src="x" onerror="alert('XSS Attack Successful! Session Hijacked!')"> */}
        <div className="hint text--inline text--mono">
          <p className="--yellow">Sample Payload: </p>
          <p>{payloadString}</p>
          <CopyButton text={payloadString} />
        </div>

        <div className="hint text--inline text--mono">
          <p className="--red">※ Using URL: </p>
          <p>{`'https://site.com/#<img src=x onerror=HACKINGCODE>'`}</p>
        </div>
      </div>
    </div>
  )
}

export default XssDemo
