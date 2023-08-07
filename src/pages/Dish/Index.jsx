import { Container } from './styled.js'
import { SlArrowLeft } from 'react-icons/sl'
import img from '../../assets/Salada Ravanello.png'

import { ButtonText } from '../../components/ButtonText'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Tag } from '../../components/Tag/index.jsx'

export function Dish() {
  return (
    <Container>
      <Header />
      <div className="body">
        <label htmlFor="back">
          <SlArrowLeft id="back" size={32} />
          <ButtonText title="Voltar" bold pop large />
        </label>
        <main>
          <img className="imgDish" src={img} alt="Foto do prato" />
          <div className="description">
            <h1>Salada Rovanello</h1>
            <p>
              Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um
              toque especial.
            </p>
            <ul>
              <Tag title="alface" />
              <Tag title="alface" />
              <Tag title="alface" />
              <Tag title="alface" />
              <Tag title="alface" />
              <Tag title="alface" />
            </ul>
            <div className="amount"></div>
          </div>
        </main>
      </div>

      <Footer />
    </Container>
  )
}
