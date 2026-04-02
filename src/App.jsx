import { useState } from 'react'
import { Router, Route, Routes } from "react-router-dom"
import Home  from "./pages/home"
import Sobre from "./pages/about"
import './App.css'

function App() {
  const [nome, setNome] = useState("")
  return(
    <Routes>
      <Route path='/' element = {<Home />} />
      <Route path='/sobre' element = {<Sobre />} />
    </Routes>
  )
}

export default App
