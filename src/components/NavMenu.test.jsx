import { test, expect, describe } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavMenu from "./NavMenu";
import "@testing-library/jest-dom/vitest";

describe("Navigation Menu", () => {
  test("renders navigation menu", () => {
    const { container } = render(
      <MemoryRouter>
        <NavMenu cartItems={[]} />
      </MemoryRouter>
    );

    const navBar = container.querySelector(".nav-menu");
    expect(navBar).toBeInTheDocument();
  });

  test("clicking the Shop link navigates to /shop", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <NavMenu cartItems={[]} />
      </MemoryRouter>
    );

    const shopLink = screen.getByText("Shop");
    expect(shopLink).toBeInTheDocument();

    fireEvent.click(shopLink);

    expect(window.location.pathname).toBe("/shop");
  });

  test("displays the cart item count", () => {
    const mockCartItems = [
      { id: 1, name: "Product 1", quantity: 2 },
      { id: 2, name: "Product 2", quantity: 1 },
    ];

    render(
      <MemoryRouter>
        <NavMenu cartItems={mockCartItems} />
      </MemoryRouter>
    );

    const cartCount = screen.getByText("3");
    expect(cartCount).toBeInTheDocument();
  });
});
