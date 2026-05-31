import { useState } from 'react'

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)

      setCopied(true)
      setTimeout(() => setCopied(false), 5000)
    } catch (error) {
      console.error('Failed to copy: ', error)
    }
  }

  return (
    <button onClick={handleCopy} type="button" className="button--sm">
      {copied ? 'Copied!' : 'Copy'}
    </button>
  )
}

export default CopyButton
