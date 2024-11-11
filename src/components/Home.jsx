import { useContext } from 'react'
import Nav from './NAv'
import ProductCard from './ProductCard'
import {ProductContext} from '../utils/Context'
import Loading from './Loading'


const Home = () => {
  const [products, setProducts] = useContext(ProductContext);
  // console.log("Products:", products);
  
  return ( products ?

    <>

    <Nav />


    <div className='h-full flex flex-wrap justify-center gap-5 overflow-y-auto w-[85%] p-5 pt-[5%]'>

        {products.map((product, index)=>{
          return <ProductCard key={index} productData={product} />
        })}


      </div>
    </>

    : <Loading />
  )
}

export default Home