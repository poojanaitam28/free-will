import React from "react";
import trust from "../assets/trust.jpg";

function Trusted() {
  return (
    <div className="w-full px-10">
      <div className="md:w-[67%] flex flex-col md:flex md:flex-row mx-auto py-20">
        <div className="w-full md:w-1/2">
          <img className="w-[410px]" src={trust} alt="" />
        </div>

        <div className="w-full md:w-1/2 mt-16 md:mt-4 flex flex-col justify-center">
          <h1 className="text-3xl tracking-wide w-1/2 md:w-full leading-10">Trusted by thousands</h1>
          <p className="mt-4 text-slate-800 font-light">
            Writing your own will can feel daunting — that’s why we worked with
            the nation's top legal experts to create our interactive online will
            maker. Enter your information and create a last will and testament
            customized to your wishes.{" "}
          </p>
          <p className="mt-3 text-slate-800 font-light">
            We also have{" "}
            <a className="text-blue-500" href="/our-products">other estate planning products</a> available
            to help you get all your affairs in order.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Trusted;
