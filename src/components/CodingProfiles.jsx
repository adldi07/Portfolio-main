import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaCode, FaExternalLinkAlt, FaTrophy } from "react-icons/fa";
import { SiCodeforces, SiLeetcode, SiCodechef } from "react-icons/si";

const CodingProfiles = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const profiles = [
    {
      platform: "Codeforces",
      icon: SiCodeforces,
      username: "jsb_adi07",
      rating: "1400+",
      maxRating: "1415",
      title: "Specialist",
      solved: "400+",
      url: "https://codeforces.com/profile/jsb_adi07",
      gradient: "from-blue-500 to-cyan-500",
      color: "text-blue-500",
    },
    {
      platform: "LeetCode",
      icon: SiLeetcode,
      username: "adesh8061",
      rating: "1600+",
      maxRating: "1600+",
      title: "Active Solver",
      solved: "300+",
      url: "https://leetcode.com/u/adesh8061/",
      gradient: "from-yellow-500 to-orange-500",
      color: "text-yellow-500",
    },
    {
      platform: "CodeChef",
      icon: SiCodechef,
      username: "adesh8061",
      rating: "1620",
      maxRating: "1620",
      title: "3 Star",
      solved: "400+",
      url: "https://www.codechef.com/users/adesh8061",
      gradient: "from-purple-500 to-pink-500",
      color: "text-purple-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <section
      id="coding-profiles"
      className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Competitive <span className="gradient-text">Programming</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Solved{" "}
              <span className="font-bold text-purple-600 dark:text-purple-400">
                1100+ problems
              </span>{" "}
              across multiple platforms
            </p>
          </motion.div>

          {/* Main Profiles */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {profiles.map((profile, index) => (
              <motion.a
                key={index}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-white/50 dark:bg-navy-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50 dark:border-navy-700/50 overflow-hidden"
              >
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${profile.gradient}`}
                />

                <div className="flex items-center justify-between mb-6">
                  <profile.icon className={`w-12 h-12 ${profile.color}`} />
                  <FaExternalLinkAlt className="w-4 h-4 text-gray-400 group-hover:text-cyan-500" />
                </div>

                <h3 className="text-2xl font-bold mb-2 group-hover:gradient-text">
                  {profile.platform}
                </h3>

                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  @{profile.username}
                </p>

                <div className="space-y-3">
                  <div className="flex justify-between p-3 bg-gray-100 dark:bg-navy-900 rounded-xl">
                    <span className="text-sm">Rating</span>
                    <span className="font-bold gradient-text">
                      {profile.rating}
                    </span>
                  </div>

                  <div className="flex justify-between p-3 bg-gray-100 dark:bg-navy-900 rounded-xl">
                    <span className="text-sm">Max Rating</span>
                    <span className="font-bold flex items-center gap-1">
                      <FaTrophy className="w-4 h-4 text-yellow-500" />
                      {profile.maxRating}
                    </span>
                  </div>

                  <div className="flex justify-between p-3 bg-gray-100 dark:bg-navy-900 rounded-xl">
                    <span className="text-sm">Title</span>
                    <span
                      className={`text-sm px-3 py-1 rounded-full bg-gradient-to-r ${profile.gradient} text-white`}
                    >
                      {profile.title}
                    </span>
                  </div>

                  <div className="flex justify-between p-3 bg-gray-100 dark:bg-navy-900 rounded-xl">
                    <span className="text-sm">Solved</span>
                    <span className="font-bold text-green-600">
                      {profile.solved}
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Summary */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border mb-12"
          >
            <h3 className="text-xl font-bold text-center mb-6 gradient-text">
              Overall Summary
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold gradient-text">1100+</div>
                <div className="text-sm">Total Problems</div>
              </div>
              <div>
                <div className="text-2xl font-bold gradient-text">1400+</div>
                <div className="text-sm">Codeforces</div>
              </div>
              <div>
                <div className="text-2xl font-bold gradient-text">3★</div>
                <div className="text-sm">CodeChef</div>
              </div>
            </div>
          </motion.div>

          {/* Additional Profiles */}
          <motion.div
            variants={itemVariants}
            className="bg-white/50 dark:bg-navy-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200/50 dark:border-navy-700/50"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">
              <FaCode className="inline-block mr-2 mb-1" />
              Other Coding Profiles
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <a
                href="https://www.naukri.com/code360/profile/ad_ldi07"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-gray-100 dark:bg-navy-900 hover:shadow-lg transition"
              >
                <span className="font-semibold">Naukri Code360</span>
                <FaExternalLinkAlt />
              </a>

              <a
                href="https://codolio.com/profile/adesh8061"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-gray-100 dark:bg-navy-900 hover:shadow-lg transition"
              >
                <span className="font-semibold">Codolio Profile</span>
                <FaExternalLinkAlt />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CodingProfiles;
