import { Container, Main, Content, Items } from './styles'
import { IoSearchOutline } from 'react-icons/io5'

import { HeaderMenu } from '../../components/HeaderMenu'
import { ButtonText } from '../../components/ButtonText'
import { Footer } from '../../components/Footer'
import { Input } from '../../components/Input'

export function Menu() {
  return (
    <Container>
      <HeaderMenu />
      <Main>
        <Input
          id="input"
          icon={IoSearchOutline}
          placeholder="Busque por pratos ou ingredientes"
        />
        <Content>
          <Items></Items>
        </Content>
        <ButtonText title="Sair" large border textStart />
      </Main>
      <Footer />
    </Container>
  )
}
