"use client";
import { useState,useEffect } from 'react'
import { 
  Sheet,
  SheetContent,SheetDescription,
  SheetHeader,
  SheetTitle,
SheetTrigger,
SheetFooter } from  '@/components/ui/sheet'
import { RiMenu3Line } from 'react-icons/ri'
import Logo from './Logo';
import Socials from './Socials';
import { Link as ScrolLink } from 'react-scroll';
import { Link } from 'lucide-react';
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


]

const NavMobile = () => {
  const [isOpen, setIsOpen]=useState(false);
    // ✅ Close the menu when resizing to larger screens
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth >= 768) { // Adjust for your breakpoint
          setIsOpen(false);
        }
      };
  
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
return<Sheet open={isOpen} onOpenChange={setIsOpen}>
  <SheetTrigger className="text-white flex items-center justify-center text-3xl"
  onClick={()=>setIsOpen(true)}>
    <RiMenu3Line/>
  </SheetTrigger>
  <SheetContent className="bg-gray-950 border-none text-white">
 <div className=" flex flex-col h-full pt-16 pb-8 items-center justify-between">
  <SheetHeader>
    <SheetTitle>
      <Logo/>
    </SheetTitle>
    <SheetDescription className="sr-only">
      Navgation menu
    </SheetDescription>
  </SheetHeader>
  <ul className="w-full 
  flex flex-col gap-10 justify-center text-center">
    {Links.map((Link, index)=>{
      return(
        <li key={index}
        className="text-white uppercase font-medium tracking-[1.2px] "
        >
         <ScrolLink 
         to={Link.path}
         smooth
         spy
         duration={500}
         className="cursor-pointer"
         activeClass="text-accent"
         onClick={()=>setIsOpen(false)}//close menu on click
         >
        {Link.name}
         </ScrolLink>
        </li>
      )
    })}
  </ul>
 </div>
  </SheetContent>
</Sheet>
}

export default NavMobile
