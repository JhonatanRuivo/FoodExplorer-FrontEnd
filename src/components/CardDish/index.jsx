import { Container } from './styled'
import { PiMinus, PiPlus } from 'react-icons/pi'

import { Button } from '../Button'

export function CardDish({ image, icon, dishName, dishDescription, price, amount }) {
  return (
    <Container>
      <img src={image} />

      <button id="iconTop" aria-label="Favorites Dish">
        {icon}
      </button>

      <h3 className="dishName">{dishName}</h3>

      <p className="dishDescription">{dishDescription}</p>

      <h2 className="price">{price}</h2>

      <div className="footerButtons">
        <div className="amount">
          <button id="minus" type="button">
            <PiMinus size={24} />
          </button>
          <strong>{amount}</strong>
          <button id="more" type="button">
            <PiPlus size={24} />
          </button>
        </div>

        <Button title="incluir" type="button" />
      </div>
    </Container>
  )
}
