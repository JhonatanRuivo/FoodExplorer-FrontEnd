import { Container } from './styles'

export function ButtonText({
  title,
  icon: Icon,
  fontPoppins = false,
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
      $poppins={fontPoppins}
      $border={border}
      $textStart={textStart}
      {...rest}
    >
      {Icon}
      {title}
    </Container>
  )
}
