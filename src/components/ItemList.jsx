import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Item from './Item.jsx'

function ItemList({ items }) {
  return (
    <Container>
      <Row className="g-4">
        {items.map(product => (
          <Col key={product.id} xs={12} sm={6} lg={4} xl={3}>
            <Item product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default ItemList