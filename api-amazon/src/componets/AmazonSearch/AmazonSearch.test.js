import React from "react";
import { render } from "react-dom";
import AmazonSearch from "./AmazonSearch";
import { act, isDOMComponent } from "react-dom/test-utils";

describe("AmazonSearch", () => {
  let container;
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    container.remove();
    container = null;
  });

  it("existe la clase formSearch", () => {
    act(() => {
      render(<AmazonSearch />, container);
    });

    expect(container.firstChild).toHaveClass("formSearch");
  });

  it("existe el objeto svg", () => {
    act(() => {
      render(<AmazonSearch />, container);
    });

    expect(container.firstChild.querySelector("svg")).toBeTruthy();
  });
});
