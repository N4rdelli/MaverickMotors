import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header/Header'

function App() {
  return (
    <div className='appContainer'>
      <Header />
      <Outlet />
    </div>
  )
}

export default App
