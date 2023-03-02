import React, { useEffect } from "react";
import ProjectDetails from "../components/ProjectDetails";
import ProjectForm from "../components/ProjectForm";
import { useProjectsContext } from "../hooks/useProjectsContext";

const Home = () => {

  //data fetch
  const { projects, dispatch } = useProjectsContext();

  
  useEffect(() => {
    const getAllProjects = async () => {
      const res = await fetch("http://localhost:8000/api/projects");
      const json = await res.json();
      if(res.ok) {
        dispatch({ type: "SET_PROJECTS", payload: json });
      }
    };

    getAllProjects();

  }, [dispatch]);


  return (
    <div className="home container mx-auto py-20 grid grid-cols-3 gap-10">
      <div className="left col-span-2">
        <h2 className="text-4xl font-medium text-sky-400 mb-10">All Projects</h2>

        <div className="projects-wrappper flex gap-10 flex-wrap">
          {projects &&
            projects.map((project) => (
              <ProjectDetails key={project._id} project={project} />
            ))}
        </div>
      </div>
     <ProjectForm/>
    </div>
  );
};

export default Home;
