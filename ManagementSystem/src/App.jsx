import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header/Header'

function App() {
  return (
    <div>
      <Header />
      <Outlet />
      <div>Footer</div>
    </div>
  )
}

export default App
