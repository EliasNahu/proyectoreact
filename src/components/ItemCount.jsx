import {useState} from 'react'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

function ItemCount ({initialCount = 1, stock}) {
    const [count, setCount] = useState(initialCount)

    return (
    <ButtonGroup>
      <Button variant="outline-secondary" onClick={() => setCount(count - 1)} disabled={count <= 1}>-</Button>
      <Button variant="light" disabled className="px-4 fw-bold">{count}</Button>
      <Button variant="outline-secondary" onClick={() => setCount(count + 1)} disabled={count >= stock}>+</Button>
    </ButtonGroup>
    )
    
}
export default ItemCount