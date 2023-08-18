import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK700};
  width: 100%;
  height: 104px;
  padding: 25px 123px;

  display: flex;
  align-items: center;
  gap: 32px;

  .input {
    width: 100%;
  }

  .logo {
    width: 200px;
    display: flex;
    align-items: top;
    gap: 10px;

    .textLogo {
      display: flex;
      flex-direction: column;
      align-items: end;
      white-space: nowrap;

      > h3 {
        font-family: Roboto;
        font-size: 24px;
        font-weight: 700;
      }
      > p {
        color: ${({ theme }) => theme.COLORS.CAKE200};

        font-family: Roboto;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
      }
    }
  }

  #signOut {
    width: 32px;
    height: 32px;

    background: transparent;
    color: ${({ theme }) => theme.COLORS.LIGHT100};
  }

  @media (max-width: 1023px) {
    height: 100%;
    padding: 56px 28px 24px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    > .logo {
      width: 100%;
      .textLogo {
        flex-direction: row;
        gap: 8px;
        align-items: center;
      }
    }

    > .input {
      display: none;
    }
    #signOut {
      display: none;
    }
    > label {
      display: none;
    }
  }
`

export const Icon = styled(Link)`
  display: none;

  @media (max-width: 1023px) {
    display: flex;
    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.LIGHT100};
  }
`
