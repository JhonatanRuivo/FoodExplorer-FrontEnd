import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-area: 
 	  "header"
    "banner"
    "section1"
    "section2"
    "section3"
    "footer"
    ;
`

export const Section = styled.div`
  width: 100vw;
  height: 320px;

  margin-top: 62px;
`
