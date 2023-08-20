import { Container, Form } from './styles'
import { useState } from 'react'

import { ButtonText } from '../../components/ButtonText'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Logo } from '../../components/Logo'

export function SignUp() {
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

    console.log('cadastrado com sucesso!')
  }

  return (
    <Container>
      <Logo width={43} id="logo" />
      <Form >
        <h3>Crie sua conta</h3>
        <div className="input">
          <label htmlFor="Name">Seu nome</label>

          <Input
            id="Name"
            type="text"
            placeholder="Exemplo: Maria da Silva"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="input">
          <label htmlFor="Email"> Email </label>

          <Input
            placeholder="Exemplo: Maria@email.com"
            id="Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input">
          <label htmlFor="Password">Senha</label>

          <Input
            placeholder="No mínimo 6 caracteres"
            id="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Button title="Cadastrar" type="submit" onClick={handleSignUp} />

        <ButtonText title="Já tenho uma conta" pop bold to="/" />
      </Form>
    </Container>
  )
}
