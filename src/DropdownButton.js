import Dropdown from "react-bootstrap/Dropdown";
import "./DropdownButton.css";
import { useState } from "react";

export default function DropdownButton() {
  const [userChoice, setUserChoice] = useState("Sans Serif ");

  const handleSelect = (e) => {
    setUserChoice(e);
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {userChoice}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleSelect("Sans Serif")}>
          Sans Serif
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleSelect("Serif")}>
          Serif
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleSelect("Mono")}>Mono</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
