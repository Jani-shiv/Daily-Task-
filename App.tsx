import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { useProgress } from './hooks/useProgress';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HtmlLessonPage from './pages/html/HtmlLessonPage';
import JsLessonPage from './pages/js/JsLessonPage';
import ProjectsPage from './pages/projects/ProjectsPage';
import ProjectDetail from './pages/projects/ProjectDetail';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/html/:lesson" element={<HtmlLessonPage />} />
            <Route path="/js/:lesson" element={<JsLessonPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:project" element={<ProjectDetail />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <div className="fixed bottom-6 right-6">
          <button
            onClick={toggleDarkMode}
            className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? (
              <Sun className="h-6 w-6 text-yellow-400" />
            ) : (
              <Moon className="h-6 w-6 text-blue-600" />
            )}
          </button>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;