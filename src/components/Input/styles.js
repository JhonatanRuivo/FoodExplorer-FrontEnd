import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK900};
  color: ${({ theme }) => theme.COLORS.LIGHT500};

  width: 100%;
  display: flex;
  align-items: center;

  margin-top: 8px;
  border-radius: 8px;

  > input {
    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.LIGHT100};

    width: 100%;
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 12px 14px;

  }
`
