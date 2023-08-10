import MeaningComponent from "./MeaningComponent";
import SynonymComponent from "./SynonymComponent";
import React from "react";
import "./TypeComponent.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function TypeComponent({ responseObject, type }) {
  return (
    <Container className="typeComponent">
      <h1>{type}</h1>
      <h2>meanings</h2>
      <MeaningComponent responseObject={responseObject} type={type} />
      <SynonymComponent responseObject={responseObject} type={type} />
    </Container>

    // <div className="typeComponent">
    //   <h1>{type}</h1>
    //   <h2>meanings</h2>
    //   <MeaningComponent responseObject={responseObject} type={type} />
    //   <div className="synonyms">
    //     <h2>Synonyms</h2>
    //     <p className="synonyms-displayed"></p>
    //   </div>
    // </div>
  );
}
