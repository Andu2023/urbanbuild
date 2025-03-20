import Link from "next/link"
import Image from "next/image";
const Logo = () => {
  return (
    <Link href="/">
    <Image 
      src="/assets/logo.svg" 
      width={230} 
      height={48} 
      alt="Company Logo"
      priority 
    />
  </Link>
  )
}

export default Logo
