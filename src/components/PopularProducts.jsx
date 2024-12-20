import React from 'react'
import { BsCup } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import CoffeeCard from './CoffeeCard'

const PopularProducts = ({coffees,setCoffees}) => {
  return (
    <div className='bg-products min-h-screen bg-cover  bg-no-repeat my-10 text-[#331A15]'>
      <div className='flex flex-col justify-center items-center space-y-2'>
        <p className='text-sm text-[#1B1A1A]'>--- Sip & Savor ---</p>
        <h3 className='text-2xl font-semibold'>Our Popular Products</h3>
         <Link to={'/addcoffee'} className='px-5 py-2 rounded-md bg-[#E3B577] text-[#242222] flex items-center gap-1'><span>Add Coffee</span> <BsCup /></Link>
      </div>
      <div className='grid md:grid-cols-2 gap-6 max-w-5xl mx-auto my-10'>
        {
          coffees.map(coffee=><CoffeeCard key={coffee._id} setCoffees={setCoffees} coffees={coffees} coffee={coffee} />)
        }
      </div>
    </div>
  )
}

export default PopularProducts
