
import { motion } from "motion/react";
import {
  Code2,
  Monitor,
  Server,
  BrainCircuit,
  Database,
  Bot,
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    color: "from-purple-500 to-pink-500",
    skills: ["C#", "Python", "Java", "JavaScript", "SQL"],
  },
  {
    title: "Frontend Development",
    icon: Monitor,
    color: "from-blue-500 to-cyan-500",
    skills: ["React", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Backend Development",
    icon: Server,
    color: "from-green-500 to-emerald-500",
    skills: [
      "ASP.NET Core",
      "Entity Framework Core",
      "Spring Boot",
      "FastAPI",
      "Flask",
      "REST APIs",
    ],
  },
  {
    title: "AI & Machine Learning",
    icon: BrainCircuit,
    color: "from-orange-500 to-pink-500",
    skills: [
      "Machine Learning",
      "Supervised Learning",
      "Deep Learning",
      "CNNs",
      "NLP",
      "Model Evaluation",
      "RAG",
      "LLMs",
      "Prompt Engineering",
    ],
  },
  {
    title: "AI Agents & Integration",
    icon: Bot,
    color: "from-cyan-500 to-blue-500",
    skills: [
      "MCP",
      "FastMCP",
      "Multi-Agent Systems",
      "AI Agent Integration",
    ],
  },
  {
    title: "Databases & Developer Tools",
    icon: Database,
    color: "from-indigo-500 to-purple-500",
    skills: [
      "PostgreSQL",
      "MySQL",
      "Pinecone",
      "Git",
      "GitHub",
      "Visual Studio",
      "VS Code",
      "IntelliJ IDEA",
      "Postman",
      "Bruno",
      "Marimo",
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
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
            What I work with
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Technical <span className="text-purple-400">Skills</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-400">
            Technologies and tools I use to build software applications,
            develop AI-powered solutions, and explore intelligent systems.
          </p>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
        </motion.div>

        {/* Skills cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -6 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-colors hover:border-purple-400/40 hover:bg-white/[0.06]"
              >
                {/* Category icon */}
                <div
                  className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${category.color}`}
                >
                  <Icon size={28} className="text-white" />
                </div>

                <h3 className="mb-5 text-xl font-bold text-white">
                  {category.title}
                </h3>

                {/* Individual skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-white/10 bg-slate-800/70 px-3 py-2 text-sm text-gray-300 transition hover:border-purple-400/50 hover:text-purple-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Skills;
