import './NavBar.css'
import CartWidget from './CartWidget'


function NavBar (){
  return (
    <div className="NavBar">
      <h1>A Gabarda</h1>
      <nav>
        <ul>
          <li><a href="/">Caballeros</a></li>
          <li><a href="/products">Damas</a></li>
        </ul>
      </nav>
      <CartWidget/>
    </div>
  )
}

export default NavBar