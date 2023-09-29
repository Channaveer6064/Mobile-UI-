import { Header } from "../../Components/Header/Header";
import { Navbar } from "../../Components/Navbar/Navbar";
import { ProductCard } from "../../Components/ProductCard/ProductCard";
import { Searchbar } from "../../Components/Searchbar/Searchbar";
import { useData } from "../../Contexts/DataContext/DataContext";
import "./Discover.css";
import React from "react";

export const Discover = () => {
  const {
    state: { allProducts, allCategories, selectedCategory },
    dispatch,
  } = useData();
  const handleClick = (category) => {
    dispatch({ type: "SELECTED_CATEGORY", payload: category });
  };
  return (
    <div className="discover-page-container">
      <Header />
      <Searchbar />

      <div className="filter">
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
      </div>
      <div className="product-listing">
        {allProducts.map(({ id, title, price, image }) => (
          <ProductCard
            key={id}
            id={id}
            title={title}
            price={price}
            image={image}
          />
        ))}
      </div>
      <Navbar />
    </div>
  );
};
