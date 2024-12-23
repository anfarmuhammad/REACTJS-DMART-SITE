import React from 'react'

function Card(props) {
  return (
    <div>
       <div className='md:w-[450px] w-[800px] md:h-[300px] h-[500px] bg-white rounded-md shadow-inner '>
            <h1 className='text-2xl font-bold'>{props.head}</h1>
            <p>{props.text}</p>
            <img className='md:w-full w-[1500px]  h-[84%] rounded-b-lg' src={props.image} alt="" />
        </div>
      
    </div>
  )
}

export default Card
