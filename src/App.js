import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
const App = () => {
  return (
    <div className='app bg-slate-900 text-slate-100 min-h-screen'>
       <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
