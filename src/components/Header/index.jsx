import { Container, Logo, ButtonCart } from './styles'

import { PiReceipt, PiList } from 'react-icons/pi'

export function Header() {
  return (
    <Container>
      <PiList size={32} />
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
      <ButtonCart>
        <button>0</button>
        <PiReceipt size={32} />
      </ButtonCart>
    </Container>
  )
}
