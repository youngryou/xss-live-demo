import { useState } from 'react'

function XssDemo() {
  const [comments, setComments] = useState([
    { id: 1, name: 'Bob', comment: 'Hello World!' },
    { id: 2, name: 'Alice', comment: 'This is a normal comment.' },
    { id: 3, name: 'Eve', comment: 'Do you know XSS?' },
  ])
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const newComment = {
      id: comments.length + 1,
      name: 'Anonymous',
      comment: input,
    }
    setComments([...comments, newComment])
    setInput('')
  }

  return (
    <div>
      <h2>XSS Live Demo</h2>

      {/* Comment List Area */}
      <h3>Comments:</h3>
      <div>
        {comments.map((comment) => (
          <div key={comment.id}>
            <p>{comment.name}:</p>
            {/* IMPORTANT! DANGEROUS ZONE!
              Render raw HTML 
              (bypasses React's default XSS protection, using 'dangerouslySetInnerHTML') 
            */}
            <p dangerouslySetInnerHTML={{ __html: comment.comment }} />
          </div>
        ))}
      </div>

      {/* Comment Input Area */}
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Type your comment here... (or copy the below payload)"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Submit Comment</button>
      </form>

      {/* Payload / Attack JS Code */}
      {/* <img src="x" onerror="alert('XSS Attack Successful! Session Hijacked!')"> */}
      <div>
        <p>Sample Payload:</p>
        <p>
          &lt;img src="x" onerror="alert('XSS Attack Successful! Session
          Hijacked!')"&gt;
        </p>
      </div>
    </div>
  )
}

export default XssDemo
