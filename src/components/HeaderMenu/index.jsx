import { Container } from './styles'

import { IoCloseOutline } from 'react-icons/io5'

export function HeaderMenu() {
  return (
    <Container>
      <button>
        <IoCloseOutline size={28} />
      </button>
        <p>Menu</p>
    </Container>
  )
}
