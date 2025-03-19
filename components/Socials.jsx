import Link from "next/link"
import 
{ 
  RiInstagramFill,
  RiFacebookFill,
   RiTwitterFill, 
   RiYoutubeFill 
  } from "react-icons/ri";

const socials =[
{
  icon:<RiFacebookFill/>,
  path:"",
},
{
  icon:<RiInstagramFill/>,
  path:"",
},
{
  icon:<RiTwitterFill/>,
  path:"",
},
{
  icon:< RiYoutubeFill/>,
  path:"",
},
]
const Socials = () => {
  return (
    <div className="flex space-x-4">
    {socials.map((social, index) => (
      <Link
        key={index}
        href={social.path}
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl text-gray-500 hover:text-blue-500 transition-transform transform hover:scale-110"
      >
        {social.icon}
      </Link>
    ))}
  </div>
  )
}

export default Socials
