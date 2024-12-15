import { test, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import ProductPage from "./ProductPage";
import products from "../../mock_api/product_database.json"; 
import "@testing-library/jest-dom/vitest";

describe("Product Page", () => {
  test("renders the product page with correct product details", () => {
    // Mock product ID for testing
    const mockProductId = products[0].id.toString(); //  first product in the database for testing
    const mockProduct = products[0];

    render(
      <MemoryRouter initialEntries={[`/product/${mockProductId}`]}>
        <Routes>
          <Route path="/product/:productId" element={<ProductPage />} />
        </Routes>
      </MemoryRouter>
    );

    // check if product name is rendered
    expect(screen.getByText(mockProduct.name)).toBeInTheDocument();

    // Check if the product's collection and series rendered
    const collectionSeriesText = `${mockProduct.collection} • ${mockProduct.series}`;
    expect(screen.getByText(collectionSeriesText)).toBeInTheDocument();

    // Check if the product's overview rendered
    expect(screen.getByText(mockProduct.overview_description)).toBeInTheDocument();

    // check if the Add to Cart button is rendered
    expect(screen.getByText("Add to Cart")).toBeInTheDocument();
  });
});
