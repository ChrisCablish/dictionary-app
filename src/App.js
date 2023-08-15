import Header from "./HeaderComponent";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import searchIcon from "./icon-search.svg";
import { useState, useEffect } from "react";
import WordComponent from "./WordComponent";
import TypeComponent from "./TypeComponent";
import "./App.scss";
import linkIcon from "./icon-new-window.svg";
import "./AllComponents.scss";
import ErrorComponent from "./ErrorComponent";

function App() {
  const [font, setFont] = useState("Sans Serif");
  const [cssClass, setCssClass] = useState("sans");
  const [displayMode, setDisplayMode] = useState("light-mode");
  const [userInput, setUserInput] = useState("keyboard");
  const [responseObject, setResponseObject] = useState(null);
  const [errorState, setErrorState] = useState(false);
  useEffect(() => {
    handleSearchClick();
  }, []);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearchClick();
    }
  };

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSearchClick = async () => {
    try {
      const response = await fetchWord(userInput);
      setResponseObject(response);
      setErrorState(false);
    } catch (error) {
      console.error(error.message);
      setErrorState(true);
      return;
    }
  };

  const fetchWord = async (userInput) => {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${userInput}`
    );
    if (!response.ok) {
      throw new Error("Not a valid word");
    }
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
    <div
      className={
        (displayMode === "dark-mode" ? "global-dark" : "") + " all-components"
      }
    >
      <div className={`App ${cssClass} ${displayMode}`}>
        <Header
          font={font}
          setFont={setFont}
          setCssClass={setCssClass}
          setDisplayMode={setDisplayMode}
          displayMode={displayMode}
        />
        <Container
          className={
            (displayMode === "dark-mode" ? "dark-search" : "") +
            " search-section"
          }
        >
          <Row>
            <Col
              className={
                errorState === true ? "red-outline" : "" + " search-holder"
              }
            >
              <input
                value={userInput}
                className={
                  (displayMode === "dark-mode" ? "white-text" : "") +
                  " userInput"
                }
                type="text"
                placeholder="Search..."
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
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

        {errorState && <ErrorComponent />}

        {responseObject && !errorState && (
          <WordComponent responseObject={responseObject} />
        )}

        {responseObject && checkIfTypeExists(types[0]) && !errorState && (
          <TypeComponent
            responseObject={responseObject}
            type={types[0]}
            displayMode={displayMode}
          />
        )}

        {responseObject && checkIfTypeExists(types[1]) && !errorState && (
          <TypeComponent
            responseObject={responseObject}
            type={types[1]}
            displayMode={displayMode}
          />
        )}

        {responseObject && checkIfTypeExists(types[2]) && !errorState && (
          <TypeComponent
            responseObject={responseObject}
            type={types[2]}
            displayMode={displayMode}
          />
        )}

        {responseObject && !errorState && (
          <Container className="source-div">
            <Row className="source-row">
              <Col sm className="header-column">
                <h2 className="source-header">Source</h2>
              </Col>
              <Col sm className="link-and-icon">
                <a
                  className={
                    displayMode === "dark-mode"
                      ? "source-content-dark-mode"
                      : "source-content-light-mode"
                  }
                  href={getSource(responseObject)}
                  target="_blank"
                  rel="noreferrer"
                >
                  {getSource(responseObject)}
                </a>

                <img src={linkIcon} alt=""></img>
              </Col>
            </Row>
          </Container>
        )}
      </div>
    </div>
  );
}

export default App;
