import React from 'react'

const ProductCard = () => {
  return (
    <div className='flex flex-col justify-center items-center w-[45%] md:w-[20%] border border-neutral-700 shadow rounded-md'>
      <div className='p-5 mix-blend-multiply hover:scale-110 transition-all duration-200'>
        <img className='w-40 mix-blend-multiply' src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />
      </div>


      <div className='h-px bg-neutral-700 w-full m-3'></div>

      <div className='p-2 w-full'>
      <h1 className='text-xl text-center font-semibold hover:text-blue-600 transition-all'>Product Name</h1>
      <p className='w-full mt-2'>Description</p>
      <p className='w-full mt-2 font-semibold'>Price: </p>
      </div>
    </div>
  )
}

export default ProductCard