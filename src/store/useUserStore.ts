import { create } from "zustand";
import { persist } from "zustand/middleware";
import { MAX_COMPARE_PRODUCTS } from "../utils/comparison";

type UserState = {
  favourites: string[];
  comparison: string[];
  recentlyViewed: string[];
  quoteProductId?: string;
  quoteOpen: boolean;
  toggleFavourite: (productId: string) => void;
  toggleComparison: (productId: string) => boolean;
  addRecentlyViewed: (productId: string) => void;
  openQuote: (productId?: string) => void;
  closeQuote: () => void;
  clearComparison: () => void;
};

export const useUserStore = create<UserState>()(
  persist(
    (set, get) => ({
      favourites: [],
      comparison: [],
      recentlyViewed: [],
      quoteOpen: false,
      toggleFavourite: (productId) =>
        set((state) => ({
          favourites: state.favourites.includes(productId)
            ? state.favourites.filter((id) => id !== productId)
            : [...state.favourites, productId],
        })),
      toggleComparison: (productId) => {
        const current = get().comparison;
        if (current.includes(productId)) {
          set({ comparison: current.filter((id) => id !== productId) });
          return true;
        }
        if (current.length >= MAX_COMPARE_PRODUCTS) return false;
        set({ comparison: [...current, productId] });
        return true;
      },
      addRecentlyViewed: (productId) =>
        set((state) => ({
          recentlyViewed: [productId, ...state.recentlyViewed.filter((id) => id !== productId)].slice(0, 8),
        })),
      openQuote: (productId) => set({ quoteOpen: true, quoteProductId: productId }),
      closeQuote: () => set({ quoteOpen: false }),
      clearComparison: () => set({ comparison: [] }),
    }),
    {
      name: "marvel-sofas-user-state",
      partialize: (state) => ({
        favourites: state.favourites,
        comparison: state.comparison,
        recentlyViewed: state.recentlyViewed,
      }),
    },
  ),
);
