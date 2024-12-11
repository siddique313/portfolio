import React from "react";

export default function RatesItems({ BasicColor, storage, rupies }) {
  return (
    <div className="w-full">
      <ul className="flex flex-col items-center">
        <li
          className={`${BasicColor} w-full text-center py-5 text-2xl border-none text-white border-zinc-600`}
        >
          Basic
        </li>
        <li className="border-2 py-3 w-full text-center border-t-0">
          Web Design
        </li>
        <li className="border-2 py-3 w-full text-center border-t-0">
          Photography
        </li>
        <li className="border-2 py-3 w-full text-center border-t-0">
          {storage} Storage
        </li>
        <li className="border-2 py-3 w-full text-center border-t-0">
          Mail Support
        </li>
        <li className="border-2 py-3 w-full text-center border-t-0">
          <span>$ {rupies}</span>
          <br />
          <span>per month</span>
        </li>
        <li className="border-2 py-3 w-full text-center border-t-0 ">
          <button className="bg-blue-500 hover:bg-black  hover:text-white px-8 py-3">
            Sign Up
          </button>
        </li>
      </ul>
    </div>
  );
}
