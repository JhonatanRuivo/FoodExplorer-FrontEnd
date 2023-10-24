import { Container } from './styles'
import banner from '../../assets/pngegg 2.png'

export function Banner() {
  return (
    <Container>
      <img src={banner} alt="doces" />
      <div className="slogan">
        <h2>Sabores inigualáveis</h2>
        <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
      </div>
    </Container>
  )
}
