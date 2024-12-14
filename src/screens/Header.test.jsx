import { test, expect, describe } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "./Header";
import Home from './Home'
import "@testing-library/jest-dom/vitest";

describe("Navigation", () => {
  test("renders nav bar", () => {
    const { container } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const navBar = container.querySelector(".navBar");
    expect(navBar).toBeInTheDocument();
  });

test("renders Home component when Logo icon is clicked", async () => {
    render(
        <MemoryRouter initialEntries={["/"]}>
            <Header />
            <Home />
        </MemoryRouter>
    );

    const logoIcon = screen.getAllByRole('img');
    logoIcon[0].click();
    
    await waitFor(() => {
        const heroImage = screen.getByAltText('NewFound Art Logo')
        expect(heroImage).toBeInTheDocument();
    })
});

// test("renders About component when About link is clicked", () => {
//     render(
//         <MemoryRouter initialEntries={["/about"]}>
//             <Header />
//         </MemoryRouter>
//     );
//     const aboutLink = screen.getByText(/about/i);
//     aboutLink.click();
//     expect(screen.getByText(/about component/i)).toBeInTheDocument();
// });

// test("renders Contact component when Contact link is clicked", () => {
//     render(
//         <MemoryRouter initialEntries={["/contact"]}>
//             <Header />
//         </MemoryRouter>
//     );
//     const contactLink = screen.getByText(/contact/i);
//     contactLink.click();
//     expect(screen.getByText(/contact component/i)).toBeInTheDocument();
// });
});