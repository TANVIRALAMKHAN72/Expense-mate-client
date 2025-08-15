import React from "react";

const Hero = () => {
  return (
   <section className="w-full min-h-screen bg-black text-white py-20 flex items-center justify-center">
  <div className="container mx-auto px-4 text-center">
    <h1 className="text-3xl md:text-5xl font-bold mb-4">
      Track Your Expenses Easily
    </h1>
    <p className="text-lg md:text-2xl mb-8">
      Stay on top of your spending and manage your money wisely.
    </p>
    <button className="bg-white text-black font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">
      Get Started
    </button>
  </div>
</section>

  );
};

export default Hero;
