import React, { useContext, useRef, useState } from 'react'
import { ProductContext } from '../utils/Context';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [products, setProducts] = useContext(ProductContext);
  const navigate = useNavigate();


  // const title = useRef(null);
  // const category = useRef(null);
  // const price = useRef(null);
  // const description = useRef(null);
  // const image = useRef(null);

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handelSubmit = (event) =>{
    event.preventDefault();
    // console.log("Title: ", title.current.value);
    const newProductTitle = title;
    const newProductCategory = category;
    const newProductPrice = price;
    const newProductDescription = description;
    const newProductImage = image;
    

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

      console.log(newProductData);
      


    setProducts([...products, newProductData]);
    // localStorage.setItem('products', JSON.stringify([...products, newProductData]));
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
        // ref={title}
        onChange={(e) => setTitle(e.target.value)}
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
        // ref={category}
        placeholder="Enter product price"
        onChange={(e) => setCategory(e.target.value)}
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
        // ref={price}
        placeholder="Enter product price"
        onChange={(e) => setPrice(e.target.value)}
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
        // ref={description}
        placeholder="Enter product description"
        onChange={(e) => setDescription(e.target.value)}
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
        // ref={image}
        placeholder="Enter product image URL"
        onChange={(e) => setImage(e.target.value)}
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