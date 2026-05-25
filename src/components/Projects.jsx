import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

import { useState } from "react";

import docquery from "../assets/docquery.png";
import devcollab from "../assets/devcollab.png";
import etchasketch from "../assets/etchasketch.png";
import guessgame from "../assets/guessgame.png";
import travel from "../assets/travel.png";
import heartdisease from "../assets/heartdisease.png";
import quizapp from "../assets/quizapp.png";
import rockpaperscissors from "../assets/rockpaperscissors.png";
import calculator from "../assets/calculator.png";

function Projects() {

  const [activeCategory, setActiveCategory] = useState("All");

  const projects = [

    {
      title: "DocQuery",

      category: "AI",

      description:
        "AI-powered document question answering system with intelligent PDF analysis and response generation.",

      tech: ["Python", "Streamlit", "AI"],

      live:
        "https://docquery-p3qfddad4uefhznlgxszyj.streamlit.app/",

      github:
        "https://github.com/DishaAgarwalla/DocQuery",

      image: docquery,
    },

    {
      title: "DevCollab",

      category: "Full Stack",

      description:
        "Developer collaboration platform where developers can connect and collaborate together.",

      tech: ["MERN", "React", "MongoDB"],

      live:
        "https://dev-collab-tan.vercel.app/",

      github:
        "https://github.com/DishaAgarwalla/DevCollab",

      image: devcollab,
    },

    {
      title: "Heart Disease Predictor",

      category: "AI",

      description:
        "Healthcare prediction system using machine learning algorithms.",

      tech: ["Python", "Flask", "Machine Learning"],

      live:
        "https://heart-disease-prediction-8.onrender.com/",

      github:
        "https://github.com/DishaAgarwalla/Heart-Disease-Prediction",

      image: heartdisease,
    },

    {
      title: "Quiz App",

      category: "Frontend",

      description:
        "Interactive quiz application with score tracking and dynamic questions.",

      tech: ["HTML", "CSS", "JavaScript"],

      live:
        "https://quiz-app-eight-ruddy.vercel.app/",

      github:
        "https://github.com/DishaAgarwalla/Online-quiz",

      image: quizapp,
    },

    {
      title: "Rock Paper Scissors",

      category: "Frontend",

      description:
        "Classic Rock Paper Scissors game with interactive gameplay.",

      tech: ["HTML", "CSS", "JavaScript"],

      live:
        "https://rock-paper-scissors-six-gamma.vercel.app/",

      github:
        "https://github.com/DishaAgarwalla/Rock-Paper-Scissors",

      image: rockpaperscissors,
    },

    {
      title: "Calculator",

      category: "Frontend",

      description:
        "Responsive calculator application with modern UI design.",

      tech: ["HTML", "CSS", "JavaScript"],

      live:
        "https://calculator-seven-woad-61.vercel.app/",

      github:
        "https://github.com/DishaAgarwalla/Calculator",

      image: calculator,
    },

    {
      title: "Etch-A-Sketch",

      category: "Frontend",

      description:
        "Interactive drawing application for creating pixel artwork.",

      tech: ["HTML", "CSS", "JavaScript"],

      live:
        "https://etch-a-sketch-zeta-one.vercel.app/",

      github:
        "https://github.com/DishaAgarwalla/etch-a-sketch",

      image: etchasketch,
    },

    {
      title: "Dream Travel Planner",

      category: "Frontend",

      description:
        "Travel planning platform for exploring destinations and organizing trips.",

      tech: ["HTML", "CSS", "JavaScript"],

      live:
        "https://dream-travel-planner.vercel.app/login.html",

      github:
        "https://github.com/DishaAgarwalla/Dream-Travel-Planner",

      image: travel,
    },

  ];

  const filteredProjects =

    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  return (

    <section
      id="projects"
      className="relative px-5 md:px-16 py-24 bg-[#020617] overflow-hidden"
    >

      {/* GLOW EFFECT */}

      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full"></div>

      {/* HEADER */}

      <div className="text-center mb-14 relative z-10">

        <p className="text-cyan-400 uppercase tracking-[4px] text-xs mb-4">
          Projects
        </p>

        <h1 className="text-4xl md:text-5xl font-bold mb-5">
          Featured Work
        </h1>

        <p className="text-gray-400 max-w-3xl mx-auto text-base leading-8">
          A collection of projects showcasing my skills in
          Full Stack Development, AI integration,
          and modern web technologies.
        </p>

      </div>

      {/* FILTER BUTTONS */}

      <div className="flex flex-wrap justify-center gap-4 mb-14 relative z-10">

        {["All", "AI", "Frontend", "Full Stack"].map((category) => (

          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition duration-300
              
              ${
                activeCategory === category
                  ? "bg-cyan-500 text-black"
                  : "bg-white/5 border border-white/10 text-gray-300 hover:border-cyan-400 hover:text-cyan-400"
              }
            `}
          >
            {category}
          </button>

        ))}

      </div>

      {/* PROJECT GRID */}

      <div
        className="
        grid
        sm:grid-cols-2
        lg:grid-cols-4
        gap-6
        relative z-10"
      >

        {filteredProjects.map((project, index) => (

          <div
            key={index}
            className="group bg-white/5 backdrop-blur-lg
            border border-white/10 rounded-[24px]
            overflow-hidden shadow-xl
            hover:border-cyan-400/40
            hover:-translate-y-2
            transition duration-500 flex flex-col"
          >

            {/* IMAGE */}

            <div className="overflow-hidden h-40">

              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover
                group-hover:scale-105 transition duration-700"
              />

            </div>

            {/* CONTENT */}

            <div className="p-5 flex flex-col flex-grow">

              {/* CATEGORY */}

              <div className="mb-3">

                <span
                  className={`px-4 py-1 text-xs rounded-full border
                  
                  ${
                    project.category === "AI"
                      ? "bg-purple-500/20 text-purple-300 border-purple-500/30"
                      : project.category === "Frontend"
                      ? "bg-pink-500/20 text-pink-300 border-pink-500/30"
                      : "bg-green-500/20 text-green-300 border-green-500/30"
                  }
                  `}
                >
                  {project.category}
                </span>

              </div>

              {/* TECH TAGS */}

              <div className="flex flex-wrap gap-2 mb-4">

                {project.tech.map((item, i) => (

                  <span
                    key={i}
                    className="bg-slate-800/80 border border-slate-700
                    text-gray-300 text-[11px]
                    px-3 py-1 rounded-full"
                  >
                    {item}
                  </span>

                ))}

              </div>

              {/* TITLE */}

              <h2 className="text-xl font-bold mb-3 text-white">
                {project.title}
              </h2>

              {/* DESCRIPTION */}

              <p
                className="text-gray-400 text-sm
                leading-7 mb-6 flex-grow"
              >
                {project.description}
              </p>

              {/* BUTTONS */}

              <div className="flex items-center justify-between mt-auto">

                {/* GITHUB */}

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full
                  bg-slate-800 border border-slate-700
                  flex items-center justify-center
                  text-base hover:bg-cyan-400
                  hover:text-black transition duration-300"
                >
                  <FaGithub />
                </a>

                {/* LIVE */}

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-cyan-500 hover:bg-cyan-400
                  text-black px-4 py-2 rounded-xl
                  text-sm font-semibold
                  flex items-center gap-2
                  transition duration-300"
                >
                  Live Demo
                  <FaExternalLinkAlt className="text-xs" />
                </a>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>

  );
}

export default Projects;