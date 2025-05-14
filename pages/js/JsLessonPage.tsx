import React from 'react';
import { useParams } from 'react-router-dom';
import LessonNavigation from '../../components/common/LessonNavigation';
const JsLessonPage: React.FC = () => {
  const { lesson } = useParams();
  const { progress, updateProgress } = useProgress();

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">JavaScript Lesson: {lesson}</h1>
      <div className="prose dark:prose-invert max-w-none">
        {/* Lesson content will be dynamically loaded based on the lesson parameter */}
        <p className="text-lg">Content for JavaScript lesson {lesson} will be displayed here.</p>
      </div>
      <div className="mt-8">
        <LessonNavigation 
          currentLesson={lesson || ''} 
          lessonType="javascript"
        />
      </div>
    </div>
  );
};

export default JsLessonPage;