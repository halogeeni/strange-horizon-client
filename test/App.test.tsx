import * as React from "react";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import App from "../src/App";

test("Renders correctly", () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("Contains correct email link", () => {
  render(<App />);
  expect(screen.getByText("Mail us")).toHaveAttribute("href", "mailto:strangehorizonrecs@gmail.com");
});

test("SVG logo is present", () => {
  const { container } = render(<App />);
  expect(container.querySelector("svg")).toBeDefined();
});
