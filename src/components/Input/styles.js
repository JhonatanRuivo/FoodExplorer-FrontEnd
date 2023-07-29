import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK900};
  color: ${({ theme }) => theme.COLORS.LIGHT400};

  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  gap: 14px;

  border-radius: 8px;

  > input {
    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.LIGHT100};

    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;

    padding: 12px 14px;
    border-radius: 8px;

    &:focus {
      @media (min-width: 768px) {
        border: 1px solid ${({ theme }) => theme.COLORS.LIGHT100};
        background-color: ${({ theme }) => theme.COLORS.DARK700};
      }
    }
  }
`
