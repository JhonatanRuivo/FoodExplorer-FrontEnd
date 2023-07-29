import styled from 'styled-components'

export const Container = styled.button`
  background-color: ${({ theme }) => theme.COLORS.TOMATO100};
  color: ${({ theme }) => theme.COLORS.LIGHT100};

  width: 100%;
  border: none;
  padding: 12px 32px;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;

  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;

  &:disabled {
    opacity: 50%;
  }
`
