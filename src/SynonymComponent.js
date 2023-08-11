import React, { useMemo } from "react";
import "./SynonymComponent.scss";

export default function SynonymComponent({ responseObject, type }) {
  // Extract synonyms based on the type using useMemo for optimization
  const synonyms = useMemo(() => {
    let synonymsSet = new Set(); // Using Set to ensure unique synonyms
    for (let item of responseObject) {
      for (let meaning of item.meanings) {
        if (meaning.partOfSpeech === type) {
          for (let synonym of meaning.synonyms) {
            synonymsSet.add(synonym);
          }
        }
      }
      if (synonymsSet.size >= 3) break; // Adjusted for Set's size property
    }
    return Array.from(synonymsSet).slice(0, 3); // Convert Set back to Array
  }, [responseObject, type]);

  return (
    <div className="synonym-div">
      {synonyms.length > 0 && (
        <>
          <h1 id="synonym-header">Synonyms</h1>
          <ul className="synonyms">
            {synonyms.map((synonym, index) => (
              // Using combination of synonym and index as key
              <li className="syn-list-item" key={synonym + "-" + index}>
                {synonym}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
