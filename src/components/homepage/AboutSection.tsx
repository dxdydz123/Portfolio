"use client";

import { useEffect, useRef } from "react";
import AppImage from "@/components/ui/AppImage";

const traits = [
    {
        icon: "🔬",
        title: "Research First",
        desc: "Every project starts with deep domain research before writing a single line of code.",
        color: "border-accent-amber/20 bg-accent-amber/5",
        textColor: "text-accent-amber"
    },
    {
        icon: "🏗️",
        title: "Architecture Minded",
        desc: "I design scalable system architecture before implementation — Figma wireframes included.",
        color: "border-accent-blue/20 bg-accent-blue/5",
        textColor: "text-accent-blue"
    },
    {
        icon: "⚡",
        title: "Performance Obsessed",
        desc: "Clean code, optimized queries, and minimal re-renders are non-negotiable in my workflow.",
        color: "border-accent-green/20 bg-accent-green/5",
        textColor: "text-accent-green"
    },
    {
        icon: "🧩",
        title: "Problem Solver",
        desc: "100+ LeetCode problems solved. I think algorithmically and design solutions that scale.",
        color: "border-accent-purple/20 bg-accent-purple/5",
        textColor: "text-accent-purple"
    }];


const timeline = [
    { year: "2021", event: "Started B.Tech IT", detail: "Enrolled in Information Technology at Indraprastha Engineering College." },
    { year: "2023", event: "Mastered Full Stack Dev", detail: "Gained proficiency in React, Node.js, and modern web architectures." },
    { year: "2024", event: "College Projects", detail: "Original build of core projects, later redesigned for performance and maintainability." },
    { year: "2025", event: "Web Developer @ Candid Optronix", detail: "Joined to develop and maintain flagship scalable solutions." },
    { year: "2026", event: "FinTech Platform", detail: "Launched full-stack expense management platform with analytics and JWT security." }];


