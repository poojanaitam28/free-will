import React from "react";
import Logo from "../assets/Logo.png";

const linksData = [
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

function Footer() {
  return (
    <div className="bg-slate-400 w-full h-auto">
      <div className="w-full flex flex-col md:flex-row md:items-center justify-between md:justify-start items-start md:w-[80%] mx-auto p-4">

        <div className="min-w-40">
          <img className="w-20 bg-red-200" src={Logo} alt="Logo" />
        </div>

        <div className="flex flex-grow w-full md:w-auto flex-wrap items-center justify-between">
          <div>
            {linksData.map((data) => (
              <div key={data.id}>
                <span className="uppercase">{data.title}</span>
                <ul>
                  {data.links.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div>
          {linksData.map((data) => (
              <div key={data.id}>
                <span className="uppercase">{data.title}</span>
                <ul>
                  {data.links.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div>
          {linksData.map((data) => (
              <div key={data.id}>
                <span className="uppercase">{data.title}</span>
                <ul>
                  {data.links.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>

      
      <div>
        <div></div>
      </div>
    </div>
  );
}

export default Footer;
