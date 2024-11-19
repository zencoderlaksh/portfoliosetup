import { motion } from "framer-motion";
import { FaLightbulb, FaDesktop, FaUsers, FaCogs } from "react-icons/fa"; // Icons for key highlights

const KeyHighlights = () => {
  return (
    <div className="mt-20 opacity-[0.7] key-highlights py-16 bg-gradient-to-r from-blue-500 to-green-500 text-white">
      <h2 className="text-4xl font-bold text-center mb-12 text-black">
        Key Highlights
      </h2>
      <div className="highlights-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {/* Highlight 1 */}
        <motion.div
          className="highlight-item bg-white bg-opacity-20 rounded-lg shadow-lg p-6 hover:bg-opacity-30 transition-all"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <div className="icon text-5xl mb-4">
            <FaLightbulb />
          </div>
          <h3 className="text-2xl font-semibold mb-2 text-black">
            Innovative Solutions
          </h3>
          <p className="text-lg">
            I specialize in finding creative solutions to complex challenges in
            web development.
          </p>
        </motion.div>

        {/* Highlight 2 */}
        <motion.div
          className="highlight-item bg-white bg-opacity-20 rounded-lg shadow-lg p-6 hover:bg-opacity-30 transition-all"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="icon text-5xl mb-4">
            <FaDesktop />
          </div>
          <h3 className="text-2xl font-semibold mb-2 text-black">
            UI/UX Design
          </h3>
          <p className="text-lg">
            Crafting seamless, user-friendly interfaces that ensure an optimal
            user experience.
          </p>
        </motion.div>

        {/* Highlight 3 */}
        <motion.div
          className="highlight-item bg-white bg-opacity-20 rounded-lg shadow-lg p-6 hover:bg-opacity-30 transition-all"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="icon text-5xl mb-4">
            <FaUsers />
          </div>
          <h3 className="text-2xl font-semibold mb-2 text-black">
            Team Collaboration
          </h3>
          <p className="text-lg">
            A strong advocate of teamwork and collaboration for achieving
            outstanding results.
          </p>
        </motion.div>

        {/* Highlight 4 */}
        <motion.div
          className="highlight-item bg-white bg-opacity-20 rounded-lg shadow-lg p-6 hover:bg-opacity-30 transition-all"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="icon text-5xl mb-4">
            <FaCogs />
          </div>
          <h3 className="text-2xl font-semibold mb-2 text-black">
            Technology Enthusiast
          </h3>
          <p className="text-lg">
            Always eager to explore emerging technologies and implement them to
            solve problems.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default KeyHighlights;
