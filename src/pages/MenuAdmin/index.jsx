import { Container, Main, Content } from './styles'
import { IoSearchOutline } from 'react-icons/io5'
import { HeaderMenu } from '../../components/HeaderMenu'
import { ButtonText } from '../../components/ButtonText'
import { ListSearch } from '../../components/ListSearch'
import { Footer } from '../../components/Footer'
import { Input } from '../../components/Input'

import { useNavigate } from 'react-router-dom'
import { useEffect, useMemo, useState } from 'react'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'

export function MenuAdmin() {
  const { signOut } = useAuth()
  const navigate = useNavigate()

  const [searchData, setSearchData] = useState('')
  const [searchDishes, setSearchDishes] = useState([])

  console.log(searchData)
  const dishFiltered = useMemo(() => {
    if (searchData == '') {
      return null
    }

    const lowerSearch = searchData.toLowerCase()

    return searchDishes?.filter(
      (dishes) => dishes.name.toLowerCase().includes(lowerSearch) || dishes.category.toLowerCase().includes(lowerSearch)
    )
  }, [searchData])

  async function fetchDishes() {
    const response = await api.get('/dishes/?name&ingredients&category')

    setSearchDishes(response.data)
  }

  function handleSignOut() {
    signOut()
    navigate('/')
  }
  function navToNewDish() {
    navigate('/new')
  }

  useEffect(() => {
    fetchDishes()
  }, [])

  return (
    <Container>
      <HeaderMenu admin />
      <Main>
        <Content>
          <Input
            id="input"
            icon={IoSearchOutline}
            placeholder="Busque por pratos ou ingredientes"
            value={searchData}
            onChange={(e) => setSearchData(e.target.value)}
          />
          <div className="listSearch">
            {dishFiltered?.map((dish) => (
              <ListSearch key={dish.id} name={dish.name} id={dish.id} setSearchData={setSearchData}/>
            ))}
          </div>
        </Content>
        <ButtonText title="Novo Prato" large border textStart onClick={navToNewDish} />
        <ButtonText title="Sair" large border textStart onClick={handleSignOut} />
      </Main>
      <Footer />
    </Container>
  )
}
