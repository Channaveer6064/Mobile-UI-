import { NavLink, useParams } from "react-router-dom";
import "./Details.css";
import React from "react";
import { useData } from "../../Contexts/DataContext/DataContext";
import { Navbar } from "../../Components/Navbar/Navbar";
import { AiOutlineArrowLeft, AiFillStar } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";

export const Details = () => {
  const { id } = useParams();
  const {
    state: { allProducts },
  } = useData();
  const thisProduct = allProducts.filter((i) => i.id == id);
  console.log(thisProduct);

  const { price, image, title, rating, description } = thisProduct[0];
  return (
    <div className="details-page-container">
      <div className="details-page-header">
        <NavLink to="/">
          {" "}
          <AiOutlineArrowLeft id="arrow-icon" />
        </NavLink>
        <span>Details</span>
        <img src="/img/bell-icon.png" />
      </div>
      <div className="details-content">
        <img src={image} alt="product-image" />
        <h2>{title.slice(0, 20)}</h2>
        <section className="reveiws-section">
          {" "}
          <AiFillStar id="star-icon" />
          <span>{rating.rate}/5</span>
          <span>({rating.count} reviews)</span>
        </section>
        <p>{description}</p>
        <strong>Choose size</strong>
        <div className="size-btns">
          <button>S</button>
          <button>M</button>
          <button>L</button>
        </div>
      </div>
      <div className="details-navbar-container">
        <p>
          <span>Price</span>
          <br />
          <span>INR {price}</span>
        </p>
        <button>
          <BsHandbag id="cart-icon" />
          &nbsp;
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};
