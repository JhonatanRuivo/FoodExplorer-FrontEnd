import { Container } from './styles'

export function Input({ autoComplete = 'off', isSearch = false, icon: Icon, admin = false, ...rest }) {
  return (
    <Container $bg={admin} $search={isSearch}>
      {Icon && <Icon size={22} />}
      <input {...rest} autoComplete={autoComplete} />
    </Container>
  )
}
