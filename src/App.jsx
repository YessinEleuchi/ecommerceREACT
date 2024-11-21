import React from 'react'
import { BrowserRouter  as Router, Route, Routes } from 'react-router-dom'
import Listearticle from './components/article/Listearticle'
import Listecategories from './components/categories/Listecategories'
import Addcategorie from './components/categories/Addcategorie'
import Listescategories from './components/scategories/Listescategories'
import Menu from './components/Menu'

const App = () => {
  return (
    <div>
   
      <Router>
        <Menu/>
        <Routes>
          <Route path="/articles" element={<Listearticle/>} /> 

          <Route path="/categories" element={<Listecategories/>} /> 
          <Route path="/categories/add" element={<Addcategorie />} /> 
          <Route path="/scategories" element={<Listescategories/>} /> 
        </Routes>
      </Router>
    </div>
  )
}

export default App
