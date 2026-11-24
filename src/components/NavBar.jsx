import '../css/NavBar.css'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'



function NavBar (){


  return (
    <div className="NavBar">
      <h1>A Gabarda</h1>
      <nav>
        <ul>
          <Link to="/category/caballeros">Caballeros</Link>
          <li><Link to="/category/damas">Damas</Link></li>
        </ul>
      </nav>
      <CartWidget/>
    </div>
  )
}

export default NavBar