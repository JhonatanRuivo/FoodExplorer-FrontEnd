import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Banner } from '../../components/Banner'
import { Section } from '../../components/Section'
import { CardDish } from '../../components/CardDish'
import { Container, Main } from './styles'

import { api } from '../../services/api'
import { useEffect, useState } from 'react'


export function Home() {
  const [dishes, setDishes] = useState([])

  const fetchDishes = async () => {
    try {
      const response = await api.get('/dishes/?name&ingredients&category')

      setDishes(response.data)
    } catch (error) {
      if (error.response) {
        alert(error.response.message)
      } else {
        alert('Não foi possível carregar o menu, favor tente novamente.')
      }
    }
  }

  useEffect(() => {
    fetchDishes()
  }, [])

  return (
    <Container>
      <Header />
      <Banner />
      <Main>
        {dishes.filter((dish) => dish.category == 'Refeição').length > 0 && (
          <Section title="Refeições">
            {dishes
              .filter((dishes) => dishes.category == 'Refeição')
              .map((dish) => (
                <CardDish
                  user={true}
                  amount={true}
                  key={String(dish.id)}
                  image={dish.image}
                  dishName={dish.name}
                  dishDescription={dish.description}
                  price={dish.price}
                  dish={dish}
                />
              ))}
          </Section>
        )}

        {dishes.filter((dish) => dish.category == 'Sobremesa').length > 0 && (
          <Section title="Sobremesas">
            {dishes
              .filter((dishes) => dishes.category == 'Sobremesa')
              .map((dish) => (
                <CardDish
                  user={true}
                  amount={true}
                  key={String(dish.id)}
                  image={dish.image}
                  dishName={dish.name}
                  dishDescription={dish.description}
                  price={dish.price}
                  dish={dish}
                />
              ))}
          </Section>
        )}

        {dishes.filter((dish) => dish.category == 'Bebida').length > 0 && (
          <Section title="Bebidas">
            {dishes
              .filter((dishes) => dishes.category == 'Bebida')
              .map((dish) => (
                <CardDish
                  user={true}
                  amount={true}
                  key={String(dish.id)}
                  image={dish.image}
                  dishName={dish.name}
                  dishDescription={dish.description}
                  price={dish.price}
                  dish={dish}
                />
              ))}
          </Section>
        )}
      </Main>
      <Footer />
    </Container>
  )
}
