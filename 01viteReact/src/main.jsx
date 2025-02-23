import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Nav from './nav.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Nav />
  </StrictMode>,
)
