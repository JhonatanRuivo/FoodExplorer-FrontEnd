import { Container } from './styles'

export function ButtonText({
  title,
  icon: Icon,
  pop = false,
  large = false,
  bold = false,
  border = false,
  textStart = false,
  ...rest
  
}) {
  return (
    <Container
      type="button"
      $fontweight={bold}
      $fontsize={large}
      $poppins={pop}
      $border={border}
      $textStart={textStart}
      {...rest}
    >
      {Icon}
      {title}
    </Container>
  )
}
