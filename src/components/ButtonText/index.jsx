import { Container } from './styles'

export function ButtonText({ title, big = false, ...rest }) {
  return (
    <Container type="button" $fontsize={big} {...rest}>
      {title}
    </Container>
  )
}
