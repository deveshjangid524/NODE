import React from 'react'
import {FaHome } from 'react-icons/fa';
import {MdOutlineReorder } from 'react-icons/md';
import {MdTableBar } from 'react-icons/md';
import {CiCircleMore } from 'react-icons/ci';
import {BiSolidDish} from 'react-icons/bi';

import {useNavigate, useLocation} from 'react-router-dom';
import { useState } from 'react';
import Modal from './Modal';



const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isModalOpen,setIsModalOpen] = useState(false);
  const [guestCount,setGuestCount] = useState(0);
  const increament = () => {
  if(guestCount === 6) return;
  setGuestCount((prev)=>prev+1);

}
const decreament = () => {
  if(guestCount===0) return;
  setGuestCount((prev)=>prev-1);
}
  const openModal = () => {
    setIsModalOpen(true);
  }
  const closeModal = () =>{
    setIsModalOpen(false);
  }

  const isActive = (path) => location.pathname === path;
  return (
    <div className='fixed bottom-0 lef-0 right-0 bg-[#262626] p-2 h-16 w-full flex justify-around'>
      <button onClick={()=> navigate('/')} className={`cursor-pointer hover:bg-[#3a3a3a] flex items-center justify-center font-bold ${isActive('/') ? 'text-[#f5f5f5] bg-[#343434]':'text-[#ababab]'}  w-[200px] rounded-[20px]
      `}><FaHome className='inline mr-2' size={20}/> <p>Home</p></button>

      <button onClick={()=> navigate('/orders')}  className={`hover:bg-[#3a3a3a] cursor-pointer flex items-center justify-center font-bold ${isActive('/orders') ? 'text-[#f5f5f5] bg-[#343434]':'text-[#ababab]'}  w-[200px] rounded-[20px]`}><MdOutlineReorder className='inline mr-2' size={20}/><p>Orders</p></button>

      <button onClick={()=> navigate('/tables')}  className={`hover:bg-[#3a3a3a] cursor-pointer  flex items-center justify-center font-bold ${isActive('/tables') ? 'text-[#f5f5f5] bg-[#343434]':'text-[#ababab]'}  w-[200px] rounded-[20px]`}><MdTableBar className='inline mr-2' size={20}/>Tables</button>

      <button className='hover:bg-[#3a3a3a] flex items-center justify-center text-[#ababab] cursor-pointer w-[200px]'><CiCircleMore className='inline mr-2' size={20}/>More</button>

        <button disabled={isActive('/tables') || isActive('/menu')} onClick={ openModal} className='absolute bottom-6 bg-[#F6B100] text-[#f5f5f5] items-center rounded-full p-3 cursor-pointer'><BiSolidDish size={30}/></button>

        <Modal isOpen={isModalOpen} onClose={closeModal} title="Create Order">

          <div>
            <label className='block text-[#ababab] mb-2 text-sm font-medium'>Customer Name</label>
            <div className='flex items-center rounded-lg p-3 px-4 bg-[#1f1f1f]'>
              <input type="text" name='' placeholder='Enter Customer Name' id='' className='bg-transparent flex-1 text-white focus:outline-none'/>
            </div>
          </div>

          
          <div>
            <label className='block text-[#ababab] mb-2 mt-3 text-sm font-medium'>Customer Phone</label>
            <div className='flex items-center rounded-lg p-3 px-4 bg-[#1f1f1f]'>
              <input type="number" name='' placeholder='+91-99999999' id='' className='bg-transparent flex-1 text-white focus:outline-none'/>
            </div>
          </div>


          <div>
            <label className='block mb-2 mt-3 text-sm font-medium text-[#ababab]'>Guest</label>
            <div className='flex items-center justify-between bg-[#1f1f1f] px-4 py-3 rounded-lg'>
              <button onClick={decreament} className='text-yellow-500 text-2xl'>&minus;</button>
              <span className='text-white'>{guestCount} Persons</span>
              <button onClick={increament} className='text-yellow-500 text-2xl'>&#43;</button>
            </div>
          </div>

          <button  onClick={()=>navigate('/tables')} className='w-full bg-[#F6B100] text-[#f5f5f5] rounded-lg py-3 mt-8 hover:bg-amber-500'>Create Order</button>
        </Modal>
    </div>
  )
}

export default Footer
