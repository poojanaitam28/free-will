import React from "react";
import Logo from "../assets/Logo.png";

const individualsLinks = [
  {
    id: 1,
    title: "for individuals",
    links: [
      "Products",
      "Donate stock",
      "Donate crypto",
      "Glossary",
      "Blog",
      "FAQ",
      "Sitemap",
    ],
  },
];
const nonprofitLinks = [
  {
    id: 1,
    title: "for nonprofits",
    links: [
      "For nonprofits",
      "Resources",
      "Case studies",
      "Nonprofit webinars",
      "Request a demo",
    ],
  },
  {
    id: 2,
    title: "for lawyers",
    links: ["Support for T&E lawyers", "Become a FreeWill Fellow"],
  },
];
const aboutLinks = [
  {
    id: 1,
    title: "about us",
    links: ["Who we are", "Careers", "Security", "Accessibility", "Press"],
  },

  {
    id: 2,
    title: "contact us",
    links: ["Help center", "Contact us"],
  },
  {
    id: 3,
    title: "follow us",
    links: ["Facebook", "Linkedin"],
  },
];

function Footer() {
  return (
    <div className=" w-full h-auto">
      <div className="w-[90%] md:w-[67%] mx-auto py-10">
        <div className="md:w-full mb-7 flex flex-col md:flex-row justify-between md:justify-start mx-auto">
          <div className="">
            <img className="md:w-52 w-44" src={Logo} alt="Logo" />
          </div>

          <div className="flex px-2 gap-4 flex-grow w-full flex-wrap md:justify-around">
            <div className="">
              {individualsLinks.map((data) => (
                <div className="mt-2" key={data.id}>
                  <span className="uppercase text-text-blue tracking-wide text-sm font-normal">
                    {data.title}
                  </span>
                  <ul className="mt-2">
                    {data.links.map((item, index) => (
                      <li
                        className="text-slate-500 font-light tracking-wide text-[15px] py-1 hover:text-custom-pink cursor-pointer"
                        key={index}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="">
              {nonprofitLinks.map((data) => (
                <div className="mt-2" key={data.id}>
                  <span className="uppercase text-text-blue tracking-wide text-sm font-normal">
                    {data.title}
                  </span>
                  <ul className="mt-2">
                    {data.links.map((item, index) => (
                      <li
                        className="text-slate-500 font-light tracking-wide text-[15px] py-1 hover:text-custom-pink cursor-pointer"
                        key={index}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="hidden md:flex md:flex-col">
              {aboutLinks.map((data) => (
                <div className="mt-2" key={data.id}>
                  <span className="uppercase text-text-blue tracking-wide text-sm font-normal">
                    {data.title}
                  </span>
                  <ul className="mt-2">
                    {data.links.map((item, index) => (
                      <li
                        className="text-slate-500 font-light tracking-wide text-[15px] py-1 hover:text-custom-pink cursor-pointer"
                        key={index}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="md:hidden">
              {aboutLinks.slice(0,1).map((data) => (
                <div className="mt-2" key={data.id}>
                  <span className="uppercase text-text-blue tracking-wide text-sm font-normal">
                    {data.title}
                  </span>
                  <ul className="mt-2">
                    {data.links.map((item, index) => (
                      <li
                        className="text-slate-500 font-light tracking-wide text-[15px] py-1 hover:text-custom-pink cursor-pointer"
                        key={index}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="ml-9 md:hidden">
              {aboutLinks.slice(1).map(
                (
                  data 
                ) => (
                  <div className="mt-2" key={data.id}>
                    <span className="uppercase text-text-blue tracking-wide text-sm font-normal">
                      {data.title}
                    </span>
                    <ul className="mt-2">
                      {data.links.map((item, index) => (
                        <li
                          className="text-slate-500 font-light tracking-wide text-[15px] py-1 hover:text-custom-pink cursor-pointer"
                          key={index}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              )}
            </div>
          </div>

        </div>

        <div className="w-full mx-auto h-[1px] bg-slate-300"></div>

        <div className="w-full flex mx-auto space-x-2 mt-6 flex-col-reverse md:flex-row">
          <div className=" md:w-[70%] mt-7 md:mt-2">
            <p className="text-sm tracking-wide text-slate-500 font-light">
              Copyright © 2025 FreeWill Co., a Delaware Public Benefit
              Corporation. All rights reserved. FreeWill offers online self-help
              solutions for common estate planning needs and related educational
              content. Estate planning may implicate both state and federal
              laws, and estate planning needs will differ based on personal
              circumstance and applicable law. FreeWill is not a law firm and
              its services are not substitutes for an attorney’s advice. The
              information here is provided for educational purposes only and is
              not intended to provide, and should not be construed as providing
              legal or tax advice. This information is general in nature and is
              not intended to serve as the primary or sole basis for investment
              or tax-planning decisions. Use of FreeWill’s services is subject
              to the <a className="text-link-color hover:text-custom-pink cursor-pointer underline" href="/terms">Terms of Service</a> "&"{" "}
              <a className="text-link-color hover:text-custom-pink cursor-pointer underline" href="/privacy">Privacy Notice</a>
            </p>
          </div>
          <div className=" md:w-[30%] flex space-x-3 bg-red-00 md:justify-around ">
            <a href="">
              <img
                className="w-24 h-11"
                src="https://www.freewill.com/media/trustpilot.1f25cec2.png"
                alt="logo"
              />
            </a>
            <a href="">
              <img
                className="w-24 h-11"
                src="https://www.freewill.com/media/bbb.a5014bc7.png"
                alt="logo"
              />
            </a>
            <a href="">
              <img
                className="w-12 h-11"
                src="https://www.freewill.com/media/soc2.ef4ccbc6.png"
                alt="logo"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
