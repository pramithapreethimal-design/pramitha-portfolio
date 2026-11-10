
import { motion } from "motion/react";
import {
  GraduationCap,
  BriefcaseBusiness,
  Trophy,
  Users,
  Music,
  Code2,
  BrainCircuit,
} from "lucide-react";

const experiences = [
  {
    icon: BriefcaseBusiness,
    type: "Professional Experience",
    title: "Digital Marketing Trainee",
    organization: "People's Bank – Wariyapola | 2023–2024",
    description:
      "Participated in the bank's training programme for G.C.E. Advanced Level graduates. Gained practical experience in opening customer accounts and processing fixed deposits using digital banking systems.",
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: BrainCircuit,
    type: "Professional Training",
    title: "STEMLINK Professional Training Programme",
    organization: "STEMLINK | Ongoing",
    description:
      "Developing practical skills in software development and AI-related technologies, including modern development practices and AI integration.",
    color: "from-purple-500 to-blue-500",
  },
  {
    icon: GraduationCap,
    type: "Training & Development",
    title: "AI & Machine Learning Course",
    organization: "American Corner Matara | 2025",
    description:
      "Completed an AI and Machine Learning course as part of professional and technical skills development.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Code2,
    type: "Competition",
    title: "AgenTrix 2026",
    organization: "Team TekTrack – Team 19",
    description:
      "Contributed to API integration during a 12-hour RAG-based competition focused on Public Transport and Commuting within the Government and Citizen Services domain.",
    color: "from-green-500 to-emerald-500",
  },
];

const achievements = [
  {
    icon: Trophy,
    title: "3rd Place – Interfaculty Basketball",
    description:
      "Served as captain of the University of Ruhuna Faculty of Science basketball team, helping the team secure 3rd place at the Interfaculty Meet.",
  },
  {
    icon: Users,
    title: "Science Faculty Basketball Captain",
    description:
      "Led and coordinated the Faculty of Science basketball team at the University of Ruhuna.",
  },
  {
    icon: Trophy,
    title: "HackElite 3.0 – Stage 2",
    description:
      "Selected for Stage 2 of HackElite 3.0 as a member of Team Syntax Spinners, University of Ruhuna.",
  },
 
  {
    icon: Music,
    title: "Theertha 2026 Performer",
    description:
      "Performed the song at Theertha 2026 with Batch 46.",
  },
  {
    icon: Music,
    title: "Aura Voice Battle – Top 50",
    description:
      "Achieved a Top 50 position in the Aura Voice Battle organized by the Rotaract Club of the University of Ruhuna.",
  },
];

function Experience() {
  return (
    <section
      id="experience"
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
            My journey
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Experience &{" "}
            <span className="text-purple-400">Achievements</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-400">
            My professional experience, technical training,
            competitions, university activities, and achievements.
          </p>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
        </motion.div>

        {/* Experience timeline */}
        <div className="mb-24">
          <h3 className="mb-10 text-2xl font-bold text-white">
            Professional Experience & Training
          </h3>

          <div className="relative space-y-8 border-l border-purple-400/30 pl-8">
            {experiences.map((experience, index) => {
              const Icon = experience.icon;

              return (
                <motion.div
                  key={experience.title}
                  initial={{ opacity: 0, x: -25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                  }}
                  className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-purple-400/40"
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute -left-[42px] top-7 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br ${experience.color} ring-4 ring-slate-950`}
                  >
                    <Icon size={14} className="text-white" />
                  </div>

                  <p className="text-sm font-medium text-purple-400">
                    {experience.type}
                  </p>

                  <h4 className="mt-2 text-xl font-bold text-white">
                    {experience.title}
                  </h4>

                  <p className="mt-1 text-sm text-gray-500">
                    {experience.organization}
                  </p>

                  <p className="mt-4 leading-7 text-gray-400">
                    {experience.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="mb-10 text-2xl font-bold text-white">
            Achievements & Activities
          </h3>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;

              return (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  whileHover={{ y: -6 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-purple-400/40"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-blue-500">
                    <Icon size={28} className="text-white" />
                  </div>

                  <h4 className="text-lg font-bold text-white">
                    {achievement.title}
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-gray-400">
                    {achievement.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
