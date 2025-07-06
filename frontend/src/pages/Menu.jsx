import React from 'react'
import Footer from '../components/shared/Footer'
import BackButton from '../components/shared/BackButton'
import { MdRestaurantMenu } from 'react-icons/md'
import MenuContainer from '../components/menu/MenuContainer'
const Menu = () => {
    return (
        <section className='bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden flex gap-3'>

            {/* left div */}
            <div className='flex-[3] '>
                <div className='flex items-center justify-between px-10 py-4'>
                    <div className='flex  items-center gap-4 '>
                        <BackButton />
                        <h1 className='text-[#f5f5f5] text-2xl font-bold tracking-wider'>Menu</h1>
                    </div>

                    <div className='flex items-center gap-3 cursor-pointer'>
                        <MdRestaurantMenu className='text-[#f5f5f5] text-4xl' />
                        <div className='flex flex-col items-start'>
                            <h1 className='text-md text-[#f5f5f5] font-semibold'>Customer Name</h1>
                            <p className='text-xs text-[#ababab] font-medium'>Table No. 21</p>
                        </div>
                    </div>

                </div>

                <MenuContainer/>
            </div>

            {/* right div */}

            <div className='flex-[1] bg-[#1a1a1a] mt-4 mr-3 h-[780px rounded-lg pt-2'>
            {/* customer info */}
                <div className='flex items-center justify-between px-4 py-3'>
                    <div className='flex flex-col items-start'>
                        <h1 className='text-md text-[#f5f5f5] font-semibold tracking-wide'>Customer Name</h1>
                        <p className='text-xs text-[#ababab] font-medium mt-1'>Dine In</p>
                        <p className='text-xs text-[#ababab] font-medium mt-1'>July 6 , time ,d ate</p>
                    </div>
                    <button className='bg-[#f6b100] p-3 text-xl font-bold rounded-lg'>CN</button>
                </div>
                <hr className='border-[#2a2a2a] border-t-2'/>
            {/* cart items */}
            {/* bills */}
            </div>
            <Footer />
        </section>
    )
}

export default Menu
