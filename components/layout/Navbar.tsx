import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Code, FileText, Palette, Terminal, FolderOpen, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md px-4 py-3 sticky top-0 z-50 transition-colors duration-300">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <NavLink to="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
            <Code className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              WebMastery
            </span>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            
            <div className="relative group">
              <button 
                className="nav-link flex items-center" 
                onClick={() => toggleDropdown('html')}
              >
                <FileText className="h-4 w-4 mr-1" />
                HTML
                <ChevronDown className={`h-4 w-4 ml-1 transition-transform ${activeDropdown === 'html' ? 'rotate-180' : ''}`} />
              </button>
              <div className={`absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 transition-all duration-200 ${activeDropdown === 'html' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                <div className="py-1">
                  <NavLink to="/html/intro" className="dropdown-item">Introduction</NavLink>
                  <NavLink to="/html/tags" className="dropdown-item">Basic Tags</NavLink>
                  <NavLink to="/html/links-images" className="dropdown-item">Links & Images</NavLink>
                  <NavLink to="/html/tables" className="dropdown-item">Tables</NavLink>
                  <NavLink to="/html/forms" className="dropdown-item">Forms</NavLink>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <button 
                className="nav-link flex items-center" 
                onClick={() => toggleDropdown('css')}
              >
                <Palette className="h-4 w-4 mr-1" />
                CSS
                <ChevronDown className={`h-4 w-4 ml-1 transition-transform ${activeDropdown === 'css' ? 'rotate-180' : ''}`} />
              </button>
              <div className={`absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 transition-all duration-200 ${activeDropdown === 'css' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                <div className="py-1">
                  <NavLink to="/css/intro" className="dropdown-item">Basics</NavLink>
                  <NavLink to="/css/selectors" className="dropdown-item">Selectors</NavLink>
                  <NavLink to="/css/layout" className="dropdown-item">Layout</NavLink>
                  <NavLink to="/css/animations" className="dropdown-item">Animations</NavLink>
                  <NavLink to="/css/responsive" className="dropdown-item">Responsive Design</NavLink>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <button 
                className="nav-link flex items-center" 
                onClick={() => toggleDropdown('js')}
              >
                <Terminal className="h-4 w-4 mr-1" />
                JavaScript
                <ChevronDown className={`h-4 w-4 ml-1 transition-transform ${activeDropdown === 'js' ? 'rotate-180' : ''}`} />
              </button>
              <div className={`absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 transition-all duration-200 ${activeDropdown === 'js' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                <div className="py-1">
                  <NavLink to="/js/intro" className="dropdown-item">Introduction</NavLink>
                  <NavLink to="/js/dom" className="dropdown-item">DOM Manipulation</NavLink>
                  <NavLink to="/js/events" className="dropdown-item">Events</NavLink>
                  <NavLink to="/js/functions" className="dropdown-item">Functions</NavLink>
                  <NavLink to="/js/async" className="dropdown-item">Async/Fetch</NavLink>
                </div>
              </div>
            </div>
            
            <NavLink to="/projects" className="nav-link flex items-center">
              <FolderOpen className="h-4 w-4 mr-1" />
              Projects
            </NavLink>
            
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
            
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen py-4' : 'max-h-0'}`}>
          <div className="flex flex-col space-y-4">
            <NavLink to="/" className="mobile-nav-link" onClick={() => setIsOpen(false)}>
              Home
            </NavLink>
            
            <div>
              <button 
                className="mobile-nav-link w-full text-left flex justify-between items-center"
                onClick={() => toggleDropdown('htmlMobile')}
              >
                <span className="flex items-center">
                  <FileText className="h-4 w-4 mr-2" />
                  HTML
                </span>
                <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === 'htmlMobile' ? 'rotate-180' : ''}`} />
              </button>
              <div className={`pl-8 space-y-2 mt-2 ${activeDropdown === 'htmlMobile' ? 'block' : 'hidden'}`}>
                <NavLink to="/html/intro" className="mobile-dropdown-item" onClick={() => setIsOpen(false)}>Introduction</NavLink>
                <NavLink to="/html/tags" className="mobile-dropdown-item" onClick={() => setIsOpen(false)}>Basic Tags</NavLink>
                <NavLink to="/html/links-images" className="mobile-dropdown-item" onClick={() => setIsOpen(false)}>Links & Images</NavLink>
                <NavLink to="/html/tables" className="mobile-dropdown-item" onClick={() => setIsOpen(false)}>Tables</NavLink>
                <NavLink to="/html/forms" className="mobile-dropdown-item" onClick={() => setIsOpen(false)}>Forms</NavLink>
              </div>
            </div>
            
            <div>
              <button 
                className="mobile-nav-link w-full text-left flex justify-between items-center"
                onClick={() => toggleDropdown('cssMobile')}
              >
                <span className="flex items-center">
                  <Palette className="h-4 w-4 mr-2" />
                  CSS
                </span>
                <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === 'cssMobile' ? 'rotate-180' : ''}`} />
              </button>
              <div className={`pl-8 space-y-2 mt-2 ${activeDropdown === 'cssMobile' ? 'block' : 'hidden'}`}>
                <NavLink to="/css/intro" className="mobile-dropdown-item" onClick={() => setIsOpen(false)}>Basics</NavLink>
                <NavLink to="/css/selectors" className="mobile-dropdown-item" onClick={() => setIsOpen(false)}>Selectors</NavLink>
                <NavLink to="/css/layout" className="mobile-dropdown-item" onClick={() => setIsOpen(false)}>Layout</NavLink>
                <NavLink to="/css/animations" className="mobile-dropdown-item" onClick={() => setIsOpen(false)}>Animations</NavLink>
                <NavLink to="/css/responsive" className="mobile-dropdown-item" onClick={() => setIsOpen(false)}>Responsive Design</NavLink>
              </div>
            </div>
            
            <div>
              <button 
                className="mobile-nav-link w-full text-left flex justify-between items-center"
                onClick={() => toggleDropdown('jsMobile')}
              >
                <span className="flex items-center">
                  <Terminal className="h-4 w-4 mr-2" />
                  JavaScript
                </span>
                <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === 'jsMobile' ? 'rotate-180' : ''}`} />
              </button>
              <div className={`pl-8 space-y-2 mt-2 ${activeDropdown === 'jsMobile' ? 'block' : 'hidden'}`}>
                <NavLink to="/js/intro" className="mobile-dropdown-item" onClick={() => setIsOpen(false)}>Introduction</NavLink>
                <NavLink to="/js/dom" className="mobile-dropdown-item" onClick={() => setIsOpen(false)}>DOM Manipulation</NavLink>
                <NavLink to="/js/events" className="mobile-dropdown-item" onClick={() => setIsOpen(false)}>Events</NavLink>
                <NavLink to="/js/functions" className="mobile-dropdown-item" onClick={() => setIsOpen(false)}>Functions</NavLink>
                <NavLink to="/js/async" className="mobile-dropdown-item" onClick={() => setIsOpen(false)}>Async/Fetch</NavLink>
              </div>
            </div>
            
            <NavLink to="/projects" className="mobile-nav-link flex items-center" onClick={() => setIsOpen(false)}>
              <FolderOpen className="h-4 w-4 mr-2" />
              Projects
            </NavLink>
            
            <NavLink to="/about" className="mobile-nav-link" onClick={() => setIsOpen(false)}>
              About
            </NavLink>
            
            <NavLink to="/contact" className="mobile-nav-link" onClick={() => setIsOpen(false)}>
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;