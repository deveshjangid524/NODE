import React, { useMemo } from 'react'
import { getRandomBG } from '../../utils'
import { useNavigate } from 'react-router-dom';

const TableCard = ({ name, status, initials, seats }) => {
  const navigate = useNavigate();

  
  const bgColor = useMemo(() => getRandomBG(), []);

  const handleClick = () => {
    if (status === 'Booked') return;
    navigate('/menu');
  }

  return (
    <div onClick={handleClick} className='w-[300px] bg-[#262626] p-4 rounded-lg cursor-pointer hover:bg-[#2c2c2c]'>
      <div className='flex items-center justify-between px-1'>
        <h1 className='text-[#f5f5f5] text-xl font-semibold'>{name}</h1>
        <p className={`${status === 'Booked' ? "text-green-600 bg-[#2e4a40]" : "bg-[#664a04] text-white"} px-2 py-1 rounded-lg`}>{status}</p>
      </div>
      <div className='flex justify-center items-center mt-5 mb-7'>
        <h1 className={`${bgColor} text-white rounded-full p-5 text-xl`}>{initials}</h1>
      </div>
      <p className='text-[#ababab] text-xs'>Seats: <span className='text-[#f5f5f5]'>{seats}</span></p>
    </div>
  )
}

export default TableCard
