import { Container, Icon } from './styles'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'
import { ListSearch } from '../ListSearch'

import { PiList, PiMagnifyingGlass, PiSignOut } from 'react-icons/pi'
import { Input } from '../Input'
import { ButtonCart } from '../ButtonCart'
import { ButtonNewDish } from '../ButtonNewDish'
import { useState, useEffect, useMemo } from 'react'

export function Header({ admin = false }) {
  const { signOut } = useAuth()
  const navigate = useNavigate()

  const [searchDishes, setSearchDishes] = useState([])
  const [searchData, setSearchData] = useState('')

  async function fetchDishes() {
    const response = await api.get('/dishes/?name&ingredients&category')

    setSearchDishes(response.data)
  }

  useEffect(() => {
    fetchDishes()
  }, [])

  const dishFiltered = useMemo(() => {
    if (searchData == '') {
      return null
    }

    const lowerSearch = searchData.toLowerCase()

    return searchDishes?.filter(
      (dishes) => dishes.name.toLowerCase().includes(lowerSearch) || dishes.category.toLowerCase().includes(lowerSearch)
    )
  }, [searchData])

  console.log(dishFiltered)

  function handleSignOut() {
    navigate('/')
    signOut()
  }

  return (
    <Container>
      <Icon type="button" to="/menu">
        <PiList size={32} />
      </Icon>

      <div className="logo">
        <svg width="22" height="25" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11.2304 0L21.8881 6.15327V18.4598L11.2304 24.6131L0.572592 18.4598V6.15327L11.2304 0Z"
            fill="#065E7C"
          />
        </svg>
        <div className="textLogo">
          <h3>food explorer</h3>
          <p>{admin}</p>
        </div>
      </div>

      <div className="input">
        <Input
          id="search"
          isSearch
          icon={PiMagnifyingGlass}
          type="text"
          placeholder="Busque por pratos ou ingredientes"
          onChange={(e) => setSearchData(e.target.value)}
        />
        <div className="listSearch">
          {dishFiltered?.map((dish) => (
            <ListSearch key={dish.id} name={dish.name} />
          ))}
        </div>
      </div>

      {admin ? '' : <ButtonCart />}

      <Link to="/new">{admin ? <ButtonNewDish /> : ''}</Link>

      <div>
        <button id="signOut" onClick={handleSignOut}>
          <PiSignOut size={32} />
        </button>
      </div>
    </Container>
  )
}
