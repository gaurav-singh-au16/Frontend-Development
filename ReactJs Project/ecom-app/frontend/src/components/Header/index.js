  
import { Link } from 'react-router-dom';

const Header = ({ to, name }) => {
  return (
    <Link className="me-3 py-2 text-dark text-decoration-none" to={to}>{name}</Link>
  )
}

export default Header