import React from "react";
import RatesItems from "./RatesItems";

export default function Rates() {
  return (
    <div className="bg-slate-100 mt-7 ml-4">
      <h1 className="text-2xl font-thin mb-3">How much I charge</h1>
      <div className="flex gap-3 opacity-55">
        {/* <div className="w-full hover:opacity-100">
          <ul className="flex flex-col items-center">
            <li className="bg-black w-full text-center py-5 text-2xl border-none text-white border-zinc-700">
              Basic
            </li>
            <li className="border-2 py-3 w-full text-center border-t-0">
              Web Design
            </li>
            <li className="border-2 py-3 w-full text-center border-t-0">
              Photography
            </li>
            <li className="border-2 py-3 w-full text-center border-t-0">
              1GB Storage
            </li>
            <li className="border-2 py-3 w-full text-center border-t-0">
              Mail Support
            </li>
            <li className="border-2 py-3 w-full text-center border-t-0">
              <span>$ 10</span>
              <br />
              <span>per month</span>
            </li>
            <li className="border-2 py-3 w-full text-center border-t-0  ">
              <button className="bg-blue-500 hover:bg-black  hover:text-white px-8 py-3">
                Sign Up
              </button>
            </li>
          </ul>
        </div>
        <div className="w-full">
          <ul className="flex flex-col items-center">
            <li className="bg-black w-full text-center py-5 text-2xl border-none text-white border-zinc-600">
              Basic
            </li>
            <li className="border-2 py-3 w-full text-center border-t-0">
              Web Design
            </li>
            <li className="border-2 py-3 w-full text-center border-t-0">
              Photography
            </li>
            <li className="border-2 py-3 w-full text-center border-t-0">
              1GB Storage
            </li>
            <li className="border-2 py-3 w-full text-center border-t-0">
              Mail Support
            </li>
            <li className="border-2 py-3 w-full text-center border-t-0">
              <span>$ 10</span>
              <br />
              <span>per month</span>
            </li>
            <li className="border-2 py-3 w-full text-center border-t-0 ">
              <button className="bg-blue-500 hover:bg-black  hover:text-white px-8 py-3">
                Sign Up
              </button>
            </li>
          </ul>
        </div> */}
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
