import { Container } from './styled'
import { PiHeartStraight, PiPencilSimpleLight } from 'react-icons/pi'

import { Button } from '../Button'
import { Amount } from '../Amount'
import { Link } from 'react-router-dom'

export function CardDish({
  image,
  user = false,
  dishName,
  dishDescription,
  price,
  amount = false,
}) {
  return (
    <Container>
      <Link id="iconTop" to="/edit">
        {user ? <PiHeartStraight size={24} /> : <PiPencilSimpleLight size={24} />}
      </Link>

      <Link className="card" to="/dish ">
        <img src={image} />

        <h3 className="dishName">{dishName}</h3>

        <p className="dishDescription">{dishDescription}</p>

        <h2 className="price">{price}</h2>
      </Link>

      <div className="footerButtons">
        <Amount amount={amount} />

        {amount ? <Button title="incluir" type="button" /> : ''}
      </div>
    </Container>
  )
}
