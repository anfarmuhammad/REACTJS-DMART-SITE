import React from 'react'
import Header from '../Header/Header'

function Social() {
  return (
    <div>
      <Header />
      <div className='w-full h-24 '></div>
      <div className='w-full h-auto bg-white'>
        <div className='w-full h-auto'>
          <div className='w-full h-auto underline underline-offset-2 font-bold flex items-center justify-center text-2xl p-4'>
            <h1>CORPORATE SOCIAL RESPONSIBILITY (CSR) INITIATIVE</h1>
          </div>
          <div className='w-full h-auto px-6'>
            <p className='font-bold'>Better Schools, Brighter Futures!</p><br />
            <p>
              At DMart, we believe in corporate social responsibility and have always been committed to contributing to the communities in which we operate. While being focused on sustained economic <br />
              performance, we are also acutely aware of the necessity and importance of social stewardship. Towards this end, we seek to enrich the lives of the future generation – the children of our country <br />
              – through our efforts to create better environments and infrastructure in public schools in select wards of Mumbai city.
            </p> <br />
            <p>
              We have a school excellence program through which we aim to develop infrastructure, improve educational facilities and work towards sustainable progress in public schools in selected wards <br />
              of Mumbai. We work with these schools and seek to implement better teaching facilities (such as libraries & science labs) and develop infrastructure (such as toilets and playgrounds) by <br />
              working with partner organisations. We hope to improve the quality of education and provide children with better education and development opportunities.
            </p>
          </div>
        </div>
        <div className='w-full h-auto flex flex-wrap items-center justify-center gap-6 p-4'>
          <div className='w-[300px] h-[200px]'>
            <img className='w-full h-full object-cover' src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTtdYXGFasa7HW-BAkruWWK0ERKTPRdYaUjrZAbCWkV2GBwa1xr" alt="CSR Image 1" />
          </div>
          <div className='w-[300px] h-[200px]'>
            <img className='w-full h-full object-cover' src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRLMsjspSkZWHbMyl1h9JXKyTocGCDIJW8BgVXmVAmmk8am5vV7" alt="CSR Image 2" />
          </div>
          <div className='w-[300px] h-[200px]'>
            <img className='w-full h-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL4o0oHQG87iSeY0oNmVPyN75d2rsWR6zKkQ_EgH9lj3Yqm9t3" alt="CSR Image 3" />
          </div>
        </div>
      </div>
      <div className='w-full h-[50px] bg-white'></div>
      <div className='w-full h-[50px] flex items-center justify-center bg-gray-600 text-white'>
        <ul className='flex flex-wrap justify-center gap-8 px-4'>
          <li>Sitemap</li>
          <li>Privacy Policy</li>
          <li>Terms of Use</li>
          <li>Investor Relations</li>
        </ul>
      </div>


    </div>
  )
}

export default Social
