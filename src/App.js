import Header from "./HeaderComponent";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import searchIcon from "./starter-code/assets/images/icon-search.svg";
import { useState } from "react";
import WordComponent from "./WordComponent";
import NounComponent from "./NounComponent";
import VerbComponent from "./VerbComponent";
import "./App.scss";

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

  // const checkIfNounExists = () => {
  //   return responseObject[0].meanings.some(
  //     (meaning) => meaning.partOfSpeech === "noun"
  //   );
  // };

  const checkIfTypeExists = (type) => {
    return responseObject.some((object) => {
      return object.meanings.some((meaning) => meaning.partOfSpeech === type);
    });
  };

  // const checkIfVerbExists = () => {
  //   return responseObject[0].meanings.some(
  //     (meaning) => meaning.partOfSpeech === "verb"
  //   );
  // };

  // const checkIfAdjExists = () => {
  //   return responseObject[0].meanings.some(
  //     (meaning) => meaning.partOfSpeech === "adjective"
  //   );
  // };

  return (
    <div className={`App ${cssClass} ${displayMode}`}>
      <Header
        font={font}
        setFont={setFont}
        setCssClass={setCssClass}
        setDisplayMode={setDisplayMode}
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
          <Col xs="auto">
            <img alt="" src={searchIcon} onClick={handleSearchClick}></img>
          </Col>
        </Row>
      </Container>
      {responseObject && <WordComponent responseObject={responseObject} />}
      {responseObject && checkIfTypeExists("noun") && (
        <NounComponent responseObject={responseObject} />
      )}

      {responseObject && checkIfTypeExists("verb") && (
        <VerbComponent responseObject={responseObject} />
      )}
    </div>
  );
}

export default App;

// //WHOLE RESPONSE ARRAY
// [
//   // ARRAY ELEMENT 1
//   {
//     word: "soil",
//     phonetic: "/sɔɪl/",
//     phonetics: [
//       {
//         text: "/sɔɪl/",
//         audio:
//           "https://api.dictionaryapi.dev/media/pronunciations/en/soil-us.mp3",
//         sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=1661705",
//         license: {
//           name: "BY-SA 3.0",
//           url: "https://creativecommons.org/licenses/by-sa/3.0",
//         },
//       },
//     ],
//     //MEANINGS IS A KEY WHOSE VALUE IS AN ARRAY THAT HOLDS OBJECTS
//     meanings: [
//       // FIRST ARRAY ELEMENT OF MEANINGS AT INDEX 0
//       {
//         partOfSpeech: "noun",
//         definitions: [
//           {
//             definition:
//               "A mixture of mineral particles and organic material, used to support plant growth.",
//             synonyms: [],
//             antonyms: [],
//           },
//           {
//             definition:
//               "The unconsolidated mineral or organic material on the immediate surface of the earth that serves as a natural medium for the growth of land plants.",
//             synonyms: [],
//             antonyms: [],
//           },
//           {
//             definition:
//               "The unconsolidated mineral or organic matter on the surface of the earth that has been subjected to and shows effects of genetic and environmental factors of: climate (including water and temperature effects), and macro- and microorganisms, conditioned by relief, acting on parent material over a period of time. A product-soil differs from the material from which it is derived in many physical, chemical, biological, and morphological properties and characteristics.",
//             synonyms: [],
//             antonyms: [],
//           },
//           {
//             definition: "Country or territory.",
//             synonyms: [],
//             antonyms: [],
//             example: "Kenyan soil",
//           },
//           {
//             definition: "That which soils or pollutes; a stain.",
//             synonyms: [],
//             antonyms: [],
//           },
//           {
//             definition:
//               "A marshy or miry place to which a hunted boar resorts for refuge; hence, a wet place, stream, or tract of water, sought for by other game, as deer.",
//             synonyms: [],
//             antonyms: [],
//           },
//           {
//             definition: "Dung; compost; manure.",
//             synonyms: [],
//             antonyms: [],
//             example: "night soil",
//           },
//         ],
//         synonyms: ["dirt", "earth"],
//         antonyms: [],
//       },
//     ],
//     license: {
//       name: "CC BY-SA 3.0",
//       url: "https://creativecommons.org/licenses/by-sa/3.0",
//     },
//     sourceUrls: ["https://en.wiktionary.org/wiki/soil"],
//   },

