import React from "react";
import { Container, Col, Row } from "react-bootstrap";
function Main(props) {
  return (
    <>
      <div className="main-bg"></div>
      <Container>
        <Row>
          {props.product.map(function (a) {
            return <Product product={a}></Product>;
          })}
        </Row>
      </Container>
    </>
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
export default Main;
