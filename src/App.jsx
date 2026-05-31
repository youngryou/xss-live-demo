import { useState, useEffect } from 'react'
import { slideData } from './data/slideData'

import HomeSlide from './components/slides/HomeSlide'
import WhatIsXssSlide from './components/slides/WhatIsXssSlide'
import HowToHackingSlide from './components/slides/HowToHackingSlide'
import XssDemo from './components/XssDemo'
import HowToDefendSlide from './components/slides/HowToDefendSlide'
import EndSlide from './components/slides/EndSlide'
import ReferenceSlide from './components/slides/ReferenceSlide'
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlide])

  const renderSlide = () => {
    const currentId = slideData[currentSlide].slideId
    switch (currentId) {
      case 'HOME':
        return <HomeSlide />
      case 'WHAT_IS_XSS':
        return <WhatIsXssSlide />
      case 'HOW_TO_HACKING':
        return <HowToHackingSlide />
      case 'DEMO':
        return <XssDemo />
      case 'HOW_TO_DEFEND':
        return <HowToDefendSlide />
      case 'END':
        return <EndSlide />
      case 'REFERENCE':
        return <ReferenceSlide />
      default:
        return <div>Slide Not Found</div>
    }
  }

  return (
    <div className="page">
      {/* Navigation */}
      <nav>
        {slideData.map((slide, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            data-active={currentSlide === index}
            className="nav-button"
          >
            {slide.tabName}
          </button>
        ))}
      </nav>

      {/* Slide Area */}
      <div className="slide-body">{renderSlide()}</div>

      {/* Footer */}
      <div className="divider" />
      <div className="footer">
        <p>DEV ACADEMY - BOOTCAMP</p>

        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="nav-button"
        >
          ← Prev
        </button>

        <button
          onClick={nextSlide}
          disabled={currentSlide === slideData.length - 1}
          className="nav-button"
        >
          Next →
        </button>

        <p>
          SLIDE 0{currentSlide + 1} / 0{slideData.length}
        </p>
      </div>
    </div>
  )
}

export default App
