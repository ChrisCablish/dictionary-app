import Dropdown from "react-bootstrap/Dropdown";
import "./DropdownButton.scss";

export default function DropdownButton({
  setFont,
  font,
  setCssClass,
  displayMode,
}) {
  const fontSelectHandler = (text, css) => {
    setFont(text);
    setCssClass(css);
  };

  const fontOptions = [
    { id: 1, text: "Sans Serif", cssClass: "sans" },
    { id: 2, text: "Serif", cssClass: "serif" },
    { id: 3, text: "Mono", cssClass: "mono" },
  ];

  console.log(displayMode);

  return (
    <Dropdown>
      <Dropdown.Toggle
        variant="success"
        id="dropdown-basic"
        className={
          displayMode === "dark-mode" ? "dropdown-dark" : "dropdown-light"
        }
      >
        {font}
      </Dropdown.Toggle>
      <Dropdown.Menu
        className={
          displayMode === "dark-mode"
            ? "dropdown-menu-dark"
            : "dropdown-menu-light"
        }
      >
        {/* for each font option, generate a new dropdown menu item */}
        {fontOptions.map((font) => {
          return (
            <Dropdown.Item
              onClick={() => fontSelectHandler(font.text, font.cssClass)}
              key={font.id}
              className="dropdown-item"
            >
              {font.text}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
}
