import { NavLink } from "react-router-dom";
import { BiHeart } from "react-icons/bi";
import { CgShoppingBag } from "react-icons/cg";
import { RiHome6Line } from "react-icons/ri";
import { LuSettings } from "react-icons/lu";
import "./Navbar.css";
export const Navbar = () => {
  return (
    <div className="navbar-container">
      <NavLink to="/" className="navbar-links">
        <RiHome6Line className="navbar-icons" />
        <br />
        <span>Home</span>
      </NavLink>{" "}
      <NavLink className="navbar-links">
        <BiHeart className="navbar-icons" />
        <br />
        <span>Saved</span>
      </NavLink>{" "}
      <NavLink className="navbar-links">
        <CgShoppingBag className="navbar-icons" />
        <br />
        <span>Cart</span>
      </NavLink>{" "}
      <NavLink className="navbar-links">
        <LuSettings className="navbar-icons" />
        <br />
        <span>Settings</span>
      </NavLink>
    </div>
  );
};
