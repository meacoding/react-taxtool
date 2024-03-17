import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Cards.css';

function Cards() {
  return (
    <Card /* style={{ width: '18rem' }} */>
      <Card.Body>
        <Row>
          <Col md={6}>
            <Form>
              <Form.Group as={Row} className="mb-3" controlId="formItemQuantity">
                  <Col md={6}>
                      <Form.Label>Item Quantity</Form.Label>
                  </Col>
                  <Col md={6}>
                      <Form.Control type="number" placeholder="Quantity" />
                  </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formItemPrice">
                  <Col md={6}>
                      <Form.Label>Item Price</Form.Label>
                  </Col>
                  <Col md={6}>
                      <Form.Control type="number" placeholder="Price" />
                  </Col>
              </Form.Group>
            </Form>
          </Col>
          <Col md={6}>
            <div>  
              <div>Subtotal:</div> <div>numberWithCommasAndDollarSign(subTotal)</div>
            </div>
            <div>
              <div>Total Tax:</div> <div>numberWithCommasAndDollarSign(totalTax)</div>
            </div>
            <div>
              <div>Total:</div> <div>numberWithCommasAndDollarSign(total)</div>
            </div>
          </Col>
        </Row>
        {/* <Card.Title>Card Title</Card.Title> */}
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}

export default Cards;