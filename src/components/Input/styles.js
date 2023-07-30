import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 48px;

  label {
    background-color: ${({ theme }) => theme.COLORS.DARK900};
    color: ${({ theme }) => theme.COLORS.LIGHT400};

    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 14px;

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
  }
`
