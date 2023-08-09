import MeaningComponent from "./MeaningComponent";
import React from "react";
import "./TypeComponent.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { type } from "@testing-library/user-event/dist/type";

export default function VerbComponent({ responseObject }) {
  const type = "verb";
  return (
    <div className="typeComponent">
      <h1>{type}</h1>
      <h2>meanings</h2>
      <MeaningComponent responseObject={responseObject} type={type} />
      <div className="synonyms">
        <h2>Synonyms</h2>
        <p className="synonyms-displayed"></p>
      </div>
    </div>
  );
}
