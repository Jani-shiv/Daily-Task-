import { useState, useEffect } from 'react';

interface ProgressData {
  [lessonId: string]: number;
}

export const useProgress = () => {
  const [progress, setProgress] = useState<ProgressData>(() => {
    const savedProgress = localStorage.getItem('webmastery-progress');
    return savedProgress ? JSON.parse(savedProgress) : {};
  });

  useEffect(() => {
    localStorage.setItem('webmastery-progress', JSON.stringify(progress));
  }, [progress]);

  const updateProgress = (lessonId: string, value: number) => {
    setProgress(prev => ({
      ...prev,
      [lessonId]: value
    }));
  };

  const completeLesson = (lessonId: string) => {
    updateProgress(lessonId, 100);
  };

  const getProgress = (lessonId: string): number => {
    return progress[lessonId] || 0;
  };

  const resetProgress = () => {
    setProgress({});
  };

  return {
    progress,
    updateProgress,
    completeLesson,
    getProgress,
    resetProgress
  };
};