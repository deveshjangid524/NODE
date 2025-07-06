import React from 'react'
import {BrowserRouter as Router, Routes, Route}from 'react-router-dom'
import {Home, Auth, Orders,Tables, Menu} from './pages'
import Header from './components/shared/Header'
const App = () => {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path='/'element={<Home/>}/>
          <Route path='/auth' element= {<Auth/>}/>
          <Route path='/orders' element={<Orders/>}/>
          <Route path = '/tables' element={<Tables/>}/>
          <Route path='/menu' element={<Menu/>}/>  
          <Route path='*' element={<div>Not found</div>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
