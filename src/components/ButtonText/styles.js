import styled from 'styled-components'

export const Container = styled.button`
  background-color: transparent;
  width: 100%;
  text-align: start;

  color: ${({ theme }) => theme.COLORS.LIGHT100};

  font-family: ${({ theme, $poppins }) =>
    $poppins ? theme.FONT.POPPINS : 'Roboto'};
  font-size: ${({ theme, $fontsize }) =>
    $fontsize ? theme.FONT_SIZE.BUTTONTEXT_24 : theme.FONT_SIZE.BUTTONTEXT_14};
  font-style: normal;
  font-weight: ${({ theme, $fontweight }) =>
    $fontweight
      ? theme.FONT_WEIGHT.BUTTONTEXT_500
      : theme.FONT_WEIGHT.BUTTONTEXT_300};
  border-bottom: ${({ theme, $border }) =>
    $border ? theme.COLORS.DARK1000 + ` 1px solid` : ''};
    padding: 10px;

  &:hover {
    scale: 1.05;
    transition: 300ms;
  }
`
