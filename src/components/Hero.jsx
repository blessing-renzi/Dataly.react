import React from "react";
import Button from "./Button";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <main className="h-[88vh] bg-black flex items-center justify-center p-1">
      <div className="layout text-center">
        <h3 className="text-green-400 font-bold md:text-xl md:my-7">
          GROWING WITH DATA ANALYTICS
        </h3>
        <h1 className="text-white font-bold text-3xl my-4 md:text-7xl md:mb-10">
          GROW WITH DATA.
        </h1>
        <h2 className="text-xl md:text-3xl font-semibold mb-4 text-white">
          Fast, Flexible Financing for
          <ReactTyped
            strings={["BTC", "BTB", "SASS"]}
            typeSpeed={100}
            backSpeed={60}
            loop
            className="text-gray-600 font-bold"
          />
              
        </h2>
        <p className="text-gray-400 font-bold text-xl md:text-3xl mb-4 md:mb-6">
          Monitor your data analytics to increase revenue for BTB, BTC & SASS{" "}
          <br className="hidden md:block" />
          platforms
        </p>
        <Button content={"Get Started"} className={"bg-green-400"} />
      </div>
    </main>
  );
};

export default Hero;
