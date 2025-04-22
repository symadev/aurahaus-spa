import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes'

// Force DaisyUI into light mode
document.documentElement.setAttribute('data-theme', 'light');


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router } />
  </StrictMode>,
)
