import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Signin from './Signup/Signin.jsx'
import Home from './Home.jsx'
import Login from './Signup/Login.jsx'
import Cartprod from './CartProduct/Cartprod.jsx'
import ShowmoreBab from './Show_More_Coll/ShowmoreBab.jsx'
import { useState } from 'react'
function App() {
  const [cart ,Setcart] = useState([])
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/home' element={<Home  cart={cart} Setcart={Setcart}/>}></Route> 
      <Route path='/signin' element={<Signin />}></Route>
      <Route path='/' element={<Login />}></Route>
      <Route path='/cart' element={<Cartprod  cart={cart} Setcart={Setcart}/>}></Route>
      <Route path='/show-more' element={<ShowmoreBab />}></Route>
    </Routes>
  </BrowserRouter> 
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App
