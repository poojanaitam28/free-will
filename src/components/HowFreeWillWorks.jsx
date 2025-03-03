import React from "react";
import { FaHeartbeat } from "react-icons/fa";

const freeWillWorks = [
  {
    id: 1,
    title: "Fill out online",
    desc: " Just follow the step-by-step instructions to fill out the necessary information for your forms. ",
  },
  {
    id: 2,
    title: " Print out documents ",
    desc: "  The information you provided is turned into precise legal language, and provided back to you as a printable document.  ",
  },
  {
    id: 3,
    title: " Sign and keep safe ",
    desc: " Follow attached instructions to print, sign, and make your document official. Keep it somewhere safe, but accessible.  ",
  },
];

function HowFreeWillWorks() {
  return (
    <div className="bg-custom-blue">
 
      <div className="md:w-[67%] w-[80%] mx-auto py-16 ">
        <div>
          <h1 className="text-white tracking-wide text-[32px]">How FreeWill works</h1>
        </div>
        <div className="flex flex-col md:flex-row mt-2 mb-9">
          {freeWillWorks.map((item) => {
            return (
              <div className="mt-8">
                <h1 className="text-lg font-medium text-white">
                  <span>
                    {item.id} . {item.title}
                  </span>
                </h1>
                <p className="text-white font-light text-base mt-3">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-full  mx-auto bg-sky-900 py-8">
        <div className=" md:w-[67%] w-[80%] mx-auto flex flex-col md:flex-row md:space-x-8">
          <div className="w-12 md:w-24 md:h-12 bg-white rounded-full p-3 mt-5">
            <FaHeartbeat className="" size={24} />
          </div>
          <span className="text-white font-extralight tracking-wide mt-4">
            We understand that online estate planning isn’t suitable for
            everyone. If you have complex needs, we encourage you to seek legal
            counsel. As you answer questions on FreeWill, we’ll point out where
            an attorney may be a better fit. We’ll also provide your responses
            in an easy-to-read summary, which you can print and bring to your
            attorney to save time.
          </span>
        </div>
      </div>
    </div>
  );
}

export default HowFreeWillWorks;
