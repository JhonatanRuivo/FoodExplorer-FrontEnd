import { Container, Body } from './styled.js'
import { SlArrowLeft, SlArrowDown } from 'react-icons/sl'
import { PiPlusLight, PiUploadSimple, PiXLight } from 'react-icons/pi'

import { ButtonText } from '../../components/ButtonText'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Button } from '../../components/Button'
import { Title } from '../../components/Title'
import { Input } from '../../components/Input'
import { useNavigate } from 'react-router-dom'

export function NewDish() {
  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  return (
    <Container>
      <Header admin="admin" />
      <Body>
        <div className="buttonPrev">
          <SlArrowLeft id="buttonPrev" size={32} />
          <ButtonText id="buttonDesktop" title="voltar" bold pop large onClick={handleBack} />
        </div>

        <div className="buttonPrevMobile">
          <SlArrowLeft id="buttonPrevMobile" size={14} />
          <ButtonText id="buttonMobile" title="voltar" bold pop onClick={handleBack} />
        </div>

        <Title title={'Adicionar prato'} />

        <form action="">
          <div id="sectionOne" className="section">
            <div id="inputImage" className="input">
              <label htmlFor="selectImage">Imagem do prato</label>
              <button id="selectImage">
                <PiUploadSimple size={24} />
                Selecione imagem
              </button>
            </div>

            <div id="inputName" className="input">
              <label htmlFor="name">Nome</label>
              <Input id="name" type="text" placeholder="Ex.: Salada " admin />
            </div>

            <div id="category" className="input">
              <label htmlFor="setCategory">Categoria</label>
              <div>
                <select id="setCategory">
                  <option value="Refeição">Refeição</option>
                  <option value="Salada">Salada</option>
                  <option value="Sobremesa">Sobremesa</option>
                  <option value="Bebida">Bebida</option>
                </select>
                <SlArrowDown id="icon" />
              </div>
            </div>
          </div>

          <div id="sectionTwo" className="section">
            <div id="selectIngredients" className="input">
              <label htmlFor="ingredients">Ingredientes</label>
              <div id="ingredients">
                <button id="tag">
                  Pão Naan
                  <PiXLight />
                </button>

                <button id="addTag">
                  Adicionar
                  <PiPlusLight />
                </button>
              </div>
            </div>

            <div id="inputPrice" className="input">
              <label htmlFor="price">Preço</label>
              <Input id="price" placeholder="R$ 00,00" admin />
            </div>
          </div>

          <div id="sectionThree" className="section">
            <div id="inputDishDescription" className="input">
              <label htmlFor="dishDescription">Descrição</label>
              <textarea
                id="dishDescription"
                cols=""
                rows=""
                placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              ></textarea>
            </div>
          </div>

          <Button id="buttonSave" title="Salvar alterações" small tomato />
        </form>
      </Body>
      <Footer />
    </Container>
  )
}
