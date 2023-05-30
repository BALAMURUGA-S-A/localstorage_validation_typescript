import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Login from './Login'
import Signin from './Signin'
import Tableshow from './Tableshow'

function App() {
  return (
    <>
     <BrowserRouter>
    <Routes>
      <Route path='/' element={<Signin/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/tables' element={<Tableshow/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
