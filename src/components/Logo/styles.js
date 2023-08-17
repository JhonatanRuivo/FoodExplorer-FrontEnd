import styled from 'styled-components'

export const Container = styled.div`
  background-color: transparent;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  > h1 {
    font-size: 42px;
  }

  @media (max-width: 1023px) {
    justify-content: flex-start;
    h1 {
      font-size: 37px;
    }
  }
`
