import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled(Link)`
  display: block;
  background-color: transparent;
  width: 100%;

  color: ${({ theme }) => theme.COLORS.LIGHT100};

  font-weight: ${({ theme, $fontweight }) =>
    $fontweight
      ? theme.FONT_WEIGHT.BUTTONTEXT_500
      : theme.FONT_WEIGHT.BUTTONTEXT_300};
  font-size: ${({ theme, $fontsize }) =>
    $fontsize ? theme.FONT_SIZE.BUTTONTEXT_24 : theme.FONT_SIZE.BUTTONTEXT_14};
  border-bottom: ${({ theme, $border }) =>
    $border ? theme.COLORS.DARK1000 + ` 1px solid` : ''};
  font-family: ${({ theme, $pins }) => ($pins ? theme.FONT.POPPINS : 'Roboto')};
  padding: 10px;
  text-align: ${({ $textStart }) => ($textStart ? 'start' : 'center')};
`
