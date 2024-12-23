import React from 'react'
import Header from '../Header/Header'


function About() {
  return (
    <div>
     <Header/>
      
     <div className='w-full h-auto bg-white'>
  <div className='w-full h-24'></div>
  <div className='w-full h-auto'>
    <div className='w-full h-auto text-2xl underline underline-offset-2 font-bold flex items-center justify-center py-4'>
      <h1>OVERVIEW</h1>
    </div>
    <div className='w-full h-auto px-4 md:px-8 lg:px-16'>
      <p className='text-sm md:text-base leading-6'>
        DMart is a one-stop supermarket chain that aims to offer customers a wide range of basic home and personal products under one roof. Each DMart store stocks home utility products - including <br />
        food, toiletries, beauty products, garments, kitchenware, bed and bath linen, home appliances and more - available at competitive prices that our customers appreciate. Our core objective is to <br />
        offer customers good products at great value.
      </p> <br />
      <p className='text-sm md:text-base leading-6'>
        DMart was started by Mr. Radhakishan Damani and his family to address the growing needs of the Indian family. From the launch of its first store in Powai in 2002, DMart today has a well- <br />
        established presence in 381 locations across Maharashtra, Gujarat, Andhra Pradesh, Madhya Pradesh, Karnataka, Telangana, Chhattisgarh, NCR, Tamil Nadu, Punjab and Rajasthan. With our <br />
        mission to be the lowest priced retailer in the regions we operate, our business continues to grow with new locations planned in more cities.
      </p> <br />
      <p className='text-sm md:text-base leading-6'>
        The supermarket chain of DMart stores is owned and operated by Avenue Supermarts Ltd. (ASL). The company has its headquarters in Mumbai.
      </p><br />
      <p className='text-sm md:text-base leading-6'>
        * The brands D Mart, D Mart Minimax, D Mart Premia, D Homes, Dutch Harbour, etc are brands owned by ASL.
      </p>
    </div>
  </div>

  <div className='w-full h-auto flex flex-col md:flex-row bg-amber-100'>
    <div className='w-full md:w-1/2 h-auto xl:ml-[400px] px-4 py-4'>
      <div className='text-2xl underline underline-offset-2 font-bold flex items-center justify-center  py-4'>
        <h1>FOUNDERS</h1>
      </div>
      <p className='text-sm md:text-base  leading-6'>
        DMart is owned and operated by Avenue Supermarts Ltd. (ASL) – a company founded by Mr. Radhakishan Damani. Mr. Radhakishan Damani is respected in the business world as an astute <br />
        investor in the Indian equity market, he has built a company that constantly strives towards developing a deep understanding of customer needs and satisfying them with the right products. A <br />
        firm believer in core business fundamentals and strong ethical values, Mr. Damani has built DMart into an efficient, large and profitable retail chain that is highly respected by customers, partners <br />
        and employees alike.
      </p>
    </div>
  </div>

  <div className='w-full h-auto bg-white'>
    <div className='w-full h-auto'>
      <div className='text-2xl underline underline-offset-2 font-bold flex items-center justify-center py-4'>
        <h1>OUR MISSION</h1>
      </div>
      <div className='w-full px-4 md:px-8 lg:px-16'>
        <p className='text-sm md:text-base leading-6'>
          At DMart, we research, identify and make available new products and categories that suit the everyday needs of the Indian family. Our mission is to provide the best value possible for our <br />
          customers, so that every rupee they spend on shopping with us gives them more value for money than they would get anywhere else.
        </p>
      </div>
    </div>

    <div className='w-full h-auto bg-amber-100 py-4'>
      <div className='text-2xl underline underline-offset-2 font-bold flex items-center justify-center py-4'>
        <h1>OUR CUSTOMER SERVICE PLEDGE</h1>
      </div>
      <div className='px-4 md:px-8 lg:px-16'>
        <p className='text-sm md:text-base leading-6'>
          At DMart, we place strong emphasis on excellence in customer service. Our employees believe in the values of Action, Care and Truth (ACT) to get the job done, with Dedication and Determination.
        </p>
      </div>

      <div className='w-full flex flex-col md:flex-row gap-4 justify-center items-center py-4'>
        <div className='w-[90%] md:w-[450px] h-auto bg-white rounded-md shadow-md'>
          <div className='text-2xl underline underline-offset-2 font-bold flex items-center justify-center py-2'>
            <h1>Action</h1>
          </div>
          <div className='px-4 py-2 text-sm md:text-base'>
            <p>Focus: To be focused about what I do.</p><br />
            <p>Motivated: To be clear of achieving my goal.</p><br />
            <p>Enthusiastic: To love what I do.</p>
          </div>
        </div>

        <div className='w-[90%] md:w-[450px] h-auto bg-white rounded-md shadow-md'>
          <div className='text-2xl underline underline-offset-2 font-bold flex items-center justify-center py-2'>
            <h1>Care</h1>
          </div>
          <div className='px-4 py-2 text-sm md:text-base'>
            <p>
              Respect: To respect every individual in the organisation and provide her/him with the dignity and attention to make her/him believe that she/he makes a difference to the organisation.
            </p> <br />
            <p>Listen: To listen and resolve any employee / customer grievance quickly and fairly.</p>
          </div>
        </div>

        <div className='w-[90%] md:w-[450px] h-auto bg-white rounded-md shadow-md'>
          <div className='text-2xl underline underline-offset-2 font-bold flex items-center justify-center py-2'>
            <h1>Truth</h1>
          </div>
          <div className='px-4 py-2 text-sm md:text-base'>
            <p>Integrity: By being open, honest and fair in all our relationships and being respectful and trustful to others.</p>
          </div>
        </div>
      </div>

      <p className='px-4 md:px-8 lg:px-16 text-sm md:text-base'>
        We strongly believe that honesty and sincerity are critical in achieving complete customer satisfaction. We welcome individuals who share our values and believe in leading by action.
      </p>
    </div>
  </div>

  <div className='w-full h-auto bg-gray-600 text-white flex items-center justify-center py-4'>
    <ul className='flex gap-4 md:gap-8 text-sm md:text-base'>
      <li>Sitemap</li>
      <li>Privacy Policy</li>
      <li>Terms of Use</li>
      <li>Investor Relations</li>
    </ul>
  </div>
</div>

      
      
    </div>
  )
}

export default About
