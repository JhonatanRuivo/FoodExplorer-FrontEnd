import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK700};
  color: ${({ theme }) => theme.COLORS.LIGHT100};

  width: 100%;
  height: 114px;
  padding: 56px 28px 24px;

  display: flex;
  align-items: center;
  gap: 16px;

  font-size: 22px;
  font-weight: 400;

  > button {
    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.LIGHT100};
  }
`
