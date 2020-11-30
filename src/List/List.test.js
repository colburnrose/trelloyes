import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import List from "./List";

describe("Card component", () => {
  it("render without crashing", () => {
    const cards = [
      {
        id: 1,
        title: "Jest",
        content: "Test data",
      },
      {
        id: 2,
        title: "React",
        content: "React test case",
      },
    ];
    const div = document.createElement("div");
    ReactDOM.render(<List cards={[]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the UI as expected", () => {
    const cards = [
      {
        id: 3,
        title: "Jest",
        content: "Test data",
      },
      {
        id: 4,
        title: "React",
        content: "React test case",
      },
    ];
    const tree = renderer.create(<List cards={[]} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
