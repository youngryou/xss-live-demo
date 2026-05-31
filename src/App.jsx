import { useState, useEffect } from 'react'
import { slideData } from './data/slideData'

import HomeSlide from './components/slides/HomeSlide'
import XssDemo from './components/XssDemo'
import EndSlide from './components/slides/EndSlide'
// import './App.css'

function App() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    if (currentSlide < slideData.length - 1) setCurrentSlide(currentSlide + 1)
  }

  const prevSlide = () => {
    if (currentSlide > 0) setCurrentSlide(currentSlide - 1)
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextSlide()
      if (e.key === 'ArrowLeft') prevSlide()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentSlide])

  const renderSlide = () => {
    const currentId = slideData[currentSlide].slideId
    switch (currentId) {
      case 'HOME':
        return <HomeSlide />
      case 'DEMO':
        return <XssDemo />
      case 'END':
        return <EndSlide />
      default:
        return <div>Slide Not Found</div>
    }
  }

  return (
    <div>
      {/* Navigation */}
      <nav>
        {slideData.map((slide, index) => (
          <button key={index} onClick={() => setCurrentSlide(index)}>
            {slide.tabName}
          </button>
        ))}
      </nav>

      {/* Slide Area */}
      <div>{renderSlide()}</div>

      {/* Footer */}
      <div>
        <button onClick={prevSlide} disabled={currentSlide === 0}>
          ← Prev
        </button>
        <button
          onClick={nextSlide}
          disabled={currentSlide === slideData.length - 1}
        >
          Next →
        </button>
      </div>
    </div>
  )
}

export default App
