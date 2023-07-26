import styled from 'styled-components'

export const Container = styled.div`
  width: 316px;
  height: 100vh;
  margin: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 73px;
`

export const Form = styled.div`
  color: ${({theme}) => theme.COLORS.LIGHT400};
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 32px;

`