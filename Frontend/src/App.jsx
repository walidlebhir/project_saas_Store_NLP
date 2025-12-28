import { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { Route , Routes  } from 'react-router-dom'
import HomPage from './Pages/HomPage'
import PageInitiale from './Pages/PageInitiale'
import LoginPage from './Pages/LoginPage'
import RegisterPage from './Pages/RegisterPage'


function App() {
  
  return (
    <div   data-theme="light">

      <Routes>
        <Route path="/" element = {<PageInitiale />} />
        <Route path="/page/Hom" element={<HomPage />} /> 
        <Route path="/login" element ={<LoginPage />} /> 
        <Route path="/register" element={<RegisterPage />} /> 
        

      </Routes>

      <Toaster /> 
    </div>
  )
}

export default App
