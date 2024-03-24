import { useState } from 'react'
import './App.css'
import IndexPage from './Pages/IndexPage/IndexPage'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'

function App () {
  return (
    <>
      <div className='app'>
        {/* <IndexPage /> */}
        <Register />
        {/* <Login /> */}
      </div>
    </>
  )
}

export default App
