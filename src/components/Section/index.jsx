import { useRef } from 'react'
import { Container } from './styles'

import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'

export function Section({ title, children }) {
  const carousel = useRef(null)

  const handleLeftClick = (e) => {
    e.preventDefault()
    carousel.current.scrollLeft -= carousel.current.offsetWidth
  }
  const handleRightClick = (e) => {
    e.preventDefault()

    carousel.current.scrollLeft += carousel.current.offsetWidth
  }

  return (
    <Container>
      <div className="titleList">{title}</div>
      <div id="dishesListWrapper">
        <div id="dishesList" ref={carousel}>
          {children}
          <button className="arrowLeft" aria-label="Previous Image" onClick={handleLeftClick}>
            <SlArrowLeft size={40} />
          </button>
          <button className="arrowRight" aria-label="Next Image" onClick={handleRightClick}>
            <SlArrowRight size={40} />
          </button>
        </div>
      </div>
    </Container>
  )
}
