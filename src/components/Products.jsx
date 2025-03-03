import React from "react";
import { FaHeartbeat } from "react-icons/fa";

function Products() {
  return (
    <div className="w-full h-auto py-10 mt-2 ">

      <div className="w-[85%] md:w-[67%] mx-auto">
        <h1 className="text-xl font-normal tracking-wide">
          Other FreeWill products
        </h1>
        <hr className="mt-3 bg-slate-500 h-[1px] w-full"></hr>
      </div>

      <div className="w-[85%] md:w-[67%] mx-auto mb-8 mt-1 flex flex-col md:flex md:flex-row flex-wrap">

        <div className="flex w-1/2 p-2 space-x-7 mt-4 ">
          <div className="bg-red-300 w-12 h-12 rounded-full p-2">
            <FaHeartbeat className=" w-8 h-8" />
          </div>
          <div className="flex flex-col">
            <h1 className="font-medium text-md tracking-wide">Living Will</h1>
            <p className="mt-3 font-light">Use an advance healthcare directive, or living will, to specify your healthcare wishes and appoint someone to make decisions on your behalf if you’re unable.</p>
            <button className="border mt-6 border-custom-pink text-custom-pink w-48 py-1.5 rounded-sm font-light">
                Learn about living wills
              </button>
          </div>
        </div>

        <div className="flex w-1/2 p-2 space-x-7 mt-4 ">
          <div className="bg-orange-300 w-12 h-12 rounded-full p-2">
            <FaHeartbeat className=" w-8 h-8" />
          </div>
          <div className="flex flex-col">
            <h1 className="font-medium text-md tracking-wide">Durable Financial Power of Attorney (DFPOA)</h1>
            <p className="mt-3 font-light">Keep your financial accounts accessible and bills paid by appointing someone to make financial decisions on your behalf if you’re unable.</p>
            <button className="border mt-6 border-custom-pink text-custom-pink w-48 py-1.5 rounded-sm font-light">
                Learn about living wills
              </button>
          </div>
        </div>

        <div className="flex w-1/2 p-2 space-x-7 mt-4 ">
          <div className="bg-green-300 w-12 h-12 rounded-full p-2">
            <FaHeartbeat className=" w-8 h-8" />
          </div>
          <div className="flex flex-col">
            <h1 className="font-medium text-md tracking-wide">Beneficiary Designations</h1>
            <p className="mt-3 font-light">Document and distribute assets that your last will and testament does not cover, including 401(k)s, IRAs, and life insurance policies.</p>
            <button className="border mt-6 border-custom-pink text-custom-pink w-48 py-1.5 rounded-sm font-light">
                Learn about living wills
              </button>
          </div>
        </div>

        <div className="flex w-1/2 p-2 space-x-7 mt-4 ">
          <div className="bg-slate-300 w-12 h-12 rounded-full p-2">
            <FaHeartbeat className=" w-8 h-8" />
          </div>
          <div className="flex flex-col">
            <h1 className="font-medium text-md tracking-wide">Revocable Living Trusts</h1>
            <p className="mt-3 font-light">Create a revocable living trust and fulfill many functions of a last will and testament. Also, placing assets in a trust can avoid California’s lengthy probate process.</p>
            <button className="border mt-6 border-custom-pink text-custom-pink w-48 py-1.5 rounded-sm font-light">
                Learn about living wills
              </button>
          </div>
        </div>

       
      </div>
    </div>
  );
}

export default Products;
