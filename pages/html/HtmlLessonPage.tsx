import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Copy, CheckCircle2 } from 'lucide-react';
import { useProgress } from '../../hooks/useProgress';
import CodeBlock from '../../components/common/CodeBlock';
import LessonNavigation from '../../components/common/LessonNavigation';
import QuizComponent from '../../components/common/QuizComponent';
import NotFoundPage from '../NotFoundPage';

const HtmlLessonPage = () => {
  const { lesson } = useParams<{ lesson: string }>();
  const { updateProgress, getProgress } = useProgress();
  
  // Track user's scroll position for progress calculation
  useEffect(() => {
    if (!lesson) return;
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Calculate percentage scrolled
      const scrollPercent = Math.min(
        Math.round((scrollY / (documentHeight - windowHeight)) * 100),
        99 // Cap at 99% - completing the quiz will make it 100%
      );
      
      // Only update if scrolled more than previously recorded
      const currentProgress = getProgress(`html-${lesson}`);
      if (scrollPercent > currentProgress && scrollPercent < 100) {
        updateProgress(`html-${lesson}`, scrollPercent);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lesson, updateProgress, getProgress]);
  
  // Get lesson content based on the URL parameter
  const getLessonContent = () => {
    switch (lesson) {
      case 'intro':
        return <IntroLesson />;
      case 'tags':
        return <TagsLesson />;
      case 'links-images':
        return <LinksImagesLesson />;
      case 'tables':
        return <TablesLesson />;
      case 'forms':
        return <FormsLesson />;
      default:
        return <NotFoundPage />;
    }
  };
  
  // Get the next and previous lesson paths
  const getNavigation = () => {
    const htmlLessons = ['intro', 'tags', 'links-images', 'tables', 'forms'];
    const currentIndex = htmlLessons.indexOf(lesson || '');
    
    if (currentIndex === -1) return { prev: null, next: null };
    
    return {
      prev: currentIndex > 0 ? {
        path: `/html/${htmlLessons[currentIndex - 1]}`,
        title: getLessonTitle(htmlLessons[currentIndex - 1])
      } : null,
      next: currentIndex < htmlLessons.length - 1 ? {
        path: `/html/${htmlLessons[currentIndex + 1]}`,
        title: getLessonTitle(htmlLessons[currentIndex + 1])
      } : null
    };
  };
  
  const getLessonTitle = (lessonSlug: string) => {
    switch (lessonSlug) {
      case 'intro': return 'Introduction to HTML';
      case 'tags': return 'HTML Tags';
      case 'links-images': return 'Links & Images';
      case 'tables': return 'HTML Tables';
      case 'forms': return 'HTML Forms';
      default: return '';
    }
  };
  
  const navigation = getNavigation();
  
  return (
    <div className="max-w-4xl mx-auto">
      {/* Breadcrumb navigation */}
      <div className="mb-6 flex items-center text-sm text-gray-600 dark:text-gray-400">
        <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
        <ChevronRight className="h-4 w-4 mx-2" />
        <Link to="/html/intro" className="hover:text-blue-600 dark:hover:text-blue-400">HTML</Link>
        <ChevronRight className="h-4 w-4 mx-2" />
        <span className="text-gray-900 dark:text-gray-100">{getLessonTitle(lesson || '')}</span>
      </div>
      
      {getLessonContent()}
      
      {/* Navigation between lessons */}
      <LessonNavigation 
        prev={navigation.prev} 
        next={navigation.next} 
        progress={getProgress(`html-${lesson}`)}
        onComplete={() => updateProgress(`html-${lesson}`, 100)}
      />
    </div>
  );
};

// Individual lesson components
const IntroLesson = () => {
  return (
    <div className="lesson-content">
      <h1 className="text-3xl font-bold mb-6">Introduction to HTML</h1>
      
      <div className="mb-8">
        <p className="text-lg mb-4">
          HTML (HyperText Markup Language) is the standard markup language for creating web pages. It describes the structure of a webpage and tells the browser how to display the content.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4 mt-8">HTML Document Structure</h2>
        <p className="mb-4">
          Every HTML document has a required structure that includes the following declaration and elements:
        </p>
        
        <CodeBlock code={`<!DOCTYPE html>
<html>
<head>
  <title>Page Title</title>
</head>
<body>
  <h1>My First Heading</h1>
  <p>My first paragraph.</p>
</body>
</html>`} language="html" />
        
        <div className="my-6 bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 p-4 rounded">
          <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">What each part does:</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
            <li><code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">&lt;!DOCTYPE html&gt;</code> - Declares that this document is an HTML5 document</li>
            <li><code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">&lt;html&gt;</code> - The root element of an HTML page</li>
            <li><code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">&lt;head&gt;</code> - Contains meta information about the document</li>
            <li><code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">&lt;title&gt;</code> - Specifies a title for the document (shown in the browser tab)</li>
            <li><code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">&lt;body&gt;</code> - Contains the visible page content</li>
            <li><code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">&lt;h1&gt;</code> - Defines a large heading</li>
            <li><code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">&lt;p&gt;</code> - Defines a paragraph</li>
          </ul>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">HTML Elements</h2>
        <p className="mb-4">
          HTML elements are represented by tags, written using angle brackets. HTML tags normally come in pairs, with an opening and a closing tag:
        </p>
        
        <CodeBlock code={`<tagname>Content goes here...</tagname>`} language="html" />
        
        <p className="mt-4">
          The opening tag starts with <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">&lt;tagname&gt;</code> and the closing tag starts with <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">&lt;/tagname&gt;</code>.
        </p>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Let's Create Your First HTML Document</h2>
        <p className="mb-4">
          Here's a simple HTML document to get you started:
        </p>
        
        <CodeBlock code={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My First Web Page</title>
</head>
<body>
  <h1>Welcome to My First Web Page</h1>
  <p>This is a paragraph. HTML is really fun to learn!</p>
  
  <h2>About HTML</h2>
  <p>HTML stands for HyperText Markup Language. It is the standard markup language for creating web pages.</p>
</body>
</html>`} language="html" />
        
        <div className="mt-6 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold mb-3">Result:</h3>
          <div className="bg-white dark:bg-gray-900 p-4 rounded border border-gray-300 dark:border-gray-600">
            <h1 className="text-2xl font-bold mb-2">Welcome to My First Web Page</h1>
            <p className="mb-4">This is a paragraph. HTML is really fun to learn!</p>
            
            <h2 className="text-xl font-semibold mb-2">About HTML</h2>
            <p>HTML stands for HyperText Markup Language. It is the standard markup language for creating web pages.</p>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Common HTML Tags</h2>
        <p className="mb-4">
          Here are some of the most commonly used HTML tags you'll encounter:
        </p>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold mb-2">Document Structure</h3>
            <ul className="space-y-2">
              <li><code className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded">&lt;html&gt;</code> - Root element</li>
              <li><code className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded">&lt;head&gt;</code> - Meta information</li>
              <li><code className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded">&lt;body&gt;</code> - Document body</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold mb-2">Text Content</h3>
            <ul className="space-y-2">
              <li><code className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded">&lt;h1&gt; to &lt;h6&gt;</code> - Headings</li>
              <li><code className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded">&lt;p&gt;</code> - Paragraph</li>
              <li><code className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded">&lt;br&gt;</code> - Line break</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold mb-2">Formatting</h3>
            <ul className="space-y-2">
              <li><code className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded">&lt;strong&gt;</code> - Bold text</li>
              <li><code className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded">&lt;em&gt;</code> - Emphasized text</li>
              <li><code className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded">&lt;mark&gt;</code> - Highlighted text</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold mb-2">Lists</h3>
            <ul className="space-y-2">
              <li><code className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded">&lt;ul&gt;</code> - Unordered list</li>
              <li><code className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded">&lt;ol&gt;</code> - Ordered list</li>
              <li><code className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded">&lt;li&gt;</code> - List item</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Quiz at the end of the lesson */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Quick Knowledge Check</h2>
        <QuizComponent 
          questions={[
            {
              question: "What does HTML stand for?",
              options: [
                "Hyperlinks and Text Markup Language",
                "Home Tool Markup Language",
                "HyperText Markup Language",
                "Hyper Technical Modern Language"
              ],
              correctAnswer: 2,
              explanation: "HTML stands for HyperText Markup Language, which is the standard markup language for creating web pages."
            },
            {
              question: "Which tag is used to define a paragraph in HTML?",
              options: ["<paragraph>", "<p>", "<para>", "<text>"],
              correctAnswer: 1,
              explanation: "The <p> tag defines a paragraph in HTML."
            },
            {
              question: "Which of these is NOT a valid HTML element?",
              options: ["<h1>", "<body>", "<paragraph>", "<title>"],
              correctAnswer: 2,
              explanation: "<paragraph> is not a valid HTML element. The correct element for paragraphs is <p>."
            }
          ]}
          lessonId="html-intro"
        />
      </div>
    </div>
  );
};

const TagsLesson = () => {
  return (
    <div className="lesson-content">
      <h1 className="text-3xl font-bold mb-6">HTML Tags</h1>
      
      <div className="mb-8">
        <p className="text-lg mb-4">
          HTML tags are the building blocks of an HTML page. They define how content is structured and displayed in a web browser.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4 mt-8">Heading Tags</h2>
        <p className="mb-4">
          HTML provides six levels of headings, from <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">&lt;h1&gt;</code> (most important) to <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">&lt;h6&gt;</code> (least important).
        </p>
        
        <CodeBlock code={`<h1>This is a Heading 1</h1>
<h2>This is a Heading 2</h2>
<h3>This is a Heading 3</h3>
<h4>This is a Heading 4</h4>
<h5>This is a Heading 5</h5>
<h6>This is a Heading 6</h6>`} language="html" />
        
        <div className="mt-6 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold mb-3">Result:</h3>
          <div className="bg-white dark:bg-gray-900 p-4 rounded border border-gray-300 dark:border-gray-600">
            <h1 className="text-3xl font-bold mb-3">This is a Heading 1</h1>
            <h2 className="text-2xl font-bold mb-3">This is a Heading 2</h2>
            <h3 className="text-xl font-bold mb-2">This is a Heading 3</h3>
            <h4 className="text-lg font-bold mb-2">This is a Heading 4</h4>
            <h5 className="text-base font-bold mb-2">This is a Heading 5</h5>
            <h6 className="text-sm font-bold">This is a Heading 6</h6>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Paragraph Tag</h2>
        <p className="mb-4">
          The <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">&lt;p&gt;</code> tag defines a paragraph in HTML.
        </p>
        
        <CodeBlock code={`<p>This is a paragraph. Paragraphs are defined with the p tag.</p>
<p>This is another paragraph.</p>`} language="html" />
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Text Formatting Tags</h2>
        <p className="mb-4">
          HTML includes several tags for formatting text:
        </p>
        
        <CodeBlock code={`<p><strong>This text is bold</strong></p>
<p><em>This text is emphasized/italic</em></p>
<p><mark>This text is highlighted</mark></p>
<p><del>This text is deleted</del></p>
<p><ins>This text is inserted/underlined</ins></p>
<p><sub>This is subscript</sub> and <sup>this is superscript</sup></p>`} language="html" />
        
        <div className="mt-6 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold mb-3">Result:</h3>
          <div className="bg-white dark:bg-gray-900 p-4 rounded border border-gray-300 dark:border-gray-600">
            <p className="mb-2"><strong>This text is bold</strong></p>
            <p className="mb-2"><em>This text is emphasized/italic</em></p>
            <p className="mb-2"><mark className="bg-yellow-200 dark:bg-yellow-700 px-1">This text is highlighted</mark></p>
            <p className="mb-2"><del>This text is deleted</del></p>
            <p className="mb-2"><u>This text is inserted/underlined</u></p>
            <p>This is <sub>subscript</sub> and this is <sup>superscript</sup></p>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">List Tags</h2>
        <p className="mb-4">
          HTML supports ordered (numbered) and unordered (bulleted) lists:
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-3">Unordered List</h3>
            <CodeBlock code={`<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>`} language="html" />
            
            <div className="mt-4 bg-white dark:bg-gray-900 p-4 rounded border border-gray-300 dark:border-gray-600">
              <ul className="list-disc pl-5">
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3">Ordered List</h3>
            <CodeBlock code={`<ol>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ol>`} language="html" />
            
            <div className="mt-4 bg-white dark:bg-gray-900 p-4 rounded border border-gray-300 dark:border-gray-600">
              <ol className="list-decimal pl-5">
                <li>First item</li>
                <li>Second item</li>
                <li>Third item</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Div and Span Tags</h2>
        <p className="mb-4">
          <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">&lt;div&gt;</code> and <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">&lt;span&gt;</code> are container elements used to group and style content:
        </p>
        
        <CodeBlock code={`<div style="background-color: lightblue; padding: 20px;">
  <h2>This is a div container</h2>
  <p>The div tag defines a division or section in an HTML document.</p>
  <p>The <span style="color: red; font-weight: bold;">span tag</span> is an inline container used to mark up a part of a text or document.</p>
</div>`} language="html" />
        
        <div className="mt-6 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold mb-3">Result:</h3>
          <div className="bg-blue-100 dark:bg-blue-900/30 p-5 rounded border border-blue-200 dark:border-blue-800">
            <h2 className="text-xl font-semibold mb-2">This is a div container</h2>
            <p className="mb-2">The div tag defines a division or section in an HTML document.</p>
            <p>The <span className="text-red-600 dark:text-red-400 font-bold">span tag</span> is an inline container used to mark up a part of a text or document.</p>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Comment Tag</h2>
        <p className="mb-4">
          Comments in HTML are not displayed in the browser. They're useful for adding notes to your code:
        </p>
        
        <CodeBlock code={`<!-- This is a comment -->
<p>This is visible to the user</p>
<!-- This comment spans
multiple lines -->`} language="html" />
      </div>
      
      {/* Quiz at the end of the lesson */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Quick Knowledge Check</h2>
        <QuizComponent 
          questions={[
            {
              question: "Which tag creates the largest heading in HTML?",
              options: ["<h6>", "<head>", "<heading>", "<h1>"],
              correctAnswer: 3,
              explanation: "The <h1> tag creates the largest heading in HTML. Headings range from <h1> (largest) to <h6> (smallest)."
            },
            {
              question: "Which HTML tag is used for an unordered list?",
              options: ["<ol>", "<list>", "<ul>", "<li>"],
              correctAnswer: 2,
              explanation: "The <ul> tag is used to create an unordered (bulleted) list. <li> tags are used for individual list items."
            },
            {
              question: "Which statement about the <div> and <span> tags is correct?",
              options: [
                "They have the same function and are interchangeable", 
                "<div> is an inline element while <span> is a block element", 
                "<div> is a block element while <span> is an inline element",
                "Both are used only for links"
              ],
              correctAnswer: 2,
              explanation: "<div> is a block-level element that takes up the full width available, while <span> is an inline element that only takes up as much width as necessary."
            }
          ]}
          lessonId="html-tags"
        />
      </div>
    </div>
  );
};

const LinksImagesLesson = () => {
  return (
    <div className="lesson-content">
      <h1 className="text-3xl font-bold mb-6">HTML Links and Images</h1>
      
      <p className="text-lg mb-8">
        Links and images are fundamental elements that make the web interactive and visually engaging. In this lesson, we'll learn how to add links and images to your HTML pages.
      </p>
      
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">HTML Links</h2>
        <p className="mb-4">
          Links allow users to navigate between web pages. In HTML, links are defined with the <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">&lt;a&gt;</code> tag (anchor tag).
        </p>
        
        <h3 className="text-xl font-semibold mb-3">Basic Link Syntax</h3>
        <CodeBlock code={`<a href="https://www.example.com">Visit Example.com</a>`} language="html" />
        
        <div className="my-6 bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 p-4 rounded">
          <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Link Attributes:</h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
            <li><code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">href</code> - Specifies the URL of the page the link goes to</li>
            <li><code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">target</code> - Specifies where to open the linked document</li>
            <li><code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">title</code> - Adds a tooltip with descriptive text</li>
          </ul>
        </div>
        
        <h3 className="text-xl font-semibold mb-3">Link Examples</h3>
        <CodeBlock code={`<!-- External link that opens in a new tab -->
<a href="https://www.example.com" target="_blank">Visit Example.com</a>

<!-- Link to another page in the same website -->
<a href="/about.html">About Us</a>

<!-- Link with a title attribute -->
<a href="https://www.example.com" title="Go to Example.com">Example</a>

<!-- Link to an email address -->
<a href="mailto:info@example.com">Send Email</a>

<!-- Link to a specific part of the same page -->
<a href="#section2">Jump to Section 2</a>
...
<h2 id="section2">Section 2</h2>`} language="html" />
        
        <div className="mt-6 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold mb-3">Result:</h3>
          <div className="bg-white dark:bg-gray-900 p-4 rounded border border-gray-300 dark:border-gray-600 space-y-3">
            <p><a href="#" className="text-blue-600 hover:underline">Visit Example.com</a></p>
            <p><a href="#" className="text-blue-600 hover:underline">About Us</a></p>
            <p><a href="#" className="text-blue-600 hover:underline" title="Go to Example.com">Example</a> (hover to see the tooltip)</p>
            <p><a href="#" className="text-blue-600 hover:underline">Send Email</a></p>
            <p><a href="#" className="text-blue-600 hover:underline">Jump to Section 2</a></p>
          </div>
        </div>
      </div>
      
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">HTML Images</h2>
        <p className="mb-4">
          Images make web pages more engaging and informative. In HTML, images are defined with the <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">&lt;img&gt;</code> tag.
        </p>
        
        <h3 className="text-xl font-semibold mb-3">Basic Image Syntax</h3>
        <CodeBlock code={`<img src="image.jpg" alt="Description of the image">`} language="html" />
        
        <div className="my-6 bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 p-4 rounded">
          <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Important Image Attributes:</h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
            <li><code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">src</code> - Specifies the path to the image</li>
            <li><code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">alt</code> - Provides alternative text for the image (for accessibility)</li>
            <li><code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">width</code> - Specifies the width of the image</li>
            <li><code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">height</code> - Specifies the height of the image</li>
          </ul>
        </div>
        
        <h3 className="text-xl font-semibold mb-3">Image Examples</h3>
        <CodeBlock code={`<!-- Basic image -->
<img src="sunset.jpg" alt="Beautiful sunset over the ocean">

<!-- Image with specified dimensions -->
<img src="logo.png" alt="Company Logo" width="200" height="100">

<!-- Image with a link -->
<a href="https://www.example.com">
  <img src="banner.jpg" alt="Click here to visit Example.com">
</a>`} language="html" />
        
        <div className="mt-6 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold mb-3">Result (example):</h3>
          <div className="bg-white dark:bg-gray-900 p-4 rounded border border-gray-300 dark:border-gray-600 space-y-6">
            <img 
              src="https://images.pexels.com/photos/66997/pexels-photo-66997.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Beautiful sunset over the ocean" 
              className="max-w-full h-auto rounded"
            />
          </div>
        </div>
      </div>
      
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Image Formats for the Web</h2>
        <p className="mb-4">
          Different image formats are suitable for different types of images:
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold mb-2">JPEG (.jpg, .jpeg)</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300 text-sm">
              <li>Best for photographs and complex images with many colors</li>
              <li>Lossy compression (smaller file size, some quality loss)</li>
              <li>Does not support transparency</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold mb-2">PNG (.png)</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300 text-sm">
              <li>Best for images with transparency or sharp edges</li>
              <li>Lossless compression (larger file size, no quality loss)</li>
              <li>Supports transparency (alpha channel)</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold mb-2">GIF (.gif)</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300 text-sm">
              <li>Best for simple animations and images with few colors</li>
              <li>Limited to 256 colors</li>
              <li>Supports simple transparency (not partial transparency)</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold mb-2">SVG (.svg)</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300 text-sm">
              <li>Vector format ideal for logos, icons, and illustrations</li>
              <li>Scales to any size without quality loss</li>
              <li>Typically smaller file size for simple graphics</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold mb-3 text-blue-600 dark:text-blue-400">Links Best Practices</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Use descriptive link text that indicates where the link leads</li>
              <li>Avoid generic phrases like "click here" or "read more"</li>
              <li>Use <code className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded">target="_blank"</code> for external links</li>
              <li>Ensure all links are working and accessible with a keyboard</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold mb-3 text-blue-600 dark:text-blue-400">Images Best Practices</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Always include meaningful <code className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded">alt</code> text for accessibility</li>
              <li>Optimize images for the web to minimize file size</li>
              <li>Specify image dimensions to prevent layout shifts</li>
              <li>Consider using responsive images for different screen sizes</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Quiz at the end of the lesson */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Quick Knowledge Check</h2>
        <QuizComponent 
          questions={[
            {
              question: "Which attribute is required in an image tag?",
              options: ["title", "width", "alt", "src"],
              correctAnswer: 3,
              explanation: "The 'src' attribute is required in an image tag as it specifies the path to the image file. Without it, the browser wouldn't know which image to display."
            },
            {
              question: "Which HTML tag is used to create a hyperlink?",
              options: ["<link>", "<href>", "<a>", "<url>"],
              correctAnswer: 2,
              explanation: "The <a> (anchor) tag is used to create hyperlinks in HTML."
            },
            {
              question: "What is the purpose of the 'alt' attribute in an image tag?",
              options: [
                "To show a tooltip when hovering over the image", 
                "To provide a description if the image cannot be displayed", 
                "To specify the image source",
                "To set the image width"
              ],
              correctAnswer: 1,
              explanation: "The 'alt' attribute provides alternative text for an image if it cannot be displayed. It's also used by screen readers for accessibility."
            }
          ]}
          lessonId="html-links-images"
        />
      </div>
    </div>
  );
};

const TablesLesson = () => {
  return <div>Tables Lesson Content</div>;
};

const FormsLesson = () => {
  return <div>Forms Lesson Content</div>;
};

export default HtmlLessonPage;