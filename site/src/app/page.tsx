"use client";

import { useEffect, useMemo, useState } from "react";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  Boxes,
  Brain,
  BriefcaseBusiness,
  Cloud,
  CloudCog,
  Coffee,
  Command,
  Database,
  GraduationCap,
  Layers,
  LucideIcon,
  MapPin,
  Mountain,
  Radar,
  Rocket,
  Route,
  Send,
  Server,
  ServerCog,
  ShieldCheck,
  Smile,
  Sparkles,
  Target,
  Workflow,
} from "lucide-react";
import { CredlyBadge } from "@/components/credly-badge";
import { AnimatedDeviconStrip } from "@/components/animated-devicon-strip";
import { FloatingIconRing } from "@/components/floating-icon-ring";
import { FloatingNav } from "@/components/floating-nav";
import { GlowCard } from "@/components/glow-card";
import { ProjectShowcase } from "@/components/project-showcase";
import { SectionHeading } from "@/components/section-heading";
import { SkillCluster } from "@/components/skill-cluster";
import { Timeline } from "@/components/timeline";
import { ExperienceCard } from "@/components/experience-card";
import {
  about,
  credlyBadges,
  education,
  experience,
  journeyMilestones,
  principles,
  profile,
  projects,
  recognitions,
  skills,
} from "@/data/profile";
import { cn } from "@/lib/utils";

const iconRing = [
  { icon: Cloud, label: "Cloud" },
  { icon: Brain, label: "AI" },
  { icon: Server, label: "Systems" },
  { icon: Workflow, label: "Automation" },
  { icon: Database, label: "Data" },
  { icon: Sparkles, label: "Innovation" },
];

const journeyIconMap: Record<string, LucideIcon> = {
  cloud: Cloud,
  sparkles: Sparkles,
  layers: Layers,
  radar: Radar,
};

const heroStats = [
  { label: "REST APIs delivered", value: "50+" },
  { label: "Release time reduced", value: "30%" },
  { label: "Industry experience", value: "3+ yrs" },
];

const emailComposeLink = `https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${encodeURIComponent(profile.contact.email)}`;


const focusAreas = [
  {
    title: "Software Development",
    description:
      "Shipping reliable backend services that stay scalable and maintainable.",
    tone: "purple" as const,
    points: [
      "Design and build scalable microservices and REST APIs (Java, Spring Boot, Flask).",
      "Apply DSA and system design principles to craft efficient, fault-tolerant solutions.",
    ],
  },
  {
    title: "Cloud Architecture",
    description:
      "Designing AWS and GCP architectures with automation, security, and scale built in.",
    tone: "blue" as const,
    points: [
      "Deploy workloads across AWS and GCP using automation, security, and scalability best practices.",
      "Architect serverless, event-driven, and containerized designs to support high availability.",
    ],
  },
  {
    title: "Frontend Development",
    description:
      "Building responsive interfaces that connect seamlessly to backend services and data workflows.",
    tone: "amber" as const,
    points: [
      "Build modern, responsive UIs with React, Angular, and TypeScript.",
      "Implement component-driven design, state management, and API integrations.",
      "Optimize performance with lazy loading, caching, and accessibility best practices.",
    ],
  },
  {
    title: "DevOps & Reliability",
    description:
      "Automating delivery pipelines and observability so releases stay fast, safe, and traceable.",
    tone: "teal" as const,
    points: [
      "Automate CI/CD pipelines and IaC workflows (Terraform, Jenkins, GitHub Actions).",
      "Enhance observability with CloudWatch, Dynatrace, and New Relic.",
      "Leverage AI coding assistants (GitHub Copilot, ChatGPT) to boost productivity, testing, and prototyping.",
    ],
  },
];



const navItems = [
  { label: "About", href: "#about", icon: Smile },
  { label: "Focus", href: "#focus", icon: Target },
  { label: "Experience", href: "#experience", icon: BriefcaseBusiness },
  { label: "Education", href: "#education", icon: GraduationCap },
  { label: "Projects", href: "#projects", icon: Boxes },
  { label: "Certs", href: "#certifications", icon: BadgeCheck },
  { label: "Skills", href: "#skills", icon: Sparkles },
  { label: "Journey", href: "#journey", icon: Route },
  { label: "Contact", href: "#contact", icon: Send },
];

