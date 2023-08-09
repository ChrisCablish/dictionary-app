import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import play from "./starter-code/assets/images/icon-play.svg";
import "./WordComponent.scss";

export default function WordComponent({ responseObject }) {
  const word = responseObject[0].word; //not working
  const phonetic = responseObject[0].phonetic;
  const audio = new Audio(responseObject[0].phonetics[0].audio);

  const playAudio = () => {
    audio.play();
  };

  return (
    <Container>
      <Row>
        <Col className="word-and-pron">
          <span className="word">{word}</span>
          <span className="phonetic">{phonetic}</span>
        </Col>
        <Col xs="auto" className="audio-column">
          <button onClick={playAudio}>
            <img alt="Play Audio" src={play}></img>
          </button>
        </Col>
      </Row>
    </Container>
  );
}
