import { useState } from 'react'
import { Container } from './styles'

import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'

export function Section({ title, children }) {


  return (
    <Container>
      <div className="titleList">{title}</div>
      <div id="dishesList">
        {children}
        <button className="arrowLeft" aria-label="Previous Image">
          <SlArrowLeft size={40} />
        </button>
        <button className="arrowRight" aria-label="Next Image">
          <SlArrowRight size={40} />
        </button>
      </div>
    </Container>
  )
}
