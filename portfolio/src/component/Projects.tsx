import React from 'react';


import Project from './Project';
import {projects} from "./ListProjects"
function Projects(){
    
    
    
    return(
        <>
        <div className="center"id='project'>
            <h1>PROJECTS</h1>
            <hr />
            <p>Here you will find some of the personal and clients projects that I created with each project containing its own case study</p>
        </div>
        <div>
        {projects.map((project, index) => (
        <Project
          key={index}
          id={project.id}
          imgSrc={project.imgSrc}
          title={project.title}
          description={project.description}
          url={project.url}
        />
      ))}
      </div>
        </>
    )
}
export default Projects