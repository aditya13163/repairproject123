// src/components/About.tsx
"use client";

import { motion } from "framer-motion";

export default function Index() {
  return (
    <div className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        {/* About Section */}
        <section className="text-center mb-20">
          <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            About Us
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            We are dedicated to providing the best repair management solutions
            to streamline your operations and enhance productivity. Our mission
            is to offer a user-friendly platform that addresses all your repair
            needs.
          </p>
        </section>

        {/* Team Section */}
        <section className="text-center mb-20">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <motion.div
              className="bg-white dark:bg-gray-700 shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/path/to/team-member1.jpg"
                alt="Team Member 1"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Alice Johnson</h3>
              <p className="text-gray-600 dark:text-gray-300">CEO & Founder</p>
            </motion.div>
            {/* Team Member 2 */}
            <motion.div
              className="bg-white dark:bg-gray-700 shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/path/to/team-member2.jpg"
                alt="Team Member 2"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Bob Smith</h3>
              <p className="text-gray-600 dark:text-gray-300">CTO</p>
            </motion.div>
            {/* Team Member 3 */}
            <motion.div
              className="bg-white dark:bg-gray-700 shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/path/to/team-member3.jpg"
                alt="Team Member 3"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Carol Davis</h3>
              <p className="text-gray-600 dark:text-gray-300">Lead Developer</p>
            </motion.div>
          </div>
        </section>

        {/* Visual Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">
            Our Vision
          </h2>
          <motion.div
            className="relative bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 mx-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="/path/to/visual.jpg"
              alt="Our Vision"
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-lg font-semibold text-gray-900 dark:text-gray-100 bg-opacity-75 bg-gray-800 dark:bg-gray-700 p-4 rounded-lg">
                Our vision is to revolutionize repair management with
                cutting-edge technology.
              </p>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
