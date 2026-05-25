function Navbar() {

  return (

    <nav
      className="fixed top-0 left-0 w-full z-50
      bg-[#020617]/80 backdrop-blur-xl
      border-b border-white/10"
    >

      <div
        className="max-w-7xl mx-auto
        flex justify-between items-center
        px-5 md:px-16 py-4"
      >

        {/* LOGO */}

        <a
          href="#"
          className="text-2xl md:text-3xl font-bold tracking-wide"
        >
          <span className="text-white">
            Disha
          </span>

          <span className="text-cyan-400">
            .
          </span>
        </a>

        {/* NAV LINKS */}

        <ul
          className="hidden lg:flex items-center
          gap-8 text-sm font-medium text-gray-300"
        >

          <li>
            <a
              href="#about"
              className="hover:text-cyan-400 transition duration-300"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="hover:text-cyan-400 transition duration-300"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#education"
              className="hover:text-cyan-400 transition duration-300"
            >
              Education
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="hover:text-cyan-400 transition duration-300"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#certifications"
              className="hover:text-cyan-400 transition duration-300"
            >
              Certifications
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-cyan-400 transition duration-300"
            >
              Contact
            </a>
          </li>

        </ul>

        {/* RESUME BUTTON */}

        <a
          href="/resume.pdf"
          target="_blank"
          className="hidden md:flex
          bg-cyan-500 hover:bg-cyan-400
          text-black text-sm font-semibold
          px-5 py-2.5 rounded-xl
          transition duration-300
          shadow-lg shadow-cyan-500/20"
        >
          Resume
        </a>

      </div>

    </nav>

  );
}

export default Navbar;