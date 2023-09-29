import React from "react";

export const Reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ALL_PRODUCTS":
      return { ...state, allProducts: payload };
    case "ALL_CATEGORIES":
      return { ...state, allCategories: payload };
    case "SELECTED_CATEGORY":
      return { ...state, selectedCategory: payload };
    // case "TOGGLE_HEART":
    //   console.log("ahjdhj");
    //   return { ...state, toggleHeart: !state.toggleHeart };

    default:
      return state;
  }
};
