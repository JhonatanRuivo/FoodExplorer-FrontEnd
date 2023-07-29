import { Container, ListDishes } from './styles'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Banner } from '../../components/Banner'
import { CardDish } from '../../components/CardDish'

export function Home() {
  return (
    <Container>
      <Header />
      <Banner />
      <ListDishes>
        <h3>Refeições</h3>
        <CardDish />
      </ListDishes>
      <Footer />
    </Container>
  )
}
