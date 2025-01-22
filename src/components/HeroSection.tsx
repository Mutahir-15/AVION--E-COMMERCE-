import React from "react";
import Image from "next/image";
import Link from "next/link";

function HeroSection() {
  return (
    <section className="relative max-w-[1440px] mx-auto bg-white">
      {/* Background Image */}
      <div className="relative h-[304px] sm:h-[500px] md:h-[709px] w-full">
        <Image
          src="/images/HSimage1.jpg"
          alt="Hero Section Image"
          layout="fill"
          className="object-cover bg-cover bg-center"
        />
      </div>

      {/* Text Box */}
      <div className="absolute top-1/2 right-0 md:right-5 lg:right-16 transform -translate-y-1/2 w-11/12 sm:w-3/4 md:w-3/5 lg:w-2/5 bg-white py-10 px-6 sm:py-12 sm:px-8 md:py-16 md:px-12 text-left shadow-lg rounded-lg">
        <div className="flex flex-col items-start gap-6">
          {/* Heading */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 leading-snug">
            Luxury homeware for people who love timeless design quality
          </h1>
          {/* Subheading */}
          <p className="mt-2 text-gray-600 text-sm sm:text-base md:text-lg">
            Shop the new Spring 2022 collection today
          </p>
          {/* Button */}
          <button className="mt-8 px-4 py-2 sm:px-6 sm:py-3 bg-customColors-dark-primary text-white font-medium hover:bg-customColors-border-dark hover:text-black transition-colors duration-300 rounded">
            <Link href="/product-listings">View collection</Link>
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
