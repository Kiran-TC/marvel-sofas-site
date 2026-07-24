import { render, screen } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, it } from "vitest";
import ProductPage from "./ProductPage";

describe("product route rendering", () => {
  it("renders a valid product page", async () => {
    render(
      <HelmetProvider>
        <MemoryRouter initialEntries={["/product/azure-horizon-sofa"]}>
          <Routes>
            <Route path="/product/:slug" element={<ProductPage />} />
          </Routes>
        </MemoryRouter>
      </HelmetProvider>,
    );
    expect(await screen.findByRole("heading", { name: /Azure Horizon Sofa/i })).toBeInTheDocument();
    expect(screen.getAllByText(/Price available on request/i).length).toBeGreaterThan(0);
  });
});
