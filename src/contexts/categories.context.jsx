import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocument } from "../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
  categories: {},
  //   setProducts: () => {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoryMap = async () => {
      const categoryMap = await getCategoriesAndDocument();
      console.log(categoryMap);
      setCategoriesMap(categoryMap);
    };
    getCategoryMap();
  }, []);

  const value = { categoriesMap};

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
