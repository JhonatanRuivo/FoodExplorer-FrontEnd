import { Container } from './styles'

export function Input({ search = false, icon: Icon, admin = false, ...rest }) {
  return (
    <Container tabIndex="0" $bg={admin} $search={search} >
      <label>
        {Icon && <Icon size={24} />}
        <input {...rest} />
      </label>
    </Container>
  )
}
