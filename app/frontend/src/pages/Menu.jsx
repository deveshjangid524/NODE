import React from 'react'
import Footer from '../components/shared/Footer'
import BackButton from '../components/shared/BackButton'
import { MdRestaurantMenu } from 'react-icons/md'
import MenuContainer from '../components/menu/MenuContainer'
import CustomerInfo from '../components/menu/CustomerInfo'
import CartInfo from '../components/menu/CartInfo'
import BillInfo from '../components/menu/BillInfo'
import { useSelector } from 'react-redux'
const Menu = () => {

    const customerData = useSelector(state => state.customer);
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
                            <h1 className='text-md text-[#f5f5f5] font-semibold'>{customerData.customerName}</h1>
                            <p className='text-xs text-[#ababab] font-medium'> {customerData.tableNo}</p>
                        </div>
                    </div>

                </div>

                <MenuContainer/>
            </div>

            {/* right div */}

            <div className='flex-[1] bg-[#1a1a1a] mt-4 mr-3 h-[600px] rounded-lg pt-2'>
            {/* customer info */}
            <CustomerInfo/>
            <hr className='border-[#2a2a2a] border-t-2'/>
            {/* cart items */}
            <CartInfo/>
            <hr className='border-[#2a2a2a] border-t-2'/>

            {/* bills */}
            <BillInfo/>
            </div>
            <Footer />
        </section>
    )
}

export default Menu
