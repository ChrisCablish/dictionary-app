import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function MeaningComponent({ responseObject, type }) {
  return (
    <ul>
      {/* {responseObject.map((object, index) => {
        if (object.meanings[0].partOfSpeech === type) {
          return object.meanings[0].definitions.map((definition, defIndex) => (
            <li key={index + "_" + defIndex}>{definition.definition}</li>
          ));
        }
        return null; // Return null if the condition is not met
      })} */}
      {responseObject.map((object, index) => {
        return object.meanings.map((meaning, meanInd) => {
          if (meaning.partOfSpeech === type) {
            return meaning.definitions.map((definition, defInd) => (
              <li key={index + "_" + meanInd + "_" + defInd}>
                {definition.definition}
              </li>
            ));
          }
          return null;
        });
      })}
    </ul>
  );
}
