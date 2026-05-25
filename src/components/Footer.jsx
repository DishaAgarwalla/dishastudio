import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {

  return (

    <footer
      className="relative px-5 md:px-16 py-8
      border-t border-white/10 bg-[#020617]"
    >

      <div
        className="max-w-7xl mx-auto
        flex flex-col md:flex-row
        items-center justify-between gap-5"
      >

        {/* LEFT */}

        <div>

          <h1 className="text-2xl font-bold mb-1">

            <span className="text-white">
              Disha
            </span>

            <span className="text-cyan-400">
              .
            </span>

          </h1>

          <p className="text-gray-400 text-sm">
            Full Stack Developer • MERN Stack • Java • DevOps
          </p>

        </div>

        {/* CENTER */}

        <div
          className="flex gap-5
          text-sm text-gray-400"
        >

          <a
            href="#about"
            className="hover:text-cyan-400 transition"
          >
            About
          </a>

          <a
            href="#projects"
            className="hover:text-cyan-400 transition"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="hover:text-cyan-400 transition"
          >
            Contact
          </a>

        </div>

        {/* RIGHT */}

        <div className="flex gap-3">

          <a
            href="https://github.com/DishaAgarwalla"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-full
            bg-white/5 border border-white/10
            flex items-center justify-center
            text-lg hover:bg-cyan-400
            hover:text-black transition duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/disha-agarwalla-10884b31b/"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-full
            bg-white/5 border border-white/10
            flex items-center justify-center
            text-lg hover:bg-cyan-400
            hover:text-black transition duration-300"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:dishaagarwalla260@gmail.com"
            className="w-10 h-10 rounded-full
            bg-white/5 border border-white/10
            flex items-center justify-center
            text-lg hover:bg-cyan-400
            hover:text-black transition duration-300"
          >
            <FaEnvelope />
          </a>

        </div>

      </div>

      {/* COPYRIGHT */}

      <div
        className="text-center text-gray-500
        text-xs mt-8"
      >
        © 2026 Disha Agarwalla. All Rights Reserved.
      </div>

    </footer>

  );
}

export default Footer;