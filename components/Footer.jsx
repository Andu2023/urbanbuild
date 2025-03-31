import Link from "next/link";
import { FaTelegram, FaFacebook, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 font-axiforma">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full text-center md:text-left">
          <div>
            <h5 className="font-bold text-lg mb-4">QUICK LINKS</h5>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-gray-400">HOMEPAGE</Link></li>
              <li><Link href="/vacancy" className="hover:text-gray-400">Vacancy</Link></li>
              <li><Link href="/event" className="hover:text-gray-400">Event</Link></li>
              <li><Link href="/news" className="hover:text-gray-400">News</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-lg mb-4">Rules</h5>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-gray-400">About Us</Link></li>
              <li><Link href="/faq" className="hover:text-gray-400">FAQ</Link></li>
              <li><Link href="/live-meeting" className="hover:text-gray-400">Live Meeting</Link></li>
              <li><Link href="/contact" className="hover:text-gray-400">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-lg mb-4">FOLLOW US</h5>
            <div className="flex justify-center md:justify-start space-x-4">
              <Link href="#" className="text-xl hover:text-gray-400"><FaTelegram /></Link>
              <Link href="#" className="text-xl hover:text-gray-400"><FaFacebook /></Link>
              <Link href="#" className="text-xl hover:text-gray-400"><FaYoutube /></Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-10 border-t border-gray-700 pt-4 text-center text-sm">
        <p>Copyright 2017 - All rights reserved</p>
        <p className="mt-2">Developed by <Link href="#" className="hover:text-gray-400">Andy & Sim</Link></p>
      </div>
    </footer>
  );
}

export default Footer
