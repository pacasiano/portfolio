import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CustomCursor from "./components/general/customCursor.jsx"
import { HoverProvider } from "./context/HoverContext.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HoverProvider>
      <CustomCursor />
      <App />
    </HoverProvider>
  </React.StrictMode>,
)
