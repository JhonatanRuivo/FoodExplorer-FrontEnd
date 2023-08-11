import { Container } from './styles'

export function Input({ icon: Icon, admin = false, ...rest }) {
  return (
    <Container tabIndex="0" $bg={admin}>
      <label >
        {Icon && <Icon size={24} />}
        <input {...rest}  />
      </label>
    </Container>
  )
}
