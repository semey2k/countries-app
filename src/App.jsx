import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import Country from './page/Country'

function App() {

  return (
   <Routes>
    <Route path='/countries-app/' element={<Home/>}/>
    <Route path='/countries-app/:country' element={<Country/>}/>
   </Routes>
  )
}

export default App
