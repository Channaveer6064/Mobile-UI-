import { useParams } from "react-router-dom";
import "./Details.css";
import React from "react";
import { useData } from "../../Contexts/DataContext/DataContext";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Header } from "../../Components/Header/Header";

export const Details = () => {
  const { id } = useParams();
  const {
    state: { allProducts },
  } = useData();
  const thisProduct = allProducts.filter((i) => i.id == id);
  return (
    <div className="details-page-container">
      <Header />
      details
      <Navbar />
    </div>
  );
};
