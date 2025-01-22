import React from "react";
import Image from "next/image";
import Link from "next/link";

function Features2() {
  return (
    <section className="max-w-[1440px] mx-auto py-16 px-8 bg-white flex flex-col lg:flex-row items-center lg:justify-between">
      {/* Left Section */}
      <div className="w-full lg:w-[630px] h-[478px] bg-[#2C2C54] text-white p-8 flex flex-col justify-between mb-8 lg:mb-0">
        <div>
          <h2 className="text-3xl font-bold mb-4">It started with a small idea</h2>
          <p className="text-lg mb-6">
            A global brand with local beginnings, our story began in a small studio in South London in early 2014.
          </p>
        </div>
        <button className="bg-[#4A4A6A] text-white px-6 py-3 font-medium cursor-pointer hover:bg-[#3a3a5a]">
        <Link href="/product-listings">View collection</Link>
        </button>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-[630px] h-[478px] relative">
        <Image
          src="/images/features2.png"
          alt="Modern interior design with a yellow chair"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </section>
  );
}

export default Features2;
