import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../../hooks/auth'

import { Container, Form } from './styles'
import { ButtonText } from '../../components/ButtonText'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Logo } from '../../components/Logo'

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn } = useAuth()
  const navigate = useNavigate()

  function handleSignIn() {
    if (!email || !password) {
      return alert('Preencha todos os campos!')
    }
    signIn({ email, password })
  }
  function navToRegister() {
    navigate('/register')
  }

  return (
    <Container>
      <Logo width={43} />
      <Form>
        <h3>Faça login</h3>
        <div className="input">
          <label htmlFor="email">Email</label>
          <Input
            id="email"
            type="email"
            autoComplete="on"
            placeholder="Exemplo: exemplo@exemplo.com.br"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input">
          <label htmlFor="password">Senha</label>
          <Input
            id="password"
            type="password"
            placeholder="No mínimo 6 caracteres"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Button title="Entrar" onClick={handleSignIn} />

        <ButtonText title="Criar uma conta" bold fontPoppins onClick={navToRegister} />
      </Form>
    </Container>
  )
}
