import React from "react";
import { render } from "react-dom";
import AmazonLogo from "./AmazonLogo";
import { act, isDOMComponent } from "react-dom/test-utils";

describe("AmazonLogo", () => {
  let container;
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    container.remove();
    container = null;
  });

  it("test click en el boton", () => {
    const onClickEvt = jest.fn();
    act(() => {
      render(<AmazonLogo onClick={onClickEvt} />, container);
    });

    let button = container.firstChild;

    act(() => {
      button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(onClickEvt).toHaveBeenCalled();
  });
});
