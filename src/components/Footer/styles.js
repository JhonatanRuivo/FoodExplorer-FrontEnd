import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK600};

  width: 100%;
  height: 77px;

  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;

  position: absolute;
  bottom: 0;
  
  .logo {
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
    color: ${({ theme }) => theme.COLORS.LIGHT200};

    font-family: 'DM Sans', sans-serif;
    font-size: 12px;
    font-weight: 400;
  }
`
