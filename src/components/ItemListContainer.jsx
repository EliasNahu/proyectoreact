import '../css/ItemListContainer.css'
import { useState, useEffect } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import { getProducts } from '../mocks/AsyncMocks.js'
import ItemList from './ItemList.jsx'

function ItemListContainer({ greeting = "Bienvenido a A Gabarda" }) {

  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getProducts()
      .then(res => setItems(res))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="ItemListContainer">
      <h2 className="Titulo">{greeting}</h2>
      {loading ? (
        <div className="text-center py-5">
          <Spinner animation="border" role="status" />
          <p className="mt-2">Cargando productos...</p>
        </div>
      ) : (
        <ItemList items={items} />
      )}
    </div>
  )
}

export default ItemListContainer