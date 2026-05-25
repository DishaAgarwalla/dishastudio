import { TypeAnimation } from "react-type-animation";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import profile from "../assets/profile.png";

function Hero() {

  return (

    <section
      className="relative min-h-screen flex items-center
      px-5 md:px-16 overflow-hidden bg-[#020617]"
    >

      {/* BACKGROUND GLOW */}

      <div
        className="absolute top-20 left-10
        w-72 h-72 bg-cyan-500/20
        blur-[140px] rounded-full"
      ></div>

      <div
        className="absolute bottom-10 right-10
        w-72 h-72 bg-blue-500/20
        blur-[140px] rounded-full"
      ></div>

      {/* MAIN CONTENT */}

      <div
        className="max-w-7xl mx-auto
        grid lg:grid-cols-2 gap-14
        items-center relative z-10 w-full"
      >

        {/* LEFT SIDE */}

        <div>

          {/* SMALL TEXT */}

          <p
            className="text-cyan-400 uppercase
            tracking-[4px] text-xs mb-5"
          >
            Full Stack Developer
          </p>

          {/* MAIN HEADING */}

          <h1
            className="text-4xl md:text-6xl
            font-bold leading-tight mb-7"
          >

            Hi, I'm
            <span className="text-cyan-400">
              {" "}Disha{" "}
            </span>

            Agarwalla

          </h1>

          {/* TYPE ANIMATION */}

          <div
            className="text-xl md:text-3xl
            font-semibold mb-7"
          >

            <TypeAnimation
              sequence={[
                "MERN Stack Developer",
                2000,
                "Java Developer",
                2000,
                "Frontend Designer",
                2000,
                "Problem Solver",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
              className="text-cyan-400"
            />

          </div>

          {/* DESCRIPTION */}

          <p
            className="text-gray-400 text-base
            leading-8 max-w-2xl mb-9"
          >

            Passionate about creating modern,
            responsive, and scalable web
            applications using MERN Stack,
            Java, Spring Boot, Angular,
            DevOps, and modern frontend
            technologies.

          </p>

          {/* BUTTONS */}

          <div
            className="flex flex-wrap
            gap-4 mb-10"
          >

            <a
              href="#projects"
              className="bg-cyan-500
              hover:bg-cyan-400
              text-black px-6 py-3
              rounded-2xl font-semibold
              transition duration-300"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              className="border border-cyan-400
              text-cyan-400 px-6 py-3
              rounded-2xl font-semibold
              hover:bg-cyan-400
              hover:text-black
              transition duration-300"
            >
              Download Resume
            </a>

          </div>

          {/* SOCIAL LINKS */}

          <div className="flex items-center gap-4">

            {/* GITHUB */}

            <a
              href="https://github.com/DishaAgarwalla"
              target="_blank"
              className="w-12 h-12 rounded-full
              bg-white/5 border border-white/10
              flex items-center justify-center
              text-xl hover:bg-cyan-400
              hover:text-black hover:scale-110
              transition duration-300"
            >
              <FaGithub />
            </a>

            {/* LINKEDIN */}

            <a
              href="https://www.linkedin.com/in/disha-agarwalla-10884b31b/"
              target="_blank"
              className="w-12 h-12 rounded-full
              bg-white/5 border border-white/10
              flex items-center justify-center
              text-xl hover:bg-cyan-400
              hover:text-black hover:scale-110
              transition duration-300"
            >
              <FaLinkedin />
            </a>

            {/* EMAIL */}

            <a
              href="mailto:dishaagarwalla260@gmail.com"
              className="w-12 h-12 rounded-full
              bg-white/5 border border-white/10
              flex items-center justify-center
              text-xl hover:bg-cyan-400
              hover:text-black hover:scale-110
              transition duration-300"
            >
              <FaEnvelope />
            </a>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="flex justify-center">

          <div className="relative">

            {/* OUTER GLOW */}

            <div
              className="absolute inset-0
              bg-cyan-500/20 blur-3xl
              rounded-full"
            ></div>

            {/* PROFILE IMAGE */}
{/* PROFILE IMAGE */}

<img
  src={profile}
  alt="Disha"
  className="relative
  w-[280px] h-[280px]
  md:w-[420px] md:h-[420px]
  rounded-full border-4
  border-cyan-400
  shadow-2xl shadow-cyan-500/20
  object-cover
  object-[center_15%]"
/>
          </div>

        </div>

      </div>

    </section>

  );
}

export default Hero;