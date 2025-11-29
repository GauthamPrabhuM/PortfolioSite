import React from "react";
import "./Projects.css";
import vikas from "../../Assets/Skills/vikas.png";
import astro from "../../Assets/Skills/astro.png"
import { AiFillGithub } from "react-icons/ai";
import { HiGlobeAlt } from "react-icons/hi";
import ReactGA from 'react-ga4';

export default function Projects(props) {
  const projects = [
    {
      id: 1,
      title: "Vikas",
      description: "A real-time, multimodal solution linking disaster victims and first responders from NDRF: streamlining support to the most vulnerable. Grand finalist in Smart India Hackathon 2022.",
      image: vikas,
      github: "https://github.com/GauthamPrabhuM/SIH2K22",
      live: "https://vikas-066f8f.webflow.io/",
      tags: ["React", "Node.js", "WebSocket", "Real-time", "Multimodal"]
    },
    {
      id: 2,
      title: "Quantum Ecosystem for Efficient Detection of Cardiovascular Diseases",
      description: "A quantum machine learning framework designed to analyze ECG data using quantum ML algorithms. The project harnesses quantum computing for healthcare applications. Funded by Ministry of Electronics and Information Technology and AWS.",
      github: "https://github.com/GauthamPrabhuM/Quantum-Ecosystem-for-Efficient-Detection-of-Cardiovascular-Diseases",
      tags: ["Quantum Computing", "Machine Learning", "ECG Analysis", "Healthcare", "Python", "Qiskit"]
    },
    {
      id: 3,
      title: "Astronomy Club Website",
      description: "Enhanced and modernized the website of the Astronomy Club of Manipal with improved UI/UX, responsive design, and better content management. Showcases club activities, events, and astronomical resources.",
      image: astro,
      github: "https://github.com/Astronomy-Manipal/Astronomy-Manipal.github.io",
      live: "https://astronomy-manipal.github.io/",
      tags: ["Web Design", "HTML/CSS", "JavaScript", "Responsive Design"]
    }
  ];

  const trackProjectClick = (projectName, linkType, url) => {
    ReactGA.event('project_link_click', {
      project_name: projectName,
      link_type: linkType,
      url: url,
      timestamp: new Date().toISOString(),
    });
  };

  return (
    <div className="projects_main" id={props.light ? "lightid" : null}>
      <div className="projects_header" id="projects">
        <h2>Projects & Portfolio</h2>
        <p className="projects_subtitle">Building impactful solutions through AI, quantum computing, and full-stack development</p>
      </div>
      
      <div className="projects_grid">
        {projects.map((project) => (
          <div key={project.id} className="project_card">
            {project.image && (
              <div className="project_image">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project_img"
                />
              </div>
            )}
            
            <div className="project_content">
              <h3 className="project_title">{project.title}</h3>
              
              <p className="project_description">{project.description}</p>
              
              {project.tags && (
                <div className="project_tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="project_tag">{tag}</span>
                  ))}
                </div>
              )}
              
              <div className="project_links">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project_link"
                    title="View on GitHub"
                    onClick={() => trackProjectClick(project.title, 'github', project.github)}
                  >
                    <AiFillGithub className="link_icon" />
                    GitHub
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project_link"
                    title="View Live Demo"
                    onClick={() => trackProjectClick(project.title, 'live_demo', project.live)}
                  >
                    <HiGlobeAlt className="link_icon" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="view_all_projects">
        <a 
          href="/projects" 
          className="view_all_link"
          onClick={() => trackProjectClick('view_all', 'more_projects', '/projects')}
        >
          View All Projects →
        </a>
      </div>
    </div>
  );
}
