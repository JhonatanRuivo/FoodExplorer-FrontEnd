import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK700};
  width: 100%;
  padding: 24px 123px;

  display: flex;
  align-items: center;
  gap: 32px;

  @media (max-width: 768px) {
    height: 114px;
    padding: 56px 28px 24px;

    justify-content: space-between;
    align-items: center;

    > .input {
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
  width: 100%;
  gap: 8px;

  > h1 {
    font-size: 24px;
    font-weight: 700;
  }

  @media (max-width: 768px) {
    > h1 {
      font-size: 22px;
    }
  }
`


