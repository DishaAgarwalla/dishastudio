function Skills() {

  const techSkills = [

    {
      name: "HTML",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      level: "97%",
    },

    {
      name: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      level: "95%",
    },

    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      level: "70%",
    },

    {
      name: "React Js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      level: "90%",
    },

    {
      name: "Angular",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
      level: "85%",
    },

    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      level: "82%",
    },

   {
  name: "Express Js",
  icon: "https://cdn.simpleicons.org/express/ffffff",
  level: "85%",
},
    {
      name: "Node Js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      level: "88%",
    },

    {
      name: "Spring Boot",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
      level: "84%",
    },

    {
      name: "C",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
      level: "80%",
    },

    {
      name: "Java",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      level: "84%",
    },

    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      level: "86%",
    },

    {
      name: "Bootstrap",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      level: "90%",
    },

    {
      name: "Tailwind CSS",
      icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
      level: "94%",
    },

    {
      name: "Material UI",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
      level: "83%",
    },

    {
      name: "Figma",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      level: "76%",
    },

    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      level: "88%",
    },

    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      level: "96%",
    },

    {
      name: "AWS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      level: "75%",
    },

    {
      name: "Google Cloud",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
      level: "72%",
    },

  ];

  return (

    <section
      id="skills"
      className="bg-[#0b0b0b] py-20 px-4 md:px-10 text-white overflow-hidden"
    >

      {/* TITLE */}

      <div className="text-center mb-14">

        <h1 className="text-4xl md:text-5xl font-bold text-gray-400">
          Skills
        </h1>

      </div>

      {/* SKILL CARDS */}

      <div
        className="
        grid
        grid-cols-3
        sm:grid-cols-4
        md:grid-cols-5
        lg:grid-cols-6
        xl:grid-cols-7
        gap-3
        max-w-7xl
        mx-auto
        "
      >

        {techSkills.map((skill, index) => (

          <div
            key={index}
            className="
            bg-black
            border border-gray-800
            rounded-xl
            p-2
            h-[110px]
            flex flex-col items-center justify-center
            hover:border-cyan-400
            hover:shadow-[0_0_18px_rgba(34,211,238,0.25)]
            hover:-translate-y-1
            transition-all duration-300
            "
          >

            <img
              src={skill.icon}
              alt={skill.name}
              className="w-8 h-8 object-contain mb-2"
            />

            <h2 className="text-[11px] md:text-xs font-medium text-center">
              {skill.name}
            </h2>

          </div>

        ))}

      </div>

      {/* PROGRESS BARS */}

      <div className="max-w-5xl mx-auto mt-20 space-y-8">

        {techSkills.slice(0, 8).map((skill, index) => (

          <div key={index}>

            {/* LABEL */}

            <div className="flex justify-between mb-2">

              <span className="font-medium text-base md:text-lg">
                {skill.name}
              </span>

              <span className="bg-cyan-500 text-black text-xs px-2 py-1 rounded-md font-semibold">
                {skill.level}
              </span>

            </div>

            {/* BAR */}

            <div className="w-full h-3 bg-[#2a2a2a] rounded-full overflow-hidden">

              <div
                className="
                h-full
                bg-gradient-to-r
                from-cyan-400
                via-blue-500
                to-cyan-300
                rounded-full
                transition-all duration-700
                "
                style={{ width: skill.level }}
              ></div>

            </div>

          </div>

        ))}

      </div>

    </section>

  );
}

export default Skills;