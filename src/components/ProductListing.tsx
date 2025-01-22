import React from "react";
import Image from "next/image";
import Listing from "./Listing";
import Features from "./Features";

const AboutDandyChair = () => {
  return (
    <section className="max-w-[1440px] mx-auto p-8 bg-white">
      {/* Image and Details Section */}
      <div className="flex flex-col lg:flex-row">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 h-[500px] lg:h-[759px] relative mb-6 lg:mb-0">
          <Image
            src="/images/DandyChair.png"
            alt="The Dandy Chair"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Details Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-start p-4 lg:p-10">
          <h1 className="text-3xl font-bold mb-4">The Dandy Chair</h1>
          <p className="text-xl font-semibold text-gray-800 mb-4">£250</p>
          <p className="text-base lg:text-[16px] text-gray-700 mb-6">
            A timeless design, with premium materials features as one of our most<br /> popular and iconic pieces. The Dandy Chair is perfect for any stylish<br /> living space with beech legs and lambskin leather upholstery.
          </p>
          <ul className="list-disc list-inside mb-6 text-base lg:text-lg text-gray-700">
            <li>Premium material</li>
            <li>Handmade upholstery</li>
            <li>Quality timeless classic</li>
          </ul>
          <div className="text-base lg:text-lg text-gray-700 mb-6">
            <p>Height: 110cm</p>
            <p>Width: 75cm</p>
            <p>Depth: 50cm</p>
          </div>
          <div className="flex items-center mb-6">
            <button className="px-4 py-2 border border-gray-300">-</button>
            <input
              type="text"
              value="1"
              className="w-12 text-center border-t border-b border-gray-300"
            />
            <button className="px-4 py-2 border border-gray-300">+</button>
          </div>
          <button className="px-36 lg:px-6 py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800">
            Add to cart
          </button>
        </div>
      </div>

      {/* Importing Components */}
      <div className="mt-12">
        <h1 className="p-10 text-xl font-semibold text-gray-800">
          You might also like
        </h1>
        <Listing />
        <Features />
      </div>
      {/* Join Section */}
      <div className=" inset-0 flex flex-col items-center justify-center text-balck p-24 bg-black bg-opacity-0">
          <h2 className="text-3xl font-bold mb-4">
          Join the club and get the benefits
          </h2>
          <p className=" mb-6 text-center">
            Sign up for our newsletter and receive exclusive offers on <br />
            new ranges, sales, pop-up stores, and more
          </p>
          <div className="flex sm:flex-row w-full max-w-sm">
            <input
              type="email"
              placeholder="your@email.com"
              className="px-4 py-2 mb-4 sm:mb-0 sm:mr-2 text-black"
            />
            <button className="px-6 py-2 bg-blue-500 text-white font-medium hover:bg-blue-700">
              Sign up
            </button>
          </div>
        </div>
    </section>
  );
};

export default AboutDandyChair;
