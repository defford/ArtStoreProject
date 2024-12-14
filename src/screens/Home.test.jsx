import { test, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "./Home";
import "@testing-library/jest-dom/vitest";

describe("Home Screen", () => {
    test("renders button", () => {
        render(<Home />);
        const buttons = screen.getAllByRole("button");
        expect(buttons.length).toBeGreaterThan(0);
        expect(buttons[0]).toBeInTheDocument();
    });


});
