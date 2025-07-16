import React from 'react'
import { FaCheckDouble, FaCircle } from 'react-icons/fa'

const OrderList = () => {
    return (
        <div className='flex items-center gap-6 mb-3'>
            <button className='bg-[#f6b100] p-4 text-xl font-bold rounded-lg'>DJ</button>
            <div className='flex items-center justify-between w-[80%]'>

                <div>
                    <h1 className='text-[#f5f5f5] text-lg font-semibold tracking-wide'>Devesh Jangid</h1>
                    <p className='text-[#ababab] text-sm'>8 Items</p>
                </div>

                <div>
                    <h1 className='text-[#f6b100] font-semibold border border-[#f6b100]  rounded-lg p-2'>Table No: 21</h1>
                </div>

                <div className='flex flex-col items-start gap-2'>
                    <p className=' text-green-600'><FaCheckDouble className='inline mr-2' />Ready</p>

                    <p className='text-[#ababab] text-sm'><FaCircle className='inline mr-2 text-green-600' />Ready to Serve</p>
                </div>
            </div>
        </div>
    )
}

export default OrderList

