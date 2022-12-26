import React, { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import styled from "styled-components";

let IMG = styled.img`
  width: 100%;
  margin: 0 auto;
`;
let H4 = styled.h4`
  padding: 20px;
  font-size: 30px;
  text-align: center;
`;
let P = styled.p`
  padding: 10px;
  font-size: 20px;
  text-align: center;
`;
function Detail(props) {
  let { id } = useParams();
  let item = props.product.find((a) => a.id == id);

  return (
    <Container>
      <Row>
        <Col sm>
          <IMG src={item.img} width="200px" />
          <H4>{item.title}</H4>
          <P>{item.price}</P>
        </Col>
      </Row>
    </Container>
  );
}

export default Detail;
