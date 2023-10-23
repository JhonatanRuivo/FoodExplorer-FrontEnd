import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  min-height: 100vh;
`
export const Main = styled.div`
  margin: 28px;
  
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;

  .listSearch {
    width: 100%;
    position: absolute;
    top: 100%;
    background-color: ${({ theme }) => theme.COLORS.DARK200};
    z-index: 1;
    flex: 1;
    font-family: 'Poppins';
    font-size: 14px;
    font-weight: 400;
    border-radius: 8px;
  }
`

export const Items = styled.div`
  list-style: none;
  font-size: 18px;
`
