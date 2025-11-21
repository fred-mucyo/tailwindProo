import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './Navbar.jsx'
import Homepage from './Homepage.jsx'
import Herosection from './Herosection.jsx'
import Body from './Body.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Herosection/>
    <Homepage/>
    <Body/>
  
  </StrictMode>,
)
