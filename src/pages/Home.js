import React, { useEffect, useState } from "react";
import ProjectDetails from "../components/ProjectDetails";
import ProjectForm from "../components/ProjectForm";

const Home = () => {
  const [project, setProject] = useState([]);
  const [loading, setLoding] = useState(false);
  const [error, setError] = useState("");

  //data fetch
  useEffect(() => {
    const getProject = async () => {
      try {
        setLoding(true);
        const res = await fetch("http://localhost:8000/api/projects");
        if (!res.ok) throw new Error("Something went wrong");
        const data = await res.json();
        setProject(data);
        console.log(data);
        setLoding(false);
      } catch (err) {
        setError(err.message);
        setLoding(false);
      }
    };
    getProject();
  }, []);

  return (
    <div className="home container mx-auto py-20 grid grid-cols-3 gap-10">
      <div className="left col-span-2">
        <h2 className="text-4xl font-medium text-sky-400 mb-10">All Projects</h2>

        <div className="projects-wrappper flex gap-10 flex-wrap">
          {project &&
            project.map((project) => (
              <ProjectDetails key={project._id} project={project} />
            ))}
        </div>
      </div>
     <ProjectForm/>
    </div>
  );
};

export default Home;
