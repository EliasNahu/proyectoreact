import '../css/ItemListContainer.css'
import { useState, useEffect } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import { getProducts } from '../mocks/AsyncMocks.js'
import ItemList from './ItemList.jsx'
import { useParams } from 'react-router-dom'

function ItemListContainer({ greeting = "Bienvenido a A Gabarda" }) {

  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const {categoryId} = useParams()

  useEffect(() => {
    setLoading(true)
    getProducts()
      .then(res => setItems(categoryId ? res.filter(product => product.category === categoryId) : res))
      .finally(() => setLoading(false))
  }, [categoryId])

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