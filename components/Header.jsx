"use client";
import { RiArrowRightUpFill } from "react-icons/ri";
import { Link as ScrollLink } from "react-scroll"
import Logo from "./Logo";
import NavMobile from "./NavMobile";
const Links= [
  {
  name:"home",
  path:"home",
},
{
  name:"about",
  path:"about",
},
{
  name:"services",
  path:"services",
},
{
  name:"projects",
  path:"projects",
},
{
  name:"contact",
  path:"contact",
},

{
  name:"blog",
  path:"blog",
},

]
const Header = () => {
  return (
    <header className=" bg-black text-white py-4 ">
   <div className="container mx-auto ">

    <div className=" flex items-center justify-between gap-4  ">
   {/* logo */}
    <Logo/>
    {/* nav */}
   <nav className=" hidden sm:flex items-center gap-12">
   <ul  
   className=" flex">
    {Links.map((link,index)=>{
      return(
        <li key={index} className="list-none text-white text-sm uppercase font-gray-950 font-medium tracking-[1.2px] after:mx-4 last:after:content-none  after:text-accent" >
          <ScrollLink 
          to={link.path}
          smooth spy
          className="cursor-pointer text-white hover:text-accent transition-all duration-300"
              activeClass="text-accent font-bold"
         >
              {link.name.charAt(0).toUpperCase() + link.name.slice(1)}
            </ScrollLink>
        </li>
      )
    })}
   </ul>
   {/* btn */}
   <button  className="w-[200px] h-[54px] py-[5px] pl-[10px] pr-[5px] flex items-center justify-between min-w-[200px] bg-white group">
    <div className="flex-1 text-center tracking-[1.2px] font-black  text-gray-950 text-sm uppercase">
      Get a quote
    </div>
    <div className="w-11 h-11 bg-gray-950 flex items-center justify-center">
      <RiArrowRightUpFill className="text-white text-xl group-hover:rotate-45 transition-all duration-200"/>
    </div>
   </button>
   </nav>
   {/* nav mobile */}
   <div className=" xl:hidden">
    <NavMobile/>

   </div>
   </div>
   </div>
     </header>
  )
}

export default Header
