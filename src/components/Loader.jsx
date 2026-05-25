function Loader() {

  return (

    <div
      className="
      fixed inset-0 z-[9999]
      flex items-center justify-center
      overflow-hidden
      bg-[#020617]
      "
    >

      {/* BACKGROUND GLOW */}

      <div
        className="
        absolute w-[500px] h-[500px]
        bg-cyan-500/10 blur-[140px]
        rounded-full
        "
      ></div>

      {/* MAIN CONTENT */}

      <div className="relative flex flex-col items-center">

        {/* OUTER ROTATING RING */}

        <div
          className="
          absolute w-44 h-44
          border-4 border-cyan-400/30
          border-t-cyan-400
          rounded-full
          animate-spin
          "
        ></div>

        {/* INNER ROTATING RING */}

        <div
          className="
          absolute w-28 h-28
          border-4 border-purple-400/20
          border-b-purple-400
          rounded-full
          animate-spin
          "
          style={{
            animationDirection: "reverse",
            animationDuration: "1.8s",
          }}
        ></div>

        {/* CENTER GLOW */}

        <div
          className="
          w-10 h-10 rounded-full
          bg-cyan-400
          shadow-[0_0_40px_#22d3ee]
          animate-pulse
          "
        ></div>

        {/* TEXT */}

        <div className="mt-32 text-center">

  <h1
    className="
    text-3xl md:text-5xl
    font-extrabold
    text-white
    tracking-wide
    "
  >
    Disha
    <span className="text-cyan-400">.</span>
  </h1>

  <p
    className="
    mt-4 text-gray-400
    text-sm md:text-base
    tracking-[4px]
    uppercase
    "
  >
    Portfolio Loading
  </p>

</div>

      </div>

    </div>

  );
}

export default Loader;