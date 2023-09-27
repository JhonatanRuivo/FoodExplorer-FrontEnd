import { Container } from './styled'
import { api } from '../../services/api'

import { Button } from '../Button'
import { Amount } from '../Amount'
import { Link, useNavigate } from 'react-router-dom'
import { PiHeartStraight, PiPencilSimpleLight } from 'react-icons/pi'

export function CardDish({
  dish,
  dishDescription,
  amount = false,
  user = false,
  dishName,
  image,
  price,
}) {
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
            <button className="iconTop" >
              <PiHeartStraight size={24} />
            </button>
          </>
        ) : (
          <>
            <button className="iconTop" 
            onClick={() => {
              handleDishEdit(dish.id)
              }}>
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

        <h2 className="price">
          {price.toLocaleString('pt-br', { style: 'currency', currency: 'brl' })}
        </h2>
      </button>

      <div className="footerButtons">
        <Amount amount={amount} />
        {amount ? <Button title="incluir" type="button" /> : ''}
      </div>
    </Container>
  )
}
