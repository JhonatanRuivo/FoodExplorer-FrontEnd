import { Container, Body } from './styled.js'
import { SlArrowLeft, SlArrowDown } from 'react-icons/sl'
import { PiPlusLight, PiUploadSimple, PiXLight } from 'react-icons/pi'
import { GoToTop } from '../../../utils/pageOnTop.js'

import { ButtonText } from '../../components/ButtonText'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Button } from '../../components/Button'
import { Title } from '../../components/Title'
import { Input } from '../../components/Input'
import { useNavigate } from 'react-router-dom'

export function EditDish() {
  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  GoToTop()

  return (
    <Container>
      <Header admin="admin" />
      <Body>
        <div className="buttonPrev">
          <SlArrowLeft name="buttonPrev" size={32} />
          <ButtonText
            id="buttonDesktop"
            title="Voltar"
            bold
            large
            onClick={handleBack}
          />
        </div>
        <div className="buttonPrevMobile">
          <SlArrowLeft id="buttonPrevMobile" size={14} />
          <ButtonText
            id="buttonMobile"
            title="voltar"
            bold
            onClick={handleBack}
          />
        </div>

        <Title title={'Editar prato'} />

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
              <label htmlFor="inputName">Nome</label>
              <Input type="text" placeholder="Ex.: Salada Ceasar " admin />
            </div>

            <div id="category" className="input">
              <label htmlFor="category">Categoria</label>
              <div id="setCategory">
                <select name="category">
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
              <label htmlFor="selectIngredients">Ingredientes</label>
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
              <label htmlFor="inputPrice">Preço</label>
              <Input placeholder="R$ 00,00" admin />
            </div>
          </div>

          <div id="sectionThree" className="section">
            <div id="inputDishDescription" className="input">
              <label htmlFor="dishDescription">Descrição</label>
              <textarea
                name="inputDishDescription"
                id="dishDescription"
                cols=""
                rows=""
                placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              ></textarea>
            </div>
          </div>

          <div id="buttonsSaveAndDelete">
            <button id="deleteButton" type="button">
              Excluir prato
            </button>
            <Button id="saveButton" title="Salvar alterações" small tomato />
          </div>
        </form>
      </Body>
      <Footer />
    </Container>
  )
}
