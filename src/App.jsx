import React from 'react'
import Nav from './components/NAv'
import ProductCard from './components/ProductCard'

const App = () => {
  return (
    <div className='h-screen w-full flex'>

      <Nav />


      <div className='h-full flex flex-wrap justify-center gap-5 overflow-y-auto w-[85%] p-5 pt-[5%]'>

        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />

      </div>
      

    </div>
  )
}

export default App