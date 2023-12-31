import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 14px;

  #minus,
  #more {
    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.LIGHT100};
  }

  > strong {
    font-family: Roboto;
    font-size: 22px;
    font-weight: 700;
  }

  @media (max-width: 1023px) {
    > strong {
      font-size: 20px;
    }
  }
`
