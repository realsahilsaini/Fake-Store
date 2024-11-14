import { Link, useNavigate, useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import {ProductContext} from '../utils/Context'
import Loading from './Loading'
import axios from '../utils/axios'

const Details = () => {
  const [products, setProducts] = useContext(ProductContext);
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  // const [products] = useContext(ProductContext);

  
  const {id} = useParams();

  
  



  // const getProduct = async () =>{
  //   try{
  //     const response = await axios.get(`/products/${id}`);
  //     // console.log("Response:", response.data);

  //     setProduct(response.data);
  //   }catch(error){
  //     console.log("Error while getting selected product: ", error);
  //   }finally{
  //     setLoading(false);
  //   }
  // }

  useEffect(()=>{
   
    if(!product){
      setProduct(products.find(product => product.id.toString() === id.toString()));
      setLoading(false);
    }

  }, [])


  if(loading){
    return <Loading />
  }

  if(!product){
    // return <div className='h-full w-full flex  items-center'>
    //   <p className='w-full text-center text-red-600 text-3xl font-bold '>
    //  {` No product found :(`}
    //   </p>
    // </div>

    return <div className='h-full w-full flex  items-center'>
      <img className='w-full mx-auto' src='https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif' alt="" />
    </div>
  }

  const productDeleteHandler = (id) => {
    const FilteredProducts = products.filter(product => product.id !== id);
    setProducts(FilteredProducts);
    localStorage.setItem('products', JSON.stringify(FilteredProducts));
    navigate('/');
  }
  
  

  return (

    <div className='flex flex-col md:flex-row justify-around items-center gap-10 w-[80%] h-full min-h-fit  mx-auto p-[10%]'>
    <div className='flex w-[50%] justify-center items-center  mix-blend-multiply '>
      <img className='w-[60%] mix-blend-multiply object-contain hover:scale-110 transition-all duration-200' src={`${product.image}`} alt="" />
    </div>


    <div className='mt-4 md:max-w-[50%]  min-h-fit px-5'>
    <h1 className='text-2xl w-full  font-semibold hover:text-blue-600 transition-all'>
    {product.title}  

    </h1> 

    <h3 className='w-full text-sm text-zinc-500'>
      {product.category}

    </h3>
    
    <p className='w-full mt-2 font-semibold text-red-500'>
      {`Price: €${product.price}`}

    </p>

    <p className='w-full mt-8'>
      {product.description}

    </p>


    <div className='flex gap-4 mt-2'>

    <Link to={`/edit/${product.id}`} className='block w-fit text-center text-blue-500 font-semibold mt-5 broder border-2 border-blue-500 hover:text-black py-2 px-5 rounded-md hover:bg-blue-600 transition-all'>Edit</Link>

    <button onClick={()=>productDeleteHandler(product.id)} to='/' className='block w-fit text-center mt-5 border-2 border-red-500 font-semibold text-red-500 py-2 px-5 rounded-md hover:bg-red-600 hover:text-black transition-all'>Delete</button>
    </div>

    </div>
  </div>

  )
}

export default Details