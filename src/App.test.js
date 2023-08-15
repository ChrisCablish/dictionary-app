import { render, screen } from "@testing-library/react";

import App from "./App";

test("renders search input", () => {
  render(<App />);
  const InputElement = screen.getByRole("textbox");
  expect(InputElement).toBeInTheDocument();
});