export default function AboutSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const elementsRef = useRef<NodeListOf<Element> | null>(null);

    useEffect(() => {
        if (!sectionRef.current) return;
        elementsRef.current = sectionRef.current.querySelectorAll(".reveal-hidden, .reveal-left, .reveal-right");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                    }
                });
            },
            { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
        );

        elementsRef.current.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section id="about" ref={sectionRef} className="py-24 lg:py-32 bg-bg-primary relative overflow-hidden">
            {/* Ambient glow */}
            <div className="absolute top-0 right-0 w-[600px] h-[400px] glow-amber opacity-20 blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section header */}
                <div className="mb-16 reveal-hidden">
                    <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-mono text-accent-amber tracking-widest uppercase">01 — About</span>
                        <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-accent-amber/40 to-transparent" />
                    </div>
                    <h2 className="font-display text-4xl lg:text-5xl font-black text-text-primary tracking-tight">
                        Who I Am
                    </h2>
                </div>

                {/* Main grid */}
                <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-start">

                    {/* Left: Photo + quick facts */}
                    <div className="reveal-left">
                        <div className="relative">
                            {/* Photo frame */}
                            <div className="relative rounded-3xl overflow-hidden border border-border-subtle aspect-[4/5] max-w-[380px]">
                                <AppImage
                                    src="https://img.rocket.new/generatedImages/rocket_gen_img_1c543bd06-1764924833912.png"
                                    alt="Aman - Web Developer at Candid Optronix"
                                    fill
                                    className="object-cover" />

                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/60 via-transparent to-transparent" />

                                {/* Floating detail card */}
                                <div className="absolute bottom-4 left-4 right-4 glass rounded-xl p-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-accent-amber/20 flex items-center justify-center">
                                            <span className="text-sm">🎯</span>
                                        </div>
                                        <div>
                                            <p className="text-sm font-display font-semibold text-text-primary">
                                                Goal: Full Stack Engineer
                                            </p>
                                            <p className="text-xs font-mono text-text-muted">
                                                Product · Startup · Scale
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative element */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl border border-accent-amber/20 bg-accent-amber/5 -z-10" />
                            <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-xl border border-accent-purple/20 bg-accent-purple/5 -z-10" />
                        </div>

                        {/* Quick facts */}
                        <div className="mt-8 grid grid-cols-2 gap-3">
                            {[
                                { label: "Location", value: "India", icon: "📍" },
                                { label: "Degree", value: "B.Tech IT", icon: "🎓" },
                                { label: "CGPA", value: "8.4 / 10", icon: "📊" },
                                { label: "Grad Year", value: "2025", icon: "🗓️" }].
                                map((fact) =>
                                    <div
                                        key={fact.label}
                                        className="flex items-center gap-2 p-3 rounded-xl bg-bg-card border border-border-subtle">

                                        <span className="text-base">{fact.icon}</span>
                                        <div>
                                            <p className="text-[10px] font-mono text-text-muted uppercase tracking-wider">{fact.label}</p>
                                            <p className="text-sm font-display font-semibold text-text-primary">{fact.value}</p>
                                        </div>
                                    </div>
                                )}
                        </div>
                    </div>

                    {/* Right: Story + timeline */}
                    <div className="reveal-right">
                        <div className="space-y-6 mb-12">
                            <p className="text-text-secondary text-base leading-relaxed">
                                I&apos;m Aman, a Web Developer at Candid Optronix with a passion for
                                building scalable, high-performance web applications. Currently pursuing my
                                B.Tech in Information Technology at Indraprastha Engineering College,
                                I specialize in the MERN stack and modern architectural patterns.
                            </p>
                            <p className="text-text-secondary text-base leading-relaxed">
                                At <strong className="text-text-primary">Candid Optronix</strong>, I lead the
                                development of the company&apos;s flagship website, delivering user-focused features
                                and ensuring optimal performance. My most recent major project is a
                                <strong className="text-text-primary">FinTech Expense Platform</strong> — a
                                complex system featuring JWT authentication, real-time analytics, and
                                multi-profile support.
                            </p>
                            <p className="text-text-secondary text-base leading-relaxed">
                                My approach centers on redesigning and simplifying complex systems.
                                I don&apos;t just build features; I focus on enhancing usability, performance,
                                and maintainability through rigorous research and clean code practices.
                            </p>
                        </div>

                        {/* Trait cards */}
                        <div className="grid grid-cols-2 gap-3 mb-12">
                            {traits.map((trait, i) =>
                                <div
                                    key={trait.title}
                                    className={`p-4 rounded-2xl border ${trait.color} reveal-hidden`}
                                    style={{ transitionDelay: `${i * 100}ms` }}>

                                    <span className="text-xl mb-2 block">{trait.icon}</span>
                                    <h4 className={`font-display font-bold text-sm ${trait.textColor} mb-1`}>
                                        {trait.title}
                                    </h4>
                                    <p className="text-xs text-text-muted leading-relaxed">{trait.desc}</p>
                                </div>
                            )}
                        </div>

                        {/* Timeline */}
                        <div className="relative pl-10">
                            <div className="timeline-line" />
                            {timeline.map((item, i) =>
                                <div
                                    key={item.year}
                                    className={`relative mb-6 last:mb-0 reveal-hidden`}
                                    style={{ transitionDelay: `${i * 120}ms` }}>

                                    {/* Dot */}
                                    <div className="absolute -left-[1.85rem] top-1 w-3 h-3 rounded-full border-2 border-accent-amber bg-bg-primary" />
                                    <div className="flex items-baseline gap-3 mb-1">
                                        <span className="text-xs font-mono text-accent-amber font-bold">{item.year}</span>
                                        <h4 className="text-sm font-display font-semibold text-text-primary">{item.event}</h4>
                                    </div>
                                    <p className="text-xs text-text-muted leading-relaxed">{item.detail}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>);

}