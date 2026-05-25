import { useEffect, useState } from "react";

import { FaArrowUp } from "react-icons/fa";

function ScrollToTop() {

  const [visible, setVisible] = useState(false);

  useEffect(() => {

    const toggleVisibility = () => {

      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }

    };

    window.addEventListener("scroll", toggleVisibility);

    return () =>
      window.removeEventListener("scroll", toggleVisibility);

  }, []);

  const scrollToTop = () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };

  return (

    <>

      {visible && (

        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50
          w-14 h-14 rounded-full
          bg-cyan-500 text-black
          flex items-center justify-center
          shadow-lg shadow-cyan-500/30
          hover:bg-cyan-400 hover:scale-110
          transition duration-300"
        >

          <FaArrowUp className="text-lg" />

        </button>

      )}

    </>

  );
}

export default ScrollToTop;