import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './App.css'
import "aos/dist/aos.css"
import "@fontsource/federant"
import CustomCursor from './components/ui/CustomCursor'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CustomCursor />
    <App />
  </StrictMode>
)