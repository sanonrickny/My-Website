import Link from "next/link";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  MapPin,
  Phone,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-provider";
import { TypewriterEffect } from "@/components/typewriter-effect";

export default function Home() {
  return (
    <main className="min-h-screen hero-bg">
      <ThemeToggle />
      {/* Navigation */}
      <nav className="fixed top-0 w-full glass-nav z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link
              href="/"
              className="text-xl font-bold text-gray-900 dark:text-white"
            >
              R.S.
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link
                href="#about"
                className="text-gray-900 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                About
              </Link>
              <Link
                href="#experience"
                className="text-gray-900 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Experience
              </Link>
              <Link
                href="#projects"
                className="text-gray-900 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Projects
              </Link>
              <Link
                href="#contact"
                className="text-gray-900 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex items-center justify-center min-h-screen px-6">
        <div className="text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Hi, I&apos;m{" "}
              <span className="text-blue-600 dark:text-blue-400">
                Rickny Sanon
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-900 dark:text-gray-300 mb-6">
              <TypewriterEffect
                texts={[
                  "an AI Software Engineer",
                  "also a Full-Stack Developer",
                ]}
                typeSpeed={80}
                deleteSpeed={40}
                pauseDuration={2500}
                className="text-xl md:text-2xl text-gray-900 dark:text-gray-300"
              />
            </p>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <Link
              href="https://linkedin.com/in/sanonrickny"
              target="_blank"
              className="btn-modern flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-lg hover:shadow-xl"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Link>
            <Link
              href="https://github.com/sanonrickny"
              target="_blank"
              className="btn-modern flex items-center px-6 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 shadow-md hover:shadow-lg"
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Link>
          </div>

          <div className="flex justify-center items-center space-x-8 text-sm text-gray-700 dark:text-gray-400">
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              Miami, FL
            </div>
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-1" />
              786-705-0057
            </div>
            <div>Expected Graduation: Dec 2025</div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="section-divider mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-900 dark:text-gray-300 mb-6">
                I&apos;m a Computer Science student at Florida International
                University with a 3.6 GPA, passionate about leveraging AI and
                modern technologies to create impactful solutions. My experience
                spans from AI/ML engineering to full-stack web development, with
                hands-on experience at companies like Ebix and Zinnia.
              </p>
              <p className="text-lg text-gray-900 dark:text-gray-300 mb-6">
                I specialize in building scalable applications, implementing
                AI-driven solutions, and creating intuitive user experiences.
                When I&apos;m not coding, I lead community initiatives focused
                on mental health and fitness advocacy.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Education
                  </h4>
                  <p className="text-gray-900 dark:text-gray-300">
                    B.A. Computer Science, FIU
                  </p>
                  <p className="text-gray-700 dark:text-gray-400 text-sm">
                    GPA: 3.6 | Dec 2025
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Memberships
                  </h4>
                  <p className="text-gray-900 dark:text-gray-300 text-sm">
                    NSLS, CodePath, ColorStack, INIT
                  </p>
                  <p className="text-gray-900 dark:text-gray-300 text-sm">
                    Dean&apos;s List, National Honor Society Nominee
                  </p>
                </div>
              </div>
            </div>

            <div className="modern-card p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Quick Stats
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-900 dark:text-gray-300">
                    Hackathons Participated
                  </span>
                  <span className="font-semibold text-blue-600 dark:text-blue-400">
                    3+
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-900 dark:text-gray-300">
                    OCR Accuracy Improvement
                  </span>
                  <span className="font-semibold text-blue-600 dark:text-blue-400">
                    60% → 90%+
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Skills & Technologies
            </h2>
            <div className="section-divider mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Languages & Frameworks
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Python",
                  "Java",
                  "TypeScript",
                  "JavaScript",
                  "SQL",
                  "C",
                  "HTML/CSS",
                  "Flask",
                  "React",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="skill-badge px-3 py-1 bg-blue-600 dark:bg-blue-100 text-white dark:text-blue-800 rounded-full text-sm cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                AI & Development Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Claude LLM",
                  "AWS Bedrock",
                  "NLP",
                  "Docker",
                  "Git",
                  "Postman",
                  "PyTorch",
                  "Hugging Face",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="skill-badge px-3 py-1 bg-green-600 dark:bg-green-100 text-white dark:text-green-800 rounded-full text-sm cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Cloud & Databases
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "AWS",
                  "SQLite",
                  "MySQL",
                  "Prisma",
                  "REST API",
                  "Datadog",
                  "Twilio",
                  "NationBuilder",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="skill-badge px-3 py-1 bg-purple-600 dark:bg-purple-100 text-white dark:text-purple-800 rounded-full text-sm cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-gray-700 border border-blue-200 dark:border-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white">
                AI & Machine Learning
              </h4>
              <p className="text-gray-900 dark:text-gray-300 text-sm">
                LLMs, NLP, PyTorch
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-gray-700 border border-blue-200 dark:border-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white">
                Full-Stack Development
              </h4>
              <p className="text-gray-900 dark:text-gray-300 text-sm">
                React, Flask, APIs
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-gray-700 border border-blue-200 dark:border-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">☁️</span>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white">
                Cloud & DevOps
              </h4>
              <p className="text-gray-900 dark:text-gray-300 text-sm">
                AWS, Docker
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-gray-700 border border-blue-200 dark:border-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white">
                Data & Analytics
              </h4>
              <p className="text-gray-900 dark:text-gray-300 text-sm">
                SQL, Analytics, Dashboards
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Professional Experience
            </h2>
            <div className="section-divider mx-auto"></div>
          </div>

          <div className="space-y-12">
            {/* Ebix */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-8 rounded-xl shadow-sm dark:shadow-none">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    AI Software Engineering Intern
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    Ebix • Remote
                  </p>
                </div>
                <span className="text-gray-700 dark:text-gray-400 font-medium mt-2 md:mt-0">
                  Aug 2025 – Present
                </span>
              </div>
              <ul className="space-y-2 text-gray-900 dark:text-gray-300">
                <li>
                  • Migrated OCR to AWS Textract, raising certificate data
                  extraction accuracy from 60% to 90%+ and automating workflows
                </li>
                <li>
                  • Researched and evaluated alternative CMS solutions to
                  improve system efficiency and simplify content management
                </li>
                <li>
                  • Research and test AI tools to enhance software development,
                  including code generation and automation
                </li>
              </ul>
            </div>

            {/* Zinnia */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-8 rounded-xl shadow-sm dark:shadow-none">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Software Engineering Intern
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    Zinnia • Miami, FL
                  </p>
                </div>
                <span className="text-gray-700 dark:text-gray-400 font-medium mt-2 md:mt-0">
                  May 2025 – Aug 2025
                </span>
              </div>
              <ul className="space-y-2 text-gray-900 dark:text-gray-300">
                <li>
                  • Developed real-time delivery metrics dashboard tracking 8+
                  key OKRs with live project status using Jira API
                </li>
                <li>
                  • Built analytics platform with data-driven charts, filters,
                  and simplified execution scoring algorithms using Prisma DB
                </li>
                <li>
                  • Created predictive analytics models for business performance
                  evaluation with proactive alerts for system monitoring
                </li>
                <li>
                  • Designed and deployed AI-driven Slack agents for access
                  management, automating 90% of inquiries and reducing response
                  time by 50%
                </li>
              </ul>
            </div>

            {/* Miami Waterkeeper */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-8 rounded-xl shadow-sm dark:shadow-none">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    IT Support / Web Developer Intern
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    Miami Waterkeeper • Miami, FL
                  </p>
                </div>
                <span className="text-gray-700 dark:text-gray-400 font-medium mt-2 md:mt-0">
                  May 2024 – July 2024
                </span>
              </div>
              <ul className="space-y-2 text-gray-900 dark:text-gray-300">
                <li>
                  • Redesigned organization website on NationBuilder, improving
                  navigation and boosting engagement by 25%
                </li>
                <li>
                  • Created a Twilio messaging system to automate communications
                  and reduce response times by 40%
                </li>
              </ul>
            </div>

            {/* ZARA */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-8 rounded-xl shadow-sm dark:shadow-none">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Cashier Team Lead / Zara Coach
                  </h3>
                  <p className="text-gray-900 dark:text-gray-300 font-medium">
                    ZARA • Miami, FL
                  </p>
                </div>
                <span className="text-gray-700 dark:text-gray-400 font-medium mt-2 md:mt-0">
                  May 2022 – Present
                </span>
              </div>
              <ul className="space-y-2 text-gray-900 dark:text-gray-300">
                <li>
                  • Managed opening and closing duties, reconciling $50,000+ in
                  cash drawers and generating daily sales reports
                </li>
                <li>
                  • Trained and mentored 60+ new cashiers, improving team
                  efficiency by 20% and reducing onboarding time by 30%
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <div className="section-divider mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Swift Response */}
            <div className="modern-card p-6 rounded-xl">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Swift Response
                </h3>
                <Link
                  href="https://shellhacks2024.onrender.com/"
                  target="_blank"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                >
                  <ExternalLink className="w-5 h-5" />
                </Link>
              </div>
              <p className="text-gray-900 dark:text-gray-300 mb-4">
                First Responder Hurricane Relief Dashboard
              </p>
              <p className="text-gray-900 dark:text-gray-400 text-sm mb-4">
                Shellhacks - September 2024
              </p>
              <ul className="text-gray-900 dark:text-gray-300 text-sm space-y-1 mb-4">
                <li>
                  • Collaborated with 4 developers to build a Flask web app
                  using JavaScript and Leaflet.js APIs
                </li>
                <li>
                  • Designed features to visualize high-priority zones and
                  optimize routes for emergency supply deliveries
                </li>
                <li>• Deployed on Render.com with GitHub version control</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-600 dark:bg-blue-100 text-white dark:text-blue-800 rounded text-xs">
                  Flask
                </span>
                <span className="px-2 py-1 bg-blue-600 dark:bg-blue-100 text-white dark:text-blue-800 rounded text-xs">
                  JavaScript
                </span>
                <span className="px-2 py-1 bg-blue-600 dark:bg-blue-100 text-white dark:text-blue-800 rounded text-xs">
                  Leaflet.js
                </span>
              </div>
            </div>

            {/* Mental Health App */}
            <div className="modern-card p-6 rounded-xl">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Mental Health & Fitness Platform
                </h3>
                <Link
                  href="https://stunning-walnut-fox-556.vscodeedu.app/"
                  target="_blank"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                >
                  <ExternalLink className="w-5 h-5" />
                </Link>
              </div>
              <p className="text-gray-900 dark:text-gray-300 mb-4">
                Web App for Mental Health Activism
              </p>
              <p className="text-gray-900 dark:text-gray-400 text-sm mb-4">
                August 2024 - Present
              </p>
              <ul className="text-gray-900 dark:text-gray-300 text-sm space-y-1 mb-4">
                <li>
                  • Leading initiatives that promote mental health awareness and
                  fitness through a web platform
                </li>
                <li>
                  • Developing features such as mood tracking, fitness routines,
                  curated articles, and petitions
                </li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-green-600 dark:bg-green-100 text-white dark:text-green-800 rounded text-xs">
                  React
                </span>
                <span className="px-2 py-1 bg-green-600 dark:bg-green-100 text-white dark:text-green-800 rounded text-xs">
                  Web APIs
                </span>
                <span className="px-2 py-1 bg-green-600 dark:bg-green-100 text-white dark:text-green-800 rounded text-xs">
                  Health Tech
                </span>
              </div>
            </div>

            {/* Stock Trading App */}
            <div className="modern-card p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Stock Trading Web App
              </h3>
              <p className="text-gray-900 dark:text-gray-300 mb-4">
                CS50 Course Project
              </p>
              <p className="text-gray-900 dark:text-gray-400 text-sm mb-4">
                March 2024
              </p>
              <ul className="text-gray-900 dark:text-gray-300 text-sm space-y-1 mb-4">
                <li>
                  • Built a Flask-based stock trading app with real-time data
                  from Yahoo Finance API
                </li>
                <li>
                  • Implemented user authentication and account management using
                  SQL
                </li>
                <li>
                  • Integrated SQL database for real-time account management and
                  stock portfolios
                </li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-purple-600 dark:bg-purple-100 text-white dark:text-purple-800 rounded text-xs">
                  Flask
                </span>
                <span className="px-2 py-1 bg-purple-600 dark:bg-purple-100 text-white dark:text-purple-800 rounded text-xs">
                  SQL
                </span>
                <span className="px-2 py-1 bg-purple-600 dark:bg-purple-100 text-white dark:text-purple-800 rounded text-xs">
                  Finance API
                </span>
              </div>
            </div>

            {/* Memory Matrix */}
            <div className="modern-card p-6 rounded-xl">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Memory Matrix Game
                </h3>
                <Link
                  href="https://sanonrickny.github.io/matrix-game/"
                  target="_blank"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                >
                  <ExternalLink className="w-5 h-5" />
                </Link>
              </div>
              <p className="text-gray-900 dark:text-gray-300 mb-4">
                Interactive Memory Enhancement Game
              </p>
              <p className="text-gray-900 dark:text-gray-400 text-sm mb-4">
                November 2024
              </p>
              <ul className="text-gray-900 dark:text-gray-300 text-sm space-y-1 mb-4">
                <li>
                  • Developed a dynamic and interactive Memory Matrix Game using
                  HTML, CSS, and JavaScript
                </li>
                <li>
                  • Implemented core game logic for card matching and random
                  shuffling
                </li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-orange-600 dark:bg-orange-100 text-white dark:text-orange-800 rounded text-xs">
                  JavaScript
                </span>
                <span className="px-2 py-1 bg-orange-600 dark:bg-orange-100 text-white dark:text-orange-800 rounded text-xs">
                  HTML/CSS
                </span>
                <span className="px-2 py-1 bg-orange-600 dark:bg-orange-100 text-white dark:text-orange-800 rounded text-xs">
                  Game Dev
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Let&apos;s Connect
            </h2>
            <div className="section-divider mx-auto mb-6"></div>
            <p className="text-xl text-gray-900 dark:text-gray-300 max-w-2xl mx-auto">
              I&apos;m always open to discussing new opportunities,
              collaborating on projects, or just having a chat about technology
              and innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Get in Touch
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-600 mr-3" />
                  <Link
                    href="mailto:sanonrickny2@gmail.com"
                    className="text-gray-900 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    sanonrickny2@gmail.com
                  </Link>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-900 dark:text-gray-300">
                    786-705-0057
                  </span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-900 dark:text-gray-300">
                    Miami, FL
                  </span>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  <Link
                    href="https://linkedin.com/in/sanonrickny"
                    target="_blank"
                    className="w-12 h-12 bg-blue-600 dark:bg-blue-900 text-white dark:text-blue-400 rounded-lg flex items-center justify-center hover:bg-blue-700 dark:hover:bg-blue-800 transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                  </Link>
                  <Link
                    href="https://github.com/sanonrickny"
                    target="_blank"
                    className="w-12 h-12 bg-gray-700 dark:bg-gray-700 text-white dark:text-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                  >
                    <Github className="w-6 h-6" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="modern-card p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Currently Looking For
              </h3>
              <ul className="space-y-3 text-gray-900 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Full-time Software Engineering opportunities starting December
                  2025
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  AI/ML engineering roles and research opportunities
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Open source collaboration and hackathon partnerships
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Mentorship opportunities in tech and personal development
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Rickny Sanon</h3>
            <p className="text-gray-400 dark:text-gray-500 mb-6">
              AI Software Engineer & Full-Stack Developer
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <Link
                href="https://linkedin.com/in/sanonrickny"
                target="_blank"
                className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-200 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link
                href="https://github.com/sanonrickny"
                target="_blank"
                className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-200 transition-colors"
              >
                <Github className="w-6 h-6" />
              </Link>
              <Link
                href="mailto:sanonrickny2@gmail.com"
                className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-200 transition-colors"
              >
                <Mail className="w-6 h-6" />
              </Link>
            </div>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400 dark:text-gray-500">
                &copy; 2025 Rickny Sanon. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
