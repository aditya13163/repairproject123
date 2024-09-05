"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  // Close the sidebar when clicking outside
  const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof HTMLElement && event.target.dataset.dismiss) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <>
      {/* Navbar for medium and larger devices */}
      <div className="hidden md:flex md:items-center md:justify-between bg-gray-800 text-white p-1 fixed w-full z-50">
        <h1 className="text-xl font-bold">Logo</h1>
        <nav className="flex space-x-4 text-l">
          <Link href="/" className="hover:bg-gray-700 px-4 py-2 rounded">
            Home
          </Link>
          <Link href="/about" className="hover:bg-gray-700 px-4 py-2 rounded">
            About
          </Link>
          <Link href="/contact" className="hover:bg-gray-700 px-4 py-2 rounded">
            Contact Us
          </Link>
        </nav>
        <div className="flex space-x-4">
          <Link href="/login">
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded">
              Login
            </button>
          </Link>
          <Link href="/technician">
            <button className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded">
              Technician
            </button>
          </Link>
        </div>
      </div>

      {/* Navbar for smaller screens */}
      <div className="md:hidden flex items-center justify-between bg-gray-800 text-white p-4">
        <button
          onClick={toggleSidebar}
          aria-label="Open menu"
          className="p-2 text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <h1 className="text-xl font-bold">Logo</h1>
        <div>
          <Link href="/login">
            <button
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded mr-2"
              aria-label="Login"
            >
              Login
            </button>
          </Link>
          <Link href="/technician">
            <button
              className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded"
              aria-label="Technician"
            >
              Technician
            </button>
          </Link>
        </div>
      </div>

      {/* Sidebar drawer for small devices */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={handleClickOutside}
          data-dismiss="true"
        >
          <div
            className="fixed top-0 left-0 h-full w-1/2 bg-gray-800 text-white z-50 rounded-r-lg"
            onClick={(e) => e.stopPropagation()} // Prevents click events from propagating to the overlay
          >
            <div className="flex justify-end p-4">
              <button
                onClick={toggleSidebar}
                aria-label="Close menu"
                className="text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col items-center mt-16">
              <Link href="/" className="px-4 py-2 hover:bg-gray-700">
                Home
              </Link>
              <Link href="/about" className="px-4 py-2 hover:bg-gray-700">
                About
              </Link>
              <Link href="/contact" className="px-4 py-2 hover:bg-gray-700">
                Contact Us
              </Link>
              <Link href="/login" className="px-4 py-2 hover:bg-gray-700">
                Login
              </Link>
              <Link href="/technician" className="px-4 py-2 hover:bg-gray-700">
                Technician
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
