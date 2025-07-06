import React from 'react'
import {IoArrowBackOutline} from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
const BackButton = () => {
    const navigate=useNavigate();
  return (
    <button onClick={()=>navigate(-1)} className='bg-[#1d31e0] p-3 text-white  text-xl font-bold rounded-full'>
        <IoArrowBackOutline/>
    </button>
  )
}

export default BackButton
