import { Container } from './styled'

import { PiHeartStraight, PiMinus, PiPlus } from 'react-icons/pi'
import { Button } from '../Button'

import Salada from '../../assets/Salada Ravanello.png'

export function CardDish() {
  return (
    <Container>
      <img src={Salada} alt="Prato com Salada" />

      <label htmlFor="icon" className="iconFav">
        <PiHeartStraight size={28} id="icon" />
      </label>

      <h3 className="dishName">Salada Rovanello {'>'}</h3>

      <p className="dishDescription">
        Rabanetes, folhas verdes e molho agridoce salpicados com gergelim
      </p>

      <h2 className="price">R$ 49,97</h2>

      <div className="amount">
        <button id="minus">
          <PiMinus size={24} />
        </button>
        <strong>01</strong>
        <button id="more">
          <PiPlus size={24} />
        </button>

        <Button title="incluir" />
      </div>
    </Container>
  )
}
