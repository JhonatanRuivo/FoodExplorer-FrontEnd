import styled from 'styled-components'

export const Container = styled.footer`
  background-color: ${({ theme }) => theme.COLORS.DARK600};

  width: 100%;
  height: 77px;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 8px;

  bottom: 0;

  > .logo {
    display: flex;
    text-align: center;
    gap: 6px;

    > span {
      color: ${({ theme }) => theme.COLORS.LIGHT700};

      font-family: 'Roboto', sans-serif;
      font-size: 16px;
      font-weight: 700;
    }
  }

  > p {
    font-family: 'DM Sans', sans-serif;
    font-size: 12px;
    font-weight: 400;
  }
`
