import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { BandListProvider } from './context/bandListContext.jsx.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <BandListProvider>
     <App />
    </BandListProvider>
  </Router>

)
