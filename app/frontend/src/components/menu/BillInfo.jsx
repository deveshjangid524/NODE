import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { getTotalPrice, removeAllItems } from '../../redux/slices/cartSlice'
import { enqueueSnackbar } from 'notistack'
import { useMutation } from '@tanstack/react-query'
import { addOrder } from '../../https'
import { removeCustomer } from '../../redux/slices/customerSlice'
const BillInfo = () => {
    const customerData = useSelector(state=> state.customer);
    const total = useSelector(getTotalPrice);
    const taxRate = 5.25;
    const tax = (total * taxRate) / 100;
    const totalPriceWithTax = total + tax;
    const cartData = useSelector(state => state.cart);
    const handlePlaceOrder = async ()=> {
        if(!paymentMethod){
            enqueueSnackbar("Please select a payment method!",{variant: "warning"})
            return ;
        }

        setTimeout(()=> {
            orderMutation.mutate(orderData);
        },1500);
    }
    const orderData = {
        customerDetails : {
            name: customerData.customerName,
            phone: customerData.customerPhone,
            guests: customerData.guests
        },
        orderStatus: 'In Progress',
        bills: {
            total : total,
            tax: tax,
            totalWithTax : totalPriceWithTax,

        },
        items:cartData,
    }

    const orderMutation = useMutation({
        mutationFn: (reqData) => addOrder(reqData),
        onSuccess:(resData) => {
            const {data} = resData.data;
            console.log(data);

            const tableData = {
                status: "Booked",
                orderId: data._id,
                tableId: data.table
            }

            setTimeout(()=>{
                tableUpdateMutation.mutate(tableData)
            },1500);
             
            enqueueSnackbar("Order Placed!",{
                variant:"success",
            });
        },
        onError:(error) => {
            console.log(error);
        }
    });

    const tableUpdateMutation = useMutation({
        mutationFn: (reqData) => updateTable(reqData),
        onSuccess: (resData)=> {
            console.log(resData);
            dispatchEvent(removeCustomer());
            dispatchEvent(removeAllItems());
        },
        onError: (error) => {
            console.log(error);
        }
    })
        

    const [paymentMethod, setPaymentMethod] = useState();
    return (
        <>
            <div className=' flex items-center justify-between px-5 mt-2'>
                <p className='text-xs text-[#ababab] font-medium mt-2'>Items({cartData.length})</p>
                <h1 className='text-[#f5f5f5] text-md font-bold'>${total}</h1>
            </div>
            <div className=' flex items-center justify-between px-5 mt-2'>
                <p className='text-xs text-[#ababab] font-medium mt-2'>Tax(4.25%)</p>
                <h1 className='text-[#f5f5f5] text-md font-bold'>${tax}</h1>
            </div>

            <div className=' flex items-center justify-between px-5 mt-2'>
                <p className='text-xs text-[#ababab] font-medium mt-2'>Total With Tax</p>
                <h1 className='text-[#f5f5f5] text-md font-bold'>${totalPriceWithTax}</h1>
            </div>
            

            <div className='flex items-center gap-3 px-5 mt-4'>
                <button onClick={()=> setPaymentMethod('cash')} className={`${paymentMethod==='cash' ? 'bg-[#383737]' :''} bg-[#1f1f1f] px-4 py-3 w-full rounded-lg text-[#ababab] font-semibold`}>Cash</button>
                <button onClick={()=> setPaymentMethod('online')} className={`${paymentMethod==='online' ? 'bg-[#383737]' :''} bg-[#1f1f1f] px-4 py-3 w-full rounded-lg text-[#ababab] font-semibold`}>Online</button>
            </div>

            <div className='flex items-center gap-3 px-5 mt-4'>
                <button className='bg-[#025cca] px-4 py-3 w-full rounded-lg text-white font-semibold text-md'>Print Receipt</button>
                <button onClick={handlePlaceOrder} className='bg-[#f6b100] px-4 py-3 w-full rounded-lg text-md text-[#2a2a2a] font-semibold'>Place Order</button>
            </div>


        </>
    )
}

export default BillInfo
