import '../css/ItemListContainer.css'
import { useState , useEffect } from 'react'
import { getProducts} from '../mocks/AsyncMocks.js'
import ItemList from './ItemList.jsx'

function ItemListContainer({ greeting = "Bienvenido a A Gabarda" }) {

  const [Items, setItems] = useState([])

  useEffect(() => {
    getProducts()
      .then(res => setItems(res))
  }, [])

  return (
    <div className="ItemListContainer">
      <h2 className="Titulo">{greeting}</h2>
      <ItemList items={Items} />
    </div>
  )
}

export default ItemListContainer