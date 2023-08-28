import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter as Router } from "react-router-dom";
import {ChakraProvider} from "@chakra-ui/react"



ReactDOM.createRoot(document.getElementById('root')).render(
 <ChakraProvider  >
  <React.StrictMode>
    <Router>
      

        <App />

   </Router>
    </React.StrictMode>
  </ChakraProvider>
)
 