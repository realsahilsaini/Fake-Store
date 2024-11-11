import React, { createContext, useEffect, useState } from 'react'
import axios from './axios'


export const ProductContext = createContext();


const Context = ({children}) => {
  // console.log("Children:", children);
  
  
  const [products, setProducts] = useState(null);

  const getProducts = async ()=> {
    try{

      const {data} = await axios.get('/products'); 
      // console.log("Products:", data);
      setProducts(data);
      

    }catch(error){
      console.log("Error while fetching products:", error);
      
    }
  }

  useEffect(()=>{
    getProducts();
  },[])

  return (
   <ProductContext.Provider value={[products, setProducts]}>
    {children}
   </ProductContext.Provider>
  )
}

export default Context