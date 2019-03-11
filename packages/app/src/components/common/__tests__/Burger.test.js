import React from "react";
import { render, fireEvent } from "react-testing-library";
import { MemoryRouter } from "react-router-dom";
import Burger, { MenuButton } from "../Burger";

function renderWithRouter(children) {
  return render(<MemoryRouter>{children}</MemoryRouter>);
}

describe("burger", () => {
  const { getByTestId } = renderWithRouter(<Burger />);
  it("menu opens when click on button", () => {
    const button = getByTestId("burger-btn");
    const list = getByTestId("burger-list");

    expect(list.style.opacity).toBe("");
    fireEvent(button, new MouseEvent("click"));
    expect(list.style.opacity).toEqual(1);
  });
});
