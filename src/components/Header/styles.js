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
  width:100%;
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

export const ButtonCart = styled.button`
  @media (min-width: 769px) {
    display: none;
  }

  background-color: transparent;
  color: ${({ theme }) => theme.COLORS.LIGHT100};

  position: relative;
  height: 100%;

  > .count {
    background-color: ${({ theme }) => theme.COLORS.TOMATO100};
    color: ${({ theme }) => theme.COLORS.LIGHT100};
    display: flex;
    text-align: center;
    width: 20px;
    height: 20px;
    justify-content: center;
    align-items: center;
    border-radius: 50%;

    position: absolute;
    right: -4px;
    top: -4px;
  }
`
