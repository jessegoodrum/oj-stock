import React, { useState, createContext, useEffect } from 'react';
import { addCollectionAndDocuments } from '../firebase-utils/firebase.utils';
import {getCategoriesAndDocuments} from '../firebase-utils/firebase.utils';
import OJ_DATA from '../ojData.js';

export const ProductsContext = createContext({
    products: []
});

export const ProductsProvider = ({ children }) => {
  const [productsMap, setProductsMap] = useState({});

  useEffect(() => {
    const getProductsMap = async ()=>{
      const productMap = await getCategoriesAndDocuments();
      setProductsMap(productMap)}
      getProductsMap();
    }, [])
 

  // useEffect(() => {
  //   addCollectionAndDocuments('Oj', OJ_DATA)
  // },[])

  const value = {productsMap};

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
