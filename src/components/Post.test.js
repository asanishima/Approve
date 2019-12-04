import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
//import "@testing-library/jest-dom/extend-expect";
import Post from './Post';
import { isTSAnyKeyword, exportAllDeclaration } from '@babel/types';

let container = null;

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with post", () => {
    act(() => {
        render(<Post post="hogehoge" author="naoki" />, container);
    });
    const post = container.querySelector(".post");
    expect(post.textContent).toBe("hogehoge");
    const author = container.querySelector(".author");
    expect(author.textContent).toBe("naoki");
});