import "./ProductCard.css";
import { NavLink } from "react-router-dom";
import { BiHeart, BiSolidHeart } from "react-icons/bi";
export const ProductCard = ({ title, id, price, image }) => {
  return (
    <NavLink to={`/details/${id}`} className="product-card-container">
      <img
        src={image}
        style={{
          height: "175px",
          width: "160px",
          background: "var(--grey-color)",
        }}
      />
      <button>
        <BiHeart className="heart-icon" />
      </button>
      <strong>{title.slice(0, 10)}</strong>
      <br />
      <span>INR ${price}</span>
    </NavLink>
  );
};
