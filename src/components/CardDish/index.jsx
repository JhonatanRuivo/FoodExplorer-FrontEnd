import { Amount } from '../Amount'
import { Button } from '../Button'
import { Container } from './styled'
import { PiHeartStraight, PiPencilSimpleLight } from 'react-icons/pi'

import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'

export function CardDish({ dish, dishDescription, amount = false, user = false, dishName, image, price }) {
  const imageURl = `${api.defaults.baseURL}/files/${image}`
  const navigate = useNavigate()

  function handleDishDetails(id) {
    navigate(`/dish/${id}`)
  }

  function handleDishEdit(id) {
    navigate(`/edit/${id}`)
  }

  return (
    <Container>
      <div>
        {user ? (
          <>
            <button className="iconTop">
              <PiHeartStraight size={24} />
            </button>
          </>
        ) : (
          <>
            <button
              className="iconTop"
              onClick={() => {
                handleDishEdit(dish.id)
              }}
            >
              <PiPencilSimpleLight size={24} />
            </button>
          </>
        )}
      </div>

      <button
        className="card"
        type="button"
        onClick={() => {
          handleDishDetails(dish.id)
        }}
      >
        <img src={imageURl} alt="imagem do prato" />

        <h3 className="dishName">{dishName}</h3>

        <p className="dishDescription">{dishDescription}</p>

        <h2 className="price">{price.toLocaleString('pt-br', { style: 'currency', currency: 'brl' })}</h2>
      </button>

      <div className="footerButtons">
        {amount ? (
          <>
            <Amount amount={'01'} />
            <Button className="includes" title="incluir" type="button" />
          </>
        ) : (
          ''
        )}
      </div>
    </Container>
  )
}
