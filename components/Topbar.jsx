import { RiPhoneFill, RiMailFill } from "react-icons/ri";
import Socials from "./Socials";


const Topbar = () => {
  return (
    <section  
    className=" bg-gradient-to-r from-orange-500 via-red-500 to-yellow-400 text-white py-4 xl:h-16 xl:py-0 "
    id="home">
      <div className="container mx-auto ">
        {/* phone mail */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className=" hidden xl:flex items-center gap-8 ">
        <div className="   flex items-center gap-3 ">
          <div className=" w-8 h-8 bg-gray-950 text-white  flex items-center gap-3 justify-center">
            <RiPhoneFill/>
          </div>
          <p className="font-medium text-gray-950">+2519386988888</p>
          <div className=" w-8 h-8 bg-gray-950 text-white  flex items-center justify-center">
            <RiMailFill/>
          </div>
          <p className="font-medium text-gray-950">example@gmail.com</p>
          </div>
          </div>
          {/*socials */}
          <Socials/>
     </div>
        </div>
    </section>
  )
}

export default Topbar
