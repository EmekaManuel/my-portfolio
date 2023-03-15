import React from "react";
import project1 from "../assets/portfolio/educalc.png";
import project2 from "../assets/portfolio/gym.png";
import project3 from "../assets/portfolio/nodeaid.png";
import project4 from "../assets/portfolio/recipe.png";
import project5 from "../assets/portfolio/crypto.png";
import project6 from "../assets/portfolio/zanistore.png";

// import { motion } from "framer-motion";
// import { fadeIn } from "../variants";

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      src: project1,
    },
    {
      id: 2,
      src: project2,
    },
    {
      id: 3,
      src: project3,
    },
    {
      id: 4,
      src: project4,
    },
    {
      id: 5,
      src: project5,
    },
    {
      id: 6,
      src: project6,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-gray-800 to-black text-white h-full w-full "
    >
      <div
        className="max-w-screen-lg px-4 md:h-screen h-full mx-auto grid grid-cols-1 md:flex md:flex-col justify-center w-full"
        >
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">
            Here are some of the projects I have worked on.
          </p>
        </div>

        <div className="" >
          
        <div className="grid grid-cols-1 w-full gap-y-8 items md:grid-cols-3 gap-x-3">
          {portfolioItems.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-400 rounded-lg">
              <img
                src={src}
                alt=""
                srcset=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-4 py-1 m-2 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-4 py-1 m-2 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
        </div>

      </div>
    </div>
  );
};

export default Portfolio;
