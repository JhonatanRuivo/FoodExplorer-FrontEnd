import { Container } from './styles'
import { IoSearchOutline } from 'react-icons/io5'

import { HeaderMenu } from '../../components/HeaderMenu'
import { ButtonText } from '../../components/ButtonText'
import { Footer } from '../../components/Footer'
import { Input } from '../../components/Input'

export function Menu() {
  return (
    <Container>
      <HeaderMenu />
      <Input
        icon={IoSearchOutline}
        placeholder="Busque por pratos ou ingredientes"
      />
      <ButtonText title="Sair" pop large />
      <Footer />
    </Container>
  )
}
