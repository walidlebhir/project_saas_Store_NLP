import { useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { Route , Routes  } from 'react-router-dom'
import HomPage from './Pages/HomPage'
import PageInitiale from './Pages/PageInitiale'
import LoginPage from './Pages/LoginPage'
import RegisterPage from './Pages/RegisterPage'
import { CiRoute } from 'react-icons/ci'
import Layout from './Components/ComponentsAdmin/LayoutAdmin'
import DashbordAdmin from './Pages/DashbordAdminstore/DashbordAdmin'
import { AuthStore  } from './StateStore/AuthStore'
import { useNavigate  } from 'react-router-dom'

function App() {
  const Navigate = useNavigate() ; 
    // creation d'une element de loading 
    const {is_auth  , loading ,user ,chekAuth } = AuthStore() ; 

    useEffect(()=>{
      chekAuth() ; 
    } , [])

    if(loading && !is_auth){
      return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
          <div className="flex space-x-2 text-9xl text-blue-900">
            <span className="animate-bounce">.</span>
            <span className="animate-bounce delay-150">.</span>
            <span className="animate-bounce delay-300">.</span>
          </div>
        </div>
      )
    }

  return (
    <div   data-theme="light">

      <Routes>
        <Route path="/" element = {<PageInitiale />} />
        <Route path="/page/Hom" element={<HomPage />} /> 
        <Route path="/login" element ={<LoginPage />} /> 
        <Route path="/register" element={<RegisterPage />} /> 


        {/**
         * --> partie dashbord Admin store 
         */}
        
        <Route element={is_auth ? <Layout /> : <LoginPage />}>
          <Route path='/dashbord/Admin/store' element={<DashbordAdmin /> }  />
        </Route>


      </Routes>

      

      <Toaster /> 
    </div>
  )
}

export default App
