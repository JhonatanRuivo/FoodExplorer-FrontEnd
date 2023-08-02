import { Container } from './styles'
import { PiHeartStraight } from 'react-icons/pi'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Banner } from '../../components/Banner'
import { CardDish } from '../../components/CardDish'

import Spaguetti from '../../assets/Spaguetti Gambe.png'

export function Home() {
  return (
    <Container>
      <Header />
      <Banner />
      <CardDish
        image={Spaguetti}
        icon={<PiHeartStraight size={24} />}
        dishName={'Spaguetti Gambe >'}
        dishDescription={'Massa fresca com camarões e pesto. '}
        price={'R$ 79,97'}
        amount={"01"}
      />
      <Footer />
    </Container>
  )
}
