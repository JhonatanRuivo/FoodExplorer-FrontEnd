import { Container, Body } from './styled.js'
import { SlArrowLeft } from 'react-icons/sl'
import { PiPlusLight, PiUploadSimple, PiXLight } from 'react-icons/pi'

import { ButtonText } from '../../components/ButtonText'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Title } from '../../components/Title'
import { Input } from '../../components/Input'

export function NewDish() {
  return (
    <Container>
      <Header admin="admin" />
      <Body>
        <div className="back">
          <label className="back" htmlFor="back">
            <SlArrowLeft id="back" size={32} />
            <ButtonText title="voltar" bold pop large />
          </label>
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
              <label htmlFor="inputName">Nome</label>
              <Input placeholder="Ex.: Salada Ceasar " admin />
            </div>

            <div id="category" className="input">
              <label htmlFor="category">Categoria</label>
              <select name="category" id="setCategory">
                <option value="Refeição">Refeição</option>
                <option value="Salada">Salada</option>
                <option value="Sobremesa">Sobremesa</option>
                <option value="Bebida">Bebida</option>
              </select>
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

            <div id='inputPrice'className='input'>
              <label htmlFor="inputPrice">Preço</label>
              <Input placeholder="R$ 00,00" admin/>
            </div>
          </div>
        </form>
      </Body>
      <Footer />
    </Container>
  )
}
