import { ChapterLayout } from '@/components/chapter-layout'
import { CodeBlock } from '@/components/code-block'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function VariablesPage() {
  return (
    <ChapterLayout
      title="Chapter 2: Variables & Constants"
      description="Learn how to store and manipulate data using variables and constants in PHP."
      prevChapter={{ title: "Introduction", path: "/01-introduction" }}
      nextChapter={{ title: "Data Types", path: "/03-datatypes" }}
    >
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>PHP Variables</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Variables in PHP are used to store data. They start with a dollar sign ($) followed by the variable name.
              PHP is a loosely typed language, so you don't need to declare the data type.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              <li>Variable names are case-sensitive</li>
              <li>Must start with a letter or underscore</li>
              <li>Can contain letters, numbers, and underscores</li>
              <li>Cannot start with a number</li>
            </ul>
          </CardContent>
        </Card>

        <div>
          <h2 className="text-2xl font-bold mb-4">Creating Variables</h2>
          <p className="mb-4">Here's how to create and use variables in PHP:</p>
          <CodeBlock
            title="variables.php"
            code={`<?php
// String variables
$name = "John Doe";
$message = 'Hello, World!';

// Numeric variables
$age = 25;
$price = 19.99;
$temperature = -5;

// Boolean variables
$isActive = true;
$isComplete = false;

// Displaying variables
echo "Name: " . $name . "<br>";
echo "Age: " . $age . "<br>";
echo "Price: $" . $price . "<br>";
echo "Is Active: " . ($isActive ? 'Yes' : 'No') . "<br>";
?>`}
          />
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Variable Scope</h2>
          <p className="mb-4">PHP has different variable scopes: global, local, and static:</p>
          <CodeBlock
            title="scope.php"
            code={`<?php
$globalVar = "I'm global"; // Global scope

function testScope() {
    $localVar = "I'm local"; // Local scope
    global $globalVar; // Access global variable
    
    echo $globalVar . "<br>";
    echo $localVar . "<br>";
    
    static $staticVar = 0; // Static variable
    $staticVar++;
    echo "Static variable: " . $staticVar . "<br>";
}

testScope(); // Output: I'm global, I'm local, Static variable: 1
testScope(); // Output: I'm global, I'm local, Static variable: 2
?>`}
          />
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Constants</h2>
          <p className="mb-4">Constants are like variables but their values cannot be changed once defined:</p>
          <CodeBlock
            title="constants.php"
            code={`<?php
// Define constants using define()
define("SITE_NAME", "My Website");
define("VERSION", "1.0.0");
define("PI", 3.14159);

// Define constants using const (PHP 5.3+)
const DATABASE_HOST = "localhost";
const MAX_USERS = 100;

// Using constants
echo "Welcome to " . SITE_NAME . "<br>";
echo "Version: " . VERSION . "<br>";
echo "Pi value: " . PI . "<br>";
echo "Database Host: " . DATABASE_HOST . "<br>";

// Check if constant is defined
if (defined('MAX_USERS')) {
    echo "Maximum users allowed: " . MAX_USERS . "<br>";
}

// Magic constants
echo "Current file: " . __FILE__ . "<br>";
echo "Current line: " . __LINE__ . "<br>";
echo "Current function: " . __FUNCTION__ . "<br>";
?>`}
          />
        </div>

        <Card className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
          <CardHeader>
            <CardTitle className="text-green-800 dark:text-green-200">✅ Best Practices</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-green-700 dark:text-green-300">
              <li>Use descriptive variable names: $userName instead of $u</li>
              <li>Use camelCase or snake_case consistently</li>
              <li>Constants should be in UPPERCASE</li>
              <li>Initialize variables before using them</li>
              <li>Use meaningful names for better code readability</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </ChapterLayout>
  )
}
