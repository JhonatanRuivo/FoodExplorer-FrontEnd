import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({theme}) => theme.COLORS.DARK200};
  border: 1px solid ${({theme}) => theme.COLORS.DARK300};
  border-radius: 8px;
  
  width: 210px;
  height: 292px;
  padding: 24px;
  margin-top: 24px;
`
