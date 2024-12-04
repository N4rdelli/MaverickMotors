import './App.css'
import { Outlet } from 'react-router-dom'
import Nav from './Components/Nav/Nav'

function App() {
  return (
    <div className='appContainer'>
      <Nav />
      <Outlet />
    </div>
  )
}

export default App
