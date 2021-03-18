import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act, isDOMComponent } from "react-dom/test-utils"

import OwlIconButton from './OwlIconButton';

describe('OwlIconButton', () => {
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
            render(<OwlIconButton />, container);
        })
        expect(isDOMComponent(container.firstChild)).toBeTruthy();
    })

    it('se debe renderizar con un icono svg si hay name', () => {
        act(() => {
            render(<OwlIconButton name="heart" />, container);
        })
        expect(container.firstChild.querySelector('svg[name="heart"]')).toBeTruthy();
    })

    it('se debe agregar una clase owl-icon-button', () => {
        act(() => {
            render(<OwlIconButton />, container);
        })
        expect(container.firstChild).toHaveClass("owl-icon-button");
    })

    it('se debe renderizar sin valor si no hay value', () => {
        const onClick = jest.fn();
        let button;
        act(() => {
            render(<OwlIconButton onClick={onClick} />, container);
        })
        button = container.firstChild;

        act(() => {
            button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        });

        expect(onClick).toHaveBeenCalledTimes(1);
    })
});