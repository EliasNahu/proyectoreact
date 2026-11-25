import '../css/NavBar.css'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'



function NavBar (){


  return (
    <div className="NavBar">
      <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
      <h1>A Gabarda</h1>
      </Link>
      <nav>
        <ul>
          <li><Link to="/category/caballeros">Caballeros</Link></li>
          <li><Link to="/category/damas">Damas</Link></li>
        </ul>
      </nav>
      <CartWidget/>
    </div>
  )
}

export default NavBar