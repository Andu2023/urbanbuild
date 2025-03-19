"use client";
import { Link as ScrollLink } from "react-scroll"
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
const Header = () => {
  return (
    <header className=" bg-black text-white py-4 sticky top-0">
   <div className="container mx-auto">
   <ul  
   className="flex justify-center gap-12">
    {Links.map((link,index)=>{
      return(
        <li key={index} className="list-none">
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
   </div>
     </header>
  )
}

export default Header
