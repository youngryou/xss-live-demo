import { useState } from 'react'

function XssDemo() {
  const [comments, setComments] = useState([
    { id: 1, name: 'Bob', comment: 'Hello World!' },
    { id: 2, name: 'Alice', comment: 'This is a normal comment.' },
    { id: 3, name: 'Eve', comment: 'Do you know XSS?' },
  ])

  return (
    <div>
      <h2>XSS Live Demo</h2>

      <h3>Comments:</h3>
      <div>
        {comments.map((comment) => (
          <div key={comment.id}>
            <p>
              {comment.name}: {comment.comment}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default XssDemo
