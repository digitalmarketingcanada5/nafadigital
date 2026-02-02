import React from "react";
import ProjectsHero from "./components/ProjectsHero";
import ProjectsSection from "./components/ProjectsSection";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen">
      <ProjectsHero />
      <ProjectsSection />
    </div>
  );
};

export default ProjectsPage;