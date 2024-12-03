import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/yards"}>Yards</Link>
    </nav>
  )
}

export default Header