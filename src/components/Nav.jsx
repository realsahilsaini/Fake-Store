import React from 'react'

const Nav = () => {
  return (
    <header className='bg-neutral-300 w-[15%] h-[100%]'>
      <nav className='pt-4 flex flex-col justify-center items-center'>
        <a 
          href='/create' 
          className='py-3 px-5 border border-neutral-700 shadow-[4px_5px_0px_0px_rgba(0,0,0,0.7)]' 
        >
          Add New Product
        </a>
        <hr className="h-px my-5 bg-neutral-700 border-0 w-[80%]"/>
        <h1 className='text-2xl font-semibold mb-4 w-[80%]'>Category Filter</h1>
        <ul className='flex flex-col gap-2 w-[80%] '>
          <li className='flex items-center gap-2'>
            <span className='inline-block h-[20px] w-[20px] bg-yellow-300 rounded-full'></span>
            <a href='#'>Category 1</a>
          </li>

          <li className='flex items-center gap-2'>
            <span className='inline-block h-[20px] w-[20px] bg-red-300 rounded-full'></span>
            <a href='#'>Category 1</a>
          </li>

          <li className='flex items-center gap-2'>
            <span className='inline-block h-[20px] w-[20px] bg-blue-300 rounded-full'></span>
            <a href='#'>Category 1</a>
          </li>
          
        </ul>
      </nav>
    </header>
  )
}

export default Nav