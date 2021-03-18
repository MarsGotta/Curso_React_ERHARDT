import React from "react";
import { render } from "react-dom";
import AmazonIcon from "./AmazonIcon";
import { act, isDOMComponent } from "react-dom/test-utils";

describe("AmazonIcon", () => {
  let container;
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    container.remove();
    container = null;
  });

  it("se debe renderizar el componente", () => {
    act(() => {
      render(<AmazonIcon name="bar" />, container);
    });

    expect(container.firstChild).toBeTruthy();
  });
});
