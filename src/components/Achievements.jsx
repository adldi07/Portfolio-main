import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaCode, FaTrophy, FaUsers, FaMedal } from "react-icons/fa";

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const achievements = [
    {
      icon: FaCode,
      title: "1100+ DSA Problems Solved",
      description:
        "Solved 1100+ algorithmic problems across Codeforces, CodeChef, and LeetCode, building strong foundations in data structures, algorithms, and problem-solving techniques.",
      date: "Ongoing",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: FaTrophy,
      title: "Codeforces Specialist",
      description:
        "Achieved Specialist level on Codeforces with a peak rating around 1400+, consistently solving medium and hard-level problems.",
      date: "Ongoing",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: FaMedal,
      title: "CodeChef 3★ Programmer",
      description:
        "Reached 3-star rating on CodeChef and secured global ranks under 250 in contests with 4,500+ participants.",
      date: "Ongoing",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: FaUsers,
      title: "Member – E-Cell IIT (ISM)",
      description:
        "Active member of the Entrepreneurship Cell at IIT (ISM) Dhanbad, contributing to initiatives that promote innovation and startup culture.",
      date: "2023 – Present",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: FaUsers,
      title: "Technical Team Member – Concetto",
      description:
        "Worked as a technical team member for Concetto, Eastern India’s largest tech fest, supporting event execution for 20,000+ participants.",
      date: "2023 – 2024",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: FaMedal,
      title: "NCC A, B & C Certificate Holder",
      description:
        "Completed all three NCC certificates, developing leadership, discipline, teamwork, and time management skills.",
      date: "2018 – 2021",
      color: "from-red-500 to-orange-500",
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <section
      id="achievements"
      className="py-20 px-4 sm:px-6 lg:px-8 relative z-10"
    >
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
            Achievements & <span className="gradient-text">Highlights</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white/50 dark:bg-navy-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-navy-700/50"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-r ${achievement.color}`}
                  >
                    <achievement.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        {achievement.title}
                      </h3>
                      <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-navy-700 px-3 py-1 rounded-full">
                        {achievement.date}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quick CP Summary */}
          <motion.div
            variants={itemVariants}
            className="mt-16 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-600/10 rounded-2xl p-8 border border-gray-200/50 dark:border-navy-700/50"
          >
            <h3 className="text-xl font-bold text-center mb-6 gradient-text">
              Competitive Programming Snapshot
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold gradient-text">1400+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Codeforces
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold gradient-text">1600+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  LeetCode
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold gradient-text">3★</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  CodeChef
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
