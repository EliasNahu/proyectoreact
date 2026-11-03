import Item from './Item.jsx';

function ItemList({ items }) {
  return (
    <div className="ItemList">
        {items.map(product =>(<Item key={product.id} product={product} />))}
    </div> 
    )
}

export default ItemList