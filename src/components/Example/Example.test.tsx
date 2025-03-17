import React from "react";
import { render, screen } from "@testing-library/react";
import { Example } from "./Example.component";

test("renders Button component", () => {
  render(<Example label="Click me" onClick={() => {}} />);
  const buttonElement = screen.getByText(/Click me/i);
  expect(buttonElement).toBeDefined();
});
