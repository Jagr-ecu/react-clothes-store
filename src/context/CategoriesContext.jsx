import { createContext, useEffect, useState } from "react";

import { getCategoriesAndDocumemtns } from "../utils/firebase/Firebase.js";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
        const categoryMap = await getCategoriesAndDocumemtns()
        setCategoriesMap(categoryMap)      
    }
    getCategoriesMap()
  }, [])

  const value = { categoriesMap };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
