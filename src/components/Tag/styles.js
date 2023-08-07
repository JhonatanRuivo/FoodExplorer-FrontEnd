import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK1000};
  padding: 4px 8px;
  max-width: fit-content;
  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
`
