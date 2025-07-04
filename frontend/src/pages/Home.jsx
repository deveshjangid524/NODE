import React from 'react'
import Footer from '../components/shared/Footer'
import Greetings from '../components/home/Greetings'
import MiniCard from '../components/home/MiniCard'
const Home = () => {
  return (
    <div>
      <section className='bg-[#1f1f1f] h-[calc(100vh-5rem)] flex gap-3'>
        {/*left div */}
        <div className='flex-[3] bg-[#1a1a]'>
            <Greetings/>
            <div className='flex items-center w-full gap-3 px-8 mt-8'>
              <MiniCard title="Total Earnings" icon = {<BsCashCoin/>} number = {512} footerNum = {1.6}/>
              <MiniCard title = "In Progress" icon = {<GrInProgress/>} number = {16} footerNum = {3.6}/>
            </div>
        </div>
  
        {/* right div */}
        <div className='flex-[2] bg-[#1a1a1a]'></div>
        <Footer/>
      </section>
    </div>
  )
}

export default Home
