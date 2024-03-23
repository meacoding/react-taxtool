import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import './Cards.css';

// Methods
function removeEntry () {
  this.$store.commit('removeEntry', this.index);
}

function numberWithCommasAndDollarSign (x) {
  if (!x) return;
  return '$' + x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// Computed
function total () {
  if (!this.card.totalTax || !this.card.subTotal) return;
  let total = (Number(this.card.totalTax) + Number(this.card.subTotal)).toFixed(2);
  let obj = {
    index: this.index,
    total
  };
  this.$store.commit('updateTotal', obj);
  return total;
}

// function subTotal () {
//   if (!this.card.price || !this.card.quantity) return;
//   let subTotal = (Number(this.card.price * this.card.quantity)).toFixed(2);
//   let obj = {
//     index: this.index,
//     subTotal
//   };
//   this.$store.commit('updateSubTotal', obj);
//   return subTotal;
// }

function totalTax () {
  if (!this.card.price || !this.card.quantity || !this.countyTax) return;
  let totalTax = (this.card.price * this.card.quantity * (0.06 + this.countyTax)).toFixed(2);
  if (this.card.price >= 5000) totalTax = ((this.card.price * this.card.quantity * 0.06) + (5000 * this.card.quantity * this.countyTax)).toFixed(2);
  let obj = {
    index: this.index,
    totalTax
  };
  this.$store.commit('updateTotalTax', obj);
  return totalTax;
}

function countyTax () {
  return Number(this.$store.state.UI.globalVariables.countyTax);
}

// State
// function cardTotal () {
//   let cardTotal = 0;
//   this.$store.state.UI.entries.forEach(entry => {
//       if (!entry.total) return;
//       cardTotal = cardTotal + Number(entry.total);
//   });
//   return cardTotal;
// }

// function cardSubTotal () {
//   let cardSubTotal = 0;
//   this.$store.state.UI.entries.forEach(entry => {
//       if (!entry.subTotal) return;
//       cardSubTotal = cardSubTotal + Number(entry.subTotal);
//   });
//   return cardSubTotal;
// }

// Card
// function get () {
//   return this.entry;
// }

// function set () {
//   let obj = {
//     entry: this.entry,
//     index: this.index
//   };
//   this.$state.commit('setEntry', obj);
// }

// function subTotal () {
//   if (!this.card.price || !this.card.quantity) return;
//   let subTotal = (Number(this.card.price * this.card.quantity)).toFixed(2);
//   let obj = {
//     index: this.index,
//     subTotal
//   };
//   this.$store.commit('updateSubTotal', obj);
//   return subTotal;
// }

function Cards() {

  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);
  
  const onFormEntry = (event) => {
    setPrice(event.target.value);
    setQuantity(event.target.value);
    // const subTotalUpdate = price * quantity;
    // console.log('subTotalUpdate ' + subTotalUpdate);
    // const total = 12 * (w * x) - 12;
    // setAge(a => a + 1);
    setSubTotal(price * quantity);

  };
  
    console.log('price ' + price);
    console.log('quantity ' + quantity);
    console.log('subTotal ' + subTotal);
    console.log('total ' + total);

  return (
    <Card>
      <Card.Body>
        <Row>
          <Col md={6}>
            <Form>
              <Form.Group as={Row} className="mb-3" controlId="formItemQuantity">
                <InputGroup>
                  <InputGroup.Text id="acc-item-qty">Item Quantity</InputGroup.Text>
                  <Form.Control
                    type="number"
                    placeholder="Quantity"
                    // value={state.quantity}
                    onChange={onFormEntry}
                    // aria-label="Item Quantity"
                    // aria-describedby="acc-item-qty"
                  />
                </InputGroup>
                  {/* <Col md={6}>
                      <Form.Label>Item Quantity</Form.Label>
                  </Col>
                  <Col md={6}>
                      <Form.Control type="number" placeholder="Quantity" />
                  </Col> */}
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formItemPrice">
                <InputGroup>
                    <InputGroup.Text id="acc-item-price">Item Price</InputGroup.Text>
                    <Form.Control
                      type="number"
                      placeholder="Price"
                      // value={state.price}
                      onChange={onFormEntry}
                      // aria-label="Item Quantity"
                      // aria-describedby="acc-item-price"
                    />
                  </InputGroup>
                  {/* <Col md={6}>
                      <Form.Label>Item Price</Form.Label>
                  </Col>
                  <Col md={6}>
                      <Form.Control type="number" placeholder="Price" />
                  </Col> */}
              </Form.Group>
            </Form>
          </Col>

          <Col md={6}>
            <div>  
              <div>Subtotal:</div> <div>{subTotal}</div>
            </div>
            <div>
              <div>Total Tax:</div> <div>{numberWithCommasAndDollarSign(totalTax)}</div>
            </div>
            <div>
              <div>Total:</div> <div>{numberWithCommasAndDollarSign(total)}</div>
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