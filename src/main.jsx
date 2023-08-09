import ReactDOM from 'react-dom/client'
import React from 'react'

import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global'
import theme from './styles/theme'

import { DishEdit } from './pages/DishAdmin'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <DishEdit />
    </ThemeProvider>
  </React.StrictMode>
)
