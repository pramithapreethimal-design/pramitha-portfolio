
import { motion } from "motion/react";
import {
  ArrowRight,
  Code2,
  BriefcaseBusiness,
  Mail,
} from "lucide-react";

import developerAvatar from "../assets/images/developer-avatar.png";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-16 pt-32"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-purple-600/20 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 md:grid-cols-2">

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <p className="mb-4 font-medium text-purple-400">
            Hello, I'm
          </p>

          <h1 className="text-5xl font-bold tracking-tight text-white md:text-7xl">
            Pramitha
            <span className="text-purple-400"> Preethimal</span>
          </h1>

          <h2 className="mt-5 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-2xl font-bold text-transparent md:text-3xl">
            Software Developer & AI Engineer
          </h2>

          <p className="mx-auto mt-6 max-w-xl leading-8 text-gray-400 md:mx-0">
            Building innovative software solutions and exploring
            the possibilities of Artificial Intelligence.
            Passionate about turning ideas into practical applications.
          </p>

          {/* Action buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
            <a
              href="#projects"
              className="group flex items-center gap-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-7 py-4 font-semibold text-white shadow-lg shadow-purple-500/20 transition hover:scale-105"
            >
              View My Projects

              <ArrowRight
                size={20}
                className="transition group-hover:translate-x-1"
              />
            </a>

            <a
              href="#contact"
              className="flex items-center gap-3 rounded-full border border-purple-400/50 px-7 py-4 font-semibold text-white transition hover:bg-purple-500/10"
            >
              <Mail size={20} />
              Contact Me
            </a>
          </div>

          {/* Social links */}
          <div className="mt-8 flex justify-center gap-5 md:justify-start">
            <a
              href="https://github.com/pramithapreethimal-design"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-gray-400 transition hover:text-purple-400"
            >
              <Code2 size={25} />
            </a>

            <a
              href="https://www.linkedin.com/in/pramithaliyange/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-gray-400 transition hover:text-purple-400"
            >
              <BriefcaseBusiness size={25} />
            </a>
          </div>
        </motion.div>

        {/* Developer illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative mx-auto w-full max-w-lg"
        >
          <div className="absolute inset-10 rounded-full bg-purple-600/30 blur-[90px]" />

          <motion.img
            src={developerAvatar}
            alt="Illustrated software developer working on a laptop"
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-10 w-full object-contain drop-shadow-2xl"
          />
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;
