"use client";

import { useEffect, useState, useRef } from "react";


const roles = [
    "Web Developer",
    "Full Stack Engineer",
    "MERN Stack Specialist",
    "DSA Enthusiast",
    "Problem Solver",
    "Problem Solver",
];

const codeLines = [
    { tokens: [{ text: "const ", cls: "code-keyword" }, { text: "aman", cls: "code-variable" }, { text: " = {", cls: "text-text-primary" }] },
    { tokens: [{ text: "  role", cls: "code-variable" }, { text: ": ", cls: "text-text-secondary" }, { text: '"Software Engineer"', cls: "code-string" }, { text: ",", cls: "text-text-secondary" }] },
    { tokens: [{ text: "  stack", cls: "code-variable" }, { text: ": [", cls: "text-text-secondary" }, { text: '"MERN"', cls: "code-string" }, { text: ", ", cls: "text-text-secondary" }, { text: '"C++"', cls: "code-string" }, { text: ", ", cls: "text-text-secondary" }, { text: '"GenAI"', cls: "code-string" }, { text: "],", cls: "text-text-secondary" }] },
    { tokens: [{ text: "  solving", cls: "code-variable" }, { text: ": ", cls: "text-text-secondary" }, { text: '"problems that matter"', cls: "code-string" }, { text: ",", cls: "text-text-secondary" }] },
    { tokens: [{ text: "  open_to", cls: "code-variable" }, { text: ": ", cls: "text-text-secondary" }, { text: '"opportunities"', cls: "code-string" }] },
    { tokens: [{ text: "};", cls: "text-text-primary" }] },
];

const stats = [
    { label: "Projects Built", value: "3+", color: "text-accent-amber" },
    { label: "DSA Problems", value: "100+", color: "text-accent-blue" },
    { label: "GitHub Commits", value: "23+", color: "text-accent-green" },
];

