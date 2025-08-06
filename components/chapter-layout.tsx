import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface ChapterLayoutProps {
  title: string
  description: string
  children: React.ReactNode
  prevChapter?: { title: string; path: string }
  nextChapter?: { title: string; path: string }
}

export function ChapterLayout({ 
  title, 
  description, 
  children, 
  prevChapter, 
  nextChapter 
}: ChapterLayoutProps) {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          {title}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        {children}
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-12 pt-8 border-t">
        {prevChapter ? (
          <Button asChild variant="outline" className="flex items-center space-x-2">
            <Link href={prevChapter.path}>
              <ChevronLeft className="h-4 w-4" />
              <span>Previous: {prevChapter.title}</span>
            </Link>
          </Button>
        ) : (
          <div />
        )}

        {nextChapter ? (
          <Button asChild className="flex items-center space-x-2">
            <Link href={nextChapter.path}>
              <span>Next: {nextChapter.title}</span>
              <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>
        ) : (
          <div />
        )}
      </div>
    </div>
  )
}
