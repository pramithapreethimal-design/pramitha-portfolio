
import { motion } from "motion/react";
import {
  GraduationCap,
  Code2,
  BrainCircuit,
  Rocket,
  MapPin,
  BookOpen,
  Trophy,
} from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "Computer Science Undergraduate",
    description: "Third-year student at the University of Ruhuna",
  },
  {
    icon: Code2,
    title: "Software Development",
    description: "Building full-stack applications and REST APIs",
  },
  {
    icon: BrainCircuit,
    title: "AI & Machine Learning",
    description: "Exploring CNNs, NLP, RAG and multi-agent systems",
  },
  {
    icon: Rocket,
    title: "Practical Project Experience",
    description: "Applying technical knowledge to real-world problems",
  },
];

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 font-semibold uppercase tracking-[0.25em] text-purple-400">
            Get to know me
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            About <span className="text-purple-400">Me</span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
        </motion.div>

        <div className="grid items-center gap-14 md:grid-cols-2">
          {/* Left: Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold leading-snug text-white">
              Passionate about building
              <span className="text-purple-400"> technology</span>
              {" "}that makes a difference.
            </h3>

            <p className="mt-7 leading-8 text-gray-400">
              I'm Pramitha Preethimal, a third-year Bachelor of
              Computer Science undergraduate at the University of
              Ruhuna, Sri Lanka. I enjoy developing software
              applications and exploring how technology can solve
              practical, real-world problems.
            </p>

            <p className="mt-5 leading-8 text-gray-400">
              My technical interests include full-stack development,
              Artificial Intelligence, Machine Learning, and
              Retrieval-Augmented Generation (RAG). I have worked
              with technologies such as C#, ASP.NET Core, React,
              Java Spring Boot, and Python through academic and
              personal projects.
            </p>

            <p className="mt-5 leading-8 text-gray-400">
              I continuously develop my skills through practical
              projects and professional training, with a particular
              interest in building intelligent applications and
              exploring AI agent technologies.
            </p>

            <div className="mt-7 flex items-center gap-3 text-gray-400">
              <MapPin size={20} className="text-purple-400" />
              <span>Matara, Sri Lanka</span>
            </div>

            {/* Highlights */}
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    className="rounded-xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-purple-400/40 hover:bg-purple-500/5"
                  >
                    <Icon
                      size={26}
                      className="mb-3 text-purple-400"
                    />

                    <h4 className="font-semibold text-white">
                      {item.title}
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-gray-400">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Profile card */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-600/20 to-blue-600/20 blur-2xl" />

            <div className="relative rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-2xl backdrop-blur-xl md:p-10">
              <div className="mb-8 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-blue-600">
                  <Code2 size={30} className="text-white" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">
                    Pramitha Preethimal
                  </h3>
                  <p className="text-sm text-purple-400">
                    Software Developer & AI Enthusiast
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-sm text-gray-500">
                    EDUCATION
                  </p>
                  <p className="mt-2 font-semibold text-white">
                    Bachelor of Computer Science
                  </p>
                  <p className="mt-1 text-sm text-gray-400">
                    University of Ruhuna · Third Year
                  </p>
                </div>

                <div className="h-px bg-white/10" />

                <div>
                  <p className="text-sm text-gray-500">
                    PROFESSIONAL TRAINING
                  </p>
                  <p className="mt-2 font-semibold text-white">
                    STEMLINK Professional Training Programme
                  </p>
                  <p className="mt-1 text-sm text-gray-400">
                    Software Development & AI Technologies
                  </p>
                  <p className="mt-3 font-semibold text-white">
                    American Corner Matara
                  </p>
                  <p className="mt-1 text-sm text-gray-400">
                    AI & Machine Learning Course · 2025
                  </p>
                </div>

                <div className="h-px bg-white/10" />

                <div>
                  <p className="text-sm text-gray-500">
                    AREAS OF INTEREST
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {[
                      "Full-Stack Development",
                      "Machine Learning",
                      "Deep Learning",
                      "NLP",
                      "RAG & LLMs",
                      "AI Agents",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-purple-400/20 bg-purple-500/10 px-3 py-2 text-xs text-purple-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
