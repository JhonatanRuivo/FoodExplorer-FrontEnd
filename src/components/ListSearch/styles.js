import styled from 'styled-components'

export const Container = styled.div`
  padding: 3px 8px;
  width: 100%;
  height: 100%;
  cursor: pointer;
  border-left: 2px solid transparent;
  border-color: transparent;
  transition: color 0.5s;
  transition: border-color 0.5s;

  &:hover {
    border-color: ${({ theme }) => theme.COLORS.CAKE200};
    color: ${({ theme }) => theme.COLORS.CAKE200};
  }
`
