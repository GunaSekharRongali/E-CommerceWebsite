import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'


const Product = ({AddToCart}) => {
    const {id} = useParams();
    const [item, setItem] = useState({})

    const fetchItems = async () => {
        try {
          let res = await fetch(`https://fakestoreapi.com/products/${id}`);
          let data = await res.json();
          setItem(data);
        } catch (error) {
          console.error("Failed to fetch items", error);
          // Display error message to the user
        }
      };
      
      useEffect(()=>{
        fetchItems()
      },[])
  return (
    <div className='pl-[45px] pt-[10px] pr-[0] w-full h-full flex flex-wrap gap-[20px] bg-white '>
         <div className='sm:p-[20px] md:py-[139px] lg:py-[120px] position-absolute top-0 left-0'>
           <img className=' rounded-lg  object-contain w-[300px] h-[400px]  md:w-[300px] lg:w-[400px] xl:w-[600px] xl:h-[500px] 2xl:w-[700px]' src={item.image} alt="" />
         </div>
         <div className='sm:ml-[20px] flex flex-col justify-center items-center w-[300px] h-[500px] md:w-[350px] lg:w-[350px] lg:h-[550px] xl:w-[400px] 2xl:w-[700px]'>
           <div className='rounded-b-3xl p-2'>
           <p className="text-black self-start"><span className="text-black text-[20px] -ml-20">Price: ${item.price}</span></p>
           <h1 className='text-black w-[100%] text-[20px]'>{item.title}</h1>
           {/* <p className='text-black text-sm text-black -ml-20'>Rating:{item.rating.rate}</p> */}
           </div>
           <div className='w-[100%]'>
            {item.description}
           </div>
           <div>
           <button onClick={()=>AddToCart(item)} className='rounded-lg bg-[#9740E3] w-[120px] h-[50px] self-center mt-5 hover:bg-[#9700E3] focus:outline-none
           focus:ring mb-5 transition delay-150 ease-in-out text-white'>Add To Cart</button>
           </div>
         </div>
    </div>
  )
}

export default Product
