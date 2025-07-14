import React from 'react'
import Footer from '../components/shared/Footer'
import BackButton from '../components/shared/BackButton'
import TableCard from '../components/tables/TableCard'
import { useState } from 'react'
import {keepPreviousData, useQuery} from '@tanstack/react-query'
import {getTables} from "../https";
import { enqueueSnackbar } from "notistack"
const Tables = () => {
    const [status, setStatus] = useState('all');
    
    const { data: resData ,isError}  = useQuery ({
        queryKey: ["tables"],
        queryFn: async() => {
            return await getTables();
        },
        placeholderData : keepPreviousData
    });

    if(isError) {
        enqueueSnackbar("something went wrong!", {variant: "error"});
    }
    return (
        <section className=' bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden'>
            <div className='flex items-center justify-between px-10 py-4'>
                <div className='flex  items-center gap-4 ml-8 '>
                    <BackButton />
                    <h1 className='text-[#f5f5f5] text-2xl font-bold tracking-wider'>Tables</h1>
                </div>

                <div className='flex items-center justify-around gap-4'>
                    <button onClick={() => setStatus('all')} className={`text-[#ababab] text-lg ${status === 'all' && 'bg-[#383838]'} rounded-lg px-5 py-2 font-semibold`}>All</button>

                    <button onClick={() => setStatus('booked')} className={`text-[#ababab] text-lg ${status === 'booked' && 'bg-[#383838]'} rounded-lg px-5 py-2 font-semibold`}>Booked</button>


                </div>

            </div>
            <div className='pl-32 flex flex-wrap gap-6 overflow-y-scroll h-[calc(100vh-5rem-5rem)] scrollbar-hide mb-0'>
                {
                    resData?.data.data.map((table)=>{
                       return <TableCard  id={table.id} name ={table.tableNo} status={table.status} initials={table?.currentOrder?.customerDetails?.name} seats={table.seats}/>
                    })
                }
                   
            </div>
            <Footer />

        </section>

    )
}

export default Tables
