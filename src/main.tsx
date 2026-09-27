import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import './shared/styles/vendors/fontawesome-free-6.1.2-web/css/all.min.css';
import './shared/styles/base/reset.css';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />    
  </StrictMode>,
)