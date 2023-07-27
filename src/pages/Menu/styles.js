import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

`
export const Main = styled.div`
  @media (max-width: 426px) {
    margin: 28px;
  }
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  
`

export const Items = styled.div`
  list-style: none;
  font-size: 18px;
  
  `