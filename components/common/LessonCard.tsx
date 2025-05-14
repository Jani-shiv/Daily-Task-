import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, CheckCircle2 } from 'lucide-react';

interface LessonCardProps {
  lesson: {
    id: string;
    title: string;
    description: string;
    category: string;
    path: string;
    icon: React.ReactNode;
  };
  progress: number;
}

const LessonCard: React.FC<LessonCardProps> = ({ lesson, progress }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 flex flex-col">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300">
            {lesson.category}
          </span>
          {progress > 0 && progress < 100 ? (
            <div className="flex items-center text-yellow-500">
              <Clock className="h-4 w-4 mr-1" />
              <span className="text-xs font-medium">{progress}% complete</span>
            </div>
          ) : progress === 100 ? (
            <div className="flex items-center text-green-500">
              <CheckCircle2 className="h-4 w-4 mr-1" />
              <span className="text-xs font-medium">Completed</span>
            </div>
          ) : null}
        </div>
        
        <div className="mb-4">
          {lesson.icon}
        </div>
        
        <h3 className="text-xl font-semibold mb-2">{lesson.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{lesson.description}</p>
      </div>
      
      <div className="mt-auto p-6 pt-0">
        <div className="w-full bg-gray-200 dark:bg-gray-700 h-1 mb-3 rounded-full overflow-hidden">
          <div 
            className="bg-blue-600 h-full rounded-full" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        <Link 
          to={lesson.path} 
          className="inline-flex items-center font-medium text-blue-600 dark:text-blue-400 hover:underline"
        >
          {progress > 0 ? 'Continue Learning' : 'Start Learning'}
          <ArrowRight className="h-4 w-4 ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default LessonCard;