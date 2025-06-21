import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SettingsContextProvider from './context/SettingsContext.jsx'

createRoot(document.getElementById('root')).render(
  <SettingsContextProvider>
      <App />
  </SettingsContextProvider>
  


)
