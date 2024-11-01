import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App.tsx'
import { CommonCanvas } from './Common.tsx';
import { ShaderComponent as L1 } from './L1/Shader.tsx';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/L1" element={<CommonCanvas><L1 /></CommonCanvas>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
