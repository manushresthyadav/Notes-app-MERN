import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import LandingPage from './screens/LandingPage/LandingPage'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import MyNotes from './screens/MyNotes/MyNotes'
function App() {

  return (
  <div>
    <Header/>
      <main>
        <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/mynotes' element={<MyNotes/>} />
        </Routes>
      </main>
      <Footer/>
  </div>
  )
}

export default App
