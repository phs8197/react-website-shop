/* eslint-disable */
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar, Col } from "react-bootstrap";
import data from "./component/data.js";
import { Routes, Route, Link, useParams } from "react-router-dom";
import Main from "./pages/Main";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Detail from "./pages/Detail";
import Collection from "./pages/Collection";
import { useState } from "react";

function App() {
  let [product] = useState(data);

  return (
    <div className="App">
      <Navbar bg="light" variant="light" className="Navbar">
        <Container>
          <Navbar.Brand href="/" className="logo">
            Hay
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/Shop">Shop</Nav.Link>
            <Nav.Link href="/Collection">Collection</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Main product={product} />}>
          {" "}
        </Route>
        <Route path="/About" element={<About />}>
          <Route path="brand" element={<div>브랜드 설명</div>} />
          <Route path="desinger" element={<div>디자이너 소개</div>} />
        </Route>
        <Route
          path="/detail/:id"
          element={<Detail product={product} />}
        ></Route>
        <Route path="/Shop" element={<Shop />}></Route>
        <Route path="/Collection" element={<Collection />}></Route>
      </Routes>
    </div>
  );
}

export default App;
