/* 리액트, 리액트dom 실행 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/font.css'
import './css/index.css'
import './components/MenuBar.css'
import Home from './Home.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Home />
  </StrictMode>,
)
