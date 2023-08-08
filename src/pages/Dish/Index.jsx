import { Container } from './styled.js'
import { SlArrowLeft } from 'react-icons/sl'
import img from '../../assets/Salada Ravanello.png'

import { ButtonText } from '../../components/ButtonText'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Tag } from '../../components/Tag/index.jsx'
import { Amount } from '../../components/Amount'
import { Button } from '../../components/Button'

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
            <div className="footerButtons">
              <Amount amount={'01'} />
              <Button title={`incluir R$25,00`} small/>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </Container>
  )
}
