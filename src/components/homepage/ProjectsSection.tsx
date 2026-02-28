"use client";

import { useEffect, useRef, useState } from "react";
import AppImage from "@/components/ui/AppImage";

interface Project {
    id: string;
    title: string;
    tagline: string;
    description: string;
    longDesc: string;
    tech: string[];
    category: string;
    color: string;
    colorDim: string;
    colorBorder: string;
    image: string;
    imageAlt: string;
    metrics: { label: string; value: string; }[];
    links: { label: string; href: string; icon: "github" | "demo"; }[];
    featured: boolean;
    status: "Live" | "In Progress" | "Concept";
}

const projects: Project[] = [
    {
        id: "candid-optronix",
        title: "Candid Optronix Website",
        tagline: "Modern flagship website for an optics industry leader",
        description:
            "Developing and maintaining a high-performance, scalable website using React and modern full-stack technologies.",
        longDesc:
            "Leading the frontend development of the company's flagship platform. Implemented dynamic product listings, interactive contact forms with email automation using Formspree, and branch location maps. Focused on responsive design and a smooth user experience across all devices.",
        tech: ["React", "CSS3", "JavaScript", "Email Automation", "Maps API"],
        category: "Professional",
        color: "#F59E0B",
        colorDim: "rgba(245, 158, 11, 0.08)",
        colorBorder: "rgba(245, 158, 11, 0.2)",
        image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c543bd06-1764924833912.png",
        imageAlt: "Candid Optronix website - professional corporate platform showing product catalog and locations",
        metrics: [
            { label: "Design", value: "Responsive" },
            { label: "Performance", value: "Optimized" },
            { label: "UX", value: "Fluid" }],

        links: [
            { label: "Live Demo", href: "https://candidoptronix.com", icon: "demo" }],

        featured: true,
        status: "Live"
    },
    {
        id: "fintech-expense",
        title: "FinTech Expense Platform",
        tagline: "Full-stack budget management with real-time analytics",
        description:
            "A secure, end-to-end platform for expense tracking, budgeting, and financial data visualization.",
        longDesc:
            "Built a complex full-stack application featuring JWT-based authentication, user-scoped CRUD APIs, and multi-profile support. Implemented backend-driven analytics for monthly summaries and category breakdowns. Deployed on Vercel and Render with Supabase PostgreSQL.",
        tech: ["Node.js", "Express", "Prisma", "PostgreSQL", "React", "Recharts", "JWT"],
        category: "Full Stack",
        color: "#60A5FA",
        colorDim: "rgba(96, 165, 250, 0.08)",
        colorBorder: "rgba(96, 165, 250, 0.2)",
        image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f224e57c-1772129297602.png",
        imageAlt: "FinTech Expense Platform - dashboard showing spending trends and budget limits",
        metrics: [
            { label: "Security", value: "JWT" },
            { label: "Database", value: "Supabase" },
            { label: "Analytics", value: "Recharts" }],

        links: [
            { label: "GitHub", href: "https://github.com/dxdydz123/FinTech", icon: "github" },
        ],

        featured: true,
        status: "Live"
    }
];


function GitHubIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>);

}

function ExternalIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
        </svg>);

}

