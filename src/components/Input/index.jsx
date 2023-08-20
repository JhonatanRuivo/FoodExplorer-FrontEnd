import { forwardRef } from 'react'
import { Container } from './styles'

function InputRef({ search = false, icon: Icon, admin = false, ...rest }, ref) {
  return (
    <Container $bg={admin} $search={search}>
      {Icon && <Icon size={24} />}
      <input ref={ref} {...rest} />
    </Container>
  )
}

export const Input = forwardRef(InputRef)