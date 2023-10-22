import { Container, Body } from './styled.js'
import { SlArrowLeft, SlArrowDown } from 'react-icons/sl'
import { PiPlusLight, PiUploadSimple, PiXLight, PiCheckCircleDuotone } from 'react-icons/pi'

import { Input } from '../../components/Input/index.jsx'
import { Title } from '../../components/Title/index.jsx'
import { Header } from '../../components/Header/index.jsx'
import { Footer } from '../../components/Footer/index.jsx'
import { Button } from '../../components/Button/index.jsx'
import { ButtonText } from '../../components/ButtonText/index.jsx'

import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'

import { api } from '../../services/api.js'
import { GoToTop } from '../../../utils/pageOnTop.js'

export function EditDish() {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('Refeição')
  const [imageFile, setImageFile] = useState(null)
  const [description, setDescription] = useState('')

  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState('')

  const navigate = useNavigate()
  const inputImageRef = useRef(null)

  const params = useParams()

  async function fetchDishes() {
    try {
      const response = await api.get(`/dishes/${params.id}`)
      const { image, name, price, category, description, ingredients } = response.data
      setImageFile(image)
      setName(name)
      setPrice(price)
      setCategory(category)
      setDescription(description)
      setIngredients(ingredients.map((ingredient) => ingredient.name))
    } catch (error) {
      if (error.response) {
        alert(error.response.message)
      } else {
        alert('Erro ao carregar prato, favor tente novamente!')
      }
    }
  }

  function handleUploadClick() {
    inputImageRef.current.click()
  }
  function handleFileChange(e) {
    if (!e.target.files) {
      return
    }

    setImageFile(e.target.files[0])
  }
  function addIngredient(e) {
    setNewIngredient(e.target.value)
  }
  function handleAddIngredient() {
    setIngredients((prevState) => [...prevState, newIngredient])
    setNewIngredient('')
  }
  function handleRemoveIngredient(deleted) {
    setIngredients((prevState) => prevState.filter((ingredient) => ingredient !== deleted))
    setNewIngredient('')
  }
  async function handleDishUpdate() {
    if (!name || !price || !description) {
      alert('Favor preencher todos os campos!')
      return
    }

    if (ingredients.length < 1) {
      alert('Adicione no mínimo 1 ingrediente!')
    } else {
      const formData = new FormData()
      formData.append('name', name)
      formData.append('image', imageFile)
      formData.append('category', category)
      formData.append('price', price)
      formData.append('description', description)
      for (let i = 0; i < ingredients.length; i += 1) {
        formData.append('ingredients', ingredients[i])
      }

      try {
        const response = await api.put(`/dishes/${params.id}`, formData)
        console.log(response.status)
      } catch (error) {
        console.log(error.message)
      }
    }
    handleBack()
  }
  async function handleDelete() {
    try {
      await api.delete(`/dishes/${params.id}`)
      console.log('deleted successfully')
    } catch (error) {
      console.log(error.message)
    }

    navigate("/")
  }

  function handleBack() {
    navigate(-1)
  }

  useEffect(() => {
    fetchDishes()
  }, [])

  GoToTop()

  return (
    <Container>
      <Header admin="admin" />
      <Body>
        <div className="buttonPrev">
          <SlArrowLeft id="buttonPrev" size={32} />
          <ButtonText id="buttonDesktop" title="voltar" bold large onClick={handleBack} />
        </div>

        <div className="buttonPrevMobile">
          <SlArrowLeft id="buttonPrevMobile" size={14} />
          <ButtonText id="buttonMobile" title="voltar" bold onClick={handleBack} />
        </div>

        <fieldset>
          <legend>
            <Title title={'Editar prato'} />
          </legend>

          <form id="formEditDish">
            <div id="sectionOne" className="section">
              <div id="inputImage" className="input">
                <label htmlFor="selectImage">Imagem</label>
                <button className="inputFile" type="button" onClick={handleUploadClick}>
                  {imageFile ? (
                    <>
                      <PiCheckCircleDuotone size={24} color="cyan" />
                      {imageFile.name}
                    </>
                  ) : (
                    <>
                      <PiUploadSimple size={24} />
                      Selecione imagem
                    </>
                  )}
                </button>
                <input id="selectImage" type="file" onChange={handleFileChange} ref={inputImageRef} />
              </div>

              <div id="inputName" className="input">
                <label htmlFor="name">Nome</label>
                <Input
                  admin
                  required
                  id="name"
                  type="text"
                  maxLength={20}
                  placeholder="Ex: Salada"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div id="category" className="input">
                <label htmlFor="setCategory">Categoria</label>
                <div>
                  <select value={category} id="setCategory" onChange={(e) => setCategory(e.target.value)}>
                    <option value="Refeição">Refeição</option>
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
                  {ingredients.map((ingredient, index) => (
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
                      id="inputTag"
                      type="text"
                      placeholder="Adicionar"
                      onChange={addIngredient}
                      value={newIngredient}
                    />
                    <button id="addIcon" type="button" onClick={handleAddIngredient}>
                      <PiPlusLight />
                    </button>
                  </div>
                </div>
              </div>

              <div id="inputPrice" className="input">
                <label htmlFor="price">Preço</label>
                <Input
                  admin
                  required
                  min="10"
                  max="100"
                  id="price"
                  step=".10"
                  type="number"
                  placeholder="R$ 00,00"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
            </div>

            <div id="sectionThree" className="section">
              <div id="inputDishDescription" className="input">
                <label htmlFor="dishDescription">Descrição</label>
                <textarea
                  typeof="text"
                  id="dishDescription"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                ></textarea>
              </div>
            </div>
          </form>
        </fieldset>

        <div className="buttonSaveAndDelete">
          <button id="deleteButton" onClick={handleDelete}>
            Excluir prato
          </button>
          <Button
            form="formEditDish"
            id="saveButton"
            title="Salvar alterações"
            small
            tomato
            onClick={handleDishUpdate}
          />
        </div>
      </Body>
      <Footer />
    </Container>
  )
}
