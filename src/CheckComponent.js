import Form from "react-bootstrap/Form";
import "./CheckComponent.css";

export default function Check({ setDisplayMode }) {
  const displayModeOptions = [
    { display: "light", cssClass: "light-mode" },
    { display: "dark", cssClass: "dark-mode" },
  ];

  const handleChange = (event) => {
    let isChecked = event.target.checked;
    if (isChecked) {
      setDisplayMode("dark-mode");
    } else {
      setDisplayMode("light-mode");
    }
  };

  return (
    <Form>
      <Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        onChange={handleChange}
      />
    </Form>
  );
}
