import MeaningComponent from "./MeaningComponent";
import SynonymComponent from "./SynonymComponent";
import React from "react";
import "./TypeComponent.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function TypeComponent({ responseObject, type, displayMode }) {
  const getExample = () => {
    for (let object of responseObject) {
      for (let meaning of object.meanings) {
        for (let definition of meaning.definitions) {
          if (definition.hasOwnProperty("example")) {
            return <span className="example">"{definition.example}"</span>;
          }
        }
      }
    }
  };
  return (
    <Container className="typeComponent">
      <div
        className={
          (displayMode === "dark-mode" ? "hc-dark" : "hc-light") +
          " header-container"
        }
      >
        <h1 id="type-header">{type}</h1>
      </div>
      <h2 id="meaning">Meaning</h2>
      <MeaningComponent responseObject={responseObject} type={type} />
      <SynonymComponent responseObject={responseObject} type={type} />
      {type === "verb" && getExample()}
    </Container>
  );
}
