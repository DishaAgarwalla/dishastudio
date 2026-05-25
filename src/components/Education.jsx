import { FaGraduationCap } from "react-icons/fa";

function Education() {

  const education = [

    {
      year: "2023 - 2027",
      title: "Bachelor of Technology",
      school: "Centurion University of Technology and Management",
      description:
        "Pursuing B.Tech in Computer Science Engineering with focus on Full Stack Development, MERN Stack, Java, and modern technologies.",
      score: "CGPA: 8.66 (Present)",
    },

    {
      year: "2021 - 2023",
      title: "Higher Secondary Education",
      school: "Little Hearts Toddlers Academy",
      description:
        "Completed higher secondary education in Science stream with PCM.",
      score: "Percentage: 64%",
    },

    {
      year: "2019 - 2021",
      title: "Secondary Education",
      school: "Little Hearts Toddlers Academy",
      description:
        "Completed secondary education in CBSE medium with strong academic foundation.",
      score: "Percentage: 81%",
    },

  ];

  return (

    <section
      id="education"
      className="relative px-5 md:px-16 py-20 bg-[#020617] overflow-hidden"
    >

      {/* GLOW */}

      <div
        className="absolute top-0 left-0
        w-72 h-72 bg-cyan-500/10
        blur-3xl rounded-full"
      ></div>

      {/* HEADER */}

      <div className="text-center mb-16 relative z-10">

        <p
          className="text-cyan-400 uppercase
          tracking-[4px] text-xs mb-4"
        >
          Education
        </p>

        <h1
          className="text-4xl md:text-5xl
          font-bold"
        >
          My Academic Journey
        </h1>

      </div>

      {/* TIMELINE */}

      <div className="relative max-w-5xl mx-auto">

        {/* CENTER LINE */}

        <div
          className="hidden md:block absolute
          left-1/2 top-0 h-full w-[2px]
          bg-cyan-400/30
          transform -translate-x-1/2"
        ></div>

        {education.map((item, index) => (

          <div
            key={index}
            className={`mb-14 flex flex-col md:flex-row items-center
            ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
          >

            {/* CARD */}

            <div className="md:w-1/2 px-4">

              <div
                className="bg-white/5 backdrop-blur-lg
                border border-white/10
                rounded-[28px] p-7
                shadow-2xl hover:border-cyan-400/40
                transition duration-500"
              >

                <p
                  className="text-cyan-400
                  mb-3 font-semibold text-sm"
                >
                  {item.year}
                </p>

                {/* TITLE WITH HAT ICON */}

                <div className="flex items-center gap-3 mb-3">

                  <div
                    className="w-11 h-11 rounded-full
                    bg-cyan-500/20
                    flex items-center justify-center
                    text-cyan-400 text-lg"
                  >
                    <FaGraduationCap />
                  </div>

                  <h2
                    className="text-2xl font-bold"
                  >
                    {item.title}
                  </h2>

                </div>

                <p
                  className="text-lg text-gray-300 mb-4"
                >
                  {item.school}
                </p>

                <p
                  className="text-gray-400
                  leading-7 mb-5 text-sm"
                >
                  {item.description}
                </p>

                <p
                  className="text-cyan-400
                  font-semibold text-sm"
                >
                  {item.score}
                </p>

              </div>

            </div>

            {/* DOT */}

            <div
              className="hidden md:flex
              w-8 h-8 rounded-full
              bg-cyan-400 border-4
              border-slate-950 z-10"
            ></div>

            <div className="md:w-1/2"></div>

          </div>

        ))}

      </div>

    </section>

  );
}

export default Education;