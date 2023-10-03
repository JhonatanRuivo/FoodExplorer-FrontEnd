import styled from 'styled-components'

export const Container = styled.button`
  background-color: ${({ theme, $color }) => $color ? theme.COLORS.TOMATO400 : theme.COLORS.TOMATO100};
  color: ${({ theme }) => theme.COLORS.LIGHT100};

  width: ${({ $fitContent }) => $fitContent ? 'fit-content' : '100%'};
  border: none;
  padding: 12px 32px;

  display: flex;
  align-items: center;
  white-space: nowrap;
  justify-content: center;
  border-radius: 5px; 
  gap: 8px;

  font-family: Poppins;
  font-size: ${({$font}) => $font ? '10px' : '16px'};
  font-style: normal;
  font-weight: 500;

  &:disabled {
    opacity: 50%;
  }
  &:focus-within {
    border: solid 1px ${({ theme }) => theme.COLORS.LIGHT100};
    filter: brightness(0.8);
  }
`
