import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';

interface NavigationItem {
  path: string;
  title: string;
}

interface LessonNavigationProps {
  prev: NavigationItem | null;
  next: NavigationItem | null;
  progress: number;
  onComplete: () => void;
}

const LessonNavigation: React.FC<LessonNavigationProps> = ({ prev, next, progress, onComplete }) => {
  return (
    <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div>
          {prev ? (
            <Link 
              to={prev.path} 
              className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition"
            >
              <ChevronLeft className="h-5 w-5 mr-1" />
              <span>{prev.title}</span>
            </Link>
          ) : (
            <div className="invisible">Placeholder</div>
          )}
        </div>
        
        {progress < 100 && (
          <button 
            onClick={onComplete}
            className="py-2 px-4 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium flex items-center my-4 md:my-0 transition"
          >
            <CheckCircle className="h-5 w-5 mr-2" />
            Mark as Complete
          </button>
        )}
        
        {progress === 100 && (
          <div className="py-2 px-4 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-lg font-medium flex items-center my-4 md:my-0">
            <CheckCircle className="h-5 w-5 mr-2 text-green-600 dark:text-green-400" />
            Completed!
          </div>
        )}
        
        <div>
          {next ? (
            <Link 
              to={next.path} 
              className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition"
            >
              <span>{next.title}</span>
              <ChevronRight className="h-5 w-5 ml-1" />
            </Link>
          ) : (
            <div className="invisible">Placeholder</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LessonNavigation;