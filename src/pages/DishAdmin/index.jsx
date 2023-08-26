import { Container } from './styled.js'
import { SlArrowLeft } from 'react-icons/sl'
import img from '../../assets/Salada Ravanello.png'

import { ButtonText } from '../../components/ButtonText/index.jsx'
import { Header } from '../../components/Header/index.jsx'
import { Footer } from '../../components/Footer/index.jsx'
import { Tag } from '../../components/Tag/index.jsx'
import { Button } from '../../components/Button/index.jsx'
import { useNavigate } from 'react-router-dom'

export function DishAdmin() {
  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  return (
    <Container>
      <Header admin="admin" />
      <div className="body">
        <label htmlFor="back">
          <SlArrowLeft name="back" size={32} />
          <ButtonText title="voltar" bold pop large onClick={handleBack} />
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
              <Tag title="cebola" />
              <Tag title="pão naan" />
              <Tag title="pepino" />
              <Tag title="rabanete" />
              <Tag title="tomate" />
            </div>
            <div className="footerButtons">
              <Button title={'Editar prato'} type='button' to="/edit" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </Container>
  )
}
