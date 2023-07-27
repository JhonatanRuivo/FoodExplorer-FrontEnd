import { Container } from './styles'

export function ButtonText({
  title,
  pop = false,
  large = false,
  bold = false,
  border = false,
  ...rest
}) {
  return (
    <Container
      type="button"
      $fontweight={bold}
      $fontsize={large}
      $poppins={pop}
      $border={border}
      {...rest}
    >
      {title}
    </Container>
  )
}
