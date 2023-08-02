import { Container } from './styled'
import { PiMinus, PiPlus, PiHeartStraight, PiPencilSimpleLight } from 'react-icons/pi'


import { Button } from '../Button'

export function CardDish({ image, user = false, dishName, dishDescription, price, amount = false }) {
  return (
    <Container>
      <img src={image} />

      <button id="iconTop" aria-label="Favorites Dish">
        {user ? <PiHeartStraight size={24}/> : <PiPencilSimpleLight size={24}/>}
      </button>

      <h3 className="dishName">{dishName}</h3>

      <p className="dishDescription">{dishDescription}</p>

      <h2 className="price">{price}</h2>

      <div className="footerButtons">
        <div className="amount">
          <button id="minus" type="button">
            {amount ? <PiMinus size={24}/> : ""}
          </button>
          <strong>{amount}</strong>
          <button id="more" type="button">
            {amount ? <PiPlus size={24} /> : ""}
          </button>
        </div>

        {amount ? <Button title="incluir" type="button" /> : ""}
      </div>
    </Container>
  )
}
