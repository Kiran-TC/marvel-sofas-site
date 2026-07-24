import { describe, expect, it } from "vitest";
import { useUserStore } from "./useUserStore";

describe("favourite persistence", () => {
  it("saves favourites to localStorage", () => {
    useUserStore.setState({ favourites: [], comparison: [], recentlyViewed: [] });
    useUserStore.getState().toggleFavourite("MS-CAT-006");
    expect(useUserStore.getState().favourites).toContain("MS-CAT-006");
    expect(window.localStorage.getItem("marvel-sofas-user-state")).toContain("MS-CAT-006");
  });
});
