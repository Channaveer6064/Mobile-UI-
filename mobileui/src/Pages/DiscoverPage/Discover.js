import { Header } from "../../Components/Header/Header";
import { Searchbar } from "../../Components/Searchbar/Searchbar";
import { useData } from "../../Contexts/DataContext/DataContext";
import "./Discover.css";
import React from "react";

export const Discover = () => {
  const {
    state: { allProducts, allCategories, selectedCategory },
    dispatch,
  } = useData();
  console.log(selectedCategory);
  const handleClick = (category) => {
    dispatch({ type: "SELECTED_CATEGORY", payload: category });
  };
  return (
    <div className="discover-page-container">
      <Header />
      <Searchbar />
      <nav className="sidebar">
        <button
          onClick={() => handleClick("all")}
          style={
            selectedCategory === "all"
              ? {
                  background: "var(--black-color)",
                  color: "var(--white-color)",
                }
              : {}
          }
        >
          all
        </button>
        {allCategories.map((category) => (
          <button key={category} onClick={() => handleClick(category)}>
            {category}
          </button>
        ))}
      </nav>
    </div>
  );
};
