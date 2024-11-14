import { useContext, useEffect, useState } from 'react'
import Nav from './NAv'
import ProductCard from './ProductCard'
import {ProductContext} from '../utils/Context'
import Loading from './Loading'
import { useLocation } from 'react-router-dom'
import axios from '../utils/axios'


const Home = () => {
  const [products, setProducts] = useContext(ProductContext);
  // console.log("Products:", products);

  const [productsToShow, setProductsToShow] = useState(null);
  
  

  const {search} = useLocation();
  // console.log("search: ", search.length);

  // Extract selectedCategory safely
  const selectedCategory = search.length && decodeURI(search.split('=')[1]);
  // console.log("Selected Category: ", selectedCategory);
  // let productsToShow = products && products
  


  // const selectedCategoryProduct = async () => {
  //   try{

  //     const { data } = await axios.get(`https://fakestoreapi.com/products/category/${selectedCategory}`);
  //     setProductsToShow(data);
      
  //   }catch(error){
  //     console.log("Error while finding Products for selected category: ", error);
  //   }
  // } ;


  useEffect(()=>{


    if(selectedCategory == 0){
      setProductsToShow(products);
    }

    if(selectedCategory !== 0){
      // selectedCategoryProduct();

      setProductsToShow(products.filter(product => product.category === selectedCategory));
        }


  },[selectedCategory, products]);


  // console.log("Products to Show:", productsToShow);
  
  
  
  
  return ( products ?

    <>

    <Nav />


    <div className='h-full flex flex-wrap justify-center gap-5 overflow-y-auto w-[85%] p-5 pt-[5%]'>

        {productsToShow && productsToShow.map((product, index)=>{
          return <ProductCard key={index} productData={product} />
        })}


      </div>
    </>

    : <Loading />
  )
}

export default Home