import { useEffect, useState } from "react";

import {
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa6";

import { FaExternalLinkAlt } from "react-icons/fa";

import codealpha from "../assets/certificates/CodeAlpha.png";
import ecwoc from "../assets/certificates/ECWoC.png";
import googlecloud from "../assets/certificates/GoogleCloud.png";
import hackjava from "../assets/certificates/HackerRank(JAVA).png";
import hackreact from "../assets/certificates/HackerRank(React).png";
import kaggle from "../assets/certificates/Kaggle(SQL).png";
import linkedin from "../assets/certificates/LinkedIn Learning.png";
import octanet from "../assets/certificates/Octanet.png";
import oracle from "../assets/certificates/Oracle.png";
import sap from "../assets/certificates/SAP_ABAP.png";

function Certifications() {

  const certificates = [

    {
      image: codealpha,

      view: codealpha,

      title: "Frontend Development Certificate",

      issuer: "CodeAlpha",

      description:
        "Completed hands-on frontend development training focused on responsive UI design and web application development.",

      skills: "HTML • CSS • JavaScript • Responsive Design",
    },

    {
      image: ecwoc,

      view: ecwoc,

      title: "Web Development Workshop",

      issuer: "ECWoC",

      description:
        "Participated in web development workshop covering modern frontend technologies and development practices.",

      skills: "Frontend • UI Design • Web Technologies",
    },

    {
      image: googlecloud,

      view: googlecloud,

      title: "Google Cloud Certificate",

      issuer: "Google Cloud",

      description:
        "Learned cloud fundamentals, deployment concepts, and cloud-based application workflows using Google Cloud.",

      skills: "Cloud • Deployment • Google Cloud",
    },

    {
      image: hackjava,

      view: hackjava,

      title: "Java Certificate",

      issuer: "HackerRank",

      description:
        "Successfully completed Java programming assessment and demonstrated problem-solving skills.",

      skills: "Java • OOP • Problem Solving",
    },

    {
      image: hackreact,

      view: hackreact,

      title: "React Certificate",

      issuer: "HackerRank",

      description:
        "Validated React development skills including components, hooks, and frontend architecture.",

      skills: "React • Components • Hooks",
    },

    {
      image: kaggle,

      view: kaggle,

      title: "SQL Certificate",

      issuer: "Kaggle",

      description:
        "Learned SQL querying, data filtering, joins, aggregation, and database handling concepts.",

      skills: "SQL • Databases • Data Analysis",
    },

    {
      image: linkedin,

      view: linkedin,

      title: "Software Development Certificate",

      issuer: "LinkedIn Learning & Microsoft",

      description:
        "Completed software development learning path covering modern development workflows and tools.",

      skills: "Software Development • Git • Development Workflow",
    },

    {
      image: octanet,

      view: octanet,

      title: "Web Development Internship",

      issuer: "Octanet",

      description:
        "Worked on frontend development tasks and improved practical web development experience.",

      skills: "Frontend • Projects • Internship",
    },

    {
      image: oracle,

      view: oracle,

      title: "Oracle Cloud Infrastructure",

      issuer: "Oracle",

      description:
        "Completed Oracle Cloud Infrastructure learning focused on cloud services and deployment concepts.",

      skills: "Oracle Cloud • Infrastructure • Cloud Services",
    },

    {
      image: sap,

      view: sap,

      title: "SAP ABAP Certificate",

      issuer: "SAP",

      description:
        "Learned SAP ABAP fundamentals including enterprise application concepts and SAP workflows.",

      skills: "SAP • ABAP • Enterprise Applications",
    },

  ];

  const [current, setCurrent] = useState(0);

  // AUTO SLIDE

  useEffect(() => {

    const slider = setInterval(() => {

      setCurrent((prev) =>
        prev === certificates.length - 1 ? 0 : prev + 1
      );

    }, 4000);

    return () => clearInterval(slider);

  }, [certificates.length]);

  // NEXT

  const nextSlide = () => {

    setCurrent((prev) =>
      prev === certificates.length - 1 ? 0 : prev + 1
    );

  };

  // PREVIOUS

  const prevSlide = () => {

    setCurrent((prev) =>
      prev === 0 ? certificates.length - 1 : prev - 1
    );

  };

  return (

    <section
      id="certifications"
      className="px-4 md:px-10 py-20 bg-slate-950 overflow-hidden"
    >

      {/* HEADER */}

      <div className="text-center mb-16">

        <p className="text-cyan-400 text-base mb-3 tracking-widest uppercase">
          Certifications
        </p>

        <h1 className="text-4xl md:text-5xl font-bold mb-5 text-white">
          Learning & Achievements
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto leading-7 text-base">
          Certifications and achievements showcasing my continuous
          learning journey in Full Stack Development, Cloud,
          Programming, and modern technologies.
        </p>

      </div>

      {/* MAIN CONTAINER */}

      <div className="relative max-w-5xl mx-auto">

        {/* GLOW */}

        <div className="absolute w-64 h-64 bg-cyan-500/20 blur-[120px] top-0 left-0"></div>

        <div className="absolute w-64 h-64 bg-purple-500/20 blur-[120px] bottom-0 right-0"></div>

        {/* CARD */}

        <div className="relative grid lg:grid-cols-2 gap-8 items-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-6 md:p-10 shadow-[0_0_50px_rgba(0,255,255,0.08)]">

          {/* LEFT IMAGE */}

          <div className="relative group overflow-hidden rounded-[24px]">

            <div className="absolute inset-0 bg-cyan-400 blur-3xl opacity-20 group-hover:opacity-30 transition duration-700 rounded-[24px]"></div>

            <img
              key={current}
              src={certificates[current].image}
              alt={certificates[current].title}
              className="
              relative rounded-[24px]
              w-full max-h-[420px]
              object-cover border border-slate-700
              shadow-2xl transform transition-all
              duration-700 ease-in-out
              group-hover:scale-[1.02]
              "
            />

          </div>

          {/* RIGHT CONTENT */}

          <div className="text-white">

            <p className="text-cyan-400 text-lg mb-3 font-medium">
              {certificates[current].issuer}
            </p>

            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              {certificates[current].title}
            </h2>

            <p className="text-gray-400 text-base md:text-lg leading-8 mb-8">
              {certificates[current].description}
            </p>

            {/* SKILLS */}

            <div className="flex flex-wrap gap-3 mb-8">

              {certificates[current].skills
                .split("•")
                .map((skill, index) => (

                  <span
                    key={index}
                    className="
                    px-4 py-2 rounded-full
                    bg-slate-800/80
                    border border-slate-700
                    text-sm hover:bg-cyan-400
                    hover:text-black
                    transition-all duration-300
                    "
                  >
                    {skill.trim()}
                  </span>

                ))}

            </div>

            {/* VIEW BUTTON */}

            <div className="mb-10">

              <a
                href={certificates[current].view}
                target="_blank"
                rel="noreferrer"
                className="
                inline-flex items-center gap-2
                bg-cyan-500 hover:bg-cyan-400
                text-black px-5 py-3
                rounded-xl text-sm font-semibold
                transition duration-300
                "
              >

                View Certificate
                <FaExternalLinkAlt size={13} />

              </a>

            </div>

            {/* BUTTONS */}

            <div className="flex gap-4">

              <button
                onClick={prevSlide}
                className="
                w-12 h-12 rounded-full
                bg-slate-800 border border-slate-700
                flex items-center justify-center
                hover:bg-cyan-400 hover:text-black
                transition-all duration-300
                "
              >
                <FaArrowLeft size={16} />
              </button>

              <button
                onClick={nextSlide}
                className="
                w-12 h-12 rounded-full
                bg-cyan-500 text-black
                flex items-center justify-center
                hover:scale-110 hover:bg-cyan-400
                transition-all duration-300
                "
              >
                <FaArrowRight size={16} />
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}

export default Certifications;