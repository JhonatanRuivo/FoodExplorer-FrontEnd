import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.DARK400};
    color: ${({ theme }) => theme.COLORS.LIGHT100};
    

    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    
    outline: none;
    -webkit-font-smoothing: antialiased;

  }

  a {
    text-decoration: none;
  }

  input, button {
    border: none;
    outline: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;  
  }

  button:hover, a:hover {
    filter: brightness(0.8);
  }

  
`
