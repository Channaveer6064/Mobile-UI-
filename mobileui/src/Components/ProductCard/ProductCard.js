import "./ProductCard.css";
import { NavLink } from "react-router-dom";
import { BiHeart, BiSolidHeart } from "react-icons/bi";
import { useData } from "../../Contexts/DataContext/DataContext";
export const ProductCard = ({ title, id, price, image }) => {
  //   const {
  //     state: { toggleHeart },
  //     dispatch,
  //   } = useData();
  //   const handleClick = () => {
  //     dispatch({ type: "TOGGLE_HEART" });
  //   };
  return (
    <NavLink className="product-card-container">
      <img
        src={image}
        style={{
          height: "175px",
          width: "160px",
          background: "var(--grey-color)",
        }}
      />
      <button>
        {/* {!toggleHeart ? (
        ) : (
          <BiSolidHeart className="heart-icon" />
        )} */}
        <BiHeart className="heart-icon" />
      </button>
      <strong>{title.slice(0, 10)}</strong>
      <br />
      <span>INR ${price}</span>
    </NavLink>
  );
};
