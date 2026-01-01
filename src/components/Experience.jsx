// import { motion } from "framer-motion";
// import { useInView } from "framer-motion";
// import { useRef } from "react";
// import {
//   FaBriefcase,
//   FaCalendarAlt,
//   FaMapMarkerAlt,
//   FaAward,
// } from "react-icons/fa";

// const Experience = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.3 });

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.3 },
//     },
//   };

//   const itemVariants = {
//     hidden: { x: -50, opacity: 0 },
//     visible: {
//       x: 0,
//       opacity: 1,
//       transition: { type: "spring", stiffness: 100 },
//     },
//   };

//   const achievements = [
//     {
//       text: "Built and enhanced multiple production-level web applications using React, Next.js, and JavaScript.",
//     },
//     {
//       text: "Improved application performance and page load times through component optimization and better state handling.",
//     },
//     {
//       text: "Collaborated with designers and backend developers to implement UI/UX improvements.",
//     },
//     {
//       text: "Worked with REST APIs to integrate dynamic data into frontend applications.",
//     },
//     {
//       text: "Followed clean code practices and version control using Git and GitHub.",
//     },
//   ];

//   return (
//     <section
//       id="experience"
//       className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"
//     >
//       <div className="container mx-auto max-w-6xl">
//         <motion.div
//           ref={ref}
//           variants={containerVariants}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//         >
//           <motion.h2
//             variants={itemVariants}
//             className="text-4xl md:text-5xl font-bold text-center mb-16"
//           >
//             Work <span className="gradient-text">Experience</span>
//           </motion.h2>

//           <motion.div
//             variants={itemVariants}
//             className="relative bg-white/50 dark:bg-navy-800/50 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-gray-200/50 dark:border-navy-700/50"
//           >
//             <div className="grid md:grid-cols-[260px_1fr]">
//               {/* Left Side */}
//               <div className="bg-gradient-to-br from-cyan-600 via-blue-600 to-purple-700 p-8 flex flex-col items-center justify-center">
//                 <div className="bg-white rounded-2xl px-6 py-4 shadow-xl">
//                   <h3 className="text-2xl font-bold text-gray-900">
//                     Grull.work
//                   </h3>
//                 </div>
//               </div>

//               {/* Right Side */}
//               <div className="p-8 md:p-10">
//                 <h3 className="text-3xl font-bold mb-2 gradient-text">
//                   Full Stack Engineering Intern
//                 </h3>
//                 <p className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
//                   Grull.work
//                 </p>

//                 <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-400 mb-6">
//                   <div className="flex items-center gap-2">
//                     <FaCalendarAlt className="text-cyan-500" />
//                     <span>May 2025 – July 2025</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <FaMapMarkerAlt className="text-cyan-500" />
//                     <span>Remote</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <FaBriefcase className="text-cyan-500" />
//                     <span>Internship</span>
//                   </div>
//                 </div>

//                 <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
//                   Worked as a Full Stack Developer Intern focusing on building
//                   responsive web interfaces and improving application
//                   performance in a real-world development environment.
//                 </p>
//               </div>
//             </div>

//             {/* Key Contributions */}
//             <div className="p-8 md:p-10 pt-0">
//               <h4 className="text-xl font-bold mb-6 gradient-text">
//                 Key Contributions
//               </h4>

//               <div className="grid md:grid-cols-2 gap-4">
//                 {achievements.map((item, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={isInView ? { opacity: 1, x: 0 } : {}}
//                     transition={{ delay: 0.4 + index * 0.1 }}
//                     className="flex items-start gap-3 p-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl"
//                   >
//                     <FaAward className="text-cyan-500 mt-1" />
//                     <p className="text-gray-700 dark:text-gray-300">
//                       {item.text}
//                     </p>
//                   </motion.div>
//                 ))}
//               </div>

//               {/* Tech Stack */}
//               <div className="mt-8">
//                 <h4 className="text-lg font-bold mb-4">
//                   Technologies Used
//                 </h4>
//                 <div className="flex flex-wrap gap-2">
//                   {[
//                     "React",
//                     "Next.js",
//                     "JavaScript",
//                     "Node.js",
//                     "HTML",
//                     "CSS",
//                     "Git",
//                     "GitHub",
//                   ].map((tech, index) => (
//                     <span
//                       key={index}
//                       className="px-4 py-2 text-sm bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 rounded-full"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Experience;


import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaAward,
} from "react-icons/fa";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const CERTIFICATE_PREVIEW_URL =
    "https://drive.google.com/file/d/1tO3eOGkJUOkYZ_T5K-qQudSBKd9NMu9F/preview";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const achievements = [
    {
      text: "Built and enhanced multiple production-level web applications using React, Next.js, and JavaScript.",
    },
    {
      text: "Improved application performance and page load times through component optimization and better state handling.",
    },
    {
      text: "Collaborated with designers and backend developers to implement UI/UX improvements.",
    },
    {
      text: "Worked with REST APIs to integrate dynamic data into frontend applications.",
    },
    {
      text: "Followed clean code practices and version control using Git and GitHub.",
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"
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
            Work <span className="gradient-text">Experience</span>
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="relative bg-white/50 dark:bg-navy-800/50 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-gray-200/50 dark:border-navy-700/50"
          >
            <div className="grid md:grid-cols-[260px_1fr]">
              {/* Left Side */}
              <div className="bg-gradient-to-br from-cyan-600 via-blue-600 to-purple-700 p-8 flex flex-col items-center justify-center">
                <div className="bg-white rounded-2xl px-6 py-4 shadow-xl">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Grull.work
                  </h3>
                </div>
              </div>

              {/* Right Side */}
              <div className="p-8 md:p-10">
                <h3 className="text-3xl font-bold mb-2 gradient-text">
                  Full Stack Engineering Intern
                </h3>
                <p className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
                  Grull.work
                </p>

                <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-400 mb-6">
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt className="text-cyan-500" />
                    <span>May 2025 – July 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-cyan-500" />
                    <span>Remote</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaBriefcase className="text-cyan-500" />
                    <span>Internship</span>
                  </div>
                </div>

                {/* Certificate Preview Button */}
                <div className="mb-6">
                  <a
                    href={CERTIFICATE_PREVIEW_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <FaAward className="w-4 h-4" />
                    Preview Internship Certificate
                  </a>
                </div>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                  Worked as a Full Stack Developer Intern focusing on building
                  responsive web interfaces and improving application
                  performance in a real-world development environment.
                </p>
              </div>
            </div>

            {/* Key Contributions */}
            <div className="p-8 md:p-10 pt-0">
              <h4 className="text-xl font-bold mb-6 gradient-text">
                Key Contributions
              </h4>

              <div className="grid md:grid-cols-2 gap-4">
                {achievements.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-3 p-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl"
                  >
                    <FaAward className="text-cyan-500 mt-1" />
                    <p className="text-gray-700 dark:text-gray-300">
                      {item.text}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="mt-8">
                <h4 className="text-lg font-bold mb-4">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React",
                    "Next.js",
                    "JavaScript",
                    "Node.js",
                    "HTML",
                    "CSS",
                    "Git",
                    "GitHub",
                  ].map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 text-sm bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
