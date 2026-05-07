"use client";

import Link from "next/link";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  MapPin,
  Phone,
} from "lucide-react";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/theme-provider";
import { TypewriterEffect } from "@/components/typewriter-effect";

/* ── Animation Variants ─────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" as const },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

/* ── Section Header ─────────────────────────────────── */
function SectionLabel({ num, title }: { num: string; title: string }) {
  return (
    <div className="mb-14">
      <span
        className="text-xs tracking-[0.3em] uppercase font-medium"
        style={{ color: "var(--accent)" }}
      >
        {num}
      </span>
      <h2
        className="font-display text-4xl md:text-5xl font-bold mt-2"
        style={{ color: "var(--text-primary)" }}
      >
        {title}
      </h2>
      <div
        className="mt-5 h-px w-14"
        style={{ background: "var(--accent)" }}
      />
    </div>
  );
}

/* ── Main Page ──────────────────────────────────────── */
export default function Home() {
  return (
    <main style={{ backgroundColor: "var(--bg)", color: "var(--text-primary)" }}>
      {/* ── Navigation ──────────────────────────────── */}
      <nav className="fixed top-0 w-full glass-nav z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="font-display text-xl font-bold"
            style={{ color: "var(--text-primary)" }}
          >
            R.S.
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {["About", "Experience", "Projects", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm tracking-wide transition-colors duration-200"
                style={{ color: "var(--text-secondary)" }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--accent)")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--text-secondary)")
                }
              >
                {item}
              </Link>
            ))}
          </div>

          <ThemeToggle />
        </div>
      </nav>

      {/* ── Hero ────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center px-6 pt-20 overflow-hidden">
        {/* Background glow orbs */}
        <div
          className="pointer-events-none absolute"
          style={{
            top: "15%",
            right: "8%",
            width: "480px",
            height: "480px",
            borderRadius: "50%",
            background: "var(--accent)",
            opacity: 0.04,
            filter: "blur(90px)",
          }}
        />
        <div
          className="pointer-events-none absolute"
          style={{
            bottom: "20%",
            left: "5%",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "#6d7cff",
            opacity: 0.03,
            filter: "blur(80px)",
          }}
        />

        <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center py-16">
          {/* Left: Content */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="z-10"
          >
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-3 mb-10"
            >
              <div
                className="h-px w-8"
                style={{ background: "var(--accent)" }}
              />
              <span
                className="text-xs tracking-[0.28em] uppercase font-medium"
                style={{ color: "var(--accent)" }}
              >
                Portfolio · 2025
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-display font-bold leading-none mb-8"
            >
              <span
                className="block text-7xl md:text-[6.5rem]"
                style={{ color: "var(--text-primary)" }}
              >
                Rickny
              </span>
              <span
                className="block text-7xl md:text-[6.5rem]"
                style={{ color: "var(--accent)" }}
              >
                Sanon
              </span>
            </motion.h1>

            <motion.div
              variants={fadeUp}
              className="flex items-baseline gap-2 text-lg md:text-xl mb-5"
              style={{ color: "var(--text-secondary)" }}
            >
              <span>I&apos;m</span>
              <TypewriterEffect
                texts={[
                  "an AI Software Engineer",
                  "a Full-Stack Developer",
                ]}
                typeSpeed={80}
                deleteSpeed={40}
                pauseDuration={2500}
                className="font-medium"
              />
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="max-w-md leading-relaxed mb-10 text-sm md:text-base"
              style={{ color: "var(--text-secondary)" }}
            >
              CS student at Florida International University building AI-powered
              solutions and scalable web applications. Passionate about the
              intersection of machine learning and elegant software.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Link
                href="https://linkedin.com/in/sanonrickny"
                target="_blank"
                className="flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "var(--accent)",
                  boxShadow: "0 8px 24px color-mix(in srgb, var(--accent) 30%, transparent)",
                }}
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </Link>
              <Link
                href="https://github.com/sanonrickny"
                target="_blank"
                className="flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  color: "var(--text-primary)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.borderColor = "var(--accent)";
                  el.style.color = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.borderColor = "var(--border)";
                  el.style.color = "var(--text-primary)";
                }}
              >
                <Github className="w-4 h-4" />
                GitHub
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-6 text-xs"
              style={{ color: "var(--text-muted)" }}
            >
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                Miami, FL
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5" />
                786-705-0057
              </span>
            </motion.div>
          </motion.div>

          {/* Right: Decorative orbital */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="hidden md:flex items-center justify-center"
          >
            <div className="relative w-[340px] h-[340px]">
              {/* Outer ring — slow rotation */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full"
                style={{ border: "1px solid var(--border)" }}
              >
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
                  style={{ background: "var(--accent)" }}
                />
              </motion.div>

              {/* Mid ring — static */}
              <div
                className="absolute inset-10 rounded-full"
                style={{ border: "1px solid var(--border)", opacity: 0.55 }}
              />

              {/* Inner dashed ring — counter-rotate */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-20 rounded-full"
                style={{
                  border: "1px dashed var(--accent)",
                  opacity: 0.35,
                }}
              >
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full"
                  style={{ background: "var(--accent)", opacity: 0.7 }}
                />
              </motion.div>

              {/* Center glow */}
              <div
                className="absolute inset-28 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, var(--accent), transparent 70%)",
                  opacity: 0.12,
                }}
              />

              {/* Monogram */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="font-display font-bold text-7xl select-none"
                  style={{ color: "var(--accent)", opacity: 0.13 }}
                >
                  RS
                </span>
              </div>

              {/* Floating dots */}
              {[
                { top: "6%", right: "18%", size: "8px", delay: 0 },
                { bottom: "10%", left: "10%", size: "6px", delay: 1 },
                { top: "48%", right: "1%", size: "5px", delay: 0.5 },
              ].map(({ top, right, bottom, left, size, delay }, i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, delay % 1 === 0 ? -8 : 8, 0] }}
                  transition={{
                    duration: 3.5 + i * 0.7,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay,
                  }}
                  className="absolute rounded-full"
                  style={{
                    top,
                    right,
                    bottom,
                    left,
                    width: size,
                    height: size,
                    background: "var(--accent)",
                    opacity: 0.55,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ color: "var(--text-muted)" }}
        >
          <span className="text-[10px] tracking-[0.25em] uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="w-px h-8"
            style={{
              background:
                "linear-gradient(to bottom, var(--accent), transparent)",
            }}
          />
        </motion.div>
      </section>

      {/* ── About ───────────────────────────────────── */}
      <section
        id="about"
        className="py-28 px-6"
        style={{ backgroundColor: "var(--surface)" }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel num="01" title="About Me" />
            </motion.div>

            <div className="grid md:grid-cols-5 gap-14 items-start">
              <motion.div
                variants={fadeUp}
                className="md:col-span-3 space-y-5"
              >
                <p
                  className="leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  I&apos;m a Computer Science student at Florida International
                  University with a 3.6 GPA, passionate about leveraging AI and
                  modern technologies to create impactful solutions. My
                  experience spans from AI/ML engineering to full-stack web
                  development, with hands-on experience at companies like Ebix
                  and Zinnia.
                </p>
                <p
                  className="leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  I specialize in building scalable applications, implementing
                  AI-driven solutions, and creating intuitive user experiences.
                  When I&apos;m not coding, I lead community initiatives focused
                  on mental health and fitness advocacy.
                </p>

                <div className="grid grid-cols-2 gap-8 pt-4">
                  <div>
                    <h4
                      className="text-sm font-medium mb-2"
                      style={{ color: "var(--text-primary)" }}
                    >
                      Education
                    </h4>
                    <p
                      className="text-sm"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      B.A. Computer Science, FIU
                    </p>
                    <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                      GPA: 3.6 · Class of 2025
                    </p>
                  </div>
                  <div>
                    <h4
                      className="text-sm font-medium mb-2"
                      style={{ color: "var(--text-primary)" }}
                    >
                      Memberships
                    </h4>
                    <p
                      className="text-sm"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      NSLS, CodePath, ColorStack, INIT
                    </p>
                    <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                      Dean&apos;s List · NHS Nominee
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="md:col-span-2">
                <div className="card rounded-2xl p-7">
                  <h3
                    className="font-display font-semibold text-lg mb-5"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Highlights
                  </h3>
                  <div className="space-y-0">
                    {[
                      { label: "OCR Accuracy", value: "60% → 90%+" },
                      { label: "AI Inquiries Automated", value: "90%" },
                      { label: "Response Time Reduced", value: "50%" },
                      { label: "Cashiers Mentored", value: "60+" },
                      { label: "Hackathons", value: "3+" },
                    ].map(({ label, value }) => (
                      <div
                        key={label}
                        className="flex justify-between items-center py-3"
                        style={{ borderTop: "1px solid var(--border)" }}
                      >
                        <span
                          className="text-sm"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          {label}
                        </span>
                        <span
                          className="text-sm font-semibold"
                          style={{ color: "var(--accent)" }}
                        >
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Skills ──────────────────────────────────── */}
      <section
        className="py-28 px-6"
        style={{ backgroundColor: "var(--bg)" }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel num="02" title="Skills & Tech" />
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Languages & Frameworks",
                  dot: "#c9a96e",
                  tags: [
                    "Python",
                    "Java",
                    "TypeScript",
                    "JavaScript",
                    "SQL",
                    "C",
                    "HTML/CSS",
                    "Flask",
                    "React",
                  ],
                },
                {
                  title: "AI & Dev Tools",
                  dot: "#7b9cff",
                  tags: [
                    "Claude LLM",
                    "AWS Bedrock",
                    "NLP",
                    "Docker",
                    "Git",
                    "Postman",
                    "PyTorch",
                    "Hugging Face",
                  ],
                },
                {
                  title: "Cloud & Databases",
                  dot: "#6ee7b7",
                  tags: [
                    "AWS",
                    "SQLite",
                    "MySQL",
                    "Prisma",
                    "REST API",
                    "Datadog",
                    "Twilio",
                    "NationBuilder",
                  ],
                },
              ].map(({ title, dot, tags }) => (
                <motion.div key={title} variants={fadeUp} className="card rounded-2xl p-7">
                  <div className="flex items-center gap-2.5 mb-5">
                    <div
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ background: dot }}
                    />
                    <h3
                      className="text-sm font-medium"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span key={tag} className="badge">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Specialty icons */}
            <motion.div
              variants={fadeUp}
              className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {[
                { icon: "🤖", title: "AI & Machine Learning", sub: "LLMs, NLP, PyTorch" },
                { icon: "⚡", title: "Full-Stack Dev", sub: "React, Flask, APIs" },
                { icon: "☁️", title: "Cloud & DevOps", sub: "AWS, Docker" },
                { icon: "📊", title: "Data & Analytics", sub: "SQL, Dashboards" },
              ].map(({ icon, title, sub }) => (
                <div
                  key={title}
                  className="card rounded-xl p-5 text-center"
                >
                  <div className="text-2xl mb-3">{icon}</div>
                  <h4
                    className="text-xs font-semibold mb-1"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {title}
                  </h4>
                  <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                    {sub}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Experience ──────────────────────────────── */}
      <section
        id="experience"
        className="py-28 px-6"
        style={{ backgroundColor: "var(--surface)" }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel num="03" title="Experience" />
            </motion.div>

            <div className="space-y-6">
              {[
                {
                  role: "AI Software Engineering Intern",
                  company: "Ebix",
                  location: "Remote",
                  period: "Aug 2025 – Present",
                  bullets: [
                    "Migrated OCR to AWS Textract, raising certificate data extraction accuracy from 60% to 90%+",
                    "Researched and evaluated alternative CMS solutions to improve system efficiency",
                    "Researched and tested AI tools to enhance software development, including code generation and automation",
                  ],
                  tags: ["AWS Textract", "Python", "AI/ML", "OCR"],
                },
                {
                  role: "Software Engineering Intern",
                  company: "Zinnia",
                  location: "Miami, FL",
                  period: "May 2025 – Aug 2025",
                  bullets: [
                    "Developed real-time delivery metrics dashboard tracking 8+ key OKRs with live project status via Jira API",
                    "Built analytics platform with data-driven charts, filters, and scoring algorithms using Prisma DB",
                    "Designed AI-driven Slack agents automating 90% of access management inquiries, reducing response time 50%",
                    "Created predictive analytics models for business performance with proactive monitoring alerts",
                  ],
                  tags: ["Prisma", "Jira API", "AI Agents", "Analytics"],
                },
                {
                  role: "IT Support / Web Developer Intern",
                  company: "Miami Waterkeeper",
                  location: "Miami, FL",
                  period: "May 2024 – July 2024",
                  bullets: [
                    "Redesigned organization website on NationBuilder, improving navigation and boosting engagement 25%",
                    "Created a Twilio messaging system to automate communications and reduce response times by 40%",
                  ],
                  tags: ["NationBuilder", "Twilio", "Web Dev"],
                },
                {
                  role: "Cashier Team Lead / Zara Coach",
                  company: "ZARA",
                  location: "Miami, FL",
                  period: "May 2022 – May 2025",
                  bullets: [
                    "Managed opening and closing duties, reconciling $50,000+ in cash drawers and generating daily sales reports",
                    "Trained and mentored 60+ new cashiers, improving team efficiency 20% and reducing onboarding time 30%",
                  ],
                  tags: ["Leadership", "Training", "Operations"],
                },
              ].map(({ role, company, location, period, bullets, tags }) => (
                <motion.div
                  key={`${company}-${role}`}
                  variants={fadeUp}
                  className="card rounded-2xl p-8 group"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-6">
                    <div>
                      <h3
                        className="font-display font-semibold text-lg transition-colors duration-200"
                        style={{ color: "var(--text-primary)" }}
                        onMouseEnter={(e) =>
                          ((e.currentTarget as HTMLElement).style.color =
                            "var(--accent)")
                        }
                        onMouseLeave={(e) =>
                          ((e.currentTarget as HTMLElement).style.color =
                            "var(--text-primary)")
                        }
                      >
                        {role}
                      </h3>
                      <p
                        className="text-sm font-medium mt-0.5"
                        style={{ color: "var(--accent)" }}
                      >
                        {company} · {location}
                      </p>
                    </div>
                    <span
                      className="text-xs font-mono whitespace-nowrap pt-0.5"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {period}
                    </span>
                  </div>

                  <ul className="space-y-2.5 mb-6">
                    {bullets.map((b, i) => (
                      <li
                        key={i}
                        className="text-sm leading-relaxed flex gap-3"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        <span
                          className="flex-shrink-0 mt-1.5 text-[10px]"
                          style={{ color: "var(--accent)" }}
                        >
                          ◆
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {tags.map((t) => (
                      <span key={t} className="badge">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Projects ────────────────────────────────── */}
      <section
        id="projects"
        className="py-28 px-6"
        style={{ backgroundColor: "var(--bg)" }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel num="04" title="Projects" />
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  name: "Swift Response",
                  link: "https://shellhacks2024.onrender.com/",
                  desc: "First Responder Hurricane Relief Dashboard",
                  date: "Shellhacks · September 2024",
                  bullets: [
                    "Collaborated with 4 devs to build a Flask web app using JavaScript and Leaflet.js",
                    "Visualized high-priority zones and optimized routes for emergency supply deliveries",
                    "Deployed on Render.com with GitHub version control",
                  ],
                  tags: ["Flask", "JavaScript", "Leaflet.js"],
                },
                {
                  name: "Mental Health & Fitness Platform",
                  link: "https://stunning-walnut-fox-556.vscodeedu.app/",
                  desc: "Web App for Mental Health Activism",
                  date: "August 2024 – Present",
                  bullets: [
                    "Leading initiatives promoting mental health awareness and fitness through a web platform",
                    "Features include mood tracking, fitness routines, curated articles, and petitions",
                  ],
                  tags: ["React", "Web APIs", "Health Tech"],
                },
                {
                  name: "Stock Trading Web App",
                  link: null,
                  desc: "CS50 Course Project",
                  date: "March 2024",
                  bullets: [
                    "Built a Flask-based stock trading app with real-time data from Yahoo Finance API",
                    "Implemented user authentication and account management using SQL",
                    "Integrated database for real-time stock portfolio management",
                  ],
                  tags: ["Flask", "SQL", "Finance API"],
                },
                {
                  name: "Memory Matrix Game",
                  link: "https://sanonrickny.github.io/matrix-game/",
                  desc: "Interactive Memory Enhancement Game",
                  date: "November 2024",
                  bullets: [
                    "Developed a dynamic Memory Matrix Game using HTML, CSS, and JavaScript",
                    "Implemented card matching logic and random shuffling algorithm",
                  ],
                  tags: ["JavaScript", "HTML/CSS", "Game Dev"],
                },
              ].map(({ name, link, desc, date, bullets, tags }) => (
                <motion.div
                  key={name}
                  variants={fadeUp}
                  className="card rounded-2xl p-7 flex flex-col group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1 min-w-0">
                      <h3
                        className="font-display font-semibold text-lg transition-colors duration-200"
                        style={{ color: "var(--text-primary)" }}
                        onMouseEnter={(e) =>
                          ((e.currentTarget as HTMLElement).style.color =
                            "var(--accent)")
                        }
                        onMouseLeave={(e) =>
                          ((e.currentTarget as HTMLElement).style.color =
                            "var(--text-primary)")
                        }
                      >
                        {name}
                      </h3>
                      <p
                        className="text-sm mt-0.5"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {desc}
                      </p>
                      <p
                        className="text-xs mt-0.5"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {date}
                      </p>
                    </div>
                    {link && (
                      <Link
                        href={link}
                        target="_blank"
                        className="ml-4 flex-shrink-0 mt-0.5 transition-colors duration-200"
                        style={{ color: "var(--text-muted)" }}
                        onMouseEnter={(e) =>
                          ((e.currentTarget as HTMLElement).style.color =
                            "var(--accent)")
                        }
                        onMouseLeave={(e) =>
                          ((e.currentTarget as HTMLElement).style.color =
                            "var(--text-muted)")
                        }
                      >
                        <ExternalLink className="w-5 h-5" />
                      </Link>
                    )}
                  </div>

                  <ul className="space-y-2 mb-6 flex-1">
                    {bullets.map((b, i) => (
                      <li
                        key={i}
                        className="text-xs leading-relaxed flex gap-2.5"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        <span
                          className="flex-shrink-0 mt-1 text-[9px]"
                          style={{ color: "var(--accent)" }}
                        >
                          ◆
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {tags.map((t) => (
                      <span key={t} className="badge">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Contact ─────────────────────────────────── */}
      <section
        id="contact"
        className="py-28 px-6"
        style={{ backgroundColor: "var(--surface)" }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel num="05" title="Let's Connect" />
            </motion.div>

            <div className="grid md:grid-cols-2 gap-14">
              <motion.div variants={fadeUp}>
                <p
                  className="leading-relaxed mb-10 max-w-md"
                  style={{ color: "var(--text-secondary)" }}
                >
                  I&apos;m always open to discussing new opportunities,
                  collaborating on projects, or just having a conversation about
                  technology and innovation.
                </p>

                <div className="space-y-4 mb-10">
                  {[
                    {
                      Icon: Mail,
                      label: "sanonrickny2@gmail.com",
                      href: "mailto:sanonrickny2@gmail.com",
                    },
                    { Icon: Phone, label: "786-705-0057", href: null },
                    { Icon: MapPin, label: "Miami, FL", href: null },
                  ].map(({ Icon, label, href }) => (
                    <div
                      key={label}
                      className="flex items-center gap-4"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{
                          background: "var(--card)",
                          border: "1px solid var(--border)",
                        }}
                      >
                        <Icon
                          className="w-4 h-4"
                          style={{ color: "var(--accent)" }}
                        />
                      </div>
                      {href ? (
                        <Link
                          href={href}
                          className="text-sm transition-colors duration-200"
                          style={{ color: "var(--text-secondary)" }}
                          onMouseEnter={(e) =>
                            ((e.currentTarget as HTMLElement).style.color =
                              "var(--accent)")
                          }
                          onMouseLeave={(e) =>
                            ((e.currentTarget as HTMLElement).style.color =
                              "var(--text-secondary)")
                          }
                        >
                          {label}
                        </Link>
                      ) : (
                        <span className="text-sm">{label}</span>
                      )}
                    </div>
                  ))}
                </div>

                <div className="flex gap-3">
                  {[
                    {
                      href: "https://linkedin.com/in/sanonrickny",
                      Icon: Linkedin,
                    },
                    { href: "https://github.com/sanonrickny", Icon: Github },
                    { href: "mailto:sanonrickny2@gmail.com", Icon: Mail },
                  ].map(({ href, Icon }) => (
                    <Link
                      key={href}
                      href={href}
                      target={href.startsWith("mailto") ? undefined : "_blank"}
                      className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200"
                      style={{
                        background: "var(--card)",
                        border: "1px solid var(--border)",
                        color: "var(--text-secondary)",
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLAnchorElement;
                        el.style.borderColor = "var(--accent)";
                        el.style.color = "var(--accent)";
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLAnchorElement;
                        el.style.borderColor = "var(--border)";
                        el.style.color = "var(--text-secondary)";
                      }}
                    >
                      <Icon className="w-4 h-4" />
                    </Link>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="card rounded-2xl p-8">
                <h3
                  className="font-display font-semibold text-xl mb-6"
                  style={{ color: "var(--text-primary)" }}
                >
                  Currently Looking For
                </h3>
                <ul className="space-y-4">
                  {[
                    "Full-time Software Engineering roles starting December 2025",
                    "AI/ML engineering positions and research opportunities",
                    "Open source collaboration and hackathon partnerships",
                    "Mentorship opportunities in tech and personal development",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                        style={{ background: "var(--accent)" }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────── */}
      <footer
        className="py-10 px-6"
        style={{
          backgroundColor: "var(--bg)",
          borderTop: "1px solid var(--border)",
        }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span
            className="font-display font-bold text-lg"
            style={{ color: "var(--text-primary)" }}
          >
            Rickny Sanon
          </span>
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            © 2025 · AI Software Engineer & Full-Stack Developer
          </p>
          <div className="flex gap-4">
            {[
              { href: "https://linkedin.com/in/sanonrickny", Icon: Linkedin },
              { href: "https://github.com/sanonrickny", Icon: Github },
              { href: "mailto:sanonrickny2@gmail.com", Icon: Mail },
            ].map(({ href, Icon }) => (
              <Link
                key={href}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                className="transition-colors duration-200"
                style={{ color: "var(--text-muted)" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "var(--accent)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "var(--text-muted)")
                }
              >
                <Icon className="w-4 h-4" />
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
