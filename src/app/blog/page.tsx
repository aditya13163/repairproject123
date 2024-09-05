"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button"; // Ensure you have this Button component

const blogPosts = [
  {
    id: 1,
    title: "How to Choose the Right Technician for Your Needs",
    date: "August 15, 2024",
    excerpt:
      "Choosing the right technician is crucial for a seamless repair experience. Here’s a guide to help you make the right choice.",
    content:
      "Finding a qualified technician can be overwhelming. Start by checking reviews and credentials. Look for technicians with specific experience related to your repair needs. It's also important to verify their insurance and guarantees. By following these steps, you ensure that your repairs are done efficiently and professionally.",
    image: "/images/blog1.jpg",
  },
  {
    id: 2,
    title: "Top 5 Common Repairs and How to Handle Them",
    date: "August 22, 2024",
    excerpt:
      "From fixing leaky faucets to repairing broken appliances, learn how to handle the top five common repairs efficiently.",
    content:
      "Common home repairs can range from simple tasks like fixing a leaky faucet to more complex issues like appliance repair. This post covers practical solutions for these common issues, including step-by-step instructions and tips for DIY repairs. Learn when to tackle a repair yourself and when to call a professional.",
    image: "/images/blog2.jpg",
  },
  {
    id: 3,
    title: "Maintaining Your Home Appliances: Tips and Tricks",
    date: "August 29, 2024",
    excerpt:
      "Regular maintenance can extend the lifespan of your appliances. Discover practical tips and tricks for keeping them in top condition.",
    content:
      "Regular maintenance of home appliances is key to ensuring their longevity and efficiency. This article provides a comprehensive guide on how to perform routine checks and maintenance tasks for various appliances, including washing machines, refrigerators, and HVAC systems. Implement these tips to avoid costly repairs and replacements.",
    image: "/images/blog3.jpg",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const cardVariants = {
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

export default function Blog() {
  return (
    <div className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.section
          className="text-center mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            Our Latest Blog Posts
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-12">
            Stay updated with the latest tips, guides, and news related to home
            repairs and maintenance.
          </p>
        </motion.section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              variants={cardVariants}
              whileHover="hover"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                  {post.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {post.excerpt}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {post.content.slice(0, 150)}...{" "}
                  <a
                    href={`/blog/${post.id}`}
                    className="text-yellow-400 hover:text-yellow-500"
                  >
                    Read More
                  </a>
                </p>
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded-lg">
                  Read More
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
