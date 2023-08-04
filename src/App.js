import "./App.css";
import Header from "./HeaderComponent";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import searchIcon from "./starter-code/assets/images/icon-search.svg";
import { useState } from "react";

function App() {
  const [font, setFont] = useState("Sans Serif");
  const [cssClass, setCssClass] = useState("sans");

  return (
    <div className={`App ${cssClass}`}>
      <Header font={font} setFont={setFont} setCssClass={setCssClass} />
      <Container className="search-section">
        <Row>
          <Col className="search-holder">
            <input
              type="text"
              className="userInput"
              placeholder="Search..."
            ></input>
          </Col>
          <Col xs="auto">
            <img alt="" src={searchIcon}></img>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
