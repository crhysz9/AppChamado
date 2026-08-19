import { useState } from 'react'
import Dashboard from './components/Dashboard/Dashboard'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <div className="d-flex flex-column min-vh-100">
      <Navbar/>
      <main className="flex-grow-1">
        <Dashboard/>
      </main>
      
      <Footer/>
    </div>
    </>
  )
}

export default App
