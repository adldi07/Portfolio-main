import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [imgError, setImgError] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const imageRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!imageRef.current) return;
    const rect = imageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
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
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
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
            About <span className="gradient-text">Me</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div variants={itemVariants} className="order-2 md:order-1">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  I am a final-year{" "}
                  <span className="font-semibold text-cyan-600 dark:text-cyan-400">
                    B.Tech student in Electronics and Communication Engineering
                  </span>{" "}
                  at{" "}
                  <span className="font-semibold">
                    IIT (ISM) Dhanbad
                  </span>, with a strong interest in{" "}
                  <span className="font-semibold text-purple-600 dark:text-purple-400">
                    software engineering and problem solving
                  </span>.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  My primary strength lies in{" "}
                  <span className="font-semibold">
                    data structures, algorithms, and competitive programming
                  </span>, where I focus on writing efficient, clean, and
                  logically sound solutions. Alongside this, I have hands-on
                  experience building web applications, which helps me apply
                  engineering concepts to real-world systems.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  I enjoy diving deep into problems, understanding systems
                  end-to-end, and continuously improving my fundamentals. I am
                  currently seeking opportunities where I can grow as a{" "}
                  <span className="font-semibold text-purple-600 dark:text-purple-400">
                    Software Development Engineer
                  </span>{" "}
                  and contribute to building reliable and scalable software.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mt-8 max-w-md">
                <div className="text-center p-4 bg-white/50 dark:bg-navy-800/50 rounded-xl backdrop-blur-sm hover:scale-105 transition-transform">
                  <div className="text-3xl font-bold gradient-text">1100+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Problems Solved
                  </div>
                </div>

                <div className="text-center p-4 bg-white/50 dark:bg-navy-800/50 rounded-xl backdrop-blur-sm hover:scale-105 transition-transform">
                  <div className="text-3xl font-bold gradient-text">Final Year</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    IIT (ISM) Dhanbad
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              variants={itemVariants}
              className="order-1 md:order-2 flex justify-center"
            >
              <div
                ref={imageRef}
                className="relative cursor-pointer"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                  transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                  transition: "transform 0.1s ease-out",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-2xl blur-xl opacity-50 animate-glow"></div>
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 p-1">
                  <div className="w-full h-full rounded-2xl bg-navy-800 flex items-center justify-center">
                    {!imgError ? (
                      <img
                        src="/profile.jpg"
                        alt="Adesh Kumar profile"
                        className="w-full h-full object-cover rounded-2xl"
                        onError={() => setImgError(true)}
                      />
                    ) : (
                      <div className="text-8xl">👨‍💻</div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
