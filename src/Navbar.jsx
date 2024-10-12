import React from "react";
import { FaShoppingCart, FaSearch } from 'react-icons/fa';
import { FaBars, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar({cartLength}) {
  const [open, setOpen] = useState(false)
  const [bar, setBar] = useState(true)
  const [arrow, setArrow] = useState(true);
  const [innerWidth, setInnerWidth] = useState(0);

  window.addEventListener("resize", () => {
    setInnerWidth(window.innerWidth);
    if (window.innerWidth >= 768) {
      setOpen(true);
      setBar(false);
      setArrow(false);
    }
    else {
      setBar(true);
      setOpen(false);
      setArrow(true);
    }
  });

  return (
    
    <div className="flex mt-0 z-10 sm:justify-around justify-between bg-white positon-relative position-fixed border-b-[3px]">
      {bar && !open && <div onClick={() => setOpen(!open)} className="text-3xl p-3 display-none">
        <FaBars></FaBars>
      </div>}      
      {arrow && open && <div onClick={()=>setOpen(!open)} className="p-1 h-[40px] hover:bg-[#ccc] hover:rounded-full cursor-pointer flex items-center">
        <FaArrowLeft></FaArrowLeft>
      </div>}
      {open && <ul className={`${innerWidth < 768?'postion-absolute top-0 left-0':'flex items-center gap-5'}`}>
        <li className="hover:bg-[#9740E3] hover:text-white hover:rounded-md hover:px-2 px-2 text-[16px] font-bold"><Link to={"/"}>Home</Link></li>
        <li className="hover:bg-[#9740E3] hover:text-white hover:rounded-md hover:px-2 px-2 text-[16px] font-bold"><Link to={"/mobiles"}>Mobiles</Link></li>
        <li className="hover:bg-[#9740E3] hover:text-white hover:rounded-md hover:px-2 px-2 text-[16px] font-bold"><Link to={"/electronics"}>Electronics</Link></li>
        <li className="hover:bg-[#9740E3] hover:text-white hover:rounded-md hover:px-2 px-2 text-[16px] font-bold"><Link to={"/fashion"}>Fashion</Link></li>
        <li className="hover:bg-[#9740E3] hover:text-white hover:rounded-md hover:px-2 px-2 text-[16px] font-bold"><Link to={"/accessories"}>Accessories</Link></li>
      </ul>}  
      <div className="position-absolute top-0 w-[40%] xl:w-[50%] rounded-l-full bg-white flex justify-center items-center ">
        <input type="text" placeholder="...search items" className="rounded-l-full p-2 w-[50%] h-[40px] bg-white  border-[2px] focus:border- text-black" />
        <div className="z-3 w-[10%] h-[40px] xl:w-[15%] flex items-center justify-center bg-slate-300 rounded-r-md">
        <FaSearch className="text-gray-700 cursor-pointer"/>
        </div>
      </div>
      <div className="w-[20%]  flex justify-end items-center mr-5 cursor-pointer">
        <Link to={"/cart"} className="w-[50px] h-[50px] translate-x-[10px]"></Link>
      <FaShoppingCart className="w-[50px] h-[50px] text-[#9740E3]" />
        {cartLength>0 && <span className={`h-4 w-4 self-start rounded-full bg-[#facc15] ${open?'mt-8':'-mt-8'} -ml-2 place-content-center text-black text-[12px]`}>{cartLength}</span>}
      </div>
    </div>
  )
}

export default Navbar
