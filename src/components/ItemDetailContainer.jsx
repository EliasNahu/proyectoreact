import { useState, useEffect } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import Alert from 'react-bootstrap/Alert'
import { getProductById } from '../services/getProductById.js'
import ItemDetail from './ItemDetail.jsx'

function ItemDetailContainer({ productId = 1 }) {
  const [producto, setProducto] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getProductById(productId)
      .then(p => setProducto(p))
      .catch(e => setError(e.message))
      .finally(() => setLoading(false))
  }, [productId])

  if (loading) {
    return (
      <div className="text-center py-5">
        <Spinner animation="border" role="status" />
        <p className="mt-2">Cargando...</p>
      </div>
    )
  }

  if (error) {
    return <Alert variant="danger" className="m-4">{error}</Alert>
  }

  return <ItemDetail producto={producto} />
}

export default ItemDetailContainer