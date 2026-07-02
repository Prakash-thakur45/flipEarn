import React from "react";
import {PricingTable} from "@clerk/react"

const Plans = () => {
  return (
    <div className="max-w-3xl mx-auto my-30 z-20 p-3 max-md:px-4">
      <div className="text-center">
        <h3 className="text-gray-700 font-semibold text-4xl">
          Choose Your Plan
        </h3>
        <p className="text-gray-500 text-sm max-w-md mx-auto">
          Start for free and scale up as grow. Find the perfect plan for your
          content creation needs.
        </p>
      </div>

      <div className="mt-14">
        <PricingTable />
      </div>
    </div>
  );
};

export default Plans;
