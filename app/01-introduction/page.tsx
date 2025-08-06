import { ChapterLayout } from '@/components/chapter-layout'
import { CodeBlock } from '@/components/code-block'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function IntroductionPage() {
  return (
    <ChapterLayout
      title="Chapter 1: Introduction to PHP"
      description="Welcome to PHP! Learn what PHP is, its history, and write your first PHP program."
      nextChapter={{ title: "Variables", path: "/02-variables" }}
    >
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>What is PHP?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              PHP (PHP: Hypertext Preprocessor) is a popular general-purpose scripting language 
              that is especially suited to web development. It was originally created by Danish-Canadian 
              programmer Rasmus Lerdorf in 1993 and released in 1995.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              <li>Server-side scripting language</li>
              <li>Open source and free to use</li>
              <li>Cross-platform (Windows, Linux, macOS)</li>
              <li>Easy to learn and use</li>
              <li>Large community support</li>
            </ul>
          </CardContent>
        </Card>

        <div>
          <h2 className="text-2xl font-bold mb-4">Your First PHP Program</h2>
          <p className="mb-4">Let's start with the classic "Hello, World!" program:</p>
          <CodeBlock
            title="hello.php"
            code={`<?php
echo "Hello, World!";
?>`}
          />
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">PHP Tags</h2>
          <p className="mb-4">PHP code is enclosed within PHP tags. Here are the different ways to use PHP tags:</p>
          <CodeBlock
            title="php-tags.php"
            code={`<?php
// Standard PHP opening tag
echo "This is PHP code";

// You can also use short tags (if enabled)
// <? echo "Short tag"; ?>

// For outputting content, you can use:
// <?= "This is a shortcut for echo"; ?>
?>`}
          />
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Embedding PHP in HTML</h2>
          <p className="mb-4">PHP can be seamlessly embedded within HTML:</p>
          <CodeBlock
            title="embedded.php"
            code={`<!DOCTYPE html>
<html>
<head>
    <title>PHP in HTML</title>
</head>
<body>
    <h1><?php echo "Welcome to PHP!"; ?></h1>
    <p>Today's date is: <?php echo date('Y-m-d'); ?></p>
    <p>Current time: <?php echo date('H:i:s'); ?></p>
</body>
</html>`}
          />
        </div>

        <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
          <CardHeader>
            <CardTitle className="text-blue-800 dark:text-blue-200">💡 Key Points</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300">
              <li>PHP files have a .php extension</li>
              <li>PHP code must be enclosed in PHP tags</li>
              <li>PHP is executed on the server before sending to the browser</li>
              <li>Use echo or print to output content</li>
              <li>PHP statements end with a semicolon (;)</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </ChapterLayout>
  )
}
