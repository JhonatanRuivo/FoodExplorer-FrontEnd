import { Container, Logo, Icon } from './styles'

import { PiList, PiMagnifyingGlass, PiSignOut } from 'react-icons/pi'
import { Input } from '../Input'
import { ButtonCart } from '../ButtonCart'

export function Header() {
  return (
    <Container>
      <Icon type="button">
        <PiList size={32} />
      </Icon>
      <Logo>
        <svg
          width="24"
          height="27"
          viewBox="0 0 22 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.2304 0L21.8881 6.15327V18.4598L11.2304 24.6131L0.572592 18.4598V6.15327L11.2304 0Z"
            fill="#065E7C"
          />
        </svg>
        <h1>food explorer</h1>
      </Logo>

      <div className="input">
        <Input
          icon={PiMagnifyingGlass}
          type="text"
          placeholder="Busque por pratos ou ingredientes"
        />
      </div>

      <ButtonCart />
      <label htmlFor='signOut' id='signOut'>
        <PiSignOut id='signOut'/>
      </label>
    </Container>
  )
}
