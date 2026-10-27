import './NavBar.css'
import CartWidget from './CartWidget'


function NavBar() {
  return (
    <div>
      <h1>A Gabarda</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/products">Products</a></li>
        </ul>
      </nav>
      <CartWidget/>
    </div>
  )
}

export default NavBar
export { default as CartWidget } from './CartWidget'
