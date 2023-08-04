import Dropdown from "react-bootstrap/Dropdown";
import "./DropdownButton.css";

export default function DropdownButton({ setFont, font, setCssClass }) {
  const fontSelectHandler = (text, css) => {
    setFont(text);
    setCssClass(css);
  };

  const fontOptions = [
    { id: 1, text: "Sans Serif", cssClass: "sans" },
    { id: 2, text: "Serif", cssClass: "serif" },
    { id: 3, text: "Mono", cssClass: "mono" },
  ];

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {font}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {/* for each font option, generate a new dropdown menu item */}
        {fontOptions.map((font) => {
          return (
            <Dropdown.Item
              onClick={() => fontSelectHandler(font.text, font.cssClass)}
              key={font.id}
            >
              {font.text}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
}
