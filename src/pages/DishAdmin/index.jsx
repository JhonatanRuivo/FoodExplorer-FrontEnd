import { Tag } from '../../components/Tag/index.jsx'
import { Header } from '../../components/Header/index.jsx'
import { Footer } from '../../components/Footer/index.jsx'
import { Button } from '../../components/Button/index.jsx'
import { Container } from './styled.js'
import { ButtonText } from '../../components/ButtonText/index.jsx'
import { SlArrowLeft } from 'react-icons/sl'

import { api } from '../../services/api.js'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export function DishAdmin() {
  const params = useParams()
  const navigate = useNavigate()

  const [dish, setDish] = useState(null)

  const imageURl = dish && `${api.defaults.baseURL}/files/${dish.image}`

  const fetchDishes = async () => {
    try {
      const response = await api.get(`/dishes/${params.id}`)

      setDish(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  function handleDishEdit(id) {
    navigate(`/edit/${id}`)
  }

  function handleBack() {
    navigate('/')
  }

  useEffect(() => {
    fetchDishes()
  }, [dish])

  return (
    <Container>
      <Header admin="admin" />
      <div className="body">
        <label htmlFor="back">
          <SlArrowLeft  size={32} />
          <ButtonText id="back" title="voltar" bold large onClick={handleBack} />
        </label>

        {dish && (
          <main>
            <img className="imgDish" src={imageURl} alt="Foto do prato" />
            <div className="description">
              <h1>{dish.name}</h1>
              <p>{dish.description}</p>
              <div className="tags">
                {dish.ingredients.map((ingredient) => (
                  <Tag key={String(ingredient.id)} title={ingredient.name} />
                ))}
              </div>
              <div className="footerButtons">
                <Button
                  title={'Editar prato'}
                  type="button"
                  onClick={() => {
                    handleDishEdit(dish.id)
                  }}
                />
              </div>
            </div>
          </main>
        )}
      </div>

      <Footer />
    </Container>
  )
}
