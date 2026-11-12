import { useState, useEffect } from 'react'
import { getProducts } from '../mocks/AsyncMocks.js'

export const useProducts = () => {
const [items, setItems] = useState([])
const [loading, setLoading] = useState(true)
const [error, setError] = useState(null)

useEffect(() => {
  getProducts()
    .then(res => setItems(res))
    .catch(err => setError(err))
    .finally(() => setLoading(false)) 
  } , [])

    return { items, loading, error } 

}