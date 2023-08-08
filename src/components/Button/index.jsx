import { Container } from './styles'

export function Button({ small = false, title, loading = false, ...rest }) {
  return (
    <Container $fitContent={small} type="button" disabled={loading} {...rest}>
      {loading ? 'Carregando...' : title}
    </Container>
  )
}
