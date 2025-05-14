import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, Home, Rewind } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <AlertTriangle className="h-20 w-20 text-yellow-500 mb-6" />
      <h1 className="text-4xl md:text-5xl font-bold mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Page Not Found</h2>
      <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md mb-8">
        The page you're looking for doesn't exist or has been moved to another URL.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Link 
          to="/" 
          className="flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
        >
          <Home className="h-5 w-5 mr-2" />
          Go Home
        </Link>
        <button 
          onClick={() => window.history.back()}
          className="flex items-center px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          <Rewind className="h-5 w-5 mr-2" />
          Go Back
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;