import React from 'react';
import { Link } from 'react-router-dom';
import { Code, ArrowRight, Calculator, Clock, CloudSun } from 'lucide-react';

const ProjectsPage = () => {
  const projects = [
    {
      id: 'calculator',
      title: 'Interactive Calculator',
      description: 'Build a fully functional calculator with basic arithmetic operations using HTML, CSS, and JavaScript.',
      icon: <Calculator className="h-8 w-8 text-blue-500" />,
      difficulty: 'Beginner',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      path: '/projects/calculator'
    },
    {
      id: 'todo-app',
      title: 'To-Do List App',
      description: 'Create a to-do list application with the ability to add, complete, and delete tasks. Data is stored in localStorage.',
      icon: <Clock className="h-8 w-8 text-purple-500" />,
      difficulty: 'Intermediate',
      technologies: ['HTML', 'CSS', 'JavaScript', 'localStorage'],
      path: '/projects/todo-app'
    },
    {
      id: 'weather-app',
      title: 'Weather App',
      description: 'Build a weather application that fetches and displays current weather data for any city using a public API.',
      icon: <CloudSun className="h-8 w-8 text-yellow-500" />,
      difficulty: 'Advanced',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Fetch API'],
      path: '/projects/weather-app'
    }
  ];

  const difficultyColors = {
    'Beginner': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
    'Intermediate': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
    'Advanced': 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
  };

  return (
    <div className="max-w-5xl mx-auto">
      <section className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Hands-on Projects</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-10">
          Apply your HTML, CSS, and JavaScript skills with these practical projects. Each project includes step-by-step instructions and starter code to help you build real-world web applications.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    {project.icon}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${difficultyColors[project.difficulty as keyof typeof difficultyColors]}`}>
                    {project.difficulty}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-auto p-4 pt-0 flex justify-end border-t border-gray-100 dark:border-gray-700">
                <Link 
                  to={project.path} 
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium text-sm hover:text-blue-800 dark:hover:text-blue-300"
                >
                  View Project
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <section className="mb-12">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white p-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h2 className="text-2xl font-bold mb-4">Want to Submit Your Own Project?</h2>
              <p className="text-white/80 mb-6">
                Have you created an interesting project using HTML, CSS, and JavaScript? We'd love to feature it on our platform to inspire other learners!
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition"
              >
                Submit Your Project
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <Code className="h-20 w-20 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-bold mb-6">Project Development Tips</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold mb-3">Planning Your Project</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Start with a simple sketch of your UI</li>
              <li>Break down functionality into small, manageable tasks</li>
              <li>Consider the user experience from the beginning</li>
              <li>Create a basic HTML structure before adding styles</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold mb-3">Debugging Techniques</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Use <code>console.log()</code> to track variable values</li>
              <li>Learn to use browser developer tools</li>
              <li>Test frequently after small changes</li>
              <li>Look for typos and syntax errors first</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold mb-3">Code Organization</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Use meaningful class and ID names</li>
              <li>Separate HTML, CSS, and JavaScript files</li>
              <li>Group related CSS properties together</li>
              <li>Add comments to explain complex logic</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold mb-3">Best Practices</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Make your projects responsive for all screen sizes</li>
              <li>Ensure accessibility with proper semantic HTML</li>
              <li>Optimize images and assets for faster loading</li>
              <li>Test your project in different browsers</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;