"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaLock, FaPhone } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");

  const router = useRouter();

  const toggleAuthMode = () => setIsLogin(!isLogin);

  const handleAuth = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const url = isLogin ? "/api/auth/login" : "/api/auth/signup";

    const payload = isLogin
      ? { email, password }
      : { name, mobile, email, password };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Server error: ${errorMessage}`);
      }

      const data = await response.json();
      console.log("Success:", data);

      router.push("/dashboard");
    } catch (error) {
      console.error("Error:", error);
      alert((error as Error).message || "An unknown error occurred.");
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-gray-200 dark:bg-gray-900 p-6">
      <motion.div
        className="bg-white dark:bg-gray-800 rounded-md p-8 w-full max-w-md relative overflow-hidden"
        initial={{ opacity: 0, y: 50, rotateX: -10 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="text-3xl font-semibold text-center text-gray-800 dark:text-gray-100 mb-6"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          {isLogin ? "Welcome Back" : "Create an Account"}
        </motion.h2>

        <motion.form
          onSubmit={handleAuth}
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {!isLogin && (
            <>
              <div className="flex items-center border border-gray-300 dark:border-gray-700 rounded-lg p-2 bg-gray-50 dark:bg-gray-700">
                <FaUser className="text-gray-400 dark:text-gray-500 mr-2" />
                <input
                  type="text"
                  placeholder="Name"
                  className="flex-1 bg-transparent outline-none text-gray-700 dark:text-gray-300 placeholder-gray-500 dark:placeholder-gray-600"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="flex items-center border border-gray-300 dark:border-gray-700 rounded-lg p-2 bg-gray-50 dark:bg-gray-700">
                <FaPhone className="text-gray-400 dark:text-gray-500 mr-2" />
                <input
                  type="text"
                  placeholder="Mobile Number"
                  className="flex-1 bg-transparent outline-none text-gray-700 dark:text-gray-300 placeholder-gray-500 dark:placeholder-gray-600"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  required
                />
              </div>
            </>
          )}
          <div className="flex items-center border border-gray-300 dark:border-gray-700 rounded-lg p-2 bg-gray-50 dark:bg-gray-700">
            <FaEnvelope className="text-gray-400 dark:text-gray-500 mr-2" />
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 bg-transparent outline-none text-gray-700 dark:text-gray-300 placeholder-gray-500 dark:placeholder-gray-600"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center border border-gray-300 dark:border-gray-700 rounded-lg p-2 bg-gray-50 dark:bg-gray-700">
            <FaLock className="text-gray-400 dark:text-gray-500 mr-2" />
            <input
              type="password"
              placeholder="Password"
              className="flex-1 bg-transparent outline-none text-gray-700 dark:text-gray-300 placeholder-gray-500 dark:placeholder-gray-600"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            {isLogin ? "Login" : "Sign Up"}
          </motion.button>
        </motion.form>

        <div className="flex justify-between mt-6 space-x-4">
          <motion.button
            className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
            whileHover={{ scale: 1.05 }}
          >
            Facebook
          </motion.button>
          <motion.button
            className="flex-1 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
            whileHover={{ scale: 1.05 }}
          >
            Google
          </motion.button>
        </div>

        <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              toggleAuthMode();
            }}
            className="text-blue-600 dark:text-blue-400 ml-1 cursor-pointer"
          >
            {isLogin ? "Sign Up" : "Login"}
          </a>
        </p>

        {/* 3D Floating Animation */}
        <motion.div
          className="absolute top-0 right-0 h-32 w-32 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full filter blur-lg opacity-50 z-0"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 360, 0], y: [0, -30, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 left-0 h-32 w-32 bg-gradient-to-r from-green-400 to-blue-500 rounded-full filter blur-lg opacity-50 z-0"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 360, 0], y: [0, 30, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </motion.div>
    </div>
  );
}
