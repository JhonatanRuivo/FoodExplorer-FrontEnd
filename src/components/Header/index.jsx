import { Input } from '../Input'
import { ListSearch } from '../ListSearch'
import { ButtonCart } from '../ButtonCart'
import { ButtonNewDish } from '../ButtonNewDish'
import { Container, Icon } from './styles'
import { Link, useNavigate } from 'react-router-dom'
import { PiList, PiMagnifyingGlass, PiSignOut } from 'react-icons/pi'

import { api } from '../../services/api'
import { useAuth } from '../../hooks/auth'
import { useState, useEffect, useMemo } from 'react'

export function Header({ admin = false }) {
  const navigate = useNavigate()

  const { signOut } = useAuth()

  const [searchData, setSearchData] = useState('')
  const [searchDishes, setSearchDishes] = useState([])

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
    navigate('/')
    signOut()
  }

  useEffect(() => {
    fetchDishes()
  }, [])

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
          value={searchData}
          onChange={(e) => setSearchData(e.target.value)}
        />
        <div className="listSearch">
          {dishFiltered?.map((dish) => (
            <ListSearch key={dish.id} name={dish.name} id={dish.id} setSearchData={setSearchData} />
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
