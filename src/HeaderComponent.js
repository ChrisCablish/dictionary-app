import React from "react";
import DropdownButton from "./DropdownButton";
import logo from "./logoTwo.svg"; // import the image
import nightMode from "./icon-moon.svg"; // import the image

import "./HeaderComponent.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Check from "./CheckComponent";

export default function Header({
  setFont,
  font,
  setCssClass,
  setDisplayMode,
  displayMode,
}) {
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
            displayMode={displayMode}
          />
        </Col>
        <Col xs="auto" className="header-right">
          <Check className="check" setDisplayMode={setDisplayMode} />
          <img alt="" src={nightMode} className="moon"></img>
        </Col>
      </Row>
    </Container>
  );
}
