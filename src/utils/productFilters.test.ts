import { describe, expect, it } from "vitest";
import { products } from "../data/products";
import { defaultFilters, filterProducts, recommendProducts } from "./productFilters";

describe("product filtering and search", () => {
  it("searches across product names and tags", () => {
    const results = filterProducts(products, { ...defaultFilters, query: "theatre" });
    expect(results.some((product) => product.slug === "black-theatre-recliners")).toBe(true);
  });

  it("filters by category and upholstery", () => {
    const results = filterProducts(products, {
      ...defaultFilters,
      categories: ["recliners"],
      upholstery: ["Leather finish"],
    });
    expect(results.length).toBeGreaterThan(0);
    expect(results.every((product) => product.category === "recliners")).toBe(true);
  });

  it("recommends products from finder answers", () => {
    const results = recommendProducts(products, {
      type: "L-shaped sofa",
      size: "Large",
      upholstery: "Premium fabric",
      style: "Modern",
    });
    expect(results.length).toBeGreaterThan(0);
    expect(results[0].category).toMatch(/l-shaped-sofas|corner-sectional-sofas|modular-sofas/);
  });
});
