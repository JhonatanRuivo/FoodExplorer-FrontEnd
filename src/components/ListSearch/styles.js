import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 3px 8px;

  border-color: transparent;
  border-left: 2px solid transparent;

  transition: color 0.5s;
  transition: border-color 0.5s;

  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.COLORS.CAKE200};
  }

  .link {
    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.LIGHT100};

    &:hover {
      color: ${({ theme }) => theme.COLORS.CAKE200};
      opacity: 1;
    }
  }
`
