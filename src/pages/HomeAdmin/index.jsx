import { Container, Main } from './styles'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Banner } from '../../components/Banner'
import { Section } from '../../components/Section'
import { CardDish } from '../../components/CardDish'

import Spaguetti from '../../assets/Spaguetti Gambe.png'
import { useState } from 'react'

export function HomeAdmin() {
  return (
    <Container>
      <Header admin="admin" />
      <Banner />
      <Main>
        <Section title="Refeições">
          <CardDish
            image={Spaguetti}
            dishName={'Spaguetti Gambe '}
            dishDescription={'Massa fresca com camarões e pesto. '}
            price={'R$ 79,97'}
          />
          <CardDish
            image={Spaguetti}
            dishName={'Spaguetti Gambe '}
            dishDescription={'Massa fresca com camarões e pesto. '}
            price={'R$ 79,97'}
          />
          <CardDish
            image={Spaguetti}
            dishName={'Spaguetti Gambe '}
            dishDescription={'Massa fresca com camarões e pesto. '}
            price={'R$ 79,97'}
          />
          <CardDish
            image={Spaguetti}
            dishName={'Spaguetti Gambe '}
            dishDescription={'Massa fresca com camarões e pesto. '}
            price={'R$ 79,97'}
          />
          <CardDish
            image={Spaguetti}
            dishName={'Spaguetti Gambe '}
            dishDescription={'Massa fresca com camarões e pesto. '}
            price={'R$ 79,97'}
          />
          <CardDish
            image={Spaguetti}
            dishName={'Spaguetti Gambe '}
            dishDescription={'Massa fresca com camarões e pesto. '}
            price={'R$ 79,97'}
          />
          <CardDish
            image={Spaguetti}
            dishName={'Spaguetti Gambe '}
            dishDescription={'Massa fresca com camarões e pesto. '}
            price={'R$ 79,97'}
          />
        </Section>
        <Section title="Sobremesas">
          <CardDish
            image={Spaguetti}
            dishName={'Spaguetti Gambe '}
            dishDescription={'Massa fresca com camarões e pesto. '}
            price={'R$ 79,97'}
          />
          <CardDish
            image={Spaguetti}
            dishName={'Spaguetti Gambe '}
            dishDescription={'Massa fresca com camarões e pesto. '}
            price={'R$ 79,97'}
          />
          <CardDish
            image={Spaguetti}
            dishName={'Spaguetti Gambe '}
            dishDescription={'Massa fresca com camarões e pesto. '}
            price={'R$ 79,97'}
          />
          <CardDish
            image={Spaguetti}
            dishName={'Spaguetti Gambe '}
            dishDescription={'Massa fresca com camarões e pesto. '}
            price={'R$ 79,97'}
          />
          <CardDish
            image={Spaguetti}
            dishName={'Spaguetti Gambe '}
            dishDescription={'Massa fresca com camarões e pesto. '}
            price={'R$ 79,97'}
          />
          <CardDish
            image={Spaguetti}
            dishName={'Spaguetti Gambe '}
            dishDescription={'Massa fresca com camarões e pesto. '}
            price={'R$ 79,97'}
          />
          <CardDish
            image={Spaguetti}
            dishName={'Spaguetti Gambe '}
            dishDescription={'Massa fresca com camarões e pesto. '}
            price={'R$ 79,97'}
          />
        </Section>
        <Section title="Bebidas">
          <CardDish
            image={Spaguetti}
            dishName={'Spaguetti Gambe '}
            dishDescription={'Massa fresca com camarões e pesto. '}
            price={'R$ 79,97'}
          />
          <CardDish
            image={Spaguetti}
            dishName={'Spaguetti Gambe '}
            dishDescription={'Massa fresca com camarões e pesto. '}
            price={'R$ 79,97'}
          />
          <CardDish
            image={Spaguetti}
            dishName={'Spaguetti Gambe '}
            dishDescription={'Massa fresca com camarões e pesto. '}
            price={'R$ 79,97'}
          />
          <CardDish
            image={Spaguetti}
            dishName={'Spaguetti Gambe '}
            dishDescription={'Massa fresca com camarões e pesto. '}
            price={'R$ 79,97'}
          />
          <CardDish
            image={Spaguetti}
            dishName={'Spaguetti Gambe '}
            dishDescription={'Massa fresca com camarões e pesto. '}
            price={'R$ 79,97'}
          />
          <CardDish
            image={Spaguetti}
            dishName={'Spaguetti Gambe '}
            dishDescription={'Massa fresca com camarões e pesto. '}
            price={'R$ 79,97'}
          />
          <CardDish
            image={Spaguetti}
            dishName={'Spaguetti Gambe '}
            dishDescription={'Massa fresca com camarões e pesto. '}
            price={'R$ 79,97'}
          />
        </Section>
      </Main>
      <Footer />
    </Container>
  )
}
