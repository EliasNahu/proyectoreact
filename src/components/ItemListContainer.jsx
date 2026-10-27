import './ItemListContainer.css'

function ItemListContainer({ greeting = "Bienvenido a A Gabarda" }) {
  return (
    <div className="ItemListContainer">
      <h2 className="Titulo">{greeting}</h2>
    </div>
  )
}

export default ItemListContainer