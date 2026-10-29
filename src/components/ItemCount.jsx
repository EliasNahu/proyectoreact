import {useState} from 'react'

function ItemCount (){
    const [count, setCount] = useState(1)

    return (
        <div className="item-count">
            <button className="item-count-button" onClick={() => setCount(count - 1)}>-</button>
            <span className="item-count-number">{count}</span>
            <button className="item-count-button" onClick={() => setCount(count + 1)}>+</button>
        </div>
    )
    
}
export default ItemCount