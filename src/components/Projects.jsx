import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

import { useState } from "react";

import onlinebidsphere from "../assets/onlinebidsphere.png";
import docquery from "../assets/docquery.png";
import devcollab from "../assets/devcollab.png";
import etchasketch from "../assets/etchasketch.png";
import travel from "../assets/travel.png";
import heartdisease from "../assets/heartdisease.png";
import quizapp from "../assets/quizapp.png";
import rockpaperscissors from "../assets/rockpaperscissors.png";
import calculator from "../assets/calculator.png";

function Projects() {

  const [activeCategory, setActiveCategory] = useState("All");

  const projects = [

    {
      title: "Online BidSphere",

      category: "Full Stack",

      description:
        "A real-time MERN-based online auction platform where users can create auctions, place live bids, manage listings, and securely authenticate using JWT. Built with Socket.io for instant bid updates and a seamless bidding experience.",

      tech: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Socket.io",
        "JWT",
      ],

      live:
        "https://online-auction-platform-ten.vercel.app/",

      github:
        "https://github.com/DishaAgarwalla/Online-Auction-Platform",

      image: onlinebidsphere,
    },

    {
      title: "DocQuery",

      category: "AI",

      description:
        "AI-powered document question answering platform that intelligently analyzes PDF documents and generates context-aware responses using modern AI technologies.",

      tech: [
        "Python",
        "Streamlit",
        "OpenAI",
      ],

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
        "A developer collaboration platform where users can connect, collaborate on projects, share ideas, and build together through an interactive MERN application.",

      tech: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
      ],

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
        "Machine learning powered healthcare application that predicts heart disease risk using trained classification models and an interactive web interface.",

      tech: [
        "Python",
        "Flask",
        "Machine Learning",
      ],

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
        "Interactive quiz application featuring dynamic questions, score tracking, responsive design, and engaging user interaction.",

      tech: [
        "HTML",
        "CSS",
        "JavaScript",
      ],

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
        "Classic Rock Paper Scissors game with smooth animations, responsive UI, and interactive gameplay built using JavaScript.",

      tech: [
        "HTML",
        "CSS",
        "JavaScript",
      ],

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
        "Modern responsive calculator application supporting standard arithmetic operations with a clean and intuitive interface.",

      tech: [
        "HTML",
        "CSS",
        "JavaScript",
      ],

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
        "Interactive pixel drawing application inspired by the classic Etch-A-Sketch, allowing users to create digital artwork directly in the browser.",

      tech: [
        "HTML",
        "CSS",
        "JavaScript",
      ],

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
        "Responsive travel planning platform that helps users explore destinations, organize itineraries, and plan memorable trips.",

      tech: [
        "HTML",
        "CSS",
        "JavaScript",
      ],

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
        );                                                                                                                                                                      return (

    <section
      id="projects"
      className="relative px-5 md:px-16 py-24 bg-[#020617] overflow-hidden"
    >

      {/* BACKGROUND GLOW */}

      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full"></div>

      {/* HEADER */}

      <div className="text-center mb-14 relative z-10">

        <p className="text-cyan-400 uppercase tracking-[4px] text-xs mb-4">
          Projects
        </p>

        <h1 className="text-4xl md:text-5xl font-bold mb-5">
          Featured Projects
        </h1>

        <p className="text-gray-400 max-w-3xl mx-auto text-base leading-8">
          A collection of projects showcasing my expertise in
          Full Stack Development, Artificial Intelligence,
          Machine Learning, and modern web technologies.
        </p>

      </div>

      {/* FILTER BUTTONS */}

      <div
        className="
        flex
        flex-wrap
        justify-center
        gap-4
        mb-14
        relative
        z-10"
      >

        {["All", "AI", "Frontend", "Full Stack"].map((category) => (

          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`

              px-6
              py-2.5
              rounded-full
              text-sm
              font-medium
              transition-all
              duration-300

              ${
                activeCategory === category
                  ? "bg-cyan-500 text-black shadow-lg shadow-cyan-500/30"
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
  grid-cols-1
  sm:grid-cols-2
  lg:grid-cols-3
  xl:grid-cols-4
  gap-6
  relative
  z-10"
>

        {filteredProjects.map((project, index) => (

          <div
            key={index}
            className="
            group
            bg-white/5
            backdrop-blur-lg
            border
            border-white/10
            rounded-[24px]
            overflow-hidden
            shadow-xl
            hover:border-cyan-400/40
            hover:-translate-y-3
            transition-all
            duration-500
            flex
            flex-col"
          >

            {/* IMAGE */}

            <div className="relative overflow-hidden h-40">

              <img
                src={project.image}
                alt={project.title}
                className="
                h-full
                w-full
                object-cover
                transition-transform
                duration-700
                group-hover:scale-110"
              />

              {/* IMAGE OVERLAY */}

              <div
                className="
                absolute
                inset-0
                bg-black/60
                opacity-0
                group-hover:opacity-100
                transition-all
                duration-500
                flex
                items-center
                justify-center
                gap-4"
              >

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="
                  w-12
                  h-12
                  rounded-full
                  bg-white
                  text-black
                  flex
                  items-center
                  justify-center
                  hover:bg-cyan-400
                  transition"
                >
                  <FaGithub />
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="
                  w-12
                  h-12
                  rounded-full
                  bg-cyan-500
                  text-black
                  flex
                  items-center
                  justify-center
                  hover:scale-110
                  transition"
                >
                  <FaExternalLinkAlt />
                </a>

              </div>

            </div>

            {/* CONTENT */}

            <div className="p-5 flex flex-col flex-grow">

              {/* CATEGORY */}

              <div className="mb-4">

                <span
                  className={`

                  px-4
                  py-1
                  text-xs
                  rounded-full
                  border

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

              {/* TECH STACK */}

              <div className="flex flex-wrap gap-2 mb-5">

                {project.tech.map((item, i) => (

                  <span
                    key={i}
                    className="
                    bg-slate-800
                    border
                    border-slate-700
                    text-gray-300
                    text-[11px]
                    px-3
                    py-1
                    rounded-full"
                  >

                    {item}

                  </span>

                ))}

              </div>

              {/* TITLE */}

              <h2 className="text-xl font-bold text-white mb-3">

                {project.title}

              </h2>

              {/* DESCRIPTION */}

              <p
                className="
                text-gray-400
                text-sm
                leading-6
                flex-grow
                mb-5"
              >

                {project.description}

              </p>                                                                                                                                                                    {/* BUTTONS */}

              <div className="flex items-center justify-between mt-auto">

                {/* GITHUB */}

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="
                  flex
                  items-center
                  justify-center
                  w-11
                  h-11
                  rounded-full
                  bg-slate-800
                  border
                  border-slate-700
                  text-white
                  hover:bg-cyan-400
                  hover:text-black
                  hover:scale-110
                  transition-all
                  duration-300"
                >
                  <FaGithub />
                </a>

                {/* LIVE DEMO */}

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="
                  bg-cyan-500
                  hover:bg-cyan-400
                  text-black
                  px-5
                  py-2.5
                  rounded-xl
                  text-sm
                  font-semibold
                  flex
                  items-center
                  gap-2
                  transition-all
                  duration-300
                  hover:scale-105"
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