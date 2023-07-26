import styled from 'styled-components'

export const Container = styled.button`
  background-color: transparent;
  width: fit-content;
  margin: auto;

  color: ${({ theme }) => theme.COLORS.LIGHT100};

  font-family: Poppins;
  font-size: ${({ theme, $fontsize }) => $fontsize ? theme.FONTS.BUTTONTEXT_BIG : theme.FONTS.BUTTONTEXT_SMALL};
  font-style: normal;
  font-weight: ${({ theme, $fontsize }) => $fontsize ? theme.FONTWEIGHT.BUTTONTEXT_BIG : theme.FONTWEIGHT.BUTTONTEXT_SMALL};

  &:hover {
    scale: 1.05;
    transition: 300ms;
  }
`
