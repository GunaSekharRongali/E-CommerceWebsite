import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Accesssories = () => {
  const [items, setItems] = useState([]);

    const fetchItems = async () => {
        try {
          let res = await fetch('https://fakestoreapi.com/products/category/jewelery');
          let data = await res.json();
          setItems(data);
        } catch (error) {
          console.error("Failed to fetch items", error);
          // Display error message to the user
        }
      };
      
      useEffect(()=>{
        fetchItems()
      },[])
  return (
    <div  className="mt-[70px]">
      <div className='text-white bg-grey-300 px-0 mt-0 w-full h-[200px] flex flex-wrap justify-center gap-[20px]' >
      {items.map((item)=>{
      return(
        <div key={item.id} className='hover:scale-105 hover:z-0 rounded-3xl transition delay-150 ease-in-out bg-white
        ml-3 mb-5 bg-grey-500 w-[44%] sm:w-[48%] sm:ml-0 h-[350px] md:w-[31%] md:ml-0 
        lg:w-[23%] lg:ml-0 xl:w-[18%]  2xl:w-[15%]  flex flex-col justify-between border border-black p-1'>
         <div className='bg-slate-500 rounded-3xl rounded-b-none flex justify-center items-center '>
           <img className='mt-5 rounded-lg  object-contain w-[150px] h-[140px] ' src={item.image} alt="" />
         </div>
         <div className='rounded-b-3xl p-2'>
         <p className="text-black self-start"><span className="text-black text-[20px] -ml-20">${item.price}</span></p>
         <h1 className='text-black text-[15px] truncate'>{item.title}</h1>
         {/* <p className='text-black text-sm text-black -ml-20'>Rating:{item.rating.rate}</p> */}
         </div>
         <div>
         <button onClick={()=>AddToCart(item)} className='rounded-lg bg-[#9740E3] w-[75%] self-center mt-5 hover:bg-[#9700E3] focus:outline-none
         focus:ring mb-5 transition delay-150 ease-in-out'>Add To Cart</button>
         </div>
        <Link to={`/product/${item.id}`} className={'text-black text-[15px]'}>See the Product</Link>
       </div>
    )
    })}</div>
      
    </div>
  )
}

export default Accesssories
