import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
// import './Calc.css';
// import Formulas from './Formulas';

// Methods
function numberWithCommasAndDollarSign (x) {
    if (!x) return '$0.00';
    return '$' + x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

function changeFocus (bringInFocus, removeFocus) {
    console.log('hi');
    if (bringInFocus) this.focused[bringInFocus] = true;
    this.focused[removeFocus] = false;
    console.log('bye');
}

// Computed
function taxAccrual () {
    return (Number(this.invoiceTotal) - Number(this.cardTotal) - Number(this.freight)).toFixed(2);
}

function materialAdjustment () {
    return (Number(this.cardTotal - (this.cardSubTotal * (1.06 + Number(this.countyTax))))).toFixed(2);
}

function totalBeforeTax () {
    return ((Number(this.invoiceTotal) - (this.cardSubTotal * (0.06 + Number(this.countyTax))))).toFixed(2);
}

function totalTaxPerPO () {
    return ((this.cardSubTotal) * (0.06 + Number(this.countyTax))).toFixed(2);
}

// State
function cardTotal () {
    let cardTotal = 0;
    this.$store.state.UI.entries.forEach(entry => {
        if (!entry.total) return;
        cardTotal = cardTotal + Number(entry.total);
    });
    return cardTotal;
}

function cardSubTotal () {
    let cardSubTotal = 0;
    this.$store.state.UI.entries.forEach(entry => {
        if (!entry.subTotal) return;
        cardSubTotal = cardSubTotal + Number(entry.subTotal);
    });
    return cardSubTotal;
}

function Calc() {
  return (
    <div>
        <Form>

            <Form.Group as={Row} className="mb-3" controlId="formVendorName">
                <Col md={6}>
                    <Form.Label>Vendor</Form.Label>
                </Col>
                <Col md={6}>
                    <Form.Control type="text" placeholder="Vendor" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formInvoiceNumber">
                <Col md={6}>
                    <Form.Label>Invoice No.</Form.Label>
                </Col>
                <Col md={6}>
                    <Form.Control type="text" placeholder="Invoice No." />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formCountyTax">
                <Col md={6}>
                    <Form.Label>FL County Tax %</Form.Label>
                </Col>
                <Col md={6}>
                    <Form.Control type="number" placeholder="County Tax" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formInvoiceSubtotal">
                <Col md={6}>
                    <Form.Label>Invoice Subtotal</Form.Label>
                </Col>
                <Col md={6}>
                    <Form.Control type="number" placeholder="Invoice Subtotal" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formFreight">
                <Col md={6}>
                    <Form.Label>Freight</Form.Label>
                </Col>
                <Col md={6}>
                    <Form.Control type="number" placeholder="Freight" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formInvoiceTotal">
                <Col md={6}>
                    <Form.Label>Invoice Total</Form.Label>
                </Col>
                <Col md={6}>
                    <Form.Control type="number" placeholder="Invoice Total" />
                </Col>
            </Form.Group>

        </Form>

        <div className="bottomElement">
                <div>
                  <div>Tax Accrual:</div> <div /* :class="{red:taxAccrual<0, green:taxAccrual>0} "*/>numberWithCommasAndDollarSign(taxAccrual)</div>
                </div>
                <div>
                  <div>Mat'l ADJ:</div> <div /* :class="{red:materialAdjustment<0, green:materialAdjustment>0} "*/>numberWithCommasAndDollarSign(materialAdjustment)</div>
                </div>
                <div>
                  <div>Total Before Tax:</div> <div>numberWithCommasAndDollarSign(totalBeforeTax)</div> 
                </div>
                <div>
                  <div>Total Tax Per PO:</div> <div>numberWithCommasAndDollarSign(totalTaxPerPO)</div>
                </div>
            </div>

    </div>
    // <div className="container">
    //   <header>
    //         <h1 className="display-4">Tax Accrual</h1>
    //         <hr className="my-4" />
    //   </header>
    //   <Container>
    //   <Row>
    //     <Col sm={4}>Numbers side</Col>
    //     <Col sm={8}>Cards side</Col>
    //   </Row>
    // </Container>
    // </div>
  );
}

export default Calc;
