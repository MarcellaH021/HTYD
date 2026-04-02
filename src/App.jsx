import { useState } from 'react'
import { Route, Routes } from "react-router-dom"
import Home  from "./pages/home"
import FuriaNoite from "./pages/FuriaNoite"
import MonstrousNigthmare from "./pages/MonstrousNigthmare"
import NadderMortal from './pages/NadderMortal'
import Skrill from './pages/Skrill'
import Stormcutter from './pages/Stormcutter'

import './App.css'

function App() {
  const [nome, setNome] = useState("")
  return(
    <Routes>
      <Route path='/' element = {<Home />} />
      <Route path='/Furia-da-Noite' element = {<FuriaNoite />} />
      <Route path='/Pesadelo-Monstruoso' element = {<MonstrousNigthmare />} />
      <Route path='/Nadder-Mortal' element = {<NadderMortal />} />
      <Route path='/Estridente' element = {<Skrill />} />
      <Route path='/Pula-Nuvens' element = {<Stormcutter />} />
    </Routes>
  )
}

export default App
