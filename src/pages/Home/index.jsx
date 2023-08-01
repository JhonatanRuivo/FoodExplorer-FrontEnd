import { Container, Section } from './styles'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Banner } from '../../components/Banner'
import { CardDish } from '../../components/CardDish'

export function Home() {
  return (
    <Container>
      <Header />
      <Banner />
      <h3>Refeições</h3>
      <Section>
        <button className="arrowLeft">
          <SlArrowLeft size={40} />
        </button>
        <button className="arrowRight">
          <SlArrowRight size={40} />
        </button>
        <CardDish />
        <CardDish />
        <CardDish />
        <CardDish />
        <CardDish />
        <CardDish />
        <CardDish />
        <CardDish />
      </Section>

      <h3>Sobremesas</h3>
      <Section>
        <button className="arrowLeft">
          <SlArrowLeft size={40} />
        </button>
        <button className="arrowRight">
          <SlArrowRight size={40} />
        </button>
        <CardDish />
        <CardDish />
        <CardDish />
        <CardDish />
        <CardDish />
        <CardDish />
        <CardDish />
        <CardDish />
      </Section>

      <h3>Bebidas</h3>
      <Section>
        <button className="arrowLeft">
          <SlArrowLeft size={40} />
        </button>
        <button className="arrowRight">
          <SlArrowRight size={40} />
        </button>
        <CardDish />
        <CardDish />
        <CardDish />
        <CardDish />
        <CardDish />
        <CardDish />
        <CardDish />
        <CardDish />
      </Section>

      <Footer />
    </Container>
  )
}
