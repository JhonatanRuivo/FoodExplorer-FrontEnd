import styled from 'styled-components'

export const Container = styled.button`
  background-color: transparent;

  background-color: ${({ theme }) => theme.COLORS.TOMATO100};
  color: ${({ theme }) => theme.COLORS.LIGHT100};
  width: 100%;
  padding: 16px 45px;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  gap: 8px;

  white-space: nowrap;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 1023px) {
    background-color: transparent;

    position: relative;
    padding: 0;

    > p {
      display: none;
    }

    > .count {
      background-color: ${({ theme }) => theme.COLORS.TOMATO100};
      color: ${({ theme }) => theme.COLORS.LIGHT100};
      width: 20px;
      height: 20px;

      display: flex;
      text-align: center;
      justify-content: center;
      align-items: center;
      border-radius: 50%;

      position: absolute;
      left: 50%;
      bottom: 50%;
    }
  }
`
