import Login from './component/Login'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Profile from './component/Profiles'
function App() {

  return (
    <>
      <div>
<BrowserRouter>
    <Routes>
      <Route path='/'element={<Login/>} />      
      <Route path='/profile' element={<Profile/>}/>
    </Routes>
</BrowserRouter>
       </div>
    </>
  )
}

export default App
