// src/components/ContactUs.tsx
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button"; // Ensure you have this Button component

export default function ContactUs() {
  return (
    <div className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        {/* Contact Section */}
        <section className="text-center mb-20">
          <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            We would love to hear from you! Whether you have a question,
            feedback, or just want to say hi, feel free to drop us a message.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
                Send Us a Message
              </h2>
              <form
                action="https://formspree.io/f/YOUR_FORM_ID"
                method="POST"
                className="flex flex-col space-y-4"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 dark:bg-gray-900 dark:border-gray-600 dark:focus:ring-yellow-300"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 dark:bg-gray-900 dark:border-gray-600 dark:focus:ring-yellow-300"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                  required
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 dark:bg-gray-900 dark:border-gray-600 dark:focus:ring-yellow-300"
                ></textarea>
                <Button
                  type="submit"
                  className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 text-lg font-semibold rounded-lg"
                >
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
                Our Office
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                1234 Repair Lane, Suite 567
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                Repair City, RC 78910
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                <strong>Phone:</strong> (123) 456-7890
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                <strong>Email:</strong> contact@repair.com
              </p>
              <motion.a
                href="mailto:contact@repair.com"
                className="inline-block mt-4 bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 text-lg font-semibold rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                Email Us
              </motion.a>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
