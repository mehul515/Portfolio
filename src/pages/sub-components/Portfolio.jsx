import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import projectsData from "../../data/projects.json";

const Portfolio = () => {
  const [viewAll, setViewAll] = useState(false);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getMyProjects = async () => {
      setLoading(true);
      setProjects(projectsData);
      if(projects){
        setLoading(false);
      }
    };
    getMyProjects();
  }, []);


  return (
    <article id="projects" className="px-5 pt-20 sm:mx-auto w-full max-w-[1050px] flex flex-col gap-14">
      <div className="relative mb-12">
        <h1
          className="hidden sm:flex gap-4 items-center text-[2rem] sm:text-[2.75rem] md:text-[3rem] 
          lg:text-[3.8rem] leading-[56px] md:leading-[67px] lg:leading-[90px] tracking-[15px] 
          mx-auto w-fit font-extrabold about-h1 text-tubeLight-effect"
          style={{
            background: "hsl(222.2 84% 4.9%)",
          }}
        >
          PROJECTS
        </h1>
        <span className="absolute w-full h-1 top-7 sm:top-7 md:top-8 lg:top-11 z-[-1] bg-slate-200"></span>
      </div>

      {loading ? (
        <div className="flex justify-center">
          <svg aria-hidden="true" class="inline w-24 h-24 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
          </svg>
          <span class="sr-only">Loading...</span>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {viewAll
            ? projects &&
            projects.map((project, idx) => {
              return (
                <div key={idx} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <img className="rounded-t-lg"
                    src={project.projectBanner}
                    alt={project.title}
                  />
                  <div className="p-5">
                    <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.title}</h5>
                    <p className="mb-2 max-h-12 truncate font-normal text-gray-700 dark:text-gray-400">{project.description}</p>
                    <Link to={`/project/${project.id}`} key={idx} class="inline-flex items-center my-2 text-white bg-gradient-to-r from-purple-600 to-blue-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                      Show Details
                    </Link>
                  </div>
                </div>
              );
            })
            : projects &&
            projects.slice(0, 9).map((project, idx) => {
              return (
                <div key={idx} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <img className="rounded-t-lg"
                    src={project.projectBanner}
                    alt={project.title}
                  />
                  <div className="p-5">
                    <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.title}</h5>
                    <p className="mb-2 max-h-12 truncate font-normal text-gray-700 dark:text-gray-400">{project.description}</p>
                    <Link to={`/project/${project.id}`} class="inline-flex items-center my-2 text-white bg-gradient-to-r from-purple-600 to-blue-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                      Show Details
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>)}
      {projects && projects.length > 9 && (
        <div className="w-full text-center my-9">
          <Button className="w-52" onClick={() => setViewAll(!viewAll)}>
            {viewAll ? "Show Less" : "Show More"}
          </Button>
        </div>
      )}
    </article>
  );
};

export default Portfolio;