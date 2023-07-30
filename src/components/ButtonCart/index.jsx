import { Container } from "./styles";

import { PiReceipt } from "react-icons/pi";


export function ButtonCart() {
  return (
    <Container type="button">
      <label>
        <PiReceipt size={32} />
        <p>Pedidos</p>
        <div className="count">0</div>
      </label>
    </Container>
  )
}