export default function ProjectsSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const [expandedId, setExpandedId] = useState<string | null>(null);

    useEffect(() => {
        if (!sectionRef.current) return;
        const elements = sectionRef.current.querySelectorAll(".reveal-hidden");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) entry.target.classList.add("is-visible");
                });
            },
            { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
        );
        elements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section id="projects" ref={sectionRef} className="py-24 lg:py-32 bg-bg-primary relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-[500px] h-[400px] glow-purple opacity-15 blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
                {/* Header */}
                <div className="mb-16 reveal-hidden">
                    <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-mono text-accent-amber tracking-widest uppercase">03 — Projects</span>
                        <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-accent-amber/40 to-transparent" />
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                        <div>
                            <h2 className="font-display text-4xl lg:text-5xl font-black text-text-primary tracking-tight">
                                Featured Work
                            </h2>
                            <p className="text-text-secondary mt-3 max-w-lg text-base">
                                Real-world applications built from scratch — each one solving a genuine problem.
                            </p>
                        </div>
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-border-subtle text-text-secondary font-mono text-xs hover:border-border-medium hover:text-text-primary transition-all whitespace-nowrap">

                            <GitHubIcon />
                            All on GitHub
                        </a>
                    </div>
                </div>

                {/* Project cards */}
                <div className="space-y-6">
                    {projects.map((project, i) => {
                        const isExpanded = expandedId === project.id;

                        return (
                            <div
                                key={project.id}
                                className="project-card rounded-3xl bg-bg-card border border-border-subtle overflow-hidden reveal-hidden"
                                style={{ transitionDelay: `${i * 120}ms`, borderColor: isExpanded ? project.colorBorder : undefined }}>

                                <div className="grid lg:grid-cols-[1.2fr_1fr] gap-0">
                                    {/* Image */}
                                    <div className="relative h-64 lg:h-auto overflow-hidden">
                                        <AppImage
                                            src={project.image}
                                            alt={project.imageAlt}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105" />

                                        <div
                                            className="absolute inset-0"
                                            style={{
                                                background: `linear-gradient(135deg, ${project.colorDim} 0%, rgba(0,0,0,0.5) 100%)`
                                            }} />

                                        {/* Status badge */}
                                        <div className="absolute top-4 left-4">
                                            <span
                                                className="px-3 py-1 rounded-full text-xs font-mono font-semibold"
                                                style={{
                                                    background: project.colorDim,
                                                    color: project.color,
                                                    border: `1px solid ${project.colorBorder}`
                                                }}>

                                                {project.status === "Live" ? "🟢" : project.status === "In Progress" ? "🟡" : "💡"}{" "}
                                                {project.status}
                                            </span>
                                        </div>
                                        {/* Category */}
                                        <div className="absolute top-4 right-4">
                                            <span className="px-3 py-1 rounded-full text-xs font-mono bg-black/40 text-text-secondary border border-border-subtle">
                                                {project.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-8 flex flex-col justify-between">
                                        <div>
                                            <h3 className="font-display text-2xl font-black text-text-primary tracking-tight mb-2">
                                                {project.title}
                                            </h3>
                                            <p className="text-sm font-mono mb-3" style={{ color: project.color }}>
                                                {project.tagline}
                                            </p>
                                            <p className="text-text-secondary text-sm leading-relaxed mb-4">
                                                {isExpanded ? project.longDesc : project.description}
                                            </p>

                                            {/* Metrics */}
                                            <div className="grid grid-cols-3 gap-3 mb-5">
                                                {project.metrics.map((m) =>
                                                    <div
                                                        key={m.label}
                                                        className="p-3 rounded-xl text-center"
                                                        style={{ background: project.colorDim, border: `1px solid ${project.colorBorder}` }}>

                                                        <p className="font-display font-black text-base" style={{ color: project.color }}>
                                                            {m.value}
                                                        </p>
                                                        <p className="text-[10px] font-mono text-text-muted mt-0.5">{m.label}</p>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Tech stack */}
                                            <div className="flex flex-wrap gap-1.5 mb-5">
                                                {project.tech.map((t) =>
                                                    <span
                                                        key={t}
                                                        className="px-2 py-0.5 rounded-md text-[11px] font-mono"
                                                        style={{
                                                            background: "rgba(255,255,255,0.04)",
                                                            border: "1px solid rgba(255,255,255,0.08)",
                                                            color: "var(--text-secondary)"
                                                        }}>

                                                        {t}
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Actions */}
                                        <div className="flex items-center gap-3">
                                            {project.links.map((link) =>
                                                <a
                                                    key={link.label}
                                                    href={link.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all duration-200 hover:-translate-y-0.5"
                                                    style={
                                                        link.icon === "demo" ?
                                                            {
                                                                background: project.color,
                                                                color: "#0D0D0F"
                                                            } :
                                                            {
                                                                border: "1px solid var(--border-medium)",
                                                                color: "var(--text-secondary)"
                                                            }
                                                    }>

                                                    {link.icon === "github" ? <GitHubIcon /> : <ExternalIcon />}
                                                    {link.label}
                                                </a>
                                            )}
                                            <button
                                                onClick={() => setExpandedId(isExpanded ? null : project.id)}
                                                className="ml-auto text-xs font-mono text-text-muted hover:text-text-secondary transition-colors">

                                                {isExpanded ? "Show less ↑" : "Read more ↓"}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>);

                    })}
                </div>
            </div>
        </section>);

}