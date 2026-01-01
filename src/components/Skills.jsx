import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaReact,
  FaNode,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaPython,
  FaJava,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiJavascript,
  SiCplusplus,
  SiPostman,
} from "react-icons/si";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "C++", icon: SiCplusplus, color: "text-blue-600" },
        { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
        { name: "Python", icon: FaPython, color: "text-blue-500" },
        { name: "Java", icon: FaJava, color: "text-red-600" },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: FaNode, color: "text-green-600" },
        {
          name: "Express.js",
          icon: SiExpress,
          color: "text-gray-700 dark:text-gray-300",
        },
        { name: "REST APIs", icon: FaNode, color: "text-teal-500" },
      ],
    },
    {
      title: "Frontend (Working Knowledge)",
      skills: [
        { name: "React", icon: FaReact, color: "text-cyan-500" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
        { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
      ],
    },
    {
      title: "Tools & Environment",
      skills: [
        { name: "Git", icon: FaGitAlt, color: "text-orange-600" },
        {
          name: "Linux",
          icon: FaLinux,
          color: "text-gray-900 dark:text-white",
        },
        { name: "Docker (Basics)", icon: FaDocker, color: "text-blue-500" },
        { name: "Postman", icon: SiPostman, color: "text-orange-500" },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Technical <span className="gradient-text">Skills</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white/50 dark:bg-navy-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50 dark:border-navy-700/50"
              >
                <h3 className="text-xl font-semibold mb-6 text-center gradient-text">
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.08, y: -4 }}
                      className="flex flex-col items-center justify-center p-3 rounded-xl bg-white dark:bg-navy-900"
                    >
                      <skill.icon
                        className={`w-10 h-10 mb-2 ${skill.color}`}
                      />
                      <span className="text-xs font-medium text-center">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Core CS Strengths */}
          <motion.div
            variants={itemVariants}
            className="mt-12 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-600/10 rounded-2xl p-8 border border-gray-200/50 dark:border-navy-700/50"
          >
            <h3 className="text-2xl font-semibold mb-6 text-center">
              <span className="gradient-text">Core Strengths</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Data Structures & Algorithms",
                "Problem Solving",
                "Object-Oriented Programming",
                "Operating Systems",
                "DBMS & SQL",
                "Computer Networks",
                "System Design (Fundamentals)",
                "OCR & Automation",
              ].map((item, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-white dark:bg-navy-800 rounded-full text-sm font-medium shadow-md"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
