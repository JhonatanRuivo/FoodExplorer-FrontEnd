import { Link } from 'react-router-dom'
import { Container } from './styles'

import { IoCloseOutline } from 'react-icons/io5'

export function HeaderMenu({ admin = false }) {
  return (
    <Container>
      <Link to={admin ? '/admin' : '/'} className='iconX' >
        <IoCloseOutline size={28} />
      </Link>
      <p>Menu</p>
    </Container>
  )
}
