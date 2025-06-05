import './index.scss'
import './animations.css'
import Register from './routes/Register'
import Login from './routes/Login'
import WelcomePage from './routes/WelcomePage'
import { Routes, Route } from 'react-router'

function App(){
  return <>
    <Routes>
      <Route path='/' element={<WelcomePage></WelcomePage>}></Route>
      <Route path='/register' element={<Register></Register>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
    </Routes>
  </>
}
export default App