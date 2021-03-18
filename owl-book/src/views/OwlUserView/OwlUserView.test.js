import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act, isDOMComponent } from "react-dom/test-utils";
import { MockedProvider } from '@apollo/client/testing';
import { USER_DATA } from "./query";

import OwlUserView from './OwlUserView';

describe('OwlUserView', () => {
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

    it('se debe renderizar el componente', async () => {
        const fakeUser = {
            avatarUrl: "#",
            email: "Soy un email",
            company: "Soy una compañia",
            bio: "Soy una bio",
            login: "MarsGotta"
        };

        const mocks = [
            {
                request: {
                    query: USER_DATA,
                },
                result: {
                    data: {
                        viewer: { ...fakeUser },
                    },
                },
            },
        ];

        await act(async () => {
            render(
                <MockedProvider mocks={mocks}>
                    <OwlUserView />
                </MockedProvider>,
                container
            );
        })

        await act(async () => {
            new Promise(resolve => setTimeout(resolve, 0));
        })

        expect(container.querySelector("h1").textContent).toBe(fakeUser.login);
        expect(container.querySelector("p#email").textContent).toBe(fakeUser.email);
        expect(container.querySelector("p#company").textContent).toBe(fakeUser.company);
        expect(container.querySelector("p#bio").textContent).toBe(fakeUser.bio);
        expect(container.querySelector("img[src]").src).toContain(fakeUser.avatarUrl);
    })

    /*it('se debe renderizar con un icono svg si hay name', () => {
        act(() => {
            render(<OwlUserView name="heart" />, container);
        })
        expect(container.firstChild.querySelector('svg[name="heart"]')).toBeTruthy();
    })

    it('se debe agregar una clase owl-icon-button', () => {
        act(() => {
            render(<OwlUserView />, container);
        })
        expect(container.firstChild).toHaveClass("owl-icon-button");
    })

    it('se debe renderizar sin valor si no hay value', () => {
        const onClick = jest.fn();
        let button;
        act(() => {
            render(<OwlUserView onClick={onClick} />, container);
        })
        button = container.firstChild;

        act(() => {
            button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        });

        expect(onClick).toHaveBeenCalledTimes(1);
    })*/
});