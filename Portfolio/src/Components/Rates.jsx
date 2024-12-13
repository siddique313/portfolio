import React from "react";
import RatesItems from "./RatesItems";

export default function Rates() {
  return (
    <div className="bg-slate-100 mt-7 ml-4">
      <h1 className="text-2xl font-thin mb-3">How much I charge</h1>
      <div className="flex gap-3 opacity-55">
        <RatesItems BasicColor={"bg-black"} storage={"1 GB"} rupies={"10"} />
        <RatesItems
          BasicColor={"bg-blue-500"}
          storage={"50 GB"}
          rupies={"25"}
        />
        <RatesItems
          BasicColor={"bg-black"}
          storage={"Unlimited "}
          rupies={"25"}
        />
      </div>
    </div>
  );
}
