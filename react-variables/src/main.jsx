import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Variables from './variable'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Variables />
  </StrictMode>,
)
