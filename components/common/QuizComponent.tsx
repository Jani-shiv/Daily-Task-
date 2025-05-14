import React, { useState, useEffect } from 'react';
import { useProgress } from '../../hooks/useProgress';
import { CheckCircle, XCircle } from 'lucide-react';

interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface QuizComponentProps {
  questions: Question[];
  lessonId: string;
}

const QuizComponent: React.FC<QuizComponentProps> = ({ questions, lessonId }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);
  
  const { completeLesson } = useProgress();
  
  const handleAnswerSelect = (answerIndex: number) => {
    if (selectedAnswer !== null) return; // Prevent changing answer after selection
    
    setSelectedAnswer(answerIndex);
    const correct = answerIndex === questions[currentQuestion].correctAnswer;
    setIsCorrect(correct);
    setShowExplanation(true);
    
    if (correct) {
      setScore(prevScore => prevScore + 1);
    }
  };
  
  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setIsCorrect(null);
      setShowExplanation(false);
    } else {
      setQuizCompleted(true);
      
      // If score is high enough, mark lesson as complete
      if (score + (isCorrect ? 1 : 0) >= Math.ceil(questions.length * 0.7)) {
        completeLesson(lessonId);
      }
    }
  };
  
  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setShowExplanation(false);
    setQuizCompleted(false);
    setScore(0);
  };
  
  const question = questions[currentQuestion];
  const passThreshold = Math.ceil(questions.length * 0.7);
  const finalScore = quizCompleted ? score : score + (isCorrect ? 1 : 0);
  const passed = finalScore >= passThreshold;
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
      {!quizCompleted ? (
        <>
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Score: {score}/{questions.length}
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                style={{ width: `${((currentQuestion) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-4">{question.question}</h3>
          
          <div className="space-y-3 mb-6">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`w-full text-left p-3 rounded-lg border transition-all ${
                  selectedAnswer === null
                    ? 'border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-500'
                    : selectedAnswer === index
                      ? isCorrect
                        ? 'border-green-500 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200'
                        : 'border-red-500 bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200'
                      : index === question.correctAnswer && showExplanation
                        ? 'border-green-500 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200'
                        : 'border-gray-300 dark:border-gray-600 opacity-60'
                }`}
                disabled={selectedAnswer !== null}
              >
                <div className="flex items-center">
                  <span className="mr-3 h-6 w-6 flex-shrink-0 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center text-sm font-medium">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span>{option}</span>
                  
                  {selectedAnswer === index && isCorrect && (
                    <CheckCircle className="h-5 w-5 text-green-600 ml-auto" />
                  )}
                  
                  {selectedAnswer === index && !isCorrect && (
                    <XCircle className="h-5 w-5 text-red-600 ml-auto" />
                  )}
                  
                  {index === question.correctAnswer && selectedAnswer !== null && selectedAnswer !== index && (
                    <CheckCircle className="h-5 w-5 text-green-600 ml-auto" />
                  )}
                </div>
              </button>
            ))}
          </div>
          
          {showExplanation && (
            <div className={`p-4 rounded-lg mb-6 ${
              isCorrect 
                ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800' 
                : 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800'
            }`}>
              <h4 className="font-semibold mb-2">
                {isCorrect ? 'Correct!' : 'Incorrect!'}
              </h4>
              <p className="text-gray-700 dark:text-gray-300">{question.explanation}</p>
            </div>
          )}
          
          {selectedAnswer !== null && (
            <button
              onClick={handleNextQuestion}
              className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition"
            >
              {currentQuestion < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
            </button>
          )}
        </>
      ) : (
        <div className="text-center">
          <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 ${
            passed ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400' : 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400'
          }`}>
            {passed ? (
              <CheckCircle className="h-10 w-10" />
            ) : (
              <XCircle className="h-10 w-10" />
            )}
          </div>
          
          <h3 className="text-2xl font-bold mb-2">
            {passed ? 'Congratulations!' : 'Almost there!'}
          </h3>
          
          <p className="text-lg mb-4">
            You scored {score} out of {questions.length}
          </p>
          
          <p className="mb-6 text-gray-600 dark:text-gray-400">
            {passed 
              ? 'You\'ve successfully completed this lesson quiz!' 
              : `You need ${passThreshold} correct answers to pass. Keep trying!`}
          </p>
          
          {!passed && (
            <button
              onClick={restartQuiz}
              className="py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition"
            >
              Try Again
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default QuizComponent;