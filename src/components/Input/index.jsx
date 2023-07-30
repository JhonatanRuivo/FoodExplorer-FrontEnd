import { Container } from './styles'

export function Input({ icon: Icon, ...rest }) {
  return (
    <Container tabIndex="0">
      <label >
        {Icon && <Icon size={24} />}
        <input {...rest} />
      </label>
    </Container>
  )
}
