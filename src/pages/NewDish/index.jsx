import { Container, Body } from './styled.js'
import { SlArrowLeft, SlArrowDown } from 'react-icons/sl'
import {
  PiPlusLight,
  PiUploadSimple,
  PiXLight,
  PiCheckCircleDuotone,
} from 'react-icons/pi'

import { Input } from '../../components/Input'
import { Title } from '../../components/Title'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { useNavigate } from 'react-router-dom'
import { useRef, useState } from 'react'
import { useAuth } from '../../hooks/auth.jsx'

import { api } from '../../services/api'

export function NewDish() {
  const [file, setFile] = useState(null)

  const [name, setName] = useState(null)

  const [category, setCategory] = useState('Refeição')

  const [ingredient, setIngredient] = useState([])
  const [newIngredient, setNewIngredient] = useState('')

  const [price, setPrice] = useState(null)

  const [description, setDescription] = useState(null)

  const inputImageRef = useRef(null)

  const navigate = useNavigate()
  const { signOut } = useAuth()

  function handleBack() {
    navigate(-1)
  }

  function handleUploadClick() {
    // e.preventDefault()
    inputImageRef.current.click()
  }
  function handleFileChange(e) {
    if (!e.target.files) {
      return
    }

    setFile(e.target.files[0])
  }

  function addIngredient(e) {
    setNewIngredient(e.target.value)
  }
  function handleAddIngredient() {
    if (!newIngredient) {
      return
    }

    setIngredient((prevState) => [...prevState, newIngredient])
    setNewIngredient('')
  }
  function handleRemoveIngredient(deleted) {
    setIngredient((prevState) =>
      prevState.filter((ingredient) => ingredient !== deleted)
    )
  }

  async function handleNewDish() {
    const ingredients = ingredient.map()
    console.log(ingredients)
  }

  return (
    <Container>
      <Header admin="admin" />
      <Body>
        <div className="buttonPrev">
          <SlArrowLeft id="buttonPrev" size={32} />
          <ButtonText
            id="buttonDesktop"
            title="voltar"
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

        <fieldset>
          <legend>
            <Title title={'Adicionar prato'} />
          </legend>

          <form id="form-newDish">
            <div id="sectionOne" className="section">
              <div id="inputImage" className="input">
                <label htmlFor="selectImage">Imagem</label>
                <button
                  className="inputFile"
                  type="button"
                  onClick={handleUploadClick}
                >
                  {file ? (
                    <>
                      <PiCheckCircleDuotone size={24} color="cyan" />
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
                  maxLength={20}
                  placeholder="Ex.: Salada "
                  admin
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div id="category" className="input">
                <label htmlFor="setCategory">Categoria</label>
                <div>
                  <select
                    id="setCategory"
                    onChange={(e) => setCategory(e.target.value)}
                  >
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
                <label htmlFor="inputTag">Ingredientes</label>
                <div id="ingredients">
                  {ingredient.map((ingredient, index) => (
                    <button
                      id="tag"
                      type="button"
                      key={String(index)}
                      onClick={() => handleRemoveIngredient(ingredient)}
                    >
                      {ingredient}
                      <PiXLight />
                    </button>
                  ))}

                  <div id="addTag">
                    <input
                      required
                      id="inputTag"
                      type="text"
                      placeholder="Adicionar"
                      onChange={addIngredient}
                      value={newIngredient}
                    />
                    <button
                      id="addIcon"
                      type="button"
                      onClick={handleAddIngredient}
                    >
                      <PiPlusLight />
                    </button>
                  </div>
                </div>
              </div>

              <div id="inputPrice" className="input">
                <label htmlFor="price">Preço</label>
                <Input
                  required
                  id="price"
                  type="number"
                  min={10}
                  max={100}
                  step={0.01}
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
                  id="dishDescription"
                  typeof="text"
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                ></textarea>
              </div>
            </div>
          </form>
        </fieldset>

        <Button
          form="form-newDish"
          type="submit"
          id="buttonSave"
          title="Salvar alterações"
          small
          tomato
          onClick={handleNewDish}
        />
      </Body>
      <Footer />
    </Container>
  )
}
