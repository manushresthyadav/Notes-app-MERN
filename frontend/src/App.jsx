import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import LandingPage from './screens/LandingPage/LandingPage'

function App() {

  return (
    <div className="App">
      <Header/>
      <main>
        <LandingPage/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
