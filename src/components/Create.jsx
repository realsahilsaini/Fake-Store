import React, { useContext, useRef } from 'react'
import { ProductContext } from '../utils/Context';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [products, setProducts] = useContext(ProductContext);
  const navigate = useNavigate();


  const title = useRef(null);
  const category = useRef(null);
  const price = useRef(null);
  const description = useRef(null);
  const image = useRef(null);

  const handelSubmit = (event) =>{
    event.preventDefault();
    // console.log("Title: ", title.current.value);
    const newProductTitle = category.current.value;
    const newProductCategory = category.current.value;
    const newProductPrice = price.current.value;
    const newProductDescription = description.current.value;
    const newProductImage = image.current.value;

    if(newProductTitle.trim().length < 5 || newProductCategory.trim().length < 5 || newProductPrice.trim().length < 1 || newProductDescription.trim().length < 5 || newProductImage.trim().length < 5){
      alert('Please fill all the fields');
    }


    const newProductData = {
      id: nanoid(),
      title: newProductTitle,
      category: newProductCategory,
      price: newProductPrice,
      description: newProductDescription,
      image: newProductImage
    }


    setProducts([...products, newProductData]);
    localStorage.setItem('products', JSON.stringify([...products, newProductData]));
    navigate('/');
    // toast.success('New Product Added Successfully');
  }

  return (
    <form action="" className='p-[5%] w-full h-full' onSubmit={handelSubmit}>


    <div className='w-[75%] mx-auto'>

    <div className="mb-4 ">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productName">
        Product Name
      </label>
      <input
      autoComplete='off'
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="productName"
        type="text"
        placeholder="Enter product name"
        ref={title}
      />
    </div>

    <div className='flex gap-4'>
    <div className="mb-4 w-1/2">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productPrice">
        Product Category
      </label>
      <input
      autoComplete='off'
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="productCategory"
        type="text"
        ref={category}
        placeholder="Enter product price"
      />
    </div>
    <div className="mb-4 w-1/2">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productPrice">
        Product Price
      </label>
      <input
      autoComplete='off'
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="productPrice"
        type="number"
        ref={price}
        placeholder="Enter product price"
      />
    </div>
    
    </div>

    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productDescription">
        Product Description
      </label>
      <textarea
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight h-full min-h-[100px] resize-none focus:outline-none focus:shadow-outline"
        id="productDescription"
        ref={description}
        placeholder="Enter product description"
      />
    </div>
    
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productImage">
        Product Image URL
      </label>
      <input
      autoComplete='off'
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="productImage"
        type="text"
        ref={image}
        placeholder="Enter product image URL"
      />
    </div>
    <div className="flex items-center justify-between">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Add Product
      </button>
    </div>


    </div>


    </form>
  )
}

export default Create