//   // ARRAY ELEMENT 2
//   {
//     word: "soil",
//     phonetic: "/sɔɪl/",
//     phonetics: [
//       {
//         text: "/sɔɪl/",
//         audio:
//           "https://api.dictionaryapi.dev/media/pronunciations/en/soil-us.mp3",
//         sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=1661705",
//         license: {
//           name: "BY-SA 3.0",
//           url: "https://creativecommons.org/licenses/by-sa/3.0",
//         },
//       },
//     ],
//     meanings: [
//       {
//         partOfSpeech: "noun",
//         definitions: [
//           {
//             definition: "Faeces or urine etc. when found on clothes.",
//             synonyms: [],
//             antonyms: [],
//           },
//           {
//             definition: "A bag containing soiled items.",
//             synonyms: [],
//             antonyms: [],
//           },
//         ],
//         synonyms: ["dirt"],
//         antonyms: [],
//       },
//       {
//         partOfSpeech: "verb",
//         definitions: [
//           {
//             definition: "To make dirty.",
//             synonyms: [],
//             antonyms: [],
//           },
//           {
//             definition: "To become dirty or soiled.",
//             synonyms: [],
//             antonyms: [],
//             example: "Light colours soil sooner than dark ones.",
//           },
//           {
//             definition:
//               "To stain or mar, as with infamy or disgrace; to tarnish; to sully.",
//             synonyms: [],
//             antonyms: [],
//           },
//           {
//             definition:
//               "To dirty one's clothing by accidentally defecating while clothed.",
//             synonyms: [],
//             antonyms: [],
//           },
//           {
//             definition: "To make invalid, to ruin.",
//             synonyms: [],
//             antonyms: [],
//           },
//           {
//             definition: "To enrich with soil or muck; to manure.",
//             synonyms: [],
//             antonyms: [],
//           },
//         ],
//         synonyms: ["besmirch", "dirty", "smirch"],
//         antonyms: [],
//       },
//     ],
//     license: {
//       name: "CC BY-SA 3.0",
//       url: "https://creativecommons.org/licenses/by-sa/3.0",
//     },
//     sourceUrls: ["https://en.wiktionary.org/wiki/soil"],
//   },

//   // ARRAY ELEMENT 3
//   {
//     word: "soil",
//     phonetic: "/sɔɪl/",
//     phonetics: [
//       {
//         text: "/sɔɪl/",
//         audio:
//           "https://api.dictionaryapi.dev/media/pronunciations/en/soil-us.mp3",
//         sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=1661705",
//         license: {
//           name: "BY-SA 3.0",
//           url: "https://creativecommons.org/licenses/by-sa/3.0",
//         },
//       },
//     ],
//     meanings: [
//       {
//         partOfSpeech: "noun",
//         definitions: [
//           {
//             definition:
//               "A wet or marshy place in which a boar or other such game seeks refuge when hunted.",
//             synonyms: [],
//             antonyms: [],
//           },
//         ],
//         synonyms: [],
//         antonyms: [],
//       },
//     ],
//     license: {
//       name: "CC BY-SA 3.0",
//       url: "https://creativecommons.org/licenses/by-sa/3.0",
//     },
//     sourceUrls: ["https://en.wiktionary.org/wiki/soil"],
//   },

//   // ARRAY ELEMENT 4
//   {
//     word: "soil",
//     phonetic: "/sɔɪl/",
//     phonetics: [
//       {
//         text: "/sɔɪl/",
//         audio:
//           "https://api.dictionaryapi.dev/media/pronunciations/en/soil-us.mp3",
//         sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=1661705",
//         license: {
//           name: "BY-SA 3.0",
//           url: "https://creativecommons.org/licenses/by-sa/3.0",
//         },
//       },
//     ],
//     meanings: [
//       {
//         partOfSpeech: "verb",
//         definitions: [
//           {
//             definition:
//               "To feed, as cattle or horses, in the barn or an enclosure, with fresh grass or green food cut for them, instead of sending them out to pasture; hence (such food having the effect of purging them), to purge by feeding on green food.",
//             synonyms: [],
//             antonyms: [],
//             example: "to soil a horse",
//           },
//         ],
//         synonyms: [],
//         antonyms: [],
//       },
//     ],
//     license: {
//       name: "CC BY-SA 3.0",
//       url: "https://creativecommons.org/licenses/by-sa/3.0",
//     },
//     sourceUrls: ["https://en.wiktionary.org/wiki/soil"],
//   },
// ];
