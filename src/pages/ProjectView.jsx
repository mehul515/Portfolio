import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import projectsData from "../data/projects.json";

const ProjectView = () => {

  const { name } = useParams();
  const project = projectsData.find((p) => encodeURIComponent(p.id) === name);
  console.log(project)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigateTo = useNavigate();
  const handleReturnToPortfolio = () => {
    navigateTo("/");
  };

  return (
    <>
      <div className="flex mt-7 justify-center items-center min-h-[100vh] sm:gap-4 sm:py-4">
        <div className="w-[100%] md:w-5/6 pb-5">
          <div className="space-y-12">
            <div className=" border-gray-900/10 pb-12">


              <div className="flex flex-col px-10 items-center bg-white border-4 border-gray-200 rounded-lg shadow md:flex-row dark:border-gray-700 dark:bg-gray-800 md:min-h-[73vh]">
                <img className="object-cover w-full rounded-lg h-[45%] md:h-[76%] md:max-w-[55%] md:rounded-lg"
                  src={project.projectBanner}
                  alt="" />
                <div className="flex flex-col justify-between p-9 leading-normal">
                  <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{project.title}</h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{project.description}</p>
                  <p className="mb-3 font-medium text-lg text-gray-300">Technologies: <span className="text-base text-gray-400">{project.technologies}</span></p>
                  <p className="mb-3 font-medium text-lg text-gray-300">Stack: <span className="text-base text-gray-400">{project.stack}</span></p>
                  {project.isDeployed.toLowerCase() != "yes" ? <p class="mb-3 font-medium text-lg text-gray-300">Project is not deployed.</p> : ""}
                  <div className="py-5">
                    {project.isDeployed.toLowerCase() == "yes" ? <Link
                      className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                      target="_blank"
                      to={project.projectLink}>
                      View Project
                    </Link> : ""}
                    <Link
                      className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                      target="_blank"
                      to={project.gitRepoLink}>
                      Github Link
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex justify-end mb-8 mt-5">
                <Button onClick={handleReturnToPortfolio}>
                  Return to Home
                </Button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectView;