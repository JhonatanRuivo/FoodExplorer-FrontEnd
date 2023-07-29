import { Container } from './styles'

import banner from '../../assets/pngegg 2.svg'


export function Banner() {
  return (
    <Container>
      <img src={banner} alt="" />
      <div className="slogan">
        <h3>Sabores inigualáveis</h3>
        <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
      </div>
    </Container>
  )
}
