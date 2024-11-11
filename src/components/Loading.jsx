import React from 'react'

const Loading = () => {
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <h2 className='text-5xl text-[#FF156D] font-bold'>Loading</h2>
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 200 200"><circle fill="#FF156D" stroke="#FF156D" stroke-width="2" r="15" cx="40" cy="65"><animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4"></animate></circle><circle fill="#FF156D" stroke="#FF156D" stroke-width="2" r="15" cx="100" cy="65"><animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2"></animate></circle><circle fill="#FF156D" stroke="#FF156D" stroke-width="2" r="15" cx="160" cy="65"><animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0"></animate></circle></svg>
    </div>
  )
}

export default Loading