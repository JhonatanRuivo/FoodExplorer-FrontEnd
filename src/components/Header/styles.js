import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK700};
  width: 100%;
  height:104px;
  padding: 25px 123px;

  display: flex;
  align-items: center;
  gap: 32px;  

  >.input {
    width: 100%;
  }

  #signOut {
    width: 32px;
    height: 32px;

    background: transparent;
    color: ${({theme}) => theme.COLORS.LIGHT100};
  }

  @media (max-width: 768px) {
    height: 114px;
    padding: 56px 28px 24px;

    justify-content: space-between;
    align-items: center;

    > .input {
      display: none;
    }
    #signOut {
      display: none;
    }
  }
`

export const Icon = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.LIGHT100};
  }
`

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  width: 197px;
  gap: 8px;

  > h1 {
    font-size: 24px;
    font-weight: 700;

    white-space: nowrap;
  }

  @media (max-width: 768px) {
    width: 100%;
    > h1 {
      font-size: 22px;
    }
  }
`
