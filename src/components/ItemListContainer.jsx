import '../css/ItemListContainer.css'
import { useState , useEffect } from 'react'
import ItemCount from './ItemCount.jsx'
import { getProducts} from '../mocks/AsyncMocks.js'

function ItemListContainer({ greeting = "Bienvenido a A Gabarda" }) {

  const [data, setData] = useState([])

  useEffect(() => {
    getProducts()
      .then(res => setData(res))
  }, [])

  return (
    <div className="ItemListContainer">
      <h2 className="Titulo">{greeting}</h2>
      {/* <ItemCount /> */}
      {data.map(product => (
        <div key={product.id} className="Item">
          <h3>{product.title}</h3>  
        </div>
      ))}
    </div>
  )
}

export default ItemListContainer