import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import play from "./icon-play.svg";
import "./WordComponent.scss";

export default function WordComponent({ responseObject }) {
  const word = responseObject[0].word; //not working
  const phonetic = responseObject[0].phonetic;

  const playAudio = () => {
    const audioSource = responseObject[0]?.phonetics.find(
      (phonetic) => phonetic.audio
    )?.audio;

    if (!audioSource) {
      alert("No audio available for this word.");
      return;
    }

    const audio = new Audio(audioSource);
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
