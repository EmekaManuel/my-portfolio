import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white "
    >
      <div className="max-w-screen-lg px-3 mx-auto flex flex-col justify-center h-full w-full ">
        <motion.div
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.4 }}
         className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About Me
          </p>
        </motion.div>

        <motion.p 
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.4 }} className="text-[18px] mt-3 text-gray-100">
          {" "}
          My name is Emeka Manuel. I am a Front-end (React) Developer and
          Technical Writer.{" "}
        </motion.p>
        <motion.p
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.4 }} className="text-[18px] text-gray-100">
          My skills are mainly focused on front-end web technologies which
          include HTML, CSS, JavaScript, Node and Express Js.
          <p className="text-[18px] mt-3 text-gray-100">
            I also possess good technical writing proficiency which I use as a
            tool to convey my thoughts to the developers community. You can
            check out some of my <a href="#m" className="border-b-2 border-blue-300">articles here</a>.
          </p>

          <p className="mt-3 text-gray-100">
            Additionally, I have a solid experience with Version-Control -
            Git/Github, SSR, Scrum / Agile methodologies, SEO optimization, CI /
            CD as a plus.
          </p>
       <p className="mt-3 text-gray-100">
       I also possess good team-work characteristics as well as
          competitive leadership skills, public speaking skills and good
          communication skills. When I'm not coding, I am either reading,
          surfing twitter or watching movies.
       </p>
        </motion.p>
      </div>
    </div>
  );
};

export default About;
