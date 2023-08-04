import Form from "react-bootstrap/Form";
import "./CheckComponent.css";

export default function Check() {
  return (
    <Form>
      <Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
      />
    </Form>
  );
}
