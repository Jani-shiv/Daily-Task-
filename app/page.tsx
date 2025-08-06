import Link from 'next/link'
import { BookOpen, Code, Users, Award, ArrowRight, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function HomePage() {
  const features = [
    {
      icon: BookOpen,
      title: "Comprehensive Curriculum",
      description: "Learn PHP from basics to advanced concepts with 15 structured chapters"
    },
    {
      icon: Code,
      title: "Hands-on Examples",
      description: "Practice with real code examples and syntax highlighting"
    },
    {
      icon: Users,
      title: "Beginner Friendly",
      description: "Perfect for beginners with step-by-step explanations"
    },
    {
      icon: Award,
      title: "Project-Based Learning",
      description: "Build real projects including a CRUD application"
    }
  ]

  const chapters = [
    { id: '01', title: 'Introduction to PHP', folder: '01-introduction' },
    { id: '02', title: 'Variables & Constants', folder: '02-variables' },
    { id: '03', title: 'Data Types', folder: '03-datatypes' },
    { id: '04', title: 'Operators', folder: '04-operators' },
    { id: '05', title: 'Conditional Statements', folder: '05-conditional-statements' },
    { id: '06', title: 'Loops', folder: '06-loops' },
    { id: '07', title: 'Arrays', folder: '07-arrays' },
    { id: '08', title: 'Functions', folder: '08-functions' },
    { id: '09', title: 'Strings', folder: '09-strings' },
    { id: '10', title: 'Forms', folder: '10-forms' },
    { id: '11', title: 'File Handling', folder: '11-file-handling' },
    { id: '12', title: 'Sessions & Cookies', folder: '12-sessions-cookies' },
    { id: '13', title: 'MySQL Database', folder: '13-mysql-database' },
    { id: '14', title: 'Object-Oriented Programming', folder: '14-oop' },
    { id: '15', title: 'Projects', folder: '15-projects' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            PHP <span className="text-blue-600 dark:text-blue-400">A to Z</span> Course
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Master PHP programming from basics to advanced concepts. Build real projects and become a confident PHP developer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link href="/01-introduction">
                <Play className="mr-2 h-5 w-5" />
                Start Learning
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
              <Link href="#curriculum">
                View Curriculum
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Why Choose Our PHP Course?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <feature.icon className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Complete Curriculum
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4">
            {chapters.map((chapter, index) => (
              <Card key={chapter.id} className="hover:shadow-lg transition-all hover:scale-105">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="bg-blue-600 dark:bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                        {chapter.id}
                      </div>
                      <CardTitle className="text-lg">{chapter.title}</CardTitle>
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-400" />
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button asChild variant="ghost" className="w-full justify-start p-0 h-auto">
                    <Link href={`/${chapter.folder}`} className="block w-full text-left">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Click to start Chapter {chapter.id}
                      </span>
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Start Your PHP Journey?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Join thousands of developers who have mastered PHP with our comprehensive course.
          </p>
          <Button asChild size="lg" className="text-lg px-8 py-6">
            <Link href="/01-introduction">
              <Play className="mr-2 h-5 w-5" />
              Begin Chapter 1
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
