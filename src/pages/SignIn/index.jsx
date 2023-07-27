import { Container, Form } from './styles'

import { ButtonText } from '../../components/ButtonText'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Logo } from '../../components/Logo'

export function SignIn() {
  return (
    <Container>
      <Logo width={43} />
      <Form>
        <div className="input">
          <label htmlFor="email">Email</label>
          <Input
            placeholder="Exemplo: exemplo@exemplo.com.br"
            id="email"
            type="email"
          />
        </div>

        <div className="input">
          <label htmlFor="password">Senha</label>
          <Input
            placeholder="No mínimo 6 caracteres"
            id="password"
            type="password"
          />
        </div>

        <Button title="Entrar" />
        <ButtonText title="Criar uma conta" pop bold/>
      </Form>
    </Container>
  )
}
