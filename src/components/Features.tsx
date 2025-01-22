import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { FaRegCreditCard } from "react-icons/fa6";
import { LuSprout } from "react-icons/lu";

function BrandDifferentiators() {
  return (
    <section className="max-w-[1440px] mx-auto py-16 items-right bg-white flex-none order-2 flex-grow-0">
      {/* Main Heading */}
      <h2 className="text-3xl font-bold text-center mb-12">
        What makes our brand different
      </h2>
      {/* Branding Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col items-start bg-gray-50 p-6 h-[244px] hover:shadow-lg hover:scale-105 transition-transform duration-300">
          <TbTruckDelivery size={48} className="mb-4" />
          <h3 className="text-lg font-semibold mb-2">Next day as standard</h3>
          <p className="text-gray-600 text-left">
            Order before 3pm and get your order the next day as
            standard.
          </p>
        </div>
        <div className="flex flex-col items-start bg-gray-50 p-6 h-[244px] hover:shadow-lg hover:scale-105 transition-transform duration-300">
          <IoCheckmarkCircleOutline size={38} className="mb-4" />
          <h3 className="text-lg font-semibold mb-2">Made by true artisans</h3>
          <p className="text-gray-600 text-left">
            Handmade crafted goods made with real passion and
            craftsmanship.
          </p>
        </div>
        <div className="flex flex-col items-start bg-gray-50 p-6 h-[244px] hover:shadow-lg hover:scale-105 transition-transform duration-300">
          <FaRegCreditCard size={38} className="mb-4" />
          <h3 className="text-lg font-semibold mb-2">Unbeatable prices</h3>
          <p className="text-gray-600 text-left">
            For our materials and quality, you wont find better prices
            anywhere.
          </p>
        </div>
        <div className="flex flex-col items-start bg-gray-50 p-6 h-[244px] hover:shadow-lg hover:scale-105 transition-transform duration-300">
          <LuSprout size={38} className="mb-4" />
          <h3 className="text-lg font-semibold mb-2">Recycled packaging</h3>
          <p className="text-gray-600 text-left">
            We use 100% recycled materials to ensure our footprint is more
            manageable.
          </p>
        </div>
      </div>
    </section>
  );
}

export default BrandDifferentiators;
