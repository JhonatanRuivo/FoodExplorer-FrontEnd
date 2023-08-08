import { Container } from './styled'
import {PiHeartStraight, PiPencilSimpleLight } from 'react-icons/pi'


import { Button } from '../Button'
import { Amount } from '../Amount'

export function CardDish({ image, user = false, dishName, dishDescription, price, amount = false }) {
  return (
    <Container>
      <button id="iconTop" aria-label="Favorites Dish">
        {user ? <PiHeartStraight size={24}/> : <PiPencilSimpleLight size={24}/>}
      </button>

      <img src={image} />

      <h3 className="dishName">{dishName}</h3>

      <p className="dishDescription">{dishDescription}</p>

      <h2 className="price">{price}</h2>

      <div className="footerButtons">
        <Amount amount={amount}/>

        {amount ? <Button title="incluir" type="button" /> : ""}
      </div>
    </Container>
  )
}
