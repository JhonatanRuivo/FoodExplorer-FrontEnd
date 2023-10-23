import { Container } from "./styles"

import { PiMinus, PiPlus } from 'react-icons/pi'


export function Amount({ amount }) {
  return (
    <Container>
      <button id="minus" type="button">
        {amount ? <PiMinus size={24} /> : ''}
      </button>
      <strong >{amount}</strong>
      <button id="more" type="button">
        {amount ? <PiPlus size={24} /> : ''}
      </button>
    </Container>
  )
}
