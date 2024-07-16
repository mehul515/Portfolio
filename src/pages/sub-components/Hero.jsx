import {
  ExternalLink,
  Github,
  Linkedin,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { Button } from "@/components/ui/button";
import Spline from '@splinetool/react-spline';
import data from "../../data/myData.json";

const Hero = () => {

  return (
    <div  id="hero" className="md:pt-24">
    <div className=" md:ms-[12%] md:mr-[8%] ">
      <div className="flex  ">
        <div className="  self-center w-[62%]">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-green-400 rounded-full h-2 w-2"></span>
            <p>Online</p>
          </div>
          <h1 className="overflow-x-hidden text-[1.3rem] sm:text-[1.75rem] md:text-[2.2rem] lg:text-[2.8rem] tracking-[2px] mb-4">
            Hey, I'm Mehul Kohad
          </h1>
          <h1 className="text-tubeLight-effect overflow-visible text-[1.3rem] sm:text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] tracking-[15px]">
            <Typewriter
              words={["WEB DEVELOPMENT", "MERN STACK", "DATA STRUCTURES", "MACHINE LEARNING", "DEEP LEARNING"]}
              loop={50}
              cursor
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
          <div className="mt-4 md:mt-8 lg:mt-6 flex gap-3">
            <Link to={data.githubUrl} target="_blank">
              <Button className="rounded-[10px] flex items-center gap-2 flex-row text-white bg-gradient-to-r from-purple-600 to-blue-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium text-sm px-5 py-2.5 text-center me-2 mb-2">
                <span>
                  <Github />
                </span>
                <span>Github</span>
              </Button>
            </Link>

            <Link to={data.linkedInUrl} target="_blank">
              <Button className="rounded-[10px] flex items-center gap-2 flex-row text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium text-sm px-5 py-2.5 text-center me-2 mb-2">
                <span>
                  <Linkedin />
                </span>
                <span>LinkedIn</span>
              </Button>
            </Link>

            <Link to={data.resumeUrl} target="_blank">
              <Button className="rounded-[10px] flex items-center gap-2 flex-row text-white bg-gradient-to-r from-pink-500 to-orange-400 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium text-sm px-5 py-2.5 text-center me-2 mb-2">
                <span>
                  <ExternalLink />
                </span>
                <span>Resume </span>
              </Button>
            </Link>
          </div>
          <p className="text-lg py-8 tracking-[2px]">{data.summary}</p>

        </div>
        <div className=" hidden lg:flex justify-center align-middle " >
          <Spline scene="https://prod.spline.design/R0txqO8kkefBJqyV/scene.splinecode" />
        </div>
      </div>

    </div>
    </div>
  );
};

export default Hero;