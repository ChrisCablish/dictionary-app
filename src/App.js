import Header from "./HeaderComponent";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import searchIcon from "./starter-code/assets/images/icon-search.svg";
import { useState } from "react";
import WordComponent from "./WordComponent";
import TypeComponent from "./TypeComponent";
import "./App.scss";
import linkIcon from "./starter-code/assets/images/icon-new-window.svg";

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

  let URL = null;
  const getSource = (responseObject) => {
    for (let object of responseObject) {
      if (!URL) {
        if (object.sourceUrls.length) {
          URL = object.sourceUrls[0];
        }
      }
    }
    return URL;
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
        displayMode={displayMode}
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

      {responseObject && (
        <Container className="source-div">
          <Row>
            <Col sm>
              <h2 className="source-header">Source</h2>
            </Col>
            <Col sm className="link-and-icon">
              {/* <div className="link-and-icon"> */}
              {/* <span className="source-content"> */}
              <a
                className="source-content"
                href={getSource(responseObject)}
                target="_blank"
                rel="noreferrer"
              >
                {getSource(responseObject)}
              </a>
              {/* </span> */}
              <img src={linkIcon} alt=""></img>
              {/* </div> */}
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
}

export default App;
