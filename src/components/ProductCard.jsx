import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({productData}) => {
  // console.log("Product Data:", productData);
  
  return (
    <Link to={`/details/${productData.id}`} className='flex flex-col justify-center items-center max-h-[110%] w-[45%] md:w-[25%] md:max-h-[80%] border border-neutral-700 shadow rounded-md overflow-hidden'>

      <div className='py-4 flex justify-center items-center max-h-[85%]: md:max-h-[65%] h-full overflow-hidden mix-blend-multiply hover:scale-105 transition-all duration-200'>
        <img className='w-28 md:w-36 mix-blend-multiply' src={`${productData.image}`} alt="" />
      </div>


      <div className='h-px bg-neutral-700 w-full m-3'></div>

      <div className='p-4 max-h-[50%] w-full'>
      <h1 className='text-xl truncate text-center font-semibold hover:text-blue-600 transition-all'>
        {productData.title}
      </h1>
      <p className='w-full text-neutral-500 mt-2 truncate'>
        {productData.description}
      </p>
      <p className='w-full text-red-400 mt-2 font-semibold'>
        {`Price: €${productData.price}`} 
      </p>
      </div>
    </Link>
  )
}

export default ProductCard