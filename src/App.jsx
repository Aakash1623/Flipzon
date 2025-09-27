import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from './Components/Signup'
import Login from './Components/Login'
import Products from './Components/Products'
import Dashboard from './Product_f/Dashboard'
import Productdetails from './Product_f/Productdetails'
import Cart from './Components/Cart'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<Signup/>}></Route>
      <Route path='/login'element={<Login/>}></Route>
      <Route path='/products' element={<Products/>}></Route>
      <Route path='/Dashboard/:did' element={<Productdetails/>}></Route>
      <Route path='/Dashboard' element={<Dashboard/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App