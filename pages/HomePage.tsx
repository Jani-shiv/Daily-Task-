import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Book, Code, Compass, TerminalSquare, Layout } from 'lucide-react';
import LessonCard from '../components/common/LessonCard';
import { useProgress } from '../hooks/useProgress';

const HomePage = () => {
  const { getProgress } = useProgress();
  
  const features = [
    {
      icon: <Book className="h-6 w-6 text-blue-500" />,
      title: "Comprehensive Learning",
      description: "Step-by-step tutorials covering HTML, CSS, and JavaScript from basics to advanced techniques."
    },
    {
      icon: <Code className="h-6 w-6 text-purple-500" />,
      title: "Interactive Examples",
      description: "Live code examples that you can edit and see results in real-time."
    },
    {
      icon: <Compass className="h-6 w-6 text-yellow-500" />,
      title: "Guided Projects",
      description: "Build real-world projects that reinforce your learning and build your portfolio."
    },
    {
      icon: <Award className="h-6 w-6 text-green-500" />,
      title: "Progress Tracking",
      description: "Track your progress as you complete lessons and quizzes."
    }
  ];

  const featuredLessons = [
    {
      id: 'html-intro',
      title: 'HTML Fundamentals',
      description: 'Learn the building blocks of web pages',
      category: 'HTML',
      path: '/html/intro',
      icon: <Code className="h-5 w-5 text-blue-500" />
    },
    {
      id: 'css-layout',
      title: 'CSS Flexbox & Grid',
      description: 'Master modern CSS layout techniques',
      category: 'CSS',
      path: '/css/layout',
      icon: <Layout className="h-5 w-5 text-purple-500" />
    },
    {
      id: 'js-dom',
      title: 'DOM Manipulation',
      description: 'Learn to update web pages dynamically',
      category: 'JavaScript',
      path: '/js/dom',
      icon: <TerminalSquare className="h-5 w-5 text-yellow-500" />
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Master Web Development<br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Step by Step
              </span>
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Learn HTML, CSS, and JavaScript with our interactive lessons, examples, and practical projects. 
              Start your journey to becoming a web developer today.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/html/intro" className="btn-primary">
                Start Learning
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
              <Link to="/projects" className="btn-secondary">
                View Projects
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 transform rotate-2 relative z-10">
              <div className="font-mono text-sm opacity-90">
                <span className="text-blue-600 dark:text-blue-400">{"<html>"}</span><br />
                <div className="pl-4">
                  <span className="text-blue-600 dark:text-blue-400">{"<head>"}</span><br />
                  <div className="pl-4">
                    <span className="text-blue-600 dark:text-blue-400">{"<title>"}</span>
                    <span className="text-gray-800 dark:text-gray-200">My First Webpage</span>
                    <span className="text-blue-600 dark:text-blue-400">{"</title>"}</span>
                  </div>
                  <span className="text-blue-600 dark:text-blue-400">{"</head>"}</span><br />
                  <span className="text-blue-600 dark:text-blue-400">{"<body>"}</span><br />
                  <div className="pl-4">
                    <span className="text-blue-600 dark:text-blue-400">{"<h1>"}</span>
                    <span className="text-gray-800 dark:text-gray-200">Hello, World!</span>
                    <span className="text-blue-600 dark:text-blue-400">{"</h1>"}</span><br />
                    <span className="text-blue-600 dark:text-blue-400">{"<p>"}</span>
                    <span className="text-gray-800 dark:text-gray-200">Welcome to my website.</span>
                    <span className="text-blue-600 dark:text-blue-400">{"</p>"}</span><br />
                    <span className="text-blue-600 dark:text-blue-400">{"<button>"}</span>
                    <span className="text-gray-800 dark:text-gray-200">Click me</span>
                    <span className="text-blue-600 dark:text-blue-400">{"</button>"}</span>
                  </div>
                  <span className="text-blue-600 dark:text-blue-400">{"</body>"}</span>
                </div>
                <span className="text-blue-600 dark:text-blue-400">{"</html>"}</span>
              </div>
            </div>
            <div className="absolute inset-0 transform -rotate-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg -z-10"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Learn With Us</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Our platform offers a unique learning experience designed to help you master web development effectively.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-gray-100 dark:bg-gray-700 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Lessons */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Lessons</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Start with these popular lessons that cover fundamental web development concepts.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredLessons.map((lesson) => (
            <LessonCard 
              key={lesson.id}
              lesson={lesson}
              progress={getProgress(lesson.id)}
            />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/html/intro" className="btn-secondary">
            View All Lessons
            <ArrowRight className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Web Development Journey?</h2>
          <p className="text-white/80 mb-8">
            Join thousands of students who have successfully learned web development through our platform.
            No prior experience required!
          </p>
          <Link to="/html/intro" className="inline-flex items-center bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition">
            Get Started For Free
            <ArrowRight className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;