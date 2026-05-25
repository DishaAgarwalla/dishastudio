function About() {

  return (

    <section
      id="about"
      className="relative px-6 md:px-20 py-28 bg-[#020617] overflow-hidden"
    >

      {/* BACKGROUND GLOW */}

      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full"></div>

      <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">

        {/* LEFT SIDE */}

        <div>

          <p className="text-cyan-400 uppercase tracking-[5px] text-sm mb-6">
            About Me
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-8">

            Passionate About Building
            <span className="text-cyan-400"> Modern </span>
            &
            <span className="text-cyan-400"> Scalable </span>
            Web Experiences

          </h1>

          <p className="text-gray-400 text-lg leading-9 mb-10">

            I’m a Full Stack Developer focused on creating
            responsive, scalable, and visually modern web applications.
            I enjoy transforming ideas into real-world digital products
            using modern technologies and clean UI design principles.

          </p>

        </div>

        {/* RIGHT SIDE */}

        <div
          className="bg-white/5 backdrop-blur-lg border border-white/10
          rounded-[32px] p-10 shadow-2xl hover:border-cyan-400/40
          transition duration-500"
        >

          <h2 className="text-3xl font-bold mb-8 text-cyan-400">
            Who I Am
          </h2>

          <div className="space-y-6 text-gray-300 text-lg leading-9">

            <p>
              I specialize in Full Stack Development using
              MERN Stack, Java, Spring Boot, Angular, MySQL,
              and modern frontend technologies.
            </p>

            <p>
              I enjoy building responsive user interfaces,
              designing scalable backend systems,
              and continuously learning new technologies
              through practical development and projects.
            </p>

            <p>
              Alongside development, I’m also exploring
              DevOps, Cloud concepts, AI-powered applications,
              and deployment workflows to become a well-rounded software engineer.
            </p>

          </div>

        </div>

      </div>

    </section>

  );
}

export default About;