import { Container, Icon } from './styles'

import { PiList, PiMagnifyingGlass, PiSignOut } from 'react-icons/pi'
import { Input } from '../Input'
import { ButtonCart } from '../ButtonCart'
import { ButtonNewDish } from '../ButtonNewDish'

export function Header({admin= false}) {
  return (
    <Container>
      <Icon type="button">
        <PiList size={32} />
      </Icon>
      <div className="logo">
        <svg
          width="22"
          height="25"
          viewBox="0 0 22 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.2304 0L21.8881 6.15327V18.4598L11.2304 24.6131L0.572592 18.4598V6.15327L11.2304 0Z"
            fill="#065E7C"
          />
        </svg>
        <div className="textLogo">
          <h3>food explorer</h3>
          <p>{admin}</p>
        </div>
      </div>

      <div className="input">
        <Input
          icon={PiMagnifyingGlass}
          type="text"
          placeholder="Busque por pratos ou ingredientes"
        />
      </div>

      {admin ? '' : <ButtonCart />}
      {admin ? <ButtonNewDish/> : ""}
      <label htmlFor="signOut">
        <button id="signOut">
          <PiSignOut size={32} />
        </button>
      </label>
    </Container>
  )
}
