"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import SliderComponent from "@/components/Swipper";
export default function Index() {
  const router = useRouter(); // Use the useRouter hook for navigation

  const handleSignUp = () => {
    router.push("/login"); // Navigate to the login page
  };

  return (
    // {this is our swipper section in our website to show the better page}
    <>
      <div className="p-6 w-full flex">
        <SliderComponent />
      </div>
      <div className="pt-10 overflow-auto">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-20 dark:bg-gradient-to-r dark:from-indigo-700 dark:to-blue-600 w-full ">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">Welcome to Our Product</h1>
            <p className="text-lg mb-8">
              The best solution to enhance your productivity and streamline your
              workflow.
            </p>
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 text-lg font-semibold rounded-lg dark:bg-yellow-300 dark:text-gray-900">
              Get Started
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-gray-100">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white shadow-lg rounded-lg p-6 dark:bg-gray-800 dark:text-gray-100">
                <h3 className="text-xl font-semibold mb-4">Feature One</h3>
                <p>
                  Description of the first key feature. Highlight what makes
                  this feature great.
                </p>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-6 dark:bg-gray-800 dark:text-gray-100">
                <h3 className="text-xl font-semibold mb-4">Feature Two</h3>
                <p>
                  Description of the second key feature. Why it's essential and
                  how it helps.
                </p>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-6 dark:bg-gray-800 dark:text-gray-100">
                <h3 className="text-xl font-semibold mb-4">Feature Three</h3>
                <p>
                  Description of the third key feature. Explain its benefits and
                  usage.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-gray-100 py-20 dark:bg-gray-700">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-gray-100">
              What Our Users Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white shadow-lg rounded-lg p-6 dark:bg-gray-800 dark:text-gray-100">
                <p className="mb-4">
                  "This product has completely transformed how we work. It's
                  intuitive and powerful."
                </p>
                <h3 className="text-lg font-semibold">
                  - Jane Doe, CEO of Company
                </h3>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-6 dark:bg-gray-800 dark:text-gray-100">
                <p className="mb-4">
                  "I can't imagine going back to how we did things before. This
                  tool is a game-changer."
                </p>
                <h3 className="text-lg font-semibold">
                  - John Smith, Product Manager
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-green-500 to-teal-400 text-white py-20 dark:bg-gradient-to-r dark:from-green-600 dark:to-teal-500">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
            <p className="text-lg mb-8">
              Join thousands of happy customers who are already using our
              product.
            </p>
            <Button
              onClick={handleSignUp} // Use the handleSignUp function for navigation
              className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 text-lg font-semibold rounded-lg dark:bg-yellow-300 dark:text-gray-900"
            >
              Sign Up Now
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}
