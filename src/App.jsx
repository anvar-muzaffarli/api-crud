
import './App.css'
import React from "react"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom' 
import Home from './pages/Home'
import AddItem from './pages/AddItem'
import EditItem from './pages/EditItem'


function App() {
  //App.jsx de marsrut qurulur

  return (
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<AddItem />} />
        {/* urllerde deyishen : ile verilir */}
        <Route path='/edit/:id' element={<EditItem />}  />

        
      </Routes>

   </BrowserRouter>
  )
}

export default App
