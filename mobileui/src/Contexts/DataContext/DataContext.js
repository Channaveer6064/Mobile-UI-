import React, { createContext, useContext, useEffect, useReducer } from "react";
import { Reducer } from "./Reducer";
import axios from "axios";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, {
    allProducts: [],
    allCategories: [],
  });
  const getData = async () => {
    try {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      dispatch({ type: "ALL_PRODUCTS", payload: data });
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};
export const useData = () => useContext(DataContext);
