import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useContext } from 'react'
import {ProductContext} from '../utils/Context'

const Details = () => {

  const [products] = useContext(ProductContext);
  
  const {id} = useParams();

  console.log("Products:", products);
  console.log("Product ID:", id);

  const product = products.find(product => product.id === parseInt(id));

  // console.log("Product:", product);
  
  

  return (
    <div className='flex justify-around items-center gap-10 w-[80%] h-full min-h-fit  mx-auto p-[10%]'>
      <div className='flex w-[50%] justify-center items-center  mix-blend-multiply '>
        <img className='w-[60%] mix-blend-multiply object-contain hover:scale-110 transition-all duration-200' src={`${product.image}`} alt="" />
      </div>


      <div className='mt-4 max-w-[50%]  min-h-fit px-5'>
      <h1 className='text-2xl w-full  font-semibold hover:text-blue-600 transition-all'>
      {product.title}  
      </h1> 

      <h3 className='w-full text-sm text-zinc-500'>
        {product.category}
      </h3>
      
      <p className='w-full mt-2 font-semibold text-red-500'>
        {`Price: ${product.price}`}
      </p>

      <p className='w-full mt-8'>
        {product.description}
      </p>


      <div className='flex gap-4 mt-2'>
      <Link to='/' className='block w-fit text-center text-blue-500 font-semibold mt-5 broder border-2 border-blue-500 hover:text-black py-2 px-5 rounded-md hover:bg-blue-600 transition-all'>Edit</Link>
      <Link to='/' className='block w-fit text-center mt-5 border-2 border-red-500 font-semibold text-red-500 py-2 px-5 rounded-md hover:bg-red-600 hover:text-black transition-all'>Delete</Link>
      </div>

      </div>
    </div>
  )
}

export default Details