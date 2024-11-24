import { useContext} from "react"
import { ProductContext } from "../utils/Context"
import { Link, useLocation } from "react-router-dom";

const Nav = () => {

  const [products] = useContext(ProductContext);

  // const distinct_categories = products && 
  // products.reduce((acc, product) => [...acc, product.category], [])
  // .map((category, index, array) => array.indexOf(category) === index && category)
  // .filter(Boolean);

  const distinct_categories = [...new Set(products.map(product => product.category))];

  
 let color =  () => `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;


  // console.log("Distinct Categories:", distinct_categories);

  return (
    <header className='bg-neutral-900 text-white w-[25%] md:w-[15%] h-[100%]'>

      <nav className='pt-4 flex flex-col justify-center items-center'>
        <a 
          href='/create' 
          className='py-3 px-2 md:px-5 border-2 border-neutral-400 shadow-[4px_5px_0px_0px_rgba(211,211,211,0.7)] hover:shadow-[2px_3px_0px_0px_rgba(211,211,211,0.7)] transition-all' 
        >
          Add New Product
        </a>

        
        
        <hr className="h-px my-5 bg-neutral-700 border-0 w-[80%]"/>
        <h1 className='text-2xl font-semibold mb-4 w-[80%]'>Category Filter</h1>
        <div className='flex flex-col gap-2 w-[80%] '>

          {distinct_categories && distinct_categories.map((category, index) => (

            <Link to={`/?category=${category}`} key={index} className='flex items-center gap-2'>
            <span style={{backgroundColor: color()}} className='inline-block h-[18px] w-[18px] border border-neutral-300 rounded-full'></span>
              {category}
          </Link>
          ))}


          {/* <li className='flex items-center gap-2'>
            <span className='inline-block h-[20px] w-[20px] bg-red-300 rounded-full'></span>
            <a href='#'>Electronics</a>
          </li>

          <li className='flex items-center gap-2'>
            <span className='inline-block h-[20px] w-[20px] bg-blue-300 rounded-full'></span>
            <a href='#'>
              Accesories
            </a>
          </li> */}
          
        </div>
      </nav>
    </header>
  )
}

export default Nav