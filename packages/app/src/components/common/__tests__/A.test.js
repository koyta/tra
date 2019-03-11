import React from "react";
import { mount, shallow } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import A from "../A";

function renderRouterLink(url) {
  return (
    <MemoryRouter>
      <A to={url}>Router link to {url}</A>
    </MemoryRouter>
  );
}

function renderBrowserLink(url) {
  return <A href={url}>Browser link to {url}</A>;
}

describe("should render correct link component", () => {
  const url = "/test";

  it("renders react-router link", () => {
    const wrappedLink = mount(renderRouterLink(url));
    const a = wrappedLink.find(A);
    expect(a.prop("to")).toEqual(url);
  });

  it("renders classic link", () => {
    const link = shallow(renderBrowserLink(url));
    expect(link.prop("href")).toEqual(url);
  });

  it("render empty-text link", () => {
    const link = shallow(<A href={url} />);
    expect(link.text()).toBe("");
  });

  it("render without link", () => {
    const link = shallow(<A>text</A>);
    expect(link.prop("to")).toBe(undefined);
    expect(link.prop("href")).toBe(undefined);
  });
});
