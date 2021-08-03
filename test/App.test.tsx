import * as React from "react";
import { render, screen } from "@testing-library/react";
import App from "../src/App";

test("Application contains correct text", () => {
  render(<App />);
  const text = screen.getByText("Hello world!");
  expect(text).toBeInTheDocument();
});
