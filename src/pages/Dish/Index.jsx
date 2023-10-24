import { Tag } from '../../components/Tag/index.jsx'
import { Header } from '../../components/Header/index.jsx'
import { Footer } from '../../components/Footer/index.jsx'
import { Amount } from '../../components/Amount/index.jsx'
import { Button } from '../../components/Button/index.jsx'
import { Container } from './styled.js'
import { PiReceipt } from 'react-icons/pi'
import { ButtonText } from '../../components/ButtonText/index.jsx'
import { SlArrowLeft } from 'react-icons/sl'

import { api } from '../../services/api.js'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export function Dish() {
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

  function handleBack() {
    navigate('/')
  }

  useEffect(() => {
    fetchDishes()
  }, [dish])

  return (
    <Container>
      <Header />
      <div className="body">
        <div className="label">
          <label htmlFor="back"></label>
          <SlArrowLeft size={32} />
          <ButtonText id="back" title="voltar" bold large onClick={handleBack} />
        </div>

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
                <Amount amount={'01'} />
                <Button id="submitButtonDesktop" title={`Incluir ${dish.price}`} small />
                <Button id="submitButtonMobile" icon={PiReceipt} title={`Incluir ${dish.price}`} small mobile />
              </div>
            </div>
          </main>
        )}
      </div>
      <Footer />
    </Container>
  )
}