const experienceBadgeIconMap: Record<string, LucideIcon> = {
  "server-cog": ServerCog,
  cloud: CloudCog,
};

const recognitionIconMap: Record<string, LucideIcon> = {
  "badge-check": BadgeCheck,
  "shield-check": ShieldCheck,
};

export default function Home() {
  return (
    <>
      <FloatingNav items={navItems} />
      <main className="relative isolate mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pb-24 pt-24 sm:px-10 md:pt-28">
        <Hero />
        <AboutSection />
        <Focus />
        <Experience />
        <Education />
        <Projects />
        <Certifications />
        <Skills />
        <LearningTrail />
        <Contact />
      </main>
    </>
  );
}

function Hero() {
  const rolePhrases = useMemo(
    () => [
      "Software Engineer",
      "Cloud Engineer",
      "Data Analyst",
      "AI/ML Enthusiast",
    ],
    [],
  );
  return (
    <section
      id="hero"
      className="relative grid gap-16 lg:grid-cols-[1.1fr_1fr] lg:items-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        <div className="inline-flex items-center gap-3 rounded-full border border-slate-200/70 bg-white/80 px-5 py-2 text-sm font-medium uppercase tracking-[0.35em] text-cyan-600 shadow-[0_20px_50px_-40px_rgba(80,70,229,0.7)] dark:border-white/10 dark:bg-white/5 dark:text-cyan-200">
          <Typewriter
            phrases={rolePhrases}
            typingSpeed={70}
            deletingSpeed={40}
            pauseBetween={1400}
            showCaret
          />
        </div>
        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.65 }}
            className="text-5xl font-semibold leading-tight text-gradient md:text-6xl"
          >
            {profile.name}
          </motion.h1>
          <p className="text-xl text-slate-700 dark:text-slate-200 md:text-2xl">
            {profile.tagline}
          </p>
          <p className="max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300">
            {profile.overview}
          </p>
        </div>
        <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
          <span className="flex items-center gap-2">
            <MapPin size={16} className="text-cyan-400" />
            {profile.location}
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-slate-950 transition hover:shadow-[0_25px_70px_-40px_rgba(56,189,248,0.9)]"
            href={emailComposeLink}
            target="_blank"
            rel="noreferrer"
          >
            Let&apos;s collaborate
          </Link>
          <Link
            className="inline-flex items-center justify-center rounded-full border border-slate-300/70 px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-slate-700 transition hover:border-cyan-400/60 hover:text-cyan-600 dark:border-white/20 dark:text-slate-100 dark:hover:text-cyan-200"
            href={profile.contact.resume}
            target="_blank"
            rel="noreferrer"
          >
            View LinkedIn
          </Link>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="flex flex-col items-center gap-10"
      >
        <FloatingIconRing
          items={iconRing}
          centerImage={{
            src: profile.photo,
            alt: `Portrait of ${profile.name}`,
            size: 170,
            objectFit: "cover",
            objectPosition: "50% 18%",
          }}
        />
        <div className="grid w-full grid-cols-3 gap-3 text-center text-sm">
          {heroStats.map((stat) => (
            <div key={stat.label} className="glass-panel px-3 py-4 text-slate-700 dark:text-slate-200">
              <p className="text-2xl font-semibold text-gradient">
                {stat.value}
              </p>
              <p className="mt-1 text-[0.7rem] uppercase tracking-[0.3em] text-slate-500 dark:text-slate-300">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </motion.div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="space-y-10">
      <SectionHeading
        eyebrow="About"
        title="A brief about me"
        lead={about.intro}
      />
      <div className="grid gap-6 md:grid-cols-[1.2fr_1fr]">
        <div className="glass-panel p-6">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            What I&apos;m focused on lately
          </h3>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
            {about.highlights.map((item) => (
              <li key={item} className="flex gap-3">
                <span
                  aria-hidden
                  className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid gap-4">
          <AboutTile
            icon={Mountain}
            label="Arizona trails"
            detail="Hiking Arizona trails to recharge and find new perspectives."
          />
          <AboutTile
            icon={Coffee}
            label="Coffee experiments"
            detail="Experimenting with pour-over recipes and sharing new beans with friends."
          />
          <AboutTile
            icon={Smile}
            label="Ambient recording"
            detail="Recording field audio and ambient textures for creative breaks."
          />
        </div>
      </div>
    </section>
  );
}

function AboutTile({
  icon: Icon,
  label,
  detail,
}: {
  icon: LucideIcon;
  label: string;
  detail: string;
}) {
  return (
    <div className="glass-panel flex items-center gap-4 px-4 py-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-500/40 to-cyan-400/35 text-slate-900 dark:text-slate-950">
        <Icon size={18} />
      </div>
      <div>
        <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{label}</p>
        <p className="text-xs text-slate-600 dark:text-slate-300">{detail}</p>
      </div>
    </div>
  );
}

function Focus() {
  return (
    <section id="focus" className="space-y-12">
      <SectionHeading
        eyebrow="What I Do Best"
        title="Engineering reliable experiences across the stack"
        lead="I design scalable software, architect resilient cloud platforms, craft responsive frontends, and keep delivery pipelines humming."
      />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {focusAreas.map((area) => (
          <GlowCard key={area.title} tone={area.tone}>
            <div className="space-y-5">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
                {area.title}
              </h3>
              <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                {area.description}
              </p>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                {area.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <Command className="mt-1.5 h-4 w-4 text-cyan-400" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </GlowCard>
        ))}
      </div>
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          What I&apos;m exploring now
        </h3>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {principles.map((principle) => (
            <div key={principle.title} className="glass-panel p-6">
              <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                {principle.title}
              </h4>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="space-y-12">
      <SectionHeading
        eyebrow="Experience"
        title="Guiding enterprise teams through modernization and cloud adoption"
        lead="From Spring Boot services to AWS-native tooling, I focus on practical solutions that improve velocity, reliability, and customer trust."
      />
      <div className="grid gap-8">
        {experience.map((role) => {
          const Icon = experienceBadgeIconMap[role.badgeIcon] ?? Sparkles;
          return (
            <ExperienceCard
              key={`${role.company}-${role.period}`}
              {...role}
              badge={<ExperienceBadge icon={Icon} label="Impact" />}
            />
          );
        })}
      </div>
    </section>
  );
}

function ExperienceBadge({
  label,
  icon: Icon,
}: {
  label: string;
  icon: LucideIcon;
}) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">
      <Icon size={14} />
      {label}
    </div>
  );
}

function Education() {
  return (
    <section id="education" className="space-y-12">
      <SectionHeading
        eyebrow="Education"
        title="Academic foundations that keep my engineering sharp"
        lead="Graduate and undergraduate programs where I deepened software, data, and cloud skills."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {education.map((item) => (
          <div key={item.school} className="glass-panel p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
              {item.period}
            </p>
            <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-slate-100">
              {item.school}
            </h3>
            <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
              {item.institution}
            </p>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{item.focus}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-400">
              {item.achievements.map((achievement) => (
                <li key={achievement} className="flex gap-3">
                  <span
                    aria-hidden
                    className="mt-2 h-1.5 w-1.5 rounded-full bg-violet-400"
                  />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="space-y-12">
      <SectionHeading
        eyebrow="Selected Work"
        title="Projects that blend security, data, and automation"
        lead="Each initiative is driven by measurable improvements in performance, reliability, or developer experience."
      />
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectShowcase key={project.name} {...project} index={index} />
        ))}
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section id="certifications" className="space-y-12">
      <SectionHeading
        eyebrow="Certifications"
        title="Credentials that keep my cloud chops sharp"
        lead="Credly verified badges plus training programs that reinforce my AWS, architecture, and ML depth."
      />
      {recognitions.length ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {recognitions.map((item) => {
            const Icon = recognitionIconMap[item.icon] ?? BadgeCheck;
            return (
              <div key={item.title} className="glass-panel flex items-center gap-3 p-6 text-sm text-slate-700 dark:text-slate-200">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-500/55 to-cyan-400/35 text-slate-900 dark:text-slate-950">
                  <Icon size={18} />
                </div>
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">
                    {item.year}
                  </p>
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                    {item.title}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300">{item.by}</p>
                </div>
              </div>
            );
          })}
        </div>
      ) : null}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {credlyBadges.map((badge) => (
          <div
            key={badge.id}
            className="group flex flex-col items-center gap-5 rounded-3xl border border-slate-200/70 bg-white/90 p-5 text-slate-700 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/60 hover:shadow-[0_28px_80px_-60px_rgba(56,189,248,0.4)] dark:border-white/10 dark:bg-slate-950/70 dark:text-slate-200 dark:shadow-[0_35px_90px_-70px_rgba(15,23,42,0.8)]"
          >
            <div className="w-full overflow-hidden rounded-2xl bg-white p-3 shadow-[0_18px_60px_-45px_rgba(15,23,42,0.45)] transition-transform duration-300 group-hover:scale-[1.03] dark:bg-white dark:shadow-[0_20px_80px_-50px_rgba(15,23,42,0.65)]">
              <CredlyBadge
                id={badge.id}
                width={badge.width}
                height={badge.height}
                className="w-full"
              />
            </div>
            <Link
              href={badge.href}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-800 transition-colors group-hover:text-cyan-600 dark:text-slate-100 dark:group-hover:text-cyan-100"
            >
              View Credential
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  const skillGroups = [
    {
      title: "Languages",
      caption: "Strong fundamentals across application and scripting stacks",
      items: skills.languages,
    },
    {
      title: "Frontend",
      caption: "UI stacks for responsive, accessible experiences",
      items: skills.frontend,
    },
    {
      title: "Frameworks & Libraries",
      caption: "Backend and data frameworks I reach for most",
      items: skills.frameworks,
    },
    {
      title: "Cloud & Infrastructure",
      caption: "AWS and GCP services automated with Terraform",
      items: skills.cloud,
    },
    {
      title: "Databases",
      caption: "Relational and NoSQL engines supporting varied workloads",
      items: skills.databases,
    },
    {
      title: "DevOps & Automation",
      caption: "Pipeline, container, and IaC tooling for faster releases",
      items: skills.devops,
    },
    {
      title: "AI & Data",
      caption: "ML, analytics, and LLM tooling for intelligent features",
      items: skills.aiData,
    },
    {
      title: "Monitoring & Observability",
      caption: "Platforms that keep systems transparent and measurable",
      items: skills.monitoring,
    },
    {
      title: "AI Coding & Productivity",
      caption: "Assistive tools that accelerate prototyping and testing",
      items: skills.productivity,
    },
    {
      title: "System Design",
      caption: "Architecture patterns for resilient, high-availability systems",
      items: skills.systemDesign,
    },
  ];

  return (
    <section id="skills" className="space-y-12">
      <SectionHeading
        eyebrow="Toolbox"
        title="Technologies and practices I rely on"
        lead="My focus is to keep growing as a software engineer by blending strong computer science fundamentals with modern cloud platforms, NoSQL databases, and AI-driven engineering. I aim to deliver scalable, intelligent platforms while experimenting with RAG models, LLM integrations, and AI copilots to push developer productivity."
      />
      <AnimatedDeviconStrip />
      <div className="grid gap-6 md:grid-cols-2">
        {skillGroups.map((group) => (
          <SkillCluster
            key={group.title}
            title={group.title}
            caption={group.caption}
            items={group.items}
          />
        ))}
      </div>
    </section>
  );
}

function LearningTrail() {
  return (
    <section id="journey" className="space-y-12">
      <SectionHeading
        eyebrow="Journey"
        title="Milestones along my engineering path"
        lead="I pursue roles where backend craftsmanship, cloud automation, and continuous learning intersect."
      />
      <Timeline
        items={journeyMilestones.map((milestone) => ({
          title: milestone.title,
          meta: String(milestone.year),
          description: milestone.description,
          icon: renderJourneyIcon(milestone.icon),
        }))}
      />
    </section>
  );
}

function renderJourneyIcon(key: string) {
  const Icon = journeyIconMap[key] ?? Rocket;
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 text-slate-950">
      <Icon size={20} />
    </div>
  );
}

function Contact() {
  return (
    <section id="contact" className="space-y-8 text-center">
      <SectionHeading
        eyebrow="Next"
        title="Ready to build your next platform"
        lead="Whether you need resilient APIs, AWS modernization, or a steady DevOps partner, I am ready to help."
        className="mx-auto max-w-3xl"
      />
      <div className="mx-auto flex flex-wrap items-center justify-center gap-4">
        <CTAButton href={emailComposeLink} variant="solid">
          Start a conversation
        </CTAButton>
        {profile.contact.phoneHref ? (
          <CTAButton href={profile.contact.phoneHref}>Give me a call</CTAButton>
        ) : null}
      </div>
      <p className="text-sm text-slate-500 dark:text-slate-400">
        Prefer async? Share context by email, and I&apos;ll reply within 48
        hours with next steps.
      </p>
    </section>
  );
}

interface TypewriterProps {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseBetween?: number;
  loop?: boolean;
  showCaret?: boolean;
  className?: string;
}

function Typewriter({
  phrases,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseBetween = 1600,
  loop = true,
  showCaret = true,
  className,
}: TypewriterProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!phrases.length) {
      return;
    }

    const currentPhrase = phrases[currentIndex % phrases.length];
    let timeout: ReturnType<typeof setTimeout> | undefined;

    if (!isDeleting && displayText === currentPhrase) {
      if (!loop && currentIndex === phrases.length - 1) {
        return;
      }

      timeout = setTimeout(() => setIsDeleting(true), pauseBetween);
      return () => {
        if (timeout) {
          clearTimeout(timeout);
        }
      };
    }

    if (isDeleting) {
      if (displayText === "") {
        setIsDeleting(false);
        setCurrentIndex((prev) => {
          if (!loop && prev === phrases.length - 1) {
            return prev;
          }
          return (prev + 1) % phrases.length;
        });
        return;
      }

      timeout = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
      }, deletingSpeed);

      return () => {
        if (timeout) {
          clearTimeout(timeout);
        }
      };
    }

    timeout = setTimeout(() => {
      setDisplayText(currentPhrase.slice(0, displayText.length + 1));
    }, typingSpeed);

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [
    displayText,
    isDeleting,
    currentIndex,
    phrases,
    typingSpeed,
    deletingSpeed,
    pauseBetween,
    loop,
  ]);

  useEffect(() => {
    setDisplayText("");
    setCurrentIndex(0);
    setIsDeleting(false);
  }, [phrases]);

  return (
    <span className={cn("inline-flex items-center", className)}>
      <span>{displayText}</span>
      {showCaret ? (
        <span
          aria-hidden
          className="ml-2 inline-block h-5 w-[2px] animate-pulse bg-cyan-300"
        />
      ) : null}
    </span>
  );
}


interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "outline" | "solid";
}

function CTAButton({ href, children, variant = "outline" }: CTAButtonProps) {
  return (
    <Link
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.35em] transition",
        variant === "solid"
          ? "bg-gradient-to-r from-violet-500 via-cyan-400 to-emerald-400 text-slate-950 shadow-[0_30px_90px_-60px_rgba(56,189,248,0.9)] hover:brightness-110"
          : "border border-slate-300/70 text-slate-700 hover:border-cyan-400/60 hover:text-cyan-600 dark:border-white/20 dark:text-slate-100 dark:hover:text-cyan-200",
      )}
    >
      {children}
    </Link>
  );
}
