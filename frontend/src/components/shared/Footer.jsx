import React from 'react'
import {FaHome } from 'react-icons/fa';
import {MdOutlineReorder } from 'react-icons/md';
import {MdTableBar } from 'react-icons/md';
import {CiCircleMore } from 'react-icons/ci';
import {BiSolidDish} from 'react-icons/bi';



const Footer = () => {
  return (
    <div className='fixed bottom-0 lef-0 right-0 bg-[#262626] p-2 h-16 w-full flex justify-around'>
      <button className='flex items-center justify-center text-[#f5f5f5] bg-[#343434] w-[200px] rounded-[20px]'><FaHome className='inline mr-2' size={20}/> <p>Home</p></button>
      <button className='flex items-center justify-center text-[#ababab] w-[200px]'><MdOutlineReorder className='inline mr-2' size={20}/><p>Orders</p></button>
      <button className='flex items-center justify-center text-[#ababab] w-[200px]'><MdTableBar className='inline mr-2' size={20}/>Tables</button>
      <button className='flex items-center justify-center text-[#ababab] w-[200px]'><CiCircleMore className='inline mr-2' size={20}/>More</button>

        <button className='absolute bottom-6 bg-[#F6B100] text-[#f5f5f5] items-center rounded-full p-3'><BiSolidDish size={30}/></button>
    </div>
  )
}

export default Footer
