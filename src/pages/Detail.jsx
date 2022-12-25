import React, { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

function Detail(props) {
  let { id } = useParams();
  let [item, setItem] = useState(
    props.product.filter((element) => element.id === { id })
  );
  console.log(props.product.find((element) => element.id === 1));
  return (
    <Container>
      <Row>
        <Col sm>
          <img src={{ item }.img} width="200px" />
          <h4>{item.title}</h4>
          <p>{item.price}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Detail;
