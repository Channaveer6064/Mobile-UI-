import "./Searchbar.css";
import React from "react";
import { LuSearch } from "react-icons/lu";
export const Searchbar = () => {
  return (
    <div className="searchbar-container">
      <input type="text" placeholder="Search anything" />
      <LuSearch id="search-icon" />
      <button>
        <img src="/img/filter-btn.png" />
      </button>
    </div>
  );
};
