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

            <div className='flex-[1] bg-blue-300'>

            </div>
            <Footer />
        </section>
    )
}

export default Menu
