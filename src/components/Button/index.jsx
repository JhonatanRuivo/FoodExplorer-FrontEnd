import { Container } from './styles'

export function Button({tomato, small = false, title, loading = false, ...rest }) {
  return (
    <Container $color={tomato} $fitContent={small} type="button" disabled={loading} {...rest}>
      {loading ? 'Carregando...' : title}
    </Container>
  )
}
