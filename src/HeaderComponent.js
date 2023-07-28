import DropdownButton from "./DropdownButton";
import logo from "./starter-code/assets/images/logo.svg"; // import the image
import nightMode from "./starter-code/assets/images/icon-moon.svg"; // import the image

import "./HeaderComponent.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Check from "./CheckComponent";

export default function Header() {
  return (
    <Container className="header">
      <Row>
        <Col className="header-left">
          <img src={logo} className="logo"></img>
          <DropdownButton className="dropdown" />
        </Col>
        <Col xs="auto" className="header-right">
          <Check />
          <img src={nightMode}></img>
        </Col>
      </Row>
    </Container>
  );
}
