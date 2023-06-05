import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import BandList from './components/bandList'
import BandSubmition from './components/BandSubmition'
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={ <Home /> }/>
        <Route path='/bands' element={ <BandList /> }/>
        <Route path='/bandsubmit' element={ <BandSubmition /> }/>
      </Routes>
    </>
  )
}

export default App
