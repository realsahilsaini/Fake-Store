import React, { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ProductContext } from '../utils/Context'


const Edit = () => {

  const [products, setProducts] = useContext(ProductContext);
  const navigate = useNavigate();
  const {id} = useParams();

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');


  // const title = useRef(null);
  // const category = useRef(null);
  // const price = useRef(null);
  // const description = useRef(null);
  // const image = useRef(null);


  //To prefill the form with the selected product data
  useEffect(()=>{
    const selectedProduct = products.find(product => product.id.toString() === id.toString());

    // console.log(selectedProduct);
    

    setTitle(selectedProduct.title);
    setCategory(selectedProduct.category);
    setPrice(selectedProduct.price);
    setDescription(selectedProduct.description);
    setImage(selectedProduct.image);

  },[]);



  const handelSubmit = (event) =>{

  
    event.preventDefault();
    // const newProductTitle = title.current.value;
    // const newProductCategory = category.current.value;
    // const newProductPrice = price.current.value;
    // const newProductDescription = description.current.value;
    // const newProductImage = image.current.value;

    console.log(title, category, price, description, image);
    

    if(title.trim().length < 5 || category.trim().length < 5 || price.length < 1 || description.trim().length < 5 || image.trim().length < 5){
      alert('Please fill all the fields');
    }


    const newProductData = {
      id: id,
      title: title,
      category: category,
      price: price,
      description: description,
      image: image
 
  }

    // const updatedProducts = products.map(product => product.id.toString() === id.toString() ? newProductData : product);


    const index = products.findIndex(product => product.id.toString() === id.toString());
    products[index] = newProductData;
    setProducts([...products]);

    // localStorage.setItem('products', JSON.stringify(updatedProducts));
    navigate('/');


  }

  return (
    <form action="" className='p-[5%] w-full h-full' onSubmit={handelSubmit}>


    <div className='w-[75%] mx-auto'>
    
    <h1 className='text-2xl font-bold mb-4'>Edit Product</h1>

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
        value={title}
        name='title'
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
        value={category}
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
        value={price}
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
        value={description}
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
        value={image}
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

export default Edit