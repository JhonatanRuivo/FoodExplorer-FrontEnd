import { Container } from './styles'

export function Button({mobile=false ,tomato, icon: Icon, small = false, title, loading = false, ...rest}) {
  return (
    <Container 
    $font={mobile}
    $color={tomato} 
    $fitContent={small} 
    type="button" 
    disabled={loading}
    {...rest}
    >
      { Icon && <Icon size={24} />}
      {loading ? 'Carregando...' : title}
    </Container>
  )
}
