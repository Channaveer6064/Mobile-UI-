import { Header } from "../../Components/Header/Header";
import { Searchbar } from "../../Components/Searchbar/Searchbar";
import { useData } from "../../Contexts/DataContext/DataContext";
import "./Discover.css";
import React from "react";

export const Discover = () => {
  const {
    state: { allProducts, allCategories },
    dispatch,
  } = useData();
  console.log(allProducts);
  return (
    <div>
      <Header />
      <Searchbar />
    </div>
  );
};
