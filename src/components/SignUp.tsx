import React from "react";
import Image from "next/image";
import { IoCheckmarkCircleSharp } from "react-icons/io5";

function SignUp() {
  return (
    <section className="max-w-[1440px] mx-auto px-4 sm:px-8 bg-customColors-light-grey">
      <div className="relative w-full h-[444px] bg-cover bg-center overflow-hidden">
        <Image
          src="/images/signup.jpg"
          alt="Newsletter Sign-Up Background"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 flex flex-col items-start md:items-center justify-center text-white p-6 sm:p-8 bg-black bg-opacity-15">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-left md:text-center">
            Join the club and get the benefits
          </h2>
          <p className="text-sm sm:text-base mb-6 text-left md:text-center max-w-md">
            Sign up for our newsletter and receive exclusive offers on new
            ranges, sales, pop-up stores, and more
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-6 items-start md:items-center">
            {["Exclusive offers", "Free events", "Large discounts"].map(
              (benefit, index) => (
                <div
                  key={index}
                  className="flex items-center text-sm sm:text-base"
                >
                  <IoCheckmarkCircleSharp size={20} className="mr-2" />
                  <h4>{benefit}</h4>
                </div>
              )
            )}
          </div>
          <div className="flex flex-col sm:flex-row w-full max-w-sm">
            <input
              type="email"
              placeholder="your@email.com"
              className="px-4 py-3 mb-4 sm:mb-0 sm:mr-2 text-black rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-customColors-dark-primary focus:border-transparent"
            />
            <button className="px-6 py-3 bg-customColors-dark-primary text-white font-medium rounded-md hover:bg-customColors-light-grey hover:text-black transition-colors duration-300">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
