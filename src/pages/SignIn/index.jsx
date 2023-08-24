import { Container, Form } from './styles'
import { useState } from 'react'

import { ButtonText } from '../../components/ButtonText'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { useAuth } from '../../hooks/auth'
import { Logo } from '../../components/Logo'

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn } = useAuth()

  

  function handleSignIn() {
    signIn({ email, password })

  }

  return (
    <Container>
      <Logo width={43} />
      <Form>
        <h3>Faça login</h3>
        <div className="input">
          <label htmlFor="email">Email</label>
          <Input
            placeholder="Exemplo: exemplo@exemplo.com.br"
            id="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input">
          <label htmlFor="password">Senha</label>
          <Input
            placeholder="No mínimo 6 caracteres"
            id="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Button title="Entrar" onClick={handleSignIn} />

        <ButtonText title="Criar uma conta" pop bold to="/register" />
      </Form>
    </Container>
  )
}
