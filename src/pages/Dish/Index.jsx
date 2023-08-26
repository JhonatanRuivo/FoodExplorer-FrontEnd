import { Container } from './styled.js'
import { SlArrowLeft } from 'react-icons/sl'
import img from '../../assets/Salada Ravanello.png'

import { ButtonText } from '../../components/ButtonText'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Tag } from '../../components/Tag/index.jsx'
import { Amount } from '../../components/Amount'
import { Button } from '../../components/Button'
import { PiReceipt } from 'react-icons/pi'
import { useNavigate } from 'react-router-dom'

export function Dish() {
  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  return (
    <Container>
      <Header />
      <div className="body">
        <label htmlFor="back">
          <SlArrowLeft name="back" size={32} />
          <ButtonText title="voltar" bold pop large onClick={handleBack} />
        </label>
        <div className="main">
          <img className="imgDish" src={img} alt="Foto do prato" />
          <div className="description">
            <h1>Salada Rovanello</h1>
            <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>
            <div className="tags">
              <Tag title="alface" />
              <Tag title="cebola" />
              <Tag title="pão naan" />
              <Tag title="pepino" />
              <Tag title="rabanete" />
              <Tag title="tomate" />
            </div>
            <div className="footerButtons">
              <Amount amount={'01'} />

              <Button id="submitButtonDesktop" title="Incluir R$25,00" small />

              <Button
                id="submitButtonMobile"
                icon={PiReceipt}
                title="inserir R$25,00"
                small
                mobile
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Container>
  )
}
