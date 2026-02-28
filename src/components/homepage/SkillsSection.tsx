"use client";

import { useEffect, useRef } from "react";

const skillCategories = [
    {
        id: "languages",
        label: "Languages",
        icon: "⌨️",
        color: "#F59E0B",
        colorDim: "rgba(245, 158, 11, 0.1)",
        colorBorder: "rgba(245, 158, 11, 0.2)",
        skills: [
            { name: "JavaScript", level: 90, detail: "ES6+, Async, Patterns" },
            { name: "C++", level: 88, detail: "DSA, Competitive Programming" },
            { name: "Python", level: 82, detail: "Scripting, Automation" },
            { name: "Java", level: 75, detail: "Core Java, OOPs" },
        ],
    },
    {
        id: "frontend",
        label: "Frontend",
        icon: "🎨",
        color: "#60A5FA",
        colorDim: "rgba(96, 165, 250, 0.1)",
        colorBorder: "rgba(96, 165, 250, 0.2)",
        skills: [
            { name: "React.js", level: 92, detail: "Hooks, Performance, Context" },
            { name: "Next.js", level: 88, detail: "App Router, SSR/SSG" },
            { name: "TypeScript", level: 85, detail: "Strict Typing, Interfaces" },
            { name: "Tailwind CSS", level: 90, detail: "Modern Layouts, UI/UX" },
            { name: "Material-UI", level: 80, detail: "Component Libraries" },
        ],
    },
    {
        id: "backend",
        label: "Backend",
        icon: "⚙️",
        color: "#34D399",
        colorDim: "rgba(52, 211, 153, 0.1)",
        colorBorder: "rgba(52, 211, 153, 0.2)",
        skills: [
            { name: "Node.js", level: 88, detail: "Runtime, Event Loop" },
            { name: "Express.js", level: 87, detail: "Middleware, Routing" },
            { name: "MongoDB", level: 85, detail: "NoSQL, Aggregation" },
            { name: "PostgreSQL", level: 82, detail: "Relational, SQL" },
            { name: "GraphQL", level: 78, detail: "Queries, Mutations" },
        ],
    },
    {
        id: "genai",
        label: "Gen AI",
        icon: "🤖",
        color: "#A78BFA",
        colorDim: "rgba(167, 139, 250, 0.1)",
        colorBorder: "rgba(167, 139, 250, 0.2)",
        skills: [
            { name: "JWT Auth", level: 85, detail: "Secure Communication" },
            { name: "Prisma", level: 82, detail: "ORM, Type Safety" },
            { name: "Redux", level: 80, detail: "State Management" },
            { name: "Git/GitHub", level: 88, detail: "Version Control" },
        ],
    },
];

const tools = [
    { name: "Git & GitHub", icon: "🔧" },
    { name: "Figma", icon: "🎨" },
    { name: "VS Code", icon: "💻" },
    { name: "Postman", icon: "📡" },
    { name: "Linux/WSL", icon: "🐧" },
    { name: "Docker (Learning)", icon: "🐳" },
];

interface SkillBarProps {
    name: string;
    level: number;
    detail: string;
    color: string;
}

function SkillBar({ name, level, detail, color }: SkillBarProps) {
    const barRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!barRef.current) return;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && barRef.current) {
                        barRef.current.style.width = `${level}%`;
                    }
                });
            },
            { threshold: 0.5 }
        );
        observer.observe(barRef.current);
        return () => observer.disconnect();
    }, [level]);

    return (
        <div className="group">
            <div className="flex justify-between items-baseline mb-1.5">
                <div>
                    <span className="text-sm font-display font-semibold text-text-primary group-hover:text-white transition-colors">
                        {name}
                    </span>
                    <span className="text-xs font-mono text-text-muted ml-2">{detail}</span>
                </div>
                <span className="text-xs font-mono" style={{ color }}>{level}%</span>
            </div>
            <div className="h-1.5 bg-bg-primary rounded-full overflow-hidden">
                <div
                    ref={barRef}
                    className="h-full rounded-full transition-all duration-1000 ease-out"
                    style={{
                        width: "0%",
                        background: `linear-gradient(to right, ${color}99, ${color})`,
                        transitionTimingFunction: "cubic-bezier(0.25, 1, 0.5, 1)",
                    }}
                />
            </div>
        </div>
    );
}

export default function SkillsSection() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (!sectionRef.current) return;
        const elements = sectionRef.current.querySelectorAll(".reveal-hidden");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) entry.target.classList.add("is-visible");
                });
            },
            { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
        );
        elements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section id="skills" ref={sectionRef} className="py-24 lg:py-32 bg-bg-secondary relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
            <div className="absolute top-1/2 left-0 w-[400px] h-[400px] glow-blue opacity-15 blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
                {/* Header */}
                <div className="mb-16 reveal-hidden">
                    <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-mono text-accent-amber tracking-widest uppercase">02 — Skills</span>
                        <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-accent-amber/40 to-transparent" />
                    </div>
                    <h2 className="font-display text-4xl lg:text-5xl font-black text-text-primary tracking-tight">
                        Technical Arsenal
                    </h2>
                    <p className="text-text-secondary mt-3 max-w-lg text-base">
                        A full-stack skill set built through real projects, competitive programming, and continuous learning.
                    </p>
                </div>

                {/* Bento grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
                    {skillCategories.map((cat, ci) => (
                        <div
                            key={cat.id}
                            className="p-6 rounded-3xl bg-bg-card border border-border-subtle hover:border-border-medium transition-all duration-300 reveal-hidden group"
                            style={{ transitionDelay: `${ci * 100}ms` }}
                        >
                            {/* Category header */}
                            <div className="flex items-center gap-3 mb-6">
                                <div
                                    className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                                    style={{ background: cat.colorDim, border: `1px solid ${cat.colorBorder}` }}
                                >
                                    {cat.icon}
                                </div>
                                <div>
                                    <h3
                                        className="font-display font-bold text-base"
                                        style={{ color: cat.color }}
                                    >
                                        {cat.label}
                                    </h3>
                                    <p className="text-xs font-mono text-text-muted">
                                        {cat.skills.length} technologies
                                    </p>
                                </div>
                            </div>

                            {/* Skill bars */}
                            <div className="space-y-4">
                                {cat.skills.map((skill) => (
                                    <SkillBar
                                        key={skill.name}
                                        name={skill.name}
                                        level={skill.level}
                                        detail={skill.detail}
                                        color={cat.color}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Tools row */}
                <div className="p-6 rounded-3xl bg-bg-card border border-border-subtle reveal-hidden">
                    <h3 className="font-display font-bold text-sm text-text-secondary uppercase tracking-wider mb-4">
                        Tools & Environment
                    </h3>
                    <div className="flex flex-wrap gap-3">
                        {tools.map((tool) => (
                            <div
                                key={tool.name}
                                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-bg-primary border border-border-subtle hover:border-border-medium transition-colors"
                            >
                                <span className="text-sm">{tool.icon}</span>
                                <span className="text-sm font-display font-medium text-text-secondary">
                                    {tool.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}