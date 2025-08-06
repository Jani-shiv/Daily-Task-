'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Button } from '@/components/ui/button'

const chapters = [
  { id: '01', title: 'Introduction', path: '/01-introduction' },
  { id: '02', title: 'Variables', path: '/02-variables' },
  { id: '03', title: 'Data Types', path: '/03-datatypes' },
  { id: '04', title: 'Operators', path: '/04-operators' },
  { id: '05', title: 'Conditionals', path: '/05-conditional-statements' },
  { id: '06', title: 'Loops', path: '/06-loops' },
  { id: '07', title: 'Arrays', path: '/07-arrays' },
  { id: '08', title: 'Functions', path: '/08-functions' },
  { id: '09', title: 'Strings', path: '/09-strings' },
  { id: '10', title: 'Forms', path: '/10-forms' },
  { id: '11', title: 'File Handling', path: '/11-file-handling' },
  { id: '12', title: 'Sessions & Cookies', path: '/12-sessions-cookies' },
  { id: '13', title: 'MySQL Database', path: '/13-mysql-database' },
  { id: '14', title: 'OOP', path: '/14-oop' },
  { id: '15', title: 'Projects', path: '/15-projects' },
]

export function Sidebar() {
  const pathname = usePathname()

  if (pathname === '/') {
    return null
  }

  return (
    <div className="hidden lg:flex w-64 flex-col border-r bg-background">
      <div className="p-6">
        <h2 className="text-lg font-semibold mb-4">Course Chapters</h2>
        <ScrollArea className="h-[calc(100vh-200px)]">
          <div className="space-y-2">
            {chapters.map((chapter) => (
              <Button
                key={chapter.id}
                asChild
                variant={pathname === chapter.path ? "default" : "ghost"}
                className={cn(
                  "w-full justify-start text-left h-auto py-3 px-3",
                  pathname === chapter.path && "bg-blue-600 text-white hover:bg-blue-700"
                )}
              >
                <Link href={chapter.path}>
                  <div className="flex items-center space-x-3">
                    <div className={cn(
                      "w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold",
                      pathname === chapter.path 
                        ? "bg-white text-blue-600" 
                        : "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400"
                    )}>
                      {chapter.id}
                    </div>
                    <span className="text-sm">{chapter.title}</span>
                  </div>
                </Link>
              </Button>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}
