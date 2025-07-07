import React, { useState } from 'react'
import { menus } from '../../constants'
import { GrRadialSelected } from 'react-icons/gr'
import { FaShoppingCart } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addItems } from '../../redux/slices/cartSlice'
const MenuContainer = () => {
  const [selected, setSelected] = useState(menus[0]);
  const [itemCounts, setItemCounts] = useState({});
  const dispatch = useDispatch();
  const increment = (id) => {
    setItemCounts((prev) => {
      const current = prev[id] || 0;
      if (current >= 4) return prev;
      return { ...prev, [id]: current + 1 };
    });
  };

  const decrement = (id) => {
    setItemCounts((prev) => {
      const current = prev[id] || 0;
      if (current <= 0) return prev;
      return { ...prev, [id]: current - 1 };
    });
  };

  const handleAddToCart = (item) => {
    if (!itemCounts[item.id] || itemCounts[item.id] === 0) return;

    const { name, price } = item;
    const newObj = {
      id: Math.random().toString(36).substr(2, 9)

      , name, pricePerQuantity: price, quantity: itemCounts[item.id], price: price * itemCounts[item.id]
    };
    dispatch(addItems(newObj));
    setItemCounts((prev) => ({ ...prev, [item.id]: 0 }));
  }
  return (
    <>
      <div className='grid grid-cols-4 gap-4 px-10 py-4 w-[100%]'>
        {menus.map((menu) => (
          <div
            key={menu.id}
            className='flex flex-col items-start justify-between p-4 cursor-pointer rounded-lg h-[100px]'
            style={{ backgroundColor: menu.bgColor }}
            onClick={() => {
              setSelected(menu);
              setItemCounts({});
            }}
          >
            <div className='flex items-center justify-between w-full'>
              <h1 className='text-[#f5f5f5] text-lg font-semibold'>{menu.icon} {menu.name}</h1>
              {selected.id === menu.id && <GrRadialSelected className='text-white' size={20} />}
            </div>
            <p className='text-[#ababab] text-sm font-semibold'>{menu.items.length} Items</p>
          </div>
        ))}
      </div>

      <hr className='border-[#2a2a2a] border-t-2 mt-4' />
      {/* --------------------------------------------------------------------------------------------------------------------------------------- */}

      <div className='grid grid-cols-4 gap-4 px-10 py-4 w-[100%]'>
        {selected?.items?.map((item) => (
          <div
            key={item.id}
            className='flex flex-col items-start justify-between p-4 rounded-lg h-[150px] bg-[#1a1a1a] hover:bg-[#2a2a2a]'
          >
            <div className='flex items-start justify-between w-full'>
              <h1 className='text-[#f5f5f5] text-lg font-semibold'>{item.name}</h1>
              <button onClick={() => handleAddToCart(item)} className='bg-[#2e4a40] text-[#02ca3a] p-2 rounded-lg cursor-pointer'><FaShoppingCart /></button>
            </div>
            <div className='flex items-center justify-between w-full'>
              <p className='text-white text-xl font-bold'>${item.price}</p>
              <div className='w-[120px] flex items-center justify-between bg-[#1f1f1f] px-4 py-3 rounded-lg gap-6'>
                <button onClick={() => decrement(item.id)} className='text-yellow-500 text-2xl hover:bg-[#2a2a2a] cursor-pointer'>&minus;</button>
                <span className='text-white'>{itemCounts[item.id] || 0}</span>
                <button onClick={() => increment(item.id)} className='text-yellow-500 text-2xl hover:bg-[#2a2a2a] cursor-pointer'>&#43;</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default MenuContainer
