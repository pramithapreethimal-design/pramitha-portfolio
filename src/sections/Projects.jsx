
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Code2,
  BrainCircuit,
  ShieldCheck,
  ChartLine,
  MessageSquare,
} from "lucide-react";

const projects = [
  {
    title: "SmartMall",
    category: "Full-Stack Development",
    description:
      "An indoor mall navigation system designed to help customers discover stores and navigate through shopping malls using QR-based access and indoor mapping.",
    icon: Code2,
    gradient: "from-purple-500 to-blue-500",
    technologies: ["C#", "ASP.NET Core", "React", "PostgreSQL"],
    github: null,
  },
  {
    title: "EleSafe",
    category: "Machine Learning & Backend",
    description:
      "An electrical safety risk prediction system that uses machine learning to assess potential electrical hazards and classify risk levels.",
    icon: ShieldCheck,
    gradient: "from-orange-500 to-red-500",
    technologies: [
      "Java",
      "Spring Boot",
      "Python",
      "Flask",
      "Machine Learning",
    ],
    github:
      "https://github.com/pramithapreethimal-design/elesafe",
  },
  {
    title: "Ruhuna Hoops AI Predictor",
    category: "Machine Learning",
    description:
      "A basketball prediction application using a Linear Regression model, exposed through a Flask API and connected to a web interface.",
    icon: ChartLine,
    gradient: "from-blue-500 to-cyan-500",
    technologies: [
      "Python",
      "Scikit-learn",
      "Flask",
      "JavaScript",
    ],
    github:
      "https://github.com/pramithapreethimal-design/ruhuna-hoops-ai",
  },
  {
    title: "Toxic Comment Detector",
    category: "Natural Language Processing",
    description:
      "An NLP project that analyzes online comments and predicts toxic content using a machine learning classification approach.",
    icon: MessageSquare,
    gradient: "from-pink-500 to-purple-500",
    technologies: [
      "Python",
      "NLP",
      "Machine Learning",
      "Scikit-learn",
    ],
    github:
      "https://github.com/pramithapreethimal-design/multilingual-toxic-filter",
  },
  {
    title: "Goviya",
    category: "Deep Learning & Agriculture",
    description:
      "An AI-powered agriculture project using a Convolutional Neural Network to address an agriculture-related problem.",
    icon: BrainCircuit,
    gradient: "from-green-500 to-lime-500",
    technologies: ["Python", "Deep Learning", "CNN"],
    github:
      "https://github.com/pramithapreethimal-design/GOVIYA",
  },
];

function Projects() {
  return (
    <section
      id="projects"
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
            What I've been building
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Featured <span className="text-purple-400">Projects</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-400">
            A selection of software development and AI projects
            where I apply my knowledge to solve practical problems.
          </p>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
        </motion.div>

        {/* Project cards */}
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -7 }}
                className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-colors hover:border-purple-400/40 hover:bg-white/[0.06]"
              >
                {/* Project icon */}
                <div
                  className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${project.gradient}`}
                >
                  <Icon size={28} className="text-white" />
                </div>

                {/* Project information */}
                <p className="mb-3 text-sm font-medium text-purple-400">
                  {project.category}
                </p>

                <h3 className="text-xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="mt-4 flex-1 text-sm leading-7 text-gray-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg border border-white/10 bg-slate-800/70 px-3 py-2 text-xs text-gray-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* GitHub link */}
                <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">
                  <span className="text-sm text-gray-500">
                    Project showcase
                  </span>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} on GitHub`}
                      className="inline-flex items-center gap-2 rounded-lg border border-purple-400/30 px-3 py-2 text-sm font-medium text-purple-300 transition hover:bg-purple-500/10 hover:text-white"
                    >
                      <Code2 size={17} />
                      GitHub
                      <ArrowUpRight size={16} />
                    </a>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
