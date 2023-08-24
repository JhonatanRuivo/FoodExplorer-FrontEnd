import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 48px;
  background-color: ${({ theme, $bg }) => ($bg ? theme.COLORS.DARK800 : theme.COLORS.DARK900)};
  color: ${({ theme }) => theme.COLORS.LIGHT400};

  display: flex;
  justify-content: center;
  align-items: center;

  padding-left: ${({ $search }) => ($search ? '20%' : '14px')};

  border-radius: 8px;
  gap: 8px;

  &:focus-within {
    border: 1px solid ${({ theme }) => theme.COLORS.LIGHT100};
    background-color: ${({ theme }) => theme.COLORS.DARK700};
  }

  input {
    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.LIGHT100};

    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 12px 14px;

    border-radius: 8px;

  }
`
