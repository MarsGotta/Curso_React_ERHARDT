import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act, isDOMComponent } from "react-dom/test-utils"

import OwlButton from './OwlButton';

describe('OwlButton', () => {
    let container;
    beforeEach(() => {
        container = document.createElement("div");
        document.body.appendChild(container);
    });

    afterEach(() => {
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    })

    it('se debe renderizar el componente', () => {
        act(() => {
            render(<OwlButton />, container);
        })
        expect(isDOMComponent(container.firstChild)).toBeTruthy();
    })

    it('se debe renderizar sin valor si no hay value', () => {
        act(() => {
            render(<OwlButton />, container);
        })
        expect(container.firstChild.textContent).toContain("");
    })

    it('se debe renderizar con un valor si hay value', () => {
        act(() => {
            render(<OwlButton value="Soy un valor" />, container);
        })
        expect(container.firstChild.textContent).toContain("Soy un valor");
    })

    it('se debe renderizar con un valor si hay value', () => {
        act(() => {
            render(<OwlButton className="mi-clase" />, container);
        })
        expect(container.firstChild).toHaveClass("mi-clase");
    })
});