import React from "react";
import DropdownButton from "./DropdownButton";
import logo from "./starter-code/assets/images/logo.svg"; // import the image
import nightMode from "./starter-code/assets/images/icon-moon.svg"; // import the image

import "./HeaderComponent.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Check from "./CheckComponent";

export default function Header({ setFont, font, setCssClass, setDisplayMode }) {
  return (
    <Container className="header">
      <Row>
        <Col className="header-left">
          <img src={logo} alt="" className="logo"></img>
          <DropdownButton
            className="dropdown"
            font={font}
            setFont={setFont}
            setCssClass={setCssClass}
          />
        </Col>
        <Col xs="auto" className="header-right">
          <Check setDisplayMode={setDisplayMode} />
          <img alt="" src={nightMode}></img>
        </Col>
      </Row>
    </Container>
  );
}
