import React from 'react'
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { IoLogoSkype } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io5";
import { IoLogoPinterest } from "react-icons/io5";

function Footer() {
  return (
    <footer className="bg-customColors-dark-primary text-white py-8">
      <div className="max-w-[1440px] mx-auto container grid grid-cols-2 p-3 md:grid-cols-4 gap-8">
        {/* Menu Section */}
        <div>
          <h4 className="font-bold mb-4">Menu</h4>
          <ul className="space-y-2">
            <li>New arrivals</li>
            <li>Best sellers</li>
            <li>Recently viewed</li>
            <li>Popular this week</li>
            <li>All products</li>
          </ul>
        </div>
        {/* Categories Section */}
        <div>
          <h4 className="font-bold mb-4">Categories</h4>
          <ul className="space-y-2">
            <li>Crockery</li>
            <li>Furniture</li>
            <li>Homeware</li>
            <li>Plant pots</li>
            <li>Chairs</li>
            <li>Crockery</li>
          </ul>
        </div>
        {/* Our Company Section */}
        <div>
          <h4 className="font-bold mb-4">Our company</h4>
          <ul className="space-y-2">
            <li>About us</li>
            <li>Vacancies</li>
            <li>Contact us</li>
            <li>Privacy</li>
            <li>Returns policy</li>
          </ul>
        </div>
        {/* Mailing List Section */}
        <div>
          <h4 className="font-bold mb-4">Join our mailing list</h4>
          <form className="flex flex-col md:flex-row">
            <input
              type="email"
              placeholder="your@email.com"
              required
              className="p-3 mb-2 md:mb-0 bg-customColors-primary text-black md:mr-2 flex-grow"
            />
            <button className="p-3 bg-customColors-light-grey text-black font-medium hover:bg-gray-800 hover:text-white transition-colors duration-300">
              Sign up
            </button>
          </form>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="max-w-[1440px] mx-auto mt-8 border-t border-gray-700 pt-4 px-4 md:px-0">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">Copyright 2022 Avion LTD</p>
          <div className="flex items-center gap-6">
            <IoLogoLinkedin size={30} />
            <IoLogoFacebook size={30} />
            <FaInstagram size={30} />
            <IoLogoSkype size={30} />
            <IoLogoTwitter size={30} />
            <IoLogoPinterest size={30} />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
