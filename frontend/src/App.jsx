import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import LandingPage from './screens/LandingPage/LandingPage'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import MyNotes from './screens/MyNotes/MyNotes'
import LoginScreen from './screens/LoginScreen/LoginScreen'
import RegisterScreen from './screens/RegisterScreen/RegisterScreen'
import CreateNote from './screens/CreateNote/CreateNote'
import SingleNote from './screens/CreateNote/SingleNote'
import ProfileScreen from './screens/ProfileScreen/ProfileScreen'
function App() {
const [search,setSearch]=useState('')
// console.log(search)
  return (
  <div>
    <Header setSearch={setSearch}/>
      <main>
        <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/login' element={<LoginScreen/>}/>
        <Route path='/profile' element={<ProfileScreen/>} />
        <Route path='/register' element={<RegisterScreen/>}/>
        <Route path='/mynotes' element={<MyNotes search={search} />} />
        <Route path='/createNote' element={<CreateNote/>}/>
        <Route path='/note/:id' element={<SingleNote/>} exact />
        </Routes>
      </main>
      <Footer/>
  </div>
  )
}

export default App
