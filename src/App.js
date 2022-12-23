/* eslint-disable */
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar, Row, Col } from "react-bootstrap";
import data from "./data.js";
import { useState } from "react";

function App() {
  let [product] = useState(data);
  return (
    <div className="App">
      <Navbar bg="light" variant="light" className="Navbar">
        <Container>
          <Navbar.Brand href="#home" className="logo">
            Hay
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#Shop">Shop</Nav.Link>
            <Nav.Link href="#Shop">Collection</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="main-bg"></div>
      <Container>
        <Row>
          {product.map(function (a, i) {
            return <Product product={a} key={i}></Product>;
          })}
        </Row>
      </Container>
    </div>
  );
}
function Product(props) {
  return (
    <>
      <Col sm>
        <img src={props.product.img} width="200px" />
        <h4>{props.product.title}</h4>
        <p>{props.product.price}</p>
      </Col>
    </>
  );
}

export default App;
