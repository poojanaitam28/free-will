import React from "react";
import { LuNotebookText } from "react-icons/lu";
import { TiTick } from "react-icons/ti";

function FAQs() {
  return (
    <div className=" w-full">
      <div className="w-[80%] flex-col md:flex-row md:w-[67%] mx-auto flex">
        <div className="w-1/2 ">
          <h1 className="text-3xl tracking-wide leading-[47px] mt-14">
            Frequently asked<br></br> questions
          </h1>
        </div>

        <div className="md:w-1/2 flex flex-col space-y-9 mt-16 mb-20">
          <div className="flex flex-col space-y-7">
            <span className="tracking-wide">
              <h1 className="font-medium">
                Can I edit my documents after I'm done?
              </h1>
              <p className="mt-3 font-light text-[15px]">
                You can update your documents on FreeWill at any time, free of
                charge. We know life is always changing, and we're here to help
                you keep your wishes up to date.
              </p>
            </span>
            <span className="tracking-wide">
              <h1 className="font-medium">Where can I learn more?</h1>
              <p className="mt-3 font-light text-[15px]">
                <a href="/learn">Visit the FreeWill blog</a> to read articles
                about the important world of estate planning. Below are also
                some popular resources to help you get started:
              </p>
            </span>
          </div>

          <div>
            <a
              className="shadow-md shadow-black/30 text-inherit block mb-3 p-3 no-underline"
              href="/learn/estate-planning-101"
            >
              <span className="flex items-center gap-2 font-light tracking-wide">
                {" "}
                <LuNotebookText size={26} />
                Estate planning 101
              </span>
            </a>
            <a
              className="shadow-md shadow-black/30 text-inherit block mb-3 p-3 no-underline"
              href="/learn/estate-planning-101"
            >
              <span className="flex items-center gap-2 font-light tracking-wide">
                {" "}
                <LuNotebookText size={26} />
                10 reasons to have a will
              </span>
            </a>
            <a
              className="shadow-md shadow-black/30 text-inherit block mb-2 p-3 no-underline"
              href="/learn/estate-planning-101"
            >
              <span className="flex items-center gap-2 font-light tracking-wide">
                {" "}
                <LuNotebookText size={26} />
                Last will vs. living will
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="w-full mx-auto flex bg-slate-100 py-9">
        <div className="w-[80%] md:w-[67%] mx-auto flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <h1 className="text-3xl tracking-wider">Try FreeWill today</h1>

            <div className="mt-2 flex md:gap-6 flex-col md:flex-row">
              <span className="flex items-center gap-2 text-base font-light">
                <TiTick className="text-custom-pink" size={20} />
                100% free
              </span>
              <span className="flex items-center gap-2 text-base font-light">
                <TiTick className="text-custom-pink" size={20} />
                Done in under 20 minutes{" "}
              </span>
            </div>
          </div>

          <div className="md:w-1/2 ">
            <button className="bg-custom-pink text-white px-4 py-2 mt-8 md:mt-1 rounded-sm font-light text-sm tracking-wider  transition-border duration-150 ease-in-out hover:bg-pink-700">
              Create a will now—it’s free!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQs;
