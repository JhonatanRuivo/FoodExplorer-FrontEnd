import { Container } from './styles'
import { useNavigate } from 'react-router-dom'

export function ListSearch({ name, id, setSearchData }) {
  const navigate = useNavigate()

  function handleDishDetails(id) {
    setSearchData('')
    navigate(`/dish/${id}`)
  }

  return (
    <Container>
      <a
        onClick={() => {
          handleDishDetails(id)
        }}
        className="link"
      >
        {name}
      </a>
    </Container>
  )
}
