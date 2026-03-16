import { useState } from 'react'

import './App.css'
import Footer from './components/Footer'

import MyNavbar from './components/Navbar'
import AppRouter from './router/AppRouter'

function App() {
  return (
    <>
      <MyNavbar />

      <AppRouter />

      <Footer />
    </>
  )
}

export default App
