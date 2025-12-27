import React, { useCallback, useState, useEffect } from "react";
import "./ProjectsPage.css";
import AnimatedCursor from "react-animated-cursor";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import astro from "../../Assets/Skills/astro.png"
import vikas from "../../Assets/Skills/vikas.png"
import ecommerce from "../../Assets/Skills/ecommerce.png";

import { AiFillGithub } from "react-icons/ai";
import { HiGlobeAlt } from "react-icons/hi";
import Header from "../Header/Header";
import ReactGA from 'react-ga4';

export default function ProjectsPage() {
  const [light, setLight] = useState(false);

  const projects = [
    {
      id: 1,
      title: "SplitSense",
      description: "A comprehensive, secure analytics platform for Splitwise with real-time insights, beautiful visualizations, OAuth authentication, and AI-powered balance predictions. Features spending analysis, anomaly detection, subscription detection, and PDF report generation.",
      github: "https://github.com/GauthamPrabhuM/SplitSense",
      live: "https://splitsense.onrender.com",
      tags: ["FastAPI", "Next.js", "OAuth 2.0", "Analytics", "Python", "TypeScript"]
    },
    {
      id: 2,
      title: "Vikas",
      description: "A real-time, multimodal solution linking disaster victims and first responders from NDRF: streamlining support to the most vulnerable. Grand finalist in Smart India Hackathon 2022.",
      image: vikas,
      github: "https://github.com/GauthamPrabhuM/SIH2K22",
      live: "https://vikas-066f8f.webflow.io/",
      tags: ["React", "Node.js", "WebSocket", "Real-time", "Multimodal"]
    },
    {
      id: 3,
      title: "Quantum Ecosystem for Efficient Detection of Cardiovascular Diseases",
      description: "A quantum machine learning framework designed to analyze ECG data using quantum ML algorithms. The project harnesses quantum computing for healthcare applications. Funded by Ministry of Electronics and Information Technology and AWS.",
      github: "https://github.com/GauthamPrabhuM/Quantum-Ecosystem-for-Efficient-Detection-of-Cardiovascular-Diseases",
      tags: ["Quantum Computing", "Machine Learning", "ECG Analysis", "Healthcare", "Python", "Qiskit"]
    },
    {
      id: 4,
      title: "Astronomy Club Website",
      description: "Enhanced and modernized the website of the Astronomy Club of Manipal with improved UI/UX, responsive design, and better content management. Showcases club activities, events, and astronomical resources.",
      image: astro,
      github: "https://github.com/Astronomy-Manipal/Astronomy-Manipal.github.io",
      live: "https://astronomy-manipal.github.io/",
      tags: ["Web Design", "HTML/CSS", "JavaScript", "Responsive Design"]
    },
    {
      id: 5,
      title: "Distributed Banking System",
      description: "A distributed banking system designed as an easy-to-understand demonstration of how to create distributed applications using sockets and client-server architecture. Implements multi-threaded server and socket communication.",
      github: "https://github.com/GauthamPrabhuM/distributed-banking-system",
      tags: ["Java", "Sockets", "Networking", "Client-Server", "Distributed Systems"]
    },
    {
      id: 6,
      title: "Kritika: An E-commerce Website",
      description: "A comprehensive e-commerce platform built using Flask to showcase and sell women's handicrafts. Features product catalog, shopping cart, and order management system.",
      image: ecommerce,
      github: "https://github.com/GauthamPrabhuM/kritika",
      tags: ["Flask", "Python", "E-commerce", "Web Development"]
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

  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  var particlesObj;
  var width = window.innerWidth;
  if (width > 768) {
    particlesObj = {
      color: {
        value: light ? "#000000" : "#ffffff",
      },
      links: {
        color: light ? "#000000" : "#ffffff",
        distance: 100,
        enable: true,
        opacity: 0.25,
        width: 1,
      },
      collisions: {
        enable: false,
      },
      move: {
        directions: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: true,
        speed: 4,
        straight: true,
      },
      number: {
        density: {
          enable: false,
          area: 600,
        },
        value: 100,
      },
      opacity: {
        value: 0.25,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: 3,
      },
    };
  } else {
    particlesObj = {
      color: {
        value: light ? "#000000" : "#ffffff",
      },
      nb: Math.round(Math.sqrt(width)),
      links: {
        color: light ? "#000000" : "#ffffff",
        distance: 50,
        enable: true,
        opacity: 0.25,
        width: 0.6,
      },
      collisions: {
        enable: false,
      },
      move: {
        directions: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: true,
        speed: 4,
        straight: true,
      },
      number: {
        density: {
          enable: false,
          area: 0,
        },
        value: 50,
      },
      opacity: {
        value: 0.25,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: 2,
      },
    };
  }
  useEffect(() => {
    if (localStorage.getItem("theme") === "true") {
      setLight(true);
    }
  }, []);

  return (
    <>
      <Header light={light} setLight={setLight} />
      <AnimatedCursor
        innerSize={20}
        outerSize={20}
        color={light ? "0,0,0" : "255, 255, 255"}
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />

      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          density_auto: true,
          background: {},
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: false,
            },
            modes: {
              push: {
                quantity: 2,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: particlesObj,
          detectRetina: false,
        }}
      />

      <div className="projects_page_main" id={light ? "lightid" : null}>
        <div className="projects_page_header" id="projects">
          <h2>All Projects</h2>
          <p className="projects_page_subtitle">Explore my complete portfolio of AI, full-stack, and quantum computing projects</p>
        </div>

        <div className="projects_page_grid">
          {projects.map((project) => (
            <div key={project.id} className="project_page_card">
              {project.image && (
                <div className="project_page_image">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="project_page_img"
                  />
                </div>
              )}
              
              <div className="project_page_content">
                <h3 className="project_page_title">{project.title}</h3>
                
                <p className="project_page_description">{project.description}</p>
                
                {project.tags && (
                  <div className="project_page_tags">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="project_page_tag">{tag}</span>
                    ))}
                  </div>
                )}
                
                <div className="project_page_links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project_page_link"
                      title="View on GitHub"
                      onClick={() => trackProjectClick(project.title, 'github', project.github)}
                    >
                      <AiFillGithub className="link_page_icon" />
                      GitHub
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project_page_link"
                      title="View Live Demo"
                      onClick={() => trackProjectClick(project.title, 'live_demo', project.live)}
                    >
                      <HiGlobeAlt className="link_page_icon" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
