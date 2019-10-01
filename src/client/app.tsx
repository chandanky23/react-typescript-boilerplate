import React from 'react'
import { ThemeProvider } from 'styled-components'
import View from './views'
import theme from './theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <View />
    </ThemeProvider>
  )
}

export default App