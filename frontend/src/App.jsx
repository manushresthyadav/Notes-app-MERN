import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <div className="App">
      <Header/>
      <main style={{minHeight:'93vh'}}></main>
      <Footer/>
    </div>
  )
}

export default App
