import { describe, expect, it } from "vitest";
import { canAddToComparison, MAX_COMPARE_PRODUCTS } from "./comparison";

describe("comparison limits", () => {
  it("allows existing items and blocks a fourth product", () => {
    const current = ["a", "b", "c"];
    expect(current).toHaveLength(MAX_COMPARE_PRODUCTS);
    expect(canAddToComparison(current, "b")).toBe(true);
    expect(canAddToComparison(current, "d")).toBe(false);
  });
});
