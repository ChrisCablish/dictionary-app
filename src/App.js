import Header from "./HeaderComponent";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import searchIcon from "./starter-code/assets/images/icon-search.svg";
import { useState } from "react";
import WordComponent from "./WordComponent";
import TypeComponent from "./TypeComponent";
import "./App.scss";

function App() {
  const [font, setFont] = useState("Sans Serif");
  const [cssClass, setCssClass] = useState("sans");
  const [displayMode, setDisplayMode] = useState("light-mode");
  const [userInput, setUserInput] = useState("");
  const [responseObject, setResponseObject] = useState(null);

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSearchClick = async () => {
    const response = await fetchWord(userInput);
    console.log(response);
    setResponseObject(response);
  };

  const fetchWord = async (userInput) => {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${userInput}`
    );
    const data = await response.json();
    return data;
  };

  const getSource = () => {
    return "This is the source";
  };

  const types = ["noun", "verb", "adjective"];

  const checkIfTypeExists = (type) => {
    return responseObject.some((object) => {
      return object.meanings.some((meaning) => meaning.partOfSpeech === type);
    });
  };

  return (
    <div className={`App ${cssClass} ${displayMode}`}>
      <Header
        font={font}
        setFont={setFont}
        setCssClass={setCssClass}
        setDisplayMode={setDisplayMode}
      />
      <Container className="search-section">
        <Row>
          <Col className="search-holder">
            <input
              type="text"
              className="userInput"
              placeholder="Search..."
              onChange={handleInputChange}
            ></input>
          </Col>
          <Col xs="auto" id="search-column">
            <img
              alt=""
              src={searchIcon}
              onClick={handleSearchClick}
              className="search-icon"
            ></img>
          </Col>
        </Row>
      </Container>
      {responseObject && <WordComponent responseObject={responseObject} />}

      {responseObject && checkIfTypeExists(types[0]) && (
        <TypeComponent responseObject={responseObject} type={types[0]} />
      )}

      {responseObject && checkIfTypeExists(types[1]) && (
        <TypeComponent responseObject={responseObject} type={types[1]} />
      )}

      {responseObject && checkIfTypeExists(types[2]) && (
        <TypeComponent responseObject={responseObject} type={types[2]} />
      )}

      <div className="source-div">
        <h2>Source</h2>
        <span>{getSource()}</span>
      </div>
    </div>
  );
}

export default App;
