import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import Prism from 'prismjs';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-tomorrow.css';

interface CodeBlockProps {
  code: string;
  language: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
  const [copied, setCopied] = useState(false);
  
  React.useEffect(() => {
    Prism.highlightAll();
  }, [code]);
  
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };
  
  // Map language strings to Prism language classes
  const languageMap: { [key: string]: string } = {
    html: 'language-markup',
    css: 'language-css',
    js: 'language-javascript',
    javascript: 'language-javascript',
  };
  
  const prismLanguage = languageMap[language] || `language-${language}`;
  
  return (
    <div className="relative group bg-gray-800 dark:bg-gray-900 rounded-lg overflow-hidden">
      <button
        onClick={copyToClipboard}
        className="absolute top-2 right-2 p-2 bg-gray-700 dark:bg-gray-800 text-gray-300 hover:text-white rounded transition-opacity duration-200 opacity-0 group-hover:opacity-100"
        aria-label="Copy code to clipboard"
      >
        {copied ? (
          <Check className="h-4 w-4 text-green-500" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </button>
      
      <pre className="p-4 text-sm overflow-x-auto">
        <code className={prismLanguage}>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;