import styled from 'styled-components'

export const Container = styled.button`
  background-color: transparent;
  width: fit-content;
  margin: auto;

  > button {
    color: ${({ theme }) => theme.COLORS.LIGHT100};
    background-color: transparent;

    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;

    &:hover {
      scale: 1.05;
      transition: 300ms;
    }
  }
`
