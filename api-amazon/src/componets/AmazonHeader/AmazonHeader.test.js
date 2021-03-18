import React from "react";
import { render } from "react-dom";

describe("AmazonHeader", () => {
  let container;
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    container.remove();
    container = null;
  });

  it("true", () => {
    expect(true).toBeTruthy();
  });
});
