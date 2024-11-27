import { createSelector } from "reselect";

export const selectPurchases = (state) => state.purchases.products;

export const memoizedPurchases = createSelector(
  [selectPurchases],
  (products) => products
);
