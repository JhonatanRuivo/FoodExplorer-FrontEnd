import { Logo } from '../../components/Logo'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Container, Form } from './styles'

import { useAuth } from '../../hooks/auth'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function SignIn() {
  const { signIn } = useAuth()

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


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
