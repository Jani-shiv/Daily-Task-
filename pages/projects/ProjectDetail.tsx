import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Code, Github, ExternalLink, Download } from 'lucide-react';
import CodeBlock from '../../components/common/CodeBlock';
import NotFoundPage from '../NotFoundPage';

const ProjectDetail = () => {
  const { project } = useParams<{ project: string }>();
  
  // Get project content based on URL parameter
  const getProjectContent = () => {
    switch (project) {
      case 'calculator':
        return <CalculatorProject />;
      case 'todo-app':
        return <TodoProject />;
      case 'weather-app':
        return <WeatherProject />;
      default:
        return <NotFoundPage />;
    }
  };
  
  return (
    <div className="max-w-4xl mx-auto">
      {/* Breadcrumb navigation */}
      <div className="mb-6 flex items-center text-sm text-gray-600 dark:text-gray-400">
        <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
        <ChevronLeft className="h-4 w-4 mx-2" />
        <Link to="/projects" className="hover:text-blue-600 dark:hover:text-blue-400">Projects</Link>
      </div>
      
      {getProjectContent()}
    </div>
  );
};

const ProjectWrapper: React.FC<{
  title: string;
  description: string;
  difficulty: string;
  demoLink: string;
  githubLink: string;
  downloadLink: string;
  children: React.ReactNode;
}> = ({ 
  title, 
  description, 
  difficulty, 
  demoLink, 
  githubLink, 
  downloadLink, 
  children 
}) => {
  const difficultyColors = {
    'Beginner': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
    'Intermediate': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
    'Advanced': 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
  };
  
  const difficultyColor = difficultyColors[difficulty as keyof typeof difficultyColors];
  
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
        <div className="flex items-center mb-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${difficultyColor}`}>
            {difficulty}
          </span>
        </div>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">{description}</p>
        
        <div className="flex flex-wrap gap-4 mb-8">
          <a 
            href={demoLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            Live Demo
          </a>
          <a 
            href={githubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-900 transition"
          >
            <Github className="h-4 w-4 mr-2" />
            Source Code
          </a>
          <a 
            href={downloadLink} 
            className="inline-flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            <Download className="h-4 w-4 mr-2" />
            Download Files
          </a>
        </div>
      </div>
      
      {children}
    </div>
  );
};

const CalculatorProject = () => {
  const htmlCode = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Simple Calculator</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="calculator">
    <div class="display">
      <div class="previous-operand"></div>
      <div class="current-operand">0</div>
    </div>
    <button class="span-two clear">AC</button>
    <button class="delete">DEL</button>
    <button class="operator">÷</button>
    <button class="number">7</button>
    <button class="number">8</button>
    <button class="number">9</button>
    <button class="operator">×</button>
    <button class="number">4</button>
    <button class="number">5</button>
    <button class="number">6</button>
    <button class="operator">-</button>
    <button class="number">1</button>
    <button class="number">2</button>
    <button class="number">3</button>
    <button class="operator">+</button>
    <button class="number span-two">0</button>
    <button class="number">.</button>
    <button class="equals">=</button>
  </div>
  <script src="script.js"></script>
</body>
</html>`;

  const cssCode = `*, *::before, *::after {
  box-sizing: border-box;
  font-family: 'Arial', sans-serif;
  font-weight: normal;
}

body {
  margin: 0;
  padding: 0;
  background: linear-gradient(to right, #00AAFF, #00FF6C);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.calculator {
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  width: 350px;
  overflow: hidden;
}

.display {
  background-color: rgba(0, 0, 0, 0.75);
  color: white;
  text-align: right;
  padding: 20px;
  font-size: 2.5rem;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  word-wrap: break-word;
  word-break: break-all;
}

.previous-operand {
  color: rgba(255, 255, 255, 0.75);
  font-size: 1.5rem;
}

.calculator button {
  cursor: pointer;
  font-size: 1.5rem;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: white;
  transition: background-color 0.3s;
}

.calculator button:hover {
  background-color: rgba(255, 255, 255, 0.9);
}

.span-two {
  grid-column: span 2;
}

.calculator .operator {
  background-color: #FF9F0A;
  color: white;
}

.calculator .operator:hover {
  background-color: #FFBF5E;
}

.calculator .equals {
  background-color: #2196F3;
  color: white;
}

.calculator .equals:hover {
  background-color: #64B5F6;
}

.calculator .clear, .calculator .delete {
  background-color: #F44336;
  color: white;
}

.calculator .clear:hover, .calculator .delete:hover {
  background-color: #EF9A9A;
}

.calculator {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1px;
}

button {
  padding: 20px;
}`;

  const jsCode = `// DOM Elements
const previousOperandElement = document.querySelector('.previous-operand');
const currentOperandElement = document.querySelector('.current-operand');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('.equals');
const deleteButton = document.querySelector('.delete');
const clearButton = document.querySelector('.clear');

// Calculator state
let currentOperand = '0';
let previousOperand = '';
let operation = undefined;
let resetCurrentOperand = false;

// Functions
function updateDisplay() {
  currentOperandElement.textContent = currentOperand;
  
  if (operation) {
    previousOperandElement.textContent = \`\${previousOperand} \${operation}\`;
  } else {
    previousOperandElement.textContent = previousOperand;
  }
}

function appendNumber(number) {
  if (number === '.' && currentOperand.includes('.')) return;
  
  if (currentOperand === '0' || resetCurrentOperand) {
    currentOperand = number === '.' ? '0.' : number;
    resetCurrentOperand = false;
  } else {
    currentOperand += number;
  }
}

function chooseOperation(op) {
  if (currentOperand === '0') return;
  
  if (previousOperand !== '') {
    compute();
  }
  
  operation = op;
  previousOperand = currentOperand;
  resetCurrentOperand = true;
}

function compute() {
  let computation;
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  
  if (isNaN(prev) || isNaN(current)) return;
  
  switch (operation) {
    case '+':
      computation = prev + current;
      break;
    case '-':
      computation = prev - current;
      break;
    case '×':
      computation = prev * current;
      break;
    case '÷':
      if (current === 0) {
        alert('Cannot divide by zero!');
        clear();
        return;
      }
      computation = prev / current;
      break;
    default:
      return;
  }
  
  currentOperand = computation.toString();
  operation = undefined;
  previousOperand = '';
}

function deleteDigit() {
  if (currentOperand === '0') return;
  
  if (currentOperand.length === 1) {
    currentOperand = '0';
  } else {
    currentOperand = currentOperand.slice(0, -1);
  }
}

function clear() {
  currentOperand = '0';
  previousOperand = '';
  operation = undefined;
}

// Event Listeners
numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    appendNumber(button.textContent);
    updateDisplay();
  });
});

operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    chooseOperation(button.textContent);
    updateDisplay();
  });
});

equalsButton.addEventListener('click', () => {
  compute();
  updateDisplay();
});

deleteButton.addEventListener('click', () => {
  deleteDigit();
  updateDisplay();
});

clearButton.addEventListener('click', () => {
  clear();
  updateDisplay();
});

// Initialize display
updateDisplay();`;

  return (
    <ProjectWrapper
      title="Interactive Calculator"
      description="Build a fully functional calculator with basic arithmetic operations. This project will teach you DOM manipulation, event handling, and basic arithmetic logic in JavaScript."
      difficulty="Beginner"
      demoLink="#"
      githubLink="#"
      downloadLink="#"
    >
      <div className="mb-10">
        <div className="flex justify-center mb-8">
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
            <img 
              src="https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Calculator Project Preview" 
              className="w-full max-w-md rounded-lg"
            />
          </div>
        </div>
        
        <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          In this project, you'll build a calculator that can perform basic arithmetic operations: addition, subtraction, multiplication, and division. The calculator will have a clean, responsive design and handle user interactions smoothly.
        </p>
        
        <h3 className="text-xl font-semibold mb-3 mt-6">What You'll Learn</h3>
        <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-700 dark:text-gray-300">
          <li>Creating a grid-based layout with CSS Grid</li>
          <li>Handling button clicks with JavaScript event listeners</li>
          <li>Updating the DOM in response to user actions</li>
          <li>Working with floating-point arithmetic</li>
          <li>Handling edge cases and error states</li>
        </ul>
      </div>
      
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-6">Step-by-Step Instructions</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Step 1: Create the HTML Structure</h3>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            First, create the HTML structure for your calculator. Include a display area for showing the current input and result, and buttons for all numbers, operations, and control functions.
          </p>
          <CodeBlock code={htmlCode} language="html" />
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Step 2: Style the Calculator with CSS</h3>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Next, style your calculator using CSS. We'll use CSS Grid for the button layout and style the display area with a dark background for contrast.
          </p>
          <CodeBlock code={cssCode} language="css" />
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Step 3: Add JavaScript Functionality</h3>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Finally, write the JavaScript code to make your calculator functional. We'll need to handle button clicks, perform calculations, and update the display.
          </p>
          <CodeBlock code={jsCode} language="javascript" />
        </div>
      </div>
      
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-6">Challenge Ideas</h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          Once you've completed the basic calculator, try these challenges to enhance your project:
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold mb-3">Add Keyboard Support</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Allow users to use their keyboard to input numbers and operations. Map number keys, Enter, Escape, and operator keys to calculator functions.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold mb-3">Implement Memory Functions</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Add memory functions like memory save (MS), memory recall (MR), memory add (M+), and memory clear (MC) to your calculator.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold mb-3">Add a History Feature</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Implement a calculation history feature that shows previous calculations and allows users to click on them to recall the result.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold mb-3">Create a Scientific Calculator</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Extend your calculator to include scientific functions like sin, cos, tan, log, exponents, and square roots.
            </p>
          </div>
        </div>
      </div>
      
      <div>
        <h2 className="text-2xl font-bold mb-6">Additional Resources</h2>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
          <ul className="space-y-4">
            <li>
              <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">MDN: JavaScript Arithmetic Operators</a>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Learn more about JavaScript arithmetic operators and how they work.
              </p>
            </li>
            <li>
              <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">CSS Grid Tutorial</a>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Dive deeper into CSS Grid for layout design.
              </p>
            </li>
            <li>
              <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">Handling Decimal Precision in JavaScript</a>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Understanding floating-point arithmetic and how to handle precision issues.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </ProjectWrapper>
  );
};

const TodoProject = () => {
  return (
    <ProjectWrapper
      title="To-Do List App"
      description="Create a to-do list application with the ability to add, complete, and delete tasks. Data is stored in localStorage to persist between sessions."
      difficulty="Intermediate"
      demoLink="#"
      githubLink="#"
      downloadLink="#"
    >
      <div>Todo App Project Content</div>
    </ProjectWrapper>
  );
};

const WeatherProject = () => {
  return (
    <ProjectWrapper
      title="Weather App"
      description="Build a weather application that fetches and displays current weather data for any city using a public API."
      difficulty="Advanced"
      demoLink="#"
      githubLink="#"
      downloadLink="#"
    >
      <div>Weather App Project Content</div>
    </ProjectWrapper>
  );
};

export default ProjectDetail;