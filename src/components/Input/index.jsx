import { Container } from './styles'

export function Input({autoComplete = "off", search = false, icon: Icon, admin = false, ...rest }) {
  return (
    <Container $bg={admin} $search={search}>
      {Icon && <Icon size={22} />}
      <input {...rest} autoComplete={autoComplete} />
    </Container>
  )
}
