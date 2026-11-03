import '../css/Item.css'

function Item ({ product }) {
  return (
    <article className="Item">
      <img src={product.pictureUrl} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <strong>${product.price}</strong>
    </article>
  )
}

export default Item