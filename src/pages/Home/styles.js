import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  position: relative;
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-bottom: 100px;

  animation-name: show;
  animation-duration: 1s;

  @keyframes show {
    0% {
      opacity: 0;
    }
    100% {
    }
  }
`
