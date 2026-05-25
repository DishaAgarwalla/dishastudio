import { useRef } from "react";

import emailjs from "@emailjs/browser";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {

    e.preventDefault();

    emailjs
      .sendForm(
        "service_1i4226d", 
        "template_jfe4uoa", 
        form.current,
        "8YlB9x3lHxU7nLnIX" 
      )
      .then(
        () => {

          alert("Message sent successfully!");

          form.current.reset();

        },
        (error) => {

          alert("Failed to send message!");

          console.log(error.text);

        }
      );
  };

  return (

    <section
      id="contact"
      className="relative px-5 md:px-16 py-20 bg-[#020617] overflow-hidden"
    >

      {/* GLOW EFFECTS */}

      <div
        className="absolute top-0 left-0
        w-72 h-72 bg-cyan-500/10
        blur-3xl rounded-full"
      ></div>

      <div
        className="absolute bottom-0 right-0
        w-72 h-72 bg-blue-500/10
        blur-3xl rounded-full"
      ></div>

      {/* HEADER */}

      <div className="text-center mb-16 relative z-10">

        <p
          className="text-cyan-400 uppercase
          tracking-[4px] text-xs mb-4"
        >
          Contact
        </p>

        <h1
          className="text-4xl md:text-5xl
          font-bold mb-5"
        >
          Let’s Work Together
        </h1>

        <p
          className="text-gray-400
          text-base max-w-2xl mx-auto
          leading-8"
        >
          Open to internships, collaborations,
          freelance opportunities, and exciting
          projects in Full Stack Development.
        </p>

      </div>

      {/* CONTACT GRID */}

      <div
        className="max-w-6xl mx-auto
        grid lg:grid-cols-2 gap-8
        relative z-10"
      >

        {/* LEFT CARD */}

        <div
          className="bg-white/5 backdrop-blur-lg
          border border-white/10
          rounded-[30px] p-8 shadow-2xl"
        >

          <h2
            className="text-2xl font-bold
            mb-8 text-cyan-400"
          >
            Get In Touch
          </h2>

          <div className="space-y-7">

            {/* EMAIL */}

            <div className="flex gap-4 items-start">

              <div
                className="w-12 h-12 rounded-full
                bg-cyan-500/20
                flex items-center justify-center
                text-xl text-cyan-400"
              >
                <FaEnvelope />
              </div>

              <div>

                <p className="text-gray-400 mb-1 text-sm">
                  Email
                </p>

                <a
                  href="mailto:dishaagarwalla260@gmail.com"
                  className="text-base hover:text-cyan-400 transition"
                >
                  dishaagarwalla260@gmail.com
                </a>

              </div>

            </div>

            {/* LINKEDIN */}

            <div className="flex gap-4 items-start">

              <div
                className="w-12 h-12 rounded-full
                bg-cyan-500/20
                flex items-center justify-center
                text-xl text-cyan-400"
              >
                <FaLinkedin />
              </div>

              <div>

                <p className="text-gray-400 mb-1 text-sm">
                  LinkedIn
                </p>

                <a
                  href="https://www.linkedin.com/in/disha-agarwalla-10884b31b/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-base hover:text-cyan-400 transition"
                >
                  linkedin.com/in/disha-agarwalla
                </a>

              </div>

            </div>

            {/* GITHUB */}

            <div className="flex gap-4 items-start">

              <div
                className="w-12 h-12 rounded-full
                bg-cyan-500/20
                flex items-center justify-center
                text-xl text-cyan-400"
              >
                <FaGithub />
              </div>

              <div>

                <p className="text-gray-400 mb-1 text-sm">
                  GitHub
                </p>

                <a
                  href="https://github.com/DishaAgarwalla"
                  target="_blank"
                  rel="noreferrer"
                  className="text-base hover:text-cyan-400 transition"
                >
                  github.com/DishaAgarwalla
                </a>

              </div>

            </div>

          </div>

        </div>

        {/* FORM */}

        <div
          className="bg-white/5 backdrop-blur-lg
          border border-white/10
          rounded-[30px] p-8 shadow-2xl"
        >

          <h2
            className="text-2xl font-bold
            mb-8 text-cyan-400"
          >
            Send Message
          </h2>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-5"
          >

            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full bg-slate-900/70
              border border-slate-700
              rounded-xl px-5 py-3.5
              outline-none focus:border-cyan-400
              transition text-sm"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full bg-slate-900/70
              border border-slate-700
              rounded-xl px-5 py-3.5
              outline-none focus:border-cyan-400
              transition text-sm"
            />

            <textarea
              rows="5"
              name="message"
              placeholder="Write your message..."
              required
              className="w-full bg-slate-900/70
              border border-slate-700
              rounded-xl px-5 py-3.5
              outline-none focus:border-cyan-400
              transition resize-none text-sm"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-cyan-500
              py-3.5 rounded-xl
              text-black text-sm font-semibold
              hover:bg-cyan-400
              transition duration-300"
            >
              Send Message 🚀
            </button>

          </form>

        </div>

      </div>

    </section>

  );
}

export default Contact;