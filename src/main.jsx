import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './Navbar.jsx'
import Homepage from './Homepage.jsx'
import Herosection from './Herosection.jsx'
import Body from './Body.jsx'
import Footer from './Footer.jsx'
import Events from './Events.jsx'
import Transformation from './Transformation.jsx'
import Imisanzu from './Imisanzu.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Herosection/>
    <Homepage/>
   <Body/>
   <Imisanzu/>
  <Transformation/>
  <Events/>
  <Footer/>
  </StrictMode>,
)
