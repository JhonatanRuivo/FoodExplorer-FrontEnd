import { Container } from './styled.js'
import { api } from '../../services/api.js'
import { SlArrowLeft } from 'react-icons/sl'

import { Tag } from '../../components/Tag/index.jsx'
import { Header } from '../../components/Header/index.jsx'
import { Footer } from '../../components/Footer/index.jsx'
import { Amount } from '../../components/Amount/index.jsx'
import { Button } from '../../components/Button/index.jsx'
import { PiReceipt } from 'react-icons/pi'
import { ButtonText } from '../../components/ButtonText/index.jsx'
import { useNavigate, useParams } from 'react-router-dom'

export function Dish() {
  const params = useParams()
  const navigate = useNavigate()
  const [dish, setDish] = useState(null)

  const imageURl = dish && `${api.defaults.baseURL}/files/${dish.image}`

  const fetchDishes = async () => {
    try {
      const response = await api.get(`/dishes/${params.id}`)

      setDish(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchDishes()
  }, [])

  function handleBack() {
    navigate(-1)
  }

  return (
    <Container>
      <Header />
      <div className="body">
        <label htmlFor="back">
          <SlArrowLeft name="back" size={32} />
          <ButtonText title="voltar" bold large onClick={handleBack} />
        </label>

        <div className="main">
          <img className="imgDish" src={imageURl} alt="Foto do prato" />
          <div className="description">
            <h1>Salada Rovanello</h1>
            <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>
            <div className="tags">
              <Tag title="alface" />
            </div>
            <div className="footerButtons">
              <Amount amount={'01'} />

              <Button id="submitButtonDesktop" title="Incluir R$25,00" small />

              <Button
                id="submitButtonMobile"
                icon={PiReceipt}
                title="inserir R$25,00"
                small
                mobile
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Container>
  )
}
