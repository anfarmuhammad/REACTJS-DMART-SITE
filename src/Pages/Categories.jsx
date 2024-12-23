import React from 'react'
import Header from '../Header/Header'
import Store from '../Header/Store'

function Categories() {
  return (
    <div>
      <Header/>
      
      <div className='w-full h-24'></div>
<div className='w-full h-auto bg-white'>
  <div className='w-full h-full'>
    <div className='w-full h-auto flex flex-wrap items-center justify-center gap-6 p-4'>
      <Store image="https://www.dmartindia.com/static/media/footwear.c6c8abf9.jpg" head="FOOTWEAR"/>
      <Store image="https://www.dmartindia.com/static/media/luggage.4918bf6c.jpg" head="LUGGAGE"/>
      <Store image="https://www.dmartindia.com/static/media/toys.9758d08b.jpeg" head="TOYS & GAMES"/>
      <Store image="https://www.dmartindia.com/static/media/plastics.d88cb67f.jpeg" head="PLASTIC CONTAINERS"/>
    </div>
    <div className='w-full h-auto flex flex-wrap items-center justify-center gap-6 p-4'>
      <Store image="https://www.dmartindia.com/static/media/kids-clothing.2a98cc19.jpg" head="KID'S APPAREL"/>
      <Store image="https://www.dmartindia.com/static/media/LADIES%20GARMENTS.8db50d48.jpg" head="WOMEN'S APPAREL"/>
      <Store image="https://www.dmartindia.com/static/media/apparel-men.309fe2a5.jpg" head="MEN'S APPAREL"/>
      <Store image="https://www.dmartindia.com/static/media/FRUITS%20&%20VEGETABLES.ecbcaabc.jpg" head="FRUITS & VEGETABLES"/>
    </div>
  </div>
</div>
<div className='w-full h-auto'>
  <div className='w-full h-auto flex flex-wrap items-center justify-center gap-6 p-4'>
    <Store image="https://www.dmartindia.com/static/media/footwear.c6c8abf9.jpg" head="FOOTWEAR"/>
    <Store image="https://www.dmartindia.com/static/media/luggage.4918bf6c.jpg" head="LUGGAGE"/>
    <Store image="https://www.dmartindia.com/static/media/toys.9758d08b.jpeg" head="TOYS & GAMES"/>
    <Store image="https://www.dmartindia.com/static/media/plastics.d88cb67f.jpeg" head="PLASTIC CONTAINERS"/>
  </div>
  <div className='w-full h-auto flex flex-wrap items-center justify-center gap-6 p-4'>
    <Store image="https://www.dmartindia.com/static/media/kids-clothing.2a98cc19.jpg" head="KID'S APPAREL"/>
    <Store image="https://www.dmartindia.com/static/media/LADIES%20GARMENTS.8db50d48.jpg" head="WOMEN'S APPAREL"/>
    <Store image="https://www.dmartindia.com/static/media/apparel-men.309fe2a5.jpg" head="MEN'S APPAREL"/>
    <Store image="https://www.dmartindia.com/static/media/FRUITS%20&%20VEGETABLES.ecbcaabc.jpg" head="FRUITS & VEGETABLES"/>
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

export default Categories
