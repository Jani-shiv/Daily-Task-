import { ChapterLayout } from '@/components/chapter-layout'
import { CodeBlock } from '@/components/code-block'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function DataTypesPage() {
  return (
    <ChapterLayout
      title="Chapter 3: Data Types"
      description="Understand the different data types available in PHP and how to work with them."
      prevChapter={{ title: "Variables", path: "/02-variables" }}
      nextChapter={{ title: "Operators", path: "/04-operators" }}
    >
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>PHP Data Types</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              PHP supports several data types that can be categorized into scalar types, compound types, and special types.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div>
                <h4 className="font-semibold text-blue-600 dark:text-blue-400">Scalar Types</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-300">
                  <li>• String</li>
                  <li>• Integer</li>
                  <li>• Float</li>
                  <li>• Boolean</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-600 dark:text-green-400">Compound Types</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-300">
                  <li>• Array</li>
                  <li>• Object</li>
                  <li>• Callable</li>
                  <li>• Iterable</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-600 dark:text-purple-400">Special Types</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-300">
                  <li>• NULL</li>
                  <li>• Resource</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <div>
          <h2 className="text-2xl font-bold mb-4">String Data Type</h2>
          <p className="mb-4">Strings are sequences of characters enclosed in quotes:</p>
          <CodeBlock
            title="strings.php"
            code={`<?php
// Single quotes - literal string
$singleQuote = 'Hello, World!';
$name = 'John';
$literal = 'My name is $name'; // Will not parse variables

// Double quotes - parsed string
$doubleQuote = "Hello, World!";
$parsed = "My name is $name"; // Will parse variables

// Heredoc syntax
$heredoc = <<<EOT
This is a heredoc string.
It can span multiple lines.
Variables like $name are parsed.
EOT;

// Nowdoc syntax (like single quotes)
$nowdoc = <<<'EOT'
This is a nowdoc string.
Variables like $name are NOT parsed.
EOT;

echo $singleQuote . "<br>";
echo $doubleQuote . "<br>";
echo $parsed . "<br>";
echo $heredoc . "<br>";
echo $nowdoc . "<br>";
?>`}
          />
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Numeric Data Types</h2>
          <p className="mb-4">PHP supports integers and floating-point numbers:</p>
          <CodeBlock
            title="numbers.php"
            code={`<?php
// Integer types
$decimal = 123;
$octal = 0123;      // Octal (83 in decimal)
$hexadecimal = 0x1A; // Hexadecimal (26 in decimal)
$binary = 0b1010;    // Binary (10 in decimal)

// Float/Double types
$float1 = 1.234;
$float2 = 1.2e3;     // Scientific notation (1200)
$float3 = 7E-10;     // Scientific notation (0.0000000007)

// Display values and types
echo "Decimal: $decimal (" . gettype($decimal) . ")<br>";
echo "Octal: $octal (" . gettype($octal) . ")<br>";
echo "Hex: $hexadecimal (" . gettype($hexadecimal) . ")<br>";
echo "Binary: $binary (" . gettype($binary) . ")<br>";
echo "Float1: $float1 (" . gettype($float1) . ")<br>";
echo "Float2: $float2 (" . gettype($float2) . ")<br>";

// Check if numeric
var_dump(is_int($decimal));
var_dump(is_float($float1));
var_dump(is_numeric("123"));
?>`}
          />
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Boolean and NULL Types</h2>
          <p className="mb-4">Boolean represents true/false values, and NULL represents no value:</p>
          <CodeBlock
            title="boolean-null.php"
            code={`<?php
// Boolean values
$isTrue = true;
$isFalse = false;

// NULL value
$nullValue = null;
$undefinedVar; // Also NULL

// Boolean conversion examples
$emptyString = "";
$zeroNumber = 0;
$emptyArray = array();

echo "True: " . var_export($isTrue, true) . "<br>";
echo "False: " . var_export($isFalse, true) . "<br>";
echo "NULL: " . var_export($nullValue, true) . "<br>";

// Check types
echo "Is boolean: " . var_export(is_bool($isTrue), true) . "<br>";
echo "Is null: " . var_export(is_null($nullValue), true) . "<br>";

// Values that evaluate to false
if (!$emptyString) echo "Empty string is false<br>";
if (!$zeroNumber) echo "Zero is false<br>";
if (!$emptyArray) echo "Empty array is false<br>";
if (!$nullValue) echo "NULL is false<br>";
?>`}
          />
        </div>

        <Card className="bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800">
          <CardHeader>
            <CardTitle className="text-yellow-800 dark:text-yellow-200">⚠️ Type Juggling</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-yellow-700 dark:text-yellow-300 mb-2">
              PHP automatically converts between data types when needed. This is called "type juggling":
            </p>
            <ul className="list-disc list-inside space-y-1 text-yellow-700 dark:text-yellow-300 text-sm">
              <li>"123" + 456 = 579 (string becomes integer)</li>
              <li>true + 5 = 6 (boolean true becomes 1)</li>
              <li>"hello" + 5 = 5 (non-numeric string becomes 0)</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </ChapterLayout>
  )
}
