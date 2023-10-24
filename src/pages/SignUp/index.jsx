import { Logo } from '../../components/Logo'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Container, Form } from './styles'

import { api } from '../../services/api'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function SignUp() {
  const navigate = useNavigate()
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert('Preencha todos os campos!')
    }

    const passwordChecked = password.length

    if (passwordChecked < 6) {
      return alert('A senha deve conter no mínimo 6 caracteres!')
    }

    api
      .post('/users', { name, email, password })
      .then(() => {
        alert('Usuário cadastrado com sucesso!')
        navToSigIn()
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert('Não foi possível cadastrar!')
        }
      })
  }

  function navToSigIn() {
    navigate('/')
  }

  return (
    <Container>
      <Logo width={43} id="logo" />
      <Form>
        <h3>Crie sua conta</h3>

        <div className="input">
          <label htmlFor="name">Seu nome</label>
          <Input
            id="name"
            type="text"
            required
            placeholder="Exemplo: Maria da Silva"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="input">
          <label htmlFor="email"> Email </label>
          <Input
            id="email"
            type="email"
            required
            placeholder="Exemplo: Maria@email.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input">
          <label htmlFor="password">Senha</label>
          <Input
            id="password"
            type="password"
            required
            placeholder="No mínimo 6 caracteres"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Button title="Cadastrar" onClick={handleSignUp} />

        <ButtonText title="Já tenho uma conta" bold fontPoppins onClick={navToSigIn} />
      </Form>
    </Container>
  )
}
