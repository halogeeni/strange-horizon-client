import * as React from "react";
import renderer from "react-test-renderer";
import { Logo } from "../../src/components/Logo";

test("Renders correctly", () => {
  const tree = renderer.create(<Logo />).toJSON();
  expect(tree).toMatchSnapshot();
});
