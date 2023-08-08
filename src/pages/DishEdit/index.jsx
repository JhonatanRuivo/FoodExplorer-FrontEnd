import { Container } from './styled.js'
import { SlArrowLeft } from 'react-icons/sl'
import img from '../../assets/Salada Ravanello.png'

import { ButtonText } from '../../components/ButtonText/index.jsx'
import { Header } from '../../components/Header/index.jsx'
import { Footer } from '../../components/Footer/index.jsx'
import { Tag } from '../../components/Tag/index.jsx'
import { Button } from '../../components/Button/index.jsx'

export function DishEdit() {
  return (
    <Container>
      <Header admin="admin" />
      <div className="body">
        <label htmlFor="back">
          <SlArrowLeft size={32} />
          <ButtonText title="Voltar" bold pop large />
        </label>
        <div className="main">
          <img className="imgDish" src={img} alt="Foto do prato" />
          <div className="description">
            <h1>Salada Rovanello</h1>
            <p>
              Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um
              toque especial.
            </p>
            <div className="tags">
              <Tag title="alface" />
              <Tag title="alface" />
              <Tag title="alface" />
              <Tag title="alface" />
              <Tag title="alface" />
              <Tag title="alface" />
            </div>

            <div className="footerButton">
              <Button title="Editar prato" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </Container>
  )
}