export default function HeroSection() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [visibleLines, setVisibleLines] = useState(0);
    const [mounted, setMounted] = useState(false);
    const typeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        setMounted(true);
        // Reveal code lines one by one
        const lineTimer = setInterval(() => {
            setVisibleLines((prev) => {
                if (prev >= codeLines.length) {
                    clearInterval(lineTimer);
                    return prev;
                }
                return prev + 1;
            });
        }, 300);
        return () => clearInterval(lineTimer);
    }, []);

    useEffect(() => {
        const currentRole = roles[roleIndex];
        const speed = isDeleting ? 40 : 80;

        typeTimeoutRef.current = setTimeout(() => {
            if (!isDeleting) {
                setDisplayText(currentRole.slice(0, displayText.length + 1));
                if (displayText.length + 1 === currentRole.length) {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                setDisplayText(currentRole.slice(0, displayText.length - 1));
                if (displayText.length === 0) {
                    setIsDeleting(false);
                    setRoleIndex((prev) => (prev + 1) % roles.length);
                }
            }
        }, speed);

        return () => {
            if (typeTimeoutRef.current) clearTimeout(typeTimeoutRef.current);
        };
    }, [displayText, isDeleting, roleIndex]);

    if (!mounted) return null;

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center overflow-hidden bg-bg-primary"
        >
            {/* Ambient background glows */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] glow-amber opacity-40 blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] glow-blue opacity-30 blur-3xl" />
                <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] glow-purple opacity-20 blur-3xl" />
                {/* Grid overlay */}
                <div className="absolute inset-0 grid-bg opacity-100" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16 w-full">
                <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">

                    {/* Left: Text content */}
                    <div className="flex flex-col justify-center">
                        {/* Status badge */}
                        <div
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent-green/20 bg-accent-green/5 mb-8 w-fit animate-fade-in-up"
                            style={{ animationDelay: "0ms" }}
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-green" />
                            </span>
                            <span className="text-xs font-mono text-accent-green font-medium tracking-wider">
                                Open to opportunities · Feb 2026
                            </span>
                        </div>

                        {/* Name */}
                        <div
                            className="animate-fade-in-up"
                            style={{ animationDelay: "100ms", opacity: 0 }}
                        >
                            <p className="text-sm font-mono text-text-secondary tracking-widest uppercase mb-2">
                                Hi, I&apos;m
                            </p>
                            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.0] mb-3">
                                <span className="text-text-primary">Aman</span>
                                <br />
                                <span className="gradient-text-amber">Baliyan</span>
                            </h1>
                        </div>

                        {/* Typewriter role */}
                        <div
                            className="flex items-center gap-2 mb-6 h-8 animate-fade-in-up"
                            style={{ animationDelay: "200ms", opacity: 0 }}
                        >
                            <span className="text-text-secondary font-mono text-sm">&gt;</span>
                            <span className="text-lg font-display font-semibold text-text-primary">
                                {displayText}
                            </span>
                            <span className="inline-block w-0.5 h-5 bg-accent-amber animate-blink-cursor" />
                        </div>

                        {/* Description */}
                        <p
                            className="text-text-secondary text-base leading-relaxed max-w-lg mb-8 animate-fade-in-up"
                            style={{ animationDelay: "300ms", opacity: 0 }}
                        >
                            Web Developer at Candid Optronix. Building scalable, high-performance solutions
                            using modern full stack technologies like React, Next.js, and Node.js.
                            Passionate about solving complex challenges and enhancing user experience.
                        </p>

                        {/* Stats row */}
                        <div
                            className="flex gap-6 mb-10 animate-fade-in-up"
                            style={{ animationDelay: "400ms", opacity: 0 }}
                        >
                            {stats.map((stat) => (
                                <div key={stat.label} className="flex flex-col">
                                    <span className={`font-display text-2xl font-black ${stat.color}`}>
                                        {stat.value}
                                    </span>
                                    <span className="text-xs text-text-muted font-mono">{stat.label}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA buttons */}
                        <div
                            className="flex flex-wrap gap-4 animate-fade-in-up"
                            style={{ animationDelay: "500ms", opacity: 0 }}
                        >
                            <a
                                href="#projects"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-accent-amber text-bg-primary font-display font-bold text-sm rounded-xl hover:bg-yellow-400 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-amber-glow"
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.11 11a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                                View Projects
                            </a>
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 px-6 py-3 border border-border-medium text-text-primary font-display font-semibold text-sm rounded-xl hover:border-accent-amber/50 hover:bg-accent-amber/5 transition-all duration-200 hover:-translate-y-0.5"
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                                Get in Touch
                            </a>
                            <a
                                href="https://github.com/dxdydz123"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-3 border border-border-subtle text-text-secondary font-mono text-sm rounded-xl hover:border-border-medium hover:text-text-primary transition-all duration-200"
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                                GitHub
                            </a>
                        </div>
                    </div>

                    {/* Right: Floating visual elements */}
                    <div className="relative hidden lg:flex items-center justify-center h-[580px]">

                        {/* Main code card */}
                        <div
                            className="absolute top-8 right-0 w-[340px] glass rounded-2xl p-5 animate-float-gentle shadow-glass border border-border-subtle"
                            style={{ animationDelay: "0s" }}
                        >
                            {/* Window chrome */}
                            <div className="flex items-center gap-1.5 mb-4">
                                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                                <span className="ml-2 text-xs font-mono text-text-muted">profile.ts</span>
                            </div>
                            {/* Code lines */}
                            <div className="space-y-1">
                                {codeLines.map((line, i) => (
                                    <div
                                        key={i}
                                        className={`flex font-mono text-xs leading-relaxed transition-all duration-300 ${i < visibleLines ? "opacity-100" : "opacity-0"
                                            }`}
                                        style={{ transitionDelay: `${i * 80}ms` }}
                                    >
                                        <span className="text-text-muted mr-3 select-none w-4 text-right">{i + 1}</span>
                                        <span>
                                            {line.tokens.map((token, j) => (
                                                <span key={j} className={token.cls}>{token.text}</span>
                                            ))}
                                        </span>
                                    </div>
                                ))}
                                {visibleLines >= codeLines.length && (
                                    <div className="flex font-mono text-xs">
                                        <span className="text-text-muted mr-3 select-none w-4 text-right">{codeLines.length + 1}</span>
                                        <span className="inline-block w-1.5 h-4 bg-accent-amber animate-blink-cursor" />
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Stack badge */}
                        <div
                            className="absolute top-1/2 left-0 -translate-y-1/2 glass rounded-xl p-4 animate-float-reverse shadow-glass border border-accent-amber/10"
                            style={{ animationDelay: "1s" }}
                        >
                            <p className="text-xs font-mono text-text-muted mb-3 uppercase tracking-wider">Tech Stack</p>
                            <div className="flex flex-wrap gap-1.5 max-w-[160px]">
                                {["React", "Node.js", "MongoDB", "C++", "Redux", "Tailwind", "Express", "GenAI"].map((tech) => (
                                    <span
                                        key={tech}
                                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-accent-amber/10 text-accent-amber border border-accent-amber/20"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* DSA stat card */}
                        <div
                            className="absolute bottom-16 right-8 glass rounded-xl p-4 animate-float-slow shadow-glass border border-accent-blue/10"
                            style={{ animationDelay: "0.5s" }}
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="2">
                                        <polyline points="16 18 22 12 16 6" />
                                        <polyline points="8 6 2 12 8 18" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-2xl font-display font-black text-accent-blue">100+</p>
                                    <p className="text-xs font-mono text-text-muted">DSA Problems</p>
                                </div>
                            </div>
                        </div>

                        {/* University badge */}
                        <div
                            className="absolute bottom-4 left-8 glass rounded-xl px-4 py-3 animate-float-gentle shadow-glass border border-accent-purple/10"
                            style={{ animationDelay: "2s" }}
                        >
                            <p className="text-xs font-mono text-accent-purple">🎓 B.Tech IT · 2025</p>
                            <p className="text-xs text-text-muted font-mono mt-0.5">Continuing · Indraprastha Eng. College</p>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in-up" style={{ animationDelay: "800ms", opacity: 0 }}>
                    <span className="text-xs font-mono text-text-muted tracking-widest uppercase">Scroll</span>
                    <div className="w-px h-12 bg-gradient-to-b from-text-muted to-transparent" />
                </div>
            </div>
        </section>
    );
}