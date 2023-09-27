import { Link } from 'react-router-dom'
import { Container } from './styles'

import { IoCloseOutline } from 'react-icons/io5'

export function HeaderMenu({ admin = false }) {
  return (
    <Container>
      <Link to={'/'} className="iconX">
        <IoCloseOutline size={28} />
        <p>Menu</p>
      </Link>
    </Container>
  )
}
