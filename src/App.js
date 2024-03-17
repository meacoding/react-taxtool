import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import Calc from './Calc';
import Cards from './Cards';

function App() {
  return (
    <div className="container">
      <header>
            <h1 className="display-3"><strong>Tax Accrual</strong></h1>
            <hr className="my-4" />
      </header>
      <Container>
      <Row>
        <Col sm={4}>
          <h2 className="display-6 mb-4">&lt;Calc /&gt;</h2>
          <Calc />
        </Col>
        <Col sm={8}>
        <h2 className="display-6 mb-4">&lt;Card /&gt;</h2>
          <Cards />
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;
