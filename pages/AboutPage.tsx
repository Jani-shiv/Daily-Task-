import React from 'react';
import { User, Code, Heart, BookOpen, Trophy, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const teamMembers = [
    {
      name: 'Alex Chen',
      role: 'Founder & Lead Instructor',
      bio: 'Former senior developer at Google with 10+ years experience in web development and a passion for teaching.',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Sophia Rodriguez',
      role: 'CSS Specialist',
      bio: 'UI/UX designer and front-end developer specializing in creating beautiful, accessible interfaces.',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Marcus Johnson',
      role: 'JavaScript Expert',
      bio: 'Full-stack developer with expertise in modern JavaScript frameworks and best practices.',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero Section */}
      <section className="mb-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">About WebMastery</h1>
        <div className="grid md:grid-cols-5 gap-8 items-center">
          <div className="md:col-span-3">
            <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
              WebMastery was founded in 2023 with a simple mission: to make web development learning accessible, engaging, and practical for everyone. We believe that understanding how to build for the web is an essential skill in today's digital world.
            </p>
            <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
              Our platform offers comprehensive, step-by-step lessons in HTML, CSS, and JavaScript with a focus on practical, real-world applications. We constantly update our content to reflect modern web development practices.
            </p>
          </div>
          <div className="md:col-span-2 flex justify-center">
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-full w-64 h-64 flex items-center justify-center">
                <Code className="h-32 w-32 text-white" />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-yellow-400 rounded-full p-4">
                <Heart className="h-8 w-8 text-white" fill="currentColor" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <BookOpen className="h-7 w-7 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Accessibility</h3>
            <p className="text-gray-600 dark:text-gray-400">
              We believe learning to code should be accessible to everyone, regardless of background or prior experience.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <div className="bg-purple-100 dark:bg-purple-900/30 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Lightbulb className="h-7 w-7 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Practicality</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Our lessons focus on practical skills and real-world projects that you can apply immediately to your work.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <div className="bg-yellow-100 dark:bg-yellow-900/30 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Trophy className="h-7 w-7 text-yellow-600 dark:text-yellow-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Excellence</h3>
            <p className="text-gray-600 dark:text-gray-400">
              We strive for high-quality content that reflects modern best practices and encourages excellence in coding.
            </p>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md border border-gray-200 dark:border-gray-700">
              <img 
                src={member.avatar} 
                alt={member.name} 
                className="w-full h-48 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                <p className="text-blue-600 dark:text-blue-400 text-sm mb-3">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Story */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Our Story</h2>
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            WebMastery began as a small collection of tutorials created by Alex Chen to help his students learn web development more effectively. After seeing how these structured lessons helped beginners grasp complex concepts, he decided to expand them into a comprehensive platform.
          </p>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Today, our team of experienced developers and educators works together to create content that bridges the gap between theory and practice. We've helped thousands of students go from complete beginners to confident web developers.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            We're continuously improving our platform based on feedback and advancements in web technologies, ensuring our students always learn the most relevant and up-to-date skills.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white text-center p-10 mb-10">
        <h2 className="text-2xl font-bold mb-4">Ready to Start Learning?</h2>
        <p className="text-white/80 mb-8 max-w-lg mx-auto">
          Join thousands of students who have successfully learned web development through our platform. No prior experience required!
        </p>
        <Link 
          to="/html/intro" 
          className="inline-flex items-center bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition"
        >
          Start Your First Lesson
        </Link>
      </section>
    </div>
  );
};

export default AboutPage;