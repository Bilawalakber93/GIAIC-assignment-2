import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className=" bg-[#252B42] text-white w-1322 h-91">
      <nav className="flex items-center px-52 w-18 h-20 pt-17px pl-364">
        <div className="text-xl font-bold mr-36 "><h3>BrandName</h3></div>
        <div className="space-x-6 font-medium mr-auto">
          <Link href="#" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="#" className="hover:text-gray-300">
            Product
          </Link>
          <Link href="#" className="hover:text-gray-300">
            Pricing
          </Link>
          <Link href="#" className="hover:text-gray-300">
            Contact
          </Link>
        </div>
        <div className="space-x-4 ">
          <button className="text-gray-200">Login</button>
          <button className="bg-blue-500 rounded-lg  px-4 py-2  text-[#d9dee2] font-MyCustomeFont">
            JOIN US
            </button>
        </div>
      </nav>
    </div>
  );
}