import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK700};
  width: 100%;
  height: 114px;
  padding: 56px 28px 24px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled.div`
  display: flex;
  gap: 8px;

  > h1 {
    font-size: 22px;
    font-weight: 700;
  }
`
export const ButtonCart = styled.div`
  position: relative;
  height: 100%;

  > button {
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
