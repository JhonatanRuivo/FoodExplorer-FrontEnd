import { Container } from './styles'

export function Input({ search = false, icon: Icon, admin = false, ...rest }) {
  return (
    <Container $bg={admin} $search={search}>
      {Icon && <Icon size={24} />}
      <input ref={ref} {...rest} />
    </Container>
  )
}
