import { Container, Body } from './styled.js'
import { SlArrowLeft, SlArrowDown } from 'react-icons/sl'
import { PiPlusLight, PiUploadSimple, PiXLight, PiCheckCircleDuotone } from 'react-icons/pi'

import { Input } from '../../components/Input'
import { Title } from '../../components/Title'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { useNavigate } from 'react-router-dom'
import { useRef, useState } from 'react'

export function NewDish() {
  const [description, setDescription] = useState()
  const [category, setCategory] = useState()
  const [price, setPrice] = useState()
  const [file, setFile] = useState(null)
  const [name, setName] = useState()

  const inputImageRef = useRef(null)
  const navigate = useNavigate()

  const handleUploadClick = (e) => {
    e.preventDefault()
    inputImageRef.current.click()
  }

  const handleFileChange = (e) => {
    if (!e.target.files) {
      return
    }

    setFile(e.target.files[0])
  }
  

  function handleSubmit(e) {
    e.preventDefault()
    console.log(name, category, price, description, file)
  }
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

        <form onSubmit={handleSubmit}>
          <div id="sectionOne" className="section">
            <div id="inputImage" className="input">
              <label htmlFor="selectImage">Imagem</label>
              <button className="inputFile" onClick={handleUploadClick}>
                {file ? (
                  <>
                    <PiCheckCircleDuotone size={24} color="cyan"/>
                    `${file.name}`
                  </>
                ) : (
                  <>
                    <PiUploadSimple size={24} />
                    Selecione imagem
                  </>
                )}
              </button>
              <input
                required
                id="selectImage"
                type="file"
                onChange={handleFileChange}
                ref={inputImageRef}
              />
            </div>

            <div id="inputName" className="input">
              <label htmlFor="name">Nome</label>
              <Input
                required
                id="name"
                type="text"
                placeholder="Ex.: Salada "
                admin
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div id="category" className="input">
              <label htmlFor="setCategory">Categoria</label>
              <div>
                <select
                  required
                  id="setCategory"
                  onChangeCapture={(e) => setCategory(e.currentTarget.value)}
                >
                  <option defaultValue value="Refeição">Refeição</option>
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
              <label htmlFor="addTag">Ingredientes</label>
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
              <Input
                required
                id="price"
                placeholder="R$ 00,00"
                admin
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>

          <div id="sectionThree" className="section">
            <div id="inputDishDescription" className="input">
              <label htmlFor="dishDescription">Descrição</label>
              <textarea
                required
                id="dishDescription"
                typeof="text"
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              ></textarea>
            </div>
          </div>

          <Button id="buttonSave" title="Salvar alterações" small tomato type="submit" />
        </form>
      </Body>
      <Footer />
    </Container>
  )
}
