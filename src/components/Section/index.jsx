import { Container } from './styles'

import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'

export function Section({ title, children }) {
  return (
    <Container>
      <label htmlFor="dishesList">
        {title}
        <div className="dishesListWrapper">
          <div id="dishesList">
            {children}
            <button className="arrowLeft" aria-label="Previous Image">
              <SlArrowLeft size={40} />
            </button>
            <button className="arrowRight" aria-label="Next Image">
              <SlArrowRight size={40} />
            </button>
          </div>
        </div>
      </label>
    </Container>
  )
}
