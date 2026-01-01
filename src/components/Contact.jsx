import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCode,
} from "react-icons/fa";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const autoReplyTemplateId =
        import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS not configured");
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: "adeshKumar8061@gmail.com",
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      if (autoReplyTemplateId) {
        await emailjs.send(
          serviceId,
          autoReplyTemplateId,
          {
            from_name: formData.name,
            to_email: formData.email,
          },
          publicKey
        );
      }

      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      setErrorMessage(
        "Failed to send message. Please email me directly at adeshKumar8061@gmail.com"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "adeshKumar8061@gmail.com",
      link: "mailto:adeshKumar8061@gmail.com",
      color: "text-red-500",
    },
    {
      icon: FaPhone,
      label: "Phone",
      value: "+91-9696858675",
      link: "tel:+919696858675",
      color: "text-green-500",
    },
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: "Dhanbad, Jharkhand, India",
      link: null,
      color: "text-blue-500",
    },
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      label: "GitHub",
      url: "https://github.com/adldi07",
      color: "hover:text-gray-900 dark:hover:text-white",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/-adesh-kumar/",
      color: "hover:text-blue-600",
    },
    {
      icon: FaCode,
      label: "Codolio",
      url: "https://codolio.com/profile/adesh8061",
      color: "hover:text-purple-600",
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
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
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
            Get In <span className="gradient-text">Touch</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 gradient-text">
                  Let's Connect
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  I’m open to discussing software engineering roles, internships,
                  freelance projects, or collaboration opportunities.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 p-4 bg-white/50 dark:bg-navy-800/50 rounded-xl"
                  >
                    <div
                      className={`p-3 rounded-lg bg-gray-100 dark:bg-navy-700 ${info.color}`}
                    >
                      <info.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">
                        {info.label}
                      </div>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="font-medium hover:text-cyan-500"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="font-medium">{info.value}</div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Find me online</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -5 }}
                      className={`p-4 bg-white/50 dark:bg-navy-800/50 rounded-xl ${social.color}`}
                    >
                      <social.icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right – Form */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="space-y-6">
                {["name", "email"].map((field) => (
                  <div key={field}>
                    <label className="block text-sm font-medium mb-2">
                      {field === "name" ? "Name" : "Email"}
                    </label>
                    <input
                      type={field === "email" ? "email" : "text"}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/50 dark:bg-navy-800/50 rounded-xl border"
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/50 dark:bg-navy-800/50 rounded-xl border resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white font-semibold rounded-xl"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </motion.button>

                {errorMessage && (
                  <div className="text-center text-red-500 text-sm">
                    {errorMessage}
                  </div>
                )}

                {submitted && (
                  <div className="text-center text-green-600">
                    ✅ Message sent successfully!
                  </div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
