import * as React from 'react'
import ReactDOM from 'react-dom/client'
import {ChakraProvider, ColorModeScript} from '@chakra-ui/react';
import { BrowserRouter as Router} from "react-router-dom";
import App from './App'
import theme from './styles/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
     <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
     <Router>
    <ChakraProvider theme={theme}>
    <App />
    </ChakraProvider>
    </Router>
  </>
)
