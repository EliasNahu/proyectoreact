import {useState} from 'react'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

function ItemCount ({initialCount = 1, stock}) {
    const [count, setCount] = useState(initialCount)

    return (
    <ButtonGroup>
      <div className="px-3 fw-bold">
      <Button variant="outline-danger" className="px-3" onClick={() => setCount(count - 1)} disabled={count <= 1}>-</Button>
      <Button variant="light" disabled className="px-4 fw-bold">{count}</Button>
      <Button variant="outline-success" className="px-3" onClick={() => setCount(count + 1)} disabled={count >= stock}>+</Button>
      </div>
      <div className="px-3 fw-bold">
      <Button variant="primary" className="ms-3" disabled={stock === 0}>Agregar al carrito</Button>
      </div>
    <div>
      <Button variant="primary" className="ms-3" href="/">Volver al inicio</Button>
    </div>
    </ButtonGroup>
  )
}
export default ItemCount