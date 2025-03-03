import React from "react";
import { FaHeartbeat } from "react-icons/fa";

function WhyisFree() {
  return (
    <div className="w-full ">
      <div className="w-[80%] md:w-[67%] mx-auto flex flex-col md:flex md:flex-row md:py-20 justify-between">
        <div className="md:w-[45%] ">
          <h2>
            <span className="text-3xl tracking-wide">
              Why is FreeWill free?
            </span>
          </h2>
          <p className="mt-5 tracking-wide text-slate-800 font-light text-[15px]">
            Our mission is to enable you to do the most good for the people and
            causes you love, by providing free access to will-making services.
            We've partnered with{" "}
            <span class="freeWillFreePartnerCountClass">1900+</span> nonprofits
            and businesses who support our mission and help ensure you can
            create a will for free, while raising more than{" "}
            <span class="freeWillFreeBequestsAmountClass">$11.3B+</span> in
            bequests to charities.
          </p>{" "}
          <p className="mt-3 tracking-wide text-slate-800 font-light text-[15px]">
            One in six people who use FreeWill choose to leave a bequest to
            charity. They believe, as we do, that leaving a bequest to nonprofit
            organizations in your will can be an incredibly powerful way to make
            an impact for the causes you support.
          </p>
          <a href="/will">
            <button className="bg-custom-pink text-white px-3 py-1.5 rounded-sm font-extralight text-md tracking-wide mt-6 transition-border duration-150 ease-in-out hover:bg-pink-700">
              Make your free will today
            </button>
          </a>
        </div>

        <hr className=" bg-slate-300 md:h-80 h-[1px] w-full mt-10  my-auto md:w-[1px]"></hr>
        <div className="md:w-[40%] flex flex-col justify-center mt-14 mb-20 space-y-4">
          <div className="flex items-center p-2 gap-4">
            <div className="w-12 h-12 rounded-full bg-slate-200 p-3.5">
              <FaHeartbeat size={22} />
            </div>
            <p className="tracking-wide text-slate-800 font-light">
              100% free — no credit card required
            </p>
          </div>
          <div className="flex items-center p-2 gap-4">
            <div className="w-12 h-12 rounded-full bg-slate-200 p-3.5">
              <FaHeartbeat size={22} />
            </div>
            <p className="tracking-wide text-slate-800 font-light">
              Supported by nonprofits
            </p>
          </div>
          <div className="flex items-center p-2 gap-4">
            <div className="w-12 h-12 rounded-full bg-slate-200 p-3.5">
              <FaHeartbeat size={22} />
            </div>
            <p className="tracking-wide text-slate-800 font-light">
              We never sell your personal data
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyisFree;
