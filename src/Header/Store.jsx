import React from 'react'

function Store(props) {
  return (
    <div>
        <div className='md:w-[330px] w-[800px] md:h-[300px] w-[800px] h-[500px]  rounded-md'>
            <img className='w-full h-[85%]  rounded-t-lg' src={props.image} alt="" />
            <div className='w-full h-[15%] bg-gray-300 text-white flex items-center justify-center font-bold rounded-b-lg'><h1>{props.head}</h1></div>
       </div>
      
    </div>
  )
}

export default Store
