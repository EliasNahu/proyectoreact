import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Badge from 'react-bootstrap/Badge'
import ItemCount from './ItemCount.jsx'

function ItemDetail({ producto }) {
  return (
    <Container className="my-4">
      <Row className="g-4 align-items-start">
        <Col xs={12} md={6}>
          <img
            src={producto.img}
            alt={producto.name}
            className="img-fluid rounded shadow-sm w-100"
            style={{ aspectRatio: '4/3', objectFit: 'cover' , maxHeight: '400px' }}
          />
        </Col>

        <Col xs={12} md={6}>
          <Badge bg="secondary" className="mb-2">{producto.category}</Badge>
          <h2>{producto.name}</h2>
          <p className="fs-3 fw-bold">${producto.price.toFixed(2)}</p>
          <p>{producto.description}</p>
          <p className="text-muted">Stock disponible: {producto.stock}</p>
          <ItemCount stock={producto.stock} initial={1} />
        </Col>
      </Row>
    </Container>
  )
}

export default ItemDetail