import Card from 'react-bootstrap/Card'

function Item({ product }) {
  return (
    <Card className="h-100 shadow-sm border-0">
      <Card.Img
        variant="top"
        src={product.img}
        alt={product.name}
        style={{ aspectRatio: '5 / 4', objectFit: 'cover' }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="h5">{product.name}</Card.Title>
        <Card.Text className="text-muted small">{product.category}</Card.Text>
        <strong className="fs-4 mt-auto">${product.price.toFixed(2)}</strong>
      </Card.Body>
    </Card>
  )
}

export default Item