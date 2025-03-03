import React from "react";
import Family from "../assets/Family.jpg";

function Legacy() {
  return (
    <div className="w-full">

      <div className="w-[80%] md:w-[67%] mx-auto flex flex-col md:flex md:flex-row py-32 justify-between">
        <div className="md:w-[45%]">
          <h2>
            <span className="text-3xl tracking-wide">
              Leave a lasting legacy{" "}
            </span>
          </h2>
          <p className="mt-5 tracking-wide font-light text-slate-800 text-[15px]">
            We’re on a mission to help people plan for the future while doing
            the most good for the people and causes they care about.
          </p>
          <p className="mt-3 tracking-wide font-light text-slate-800 text-[15px]">
            By using FreeWill, you help keep this service free for everyone no
            matter their circumstances. If you choose to commit a small gift to
            a nonprofit, you’ll also be helping them continue their work for
            generations to come, all at no cost to you during your lifetime.
          </p>
          <a href="/will">
            <button className="bg-custom-pink text-white px-3 py-1.5 rounded-sm font-extralight text-md tracking-wide mt-5  transition-border duration-150 ease-in-out hover:bg-pink-700">
              Make my will today
            </button>
          </a>
        </div>

        <div className="md:w-[40%] mt-20 md:mt-6 flex flex-col justify-center  space-y-4">
          <img src={Family} alt="logo" />
        </div>
      </div>

      <div className="w-full bg-red-50">
        <div className="w-[80%] md:w-[67%] mx-auto flex flex-col md:flex-row py-6">
          <div className="md:w-1/2">
            <h1 className="text-[82px] font-normal tracking-wider">1.2M+</h1>
            <p className="tracking-wide text-slate-600">Wills created</p>
          </div>
          <div className="md:w-1/2">
            <h1 className="text-[82px] font-normal tracking-wider">$11.3B+</h1>
            <p className="tracking-wide text-slate-600">Committed to nonprofit</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Legacy;
