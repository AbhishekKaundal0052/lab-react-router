import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Nav from './Components/Nav'
import About from './Pages/About'
import Home from './Pages/Home'
import Contacts from './Pages/Contacts'

function App() {

  return (
    <>
    <BrowserRouter>
    <Nav/>
    <Routes>
    <Route path='/Home' element={<Home/>}></Route>
    <Route path='/Contacts' element={<Contacts/>}></Route>
    <Route path='/About' element={<About/>}></Route>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
