import './index.scss'
import Register from './routes/Register'
import WelcomePage from './routes/WelcomePage'
import PageNotFound from './routes/PageNotFound'
import { Routes, Route } from 'react-router'
import Auth from './Auth'


function App(){
  return <>
    <Routes>
      <Route path='/' element={<WelcomePage></WelcomePage>}></Route>
      <Route path='/login' element={<Register></Register>}></Route>
      <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
      <Route path='/dashboard' element={<Auth></Auth>}></Route>
    </Routes>
  </>
}
export default App