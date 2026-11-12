import {productos} from '../mocks/AsyncMocks.js'

export function getProductById(productId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = productos.find((prod) => prod.id === productId)
      if (product) {
        resolve(product)
      } else {
        reject(new Error(`Producto con id ${productId} no encontrado`))
      }
    }, 200)
  })
}