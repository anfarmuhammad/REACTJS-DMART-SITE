import React from 'react'
import Header from '../Header/Header'

function Feedback() {
  return (
    
    <div>
      <Header/>
      <div className="w-full h-24"></div>
<div className="w-full bg-white">
  <div className="w-full md:h-[50%]">
    <div className="w-full h-[20%] underline underline-offset-2 font-bold flex items-center justify-center text-xl md:text-2xl">
      <h1>FEEDBACK</h1>
    </div>
    <div className="w-full h-[60%] p-4 md:pl-[50px] text-sm md:text-base">
      <p className="font-bold">"True perfection is a constant work-in-progress…"</p>
      <br />
      <p>We encourage all our valued customers to share their experience or concern with us.</p>
      <br />
      <p>
        Please fill in your feedback below and we will be in touch with you. You have the
        option of not identifying yourself in which case this will be processed as anonymous feedback.
      </p>
    </div>
    <div className="w-full h-[20%] flex items-center justify-center px-4">
      <h1 className="text-lg md:text-2xl text-center">To share your feedback, Choose who you are?</h1>
    </div>
  </div>
  <div className="w-full h-[50%] flex flex-wrap items-center justify-center gap-10 md:gap-[150px] py-4">
    <div className="w-[100px] md:w-[150px] flex items-center justify-center flex-col">
      <img
        className="w-full"
        src="https://www.dmartindia.com/static/media/customer.6e22cf93.jpg"
        alt=""
      />
      <br />
      <p>CUSTOMERS</p>
    </div>
    <div className="w-[100px] md:w-[150px] flex items-center justify-center flex-col">
      <img
        className="w-full"
        src="https://www.dmartindia.com/static/media/employee.9c5140d9.jpg"
        alt=""
      />
      <br />
      <p>EMPLOYEES</p>
    </div>
    <div className="w-[100px] md:w-[150px] flex items-center justify-center flex-col">
      <img
        className="w-full"
        src="https://www.dmartindia.com/static/media/management.0a0a428e.jpg"
        alt=""
      />
      <br />
      <p>VENDORS</p>
    </div>
    <div className="w-[100px] md:w-[150px] flex items-center justify-center flex-col">
      <img
        className="w-full"
        src="https://www.dmartindia.com/static/media/others.14fff99e.jpg"
        alt=""
      />
      <br />
      <p>OTHERS</p>
    </div>
  </div>
</div>
<div className="w-full bg-white flex flex-wrap md:flex-nowrap">
  <div className="w-full md:w-[50%] flex flex-col items-start p-4 md:pl-[100px] md:pt-[50px] gap-4">
    <input
      className="w-full md:w-[600px] h-[50px] border-2 border-lime-800 rounded px-2"
      type="text"
      placeholder="Store"
    />
    <input
      className="w-full md:w-[600px] h-[50px] border-2 border-lime-800 rounded px-2"
      type="text"
      placeholder="Enter State"
    />
    <input
      className="w-full md:w-[600px] h-[50px] border-2 border-lime-800 rounded px-2"
      type="text"
      placeholder="Enter City"
    />
    <input
      className="w-full md:w-[600px] h-[50px] border-2 border-lime-800 rounded px-2"
      type="text"
      placeholder="Enter Store"
    />
    <input
      className="w-full md:w-[600px] h-[50px] border-2 border-lime-800 rounded px-2"
      type="text"
      placeholder="Enter Name"
    />
    <input
      className="w-full md:w-[600px] h-[50px] border-2 border-lime-800 rounded px-2"
      type="text"
      placeholder="Enter Mobile number"
    />
  </div>
  <div className="w-full md:w-[50%] flex flex-col items-start p-4 md:pt-[50px] gap-4">
    <input
      className="w-full md:w-[600px] h-[50px] border-2 border-lime-800 rounded px-2"
      type="text"
      placeholder="Enter Email"
    />
    <input
      className="w-full md:w-[600px] h-[50px] border-2 border-lime-800 rounded px-2"
      type="text"
      placeholder="Enter your Address"
    />
    <input
      className="w-full md:w-[600px] h-[50px] border-2 border-lime-800 rounded px-2"
      type="text"
      placeholder="Enter your Area"
    />
    <input
      className="w-full md:w-[600px] h-[50px] border-2 border-lime-800 rounded px-2"
      type="text"
      placeholder="Enter your Pincode"
    />
    <input
      className="w-full md:w-[600px] h-[100px] border-2 border-lime-800 rounded px-2"
      type="text"
      placeholder="Comments"
    />
    <button className="w-[100px] h-[40px] bg-lime-900 text-white font-bold rounded self-end md:ml-[500px]">
      SUBMIT
    </button>
  </div>
</div>
<div className="w-full h-[50px] flex items-center justify-center bg-gray-600 text-white">
  <ul className="flex gap-10 md:gap-[150px] text-sm md:text-base">
    <li>Sitemap</li>
    <li>Privacy Policy</li>
    <li>Terms of Use</li>
    <li>Investor Relations</li>
  </ul>
</div>

      
    </div>
  )
}

export default Feedback
