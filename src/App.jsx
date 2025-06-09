import './index.scss'
import Register from './routes/Register'
import Login from './routes/Login'
import WelcomePage from './routes/WelcomePage'
import PageNotFound from './routes/PageNotFound'
import { Routes, Route, useNavigate } from 'react-router'
import Auth from './Auth'
import { useEffect, useState } from "react";


function App(){
  return <>
    <Routes>
      <Route path='/' element={<WelcomePage></WelcomePage>}></Route>
      <Route path='/register' element={<Register></Register>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
      <Route path='/dashboard' element={<Auth></Auth>}></Route>
    </Routes>
  </>
}
export default App