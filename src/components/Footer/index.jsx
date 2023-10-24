import { Container } from './styles'

export function Footer() {
  return (
    <Container>
      <div className="logo">
        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9.76367 0.240356L19.29 4.74036V13.7404L9.76367 18.2404L0.237392 13.7404V4.74036L9.76367 0.240356Z"
            fill="#4D585E"
          />
        </svg>
        <span>food explorer</span>
      </div>
      <p>© 2023 - Todos os direitos reservados.</p>
    </Container>
  )
}
