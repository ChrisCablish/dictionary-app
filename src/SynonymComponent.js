import React from "react";

export default function SynonymComponent({ responseObject, type }) {
  // Function to extract the synonyms based on the type
  const getSynonyms = () => {
    let synonyms = [];

    // Iterate through the responseObject
    for (let item of responseObject) {
      for (let meaning of item.meanings) {
        if (meaning.partOfSpeech === type) {
          synonyms.push(...meaning.synonyms);
        }
      }
      // Break if we have collected more than 3 synonyms
      if (synonyms.length >= 3) break;
    }
    // Return only the first 3 synonyms
    return synonyms.slice(0, 3);
  };

  return (
    <div>
      <h1>Synonyms</h1>
      <ul className="synonyms">
        {getSynonyms().map((synonym, index) => (
          <li key={index}>{synonym}</li>
        ))}
      </ul>
    </div>
  );
}
