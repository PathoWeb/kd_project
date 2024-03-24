import { useState } from 'react'
import './App.css'
import IndexPage from './Pages/IndexPage/IndexPage'
import Login from './Pages/Login/Login'

function App () {
  return (
    <>
      <div className='app'>
        {/* <IndexPage /> */}
        <Login />
      </div>
    </>
  )
}

export default App
