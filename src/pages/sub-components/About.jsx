import React from "react";
import data from "../../data/myData.json";

const About = () => {
  return (
    <article id="about" className="px-5 mt-12 pt-20 sm:mx-auto w-full max-w-[1050px] flex flex-col gap-14">
      <div className="w-full flex flex-col overflow-x-hidden">
        <div className="relative">
          <h1
            className="flex gap-4 items-center text-[2rem] sm:text-[2.75rem] 
          md:text-[3rem] lg:text-[3.8rem] leading-[56px] md:leading-[67px] 
          lg:leading-[90px] tracking-[15px] mx-auto w-fit font-extrabold about-h1 text-tubeLight-effect"
            style={{
              background: "hsl(222.2 84% 4.9%)",
            }}
          > ABOUT ME  
          </h1>
          <span className="absolute w-full h-1 top-7 sm:top-7 md:top-8 lg:top-11 z-[-1] bg-slate-200"></span>
        </div>
        <div className="text-center">
        </div>
        <div>
          <div className="flex justify-center my-4 sm:my-10 gap-14">
            <div className="flex md:w-[80%] text-center flex-col tracking-[1px] text-xl gap-5">
              <p className="tracking-[1px] text-xl">{data.about[0]}</p>
              <p className="tracking-[1px] text-xl">{data.about[1]}</p>
              <p className="tracking-[1px] text-xl">{data.about[2]}</p>
            </div>
          </div>

        </div>
      </div>
    </article>
  );
};

export default About;
