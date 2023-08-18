import { Container, Form } from './styles'

import { Link } from 'react-router-dom'

import { ButtonText } from '../../components/ButtonText'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Logo } from '../../components/Logo'

export function SignUp() {
  return (
    <Container>
      <Logo width={43} id="logo" />
      <Form>
        <h3>Crie sua conta</h3>
        <div className="input">
          <label htmlFor="name">Seu nome</label>
          <Input placeholder="Exemplo: Maria da Silva" id="name" type="text" />
        </div>

        <div className="input">
          <label htmlFor="email">Email</label>
          <Input placeholder="Exemplo: Maria@email.com" id="email" type="email" />
        </div>

        <div className="input">
          <label htmlFor="password">Senha</label>
          <Input placeholder="No mínimo 6 caracteres" id="password" type="password" />
        </div>

        <Button title="Entrar" />

        <ButtonText title="Já tenho uma conta" pop bold to="/" />
      </Form>
    </Container>
  )
}
