import Link from "next/link";
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200 p-6 md:p-10 transition-colors duration-300">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          <div>
            <h4 className="font-bold mb-4">Templates</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/">Content Calendar</Link>
              </li>
              <li>
                <Link href="/">Product Roadmap</Link>
              </li>
              <li>
                <Link href="/">Event Planning</Link>
              </li>
              <li>
                <Link href="/">Inventory Tracking</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Extensions</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/">Miro</Link>
              </li>
              <li>
                <Link href="/">Jira</Link>
              </li>
              <li>
                <Link href="/">Loom</Link>
              </li>
              <li>
                <Link href="/">Formstack</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Solutions</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/">Marketing</Link>
              </li>
              <li>
                <Link href="/">Sales</Link>
              </li>
              <li>
                <Link href="/">Operations</Link>
              </li>
              <li>
                <Link href="/">HR</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Learn More</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/">Webinars</Link>
              </li>
              <li>
                <Link href="/">Guides</Link>
              </li>
              <li>
                <Link href="/">Customer Stories</Link>
              </li>
              <li>
                <Link href="/">Articles</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/">About</Link>
              </li>
              <li>
                <Link href="/">Careers</Link>
              </li>
              <li>
                <Link href="/">Blog</Link>
              </li>
              <li>
                <Link href="/">Newsroom</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between items-center mt-8 space-y-4 md:space-y-0">
          <div className="flex space-x-4 text-2xl">
            <Link href="/">
              <FaFacebook className="hover:text-blue-600" />
            </Link>
            <Link href="/">
              <FaLinkedin className="hover:text-blue-700" />
            </Link>
            <Link href="/">
              <FaTwitter className="hover:text-blue-400" />
            </Link>
            <Link href="/">
              <FaInstagram className="hover:text-pink-600" />
            </Link>
            <Link href="/">
              <FaYoutube className="hover:text-red-600" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between mt-8 text-sm text-gray-500 dark:text-gray-400">
          <ul className="flex flex-wrap space-x-4">
            <li>
              <Link href="/">Security</Link>
            </li>
            <li>
              <Link href="/">API</Link>
            </li>
            <li>
              <Link href="/">Privacy</Link>
            </li>
            <li>
              <Link href="/">Terms</Link>
            </li>
          </ul>
          <p className="mt-4 md:mt-0">
            © 2024 Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
