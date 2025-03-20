"use client";
import { useState } from 'react'
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
return<Sheet open={isOpen} OnOpenChange={setIsOpen}>
  <SheetTrigger className="text-white flex items-center justify-center text-3xl"
  onClick={()=>setIsOpen(true)}>
    <RiMenu3Line/>
  </SheetTrigger>
  <SheetContent className="bg-gray-950 border-none text-white">
 <div>
  <SheetHeader>
    <SheetTitle>
      <Logo/>
    </SheetTitle>
  </SheetHeader>
 </div>
  </SheetContent>
</Sheet>
}

export default NavMobile
