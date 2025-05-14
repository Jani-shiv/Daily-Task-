import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Code, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-12 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Code className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                WebMastery
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Your journey to becoming a web development master starts here. Clear tutorials, interactive examples, and hands-on projects.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">HTML</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/html/intro" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition">Introduction</Link>
              </li>
              <li>
                <Link to="/html/tags" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition">Basic Tags</Link>
              </li>
              <li>
                <Link to="/html/links-images" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition">Links & Images</Link>
              </li>
              <li>
                <Link to="/html/tables" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition">Tables</Link>
              </li>
              <li>
                <Link to="/html/forms" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition">Forms</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">CSS</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/css/intro" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition">Basics</Link>
              </li>
              <li>
                <Link to="/css/selectors" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition">Selectors</Link>
              </li>
              <li>
                <Link to="/css/layout" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition">Layout</Link>
              </li>
              <li>
                <Link to="/css/animations" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition">Animations</Link>
              </li>
              <li>
                <Link to="/css/responsive" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition">Responsive Design</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">JavaScript</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/js/intro" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition">Introduction</Link>
              </li>
              <li>
                <Link to="/js/dom" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition">DOM Manipulation</Link>
              </li>
              <li>
                <Link to="/js/events" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition">Events</Link>
              </li>
              <li>
                <Link to="/js/functions" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition">Functions</Link>
              </li>
              <li>
                <Link to="/js/async" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition">Async/Fetch</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} WebMastery. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex flex-wrap items-center justify-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
            <Link to="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition">About</Link>
            <Link to="/contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Contact</Link>
            <Link to="/privacy" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Privacy</Link>
            <Link to="/terms" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Terms</Link>
          </div>
        </div>
        
        <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-500 flex items-center justify-center">
          Made with <Heart className="h-4 w-4 mx-1 text-red-500" fill="currentColor" /> for web developers everywhere
        </div>
      </div>
    </footer>
  );
};

export default Footer;