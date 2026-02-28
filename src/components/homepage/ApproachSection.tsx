"use client";

import { useEffect, useRef } from "react";

const steps = [
    {
        number: "01",
        title: "Research & Discovery",
        icon: "🔍",
        color: "#F59E0B",
        colorDim: "rgba(245, 158, 11, 0.08)",
        colorBorder: "rgba(245, 158, 11, 0.2)",
        duration: "1–2 days",
        description:
            "Before writing a single line of code, I immerse myself in the problem domain. I study user needs, analyze competitors, review technical documentation, and identify constraints.",
        deliverables: ["Problem statement", "User personas", "Technical constraints", "Competitive analysis"],
    },
    {
        number: "02",
        title: "System Architecture",
        icon: "🏗️",
        color: "#60A5FA",
        colorDim: "rgba(96, 165, 250, 0.08)",
        colorBorder: "rgba(96, 165, 250, 0.2)",
        duration: "1–2 days",
        description:
            "I design the database schema, API contracts, component hierarchy, and data flow before implementation. Architecture decisions are documented and reviewed.",
        deliverables: ["DB schema design", "API documentation", "Component tree", "State management plan"],
    },
    {
        number: "03",
        title: "Figma Wireframing",
        icon: "🎨",
        color: "#A78BFA",
        colorDim: "rgba(167, 139, 250, 0.08)",
        colorBorder: "rgba(167, 139, 250, 0.2)",
        duration: "1 day",
        description:
            "Every UI is designed in Figma before implementation. Low-fidelity wireframes → high-fidelity mockups with design tokens, spacing systems, and component variants.",
        deliverables: ["Wireframes", "Component library", "Design tokens", "Responsive layouts"],
    },
    {
        number: "04",
        title: "Scalable Implementation",
        icon: "⚡",
        color: "#34D399",
        colorDim: "rgba(52, 211, 153, 0.08)",
        colorBorder: "rgba(52, 211, 153, 0.2)",
        duration: "Iterative",
        description:
            "Feature-by-feature implementation with clean code principles: DRY, SOLID, meaningful naming. Performance optimized from day one — no premature optimization, no technical debt accumulation.",
        deliverables: ["Clean codebase", "Performance metrics", "Error handling", "Code documentation"],
    },
];

const principles = [
    { text: "Write code for the next developer, not just for the compiler", icon: "📖" },
    { text: "Performance is a feature, not an afterthought", icon: "⚡" },
    { text: "Every architectural decision has a reason — document it", icon: "📝" },
    { text: "Ship fast, but ship right — no shortcuts on fundamentals", icon: "🚀" },
];

export default function ApproachSection() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (!sectionRef?.current) return;
        const elements = sectionRef?.current?.querySelectorAll(".reveal-hidden, .reveal-left, .reveal-right");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) entry.target.classList.add("is-visible");
                });
            },
            { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
        );
        elements?.forEach((el) => observer?.observe(el));
        return () => observer?.disconnect();
    }, []);

    return (
        <section id="approach" ref={sectionRef} className="py-24 lg:py-32 bg-bg-primary relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] glow-amber opacity-10 blur-3xl pointer-events-none" />
            <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
                {/* Header */}
                <div className="mb-16 reveal-hidden">
                    <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-mono text-accent-amber tracking-widest uppercase">04 — Process</span>
                        <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-accent-amber/40 to-transparent" />
                    </div>
                    <h2 className="font-display text-4xl lg:text-5xl font-black text-text-primary tracking-tight">
                        How I Build
                    </h2>
                    <p className="text-text-secondary mt-3 max-w-xl text-base">
                        A disciplined development workflow that produces maintainable, scalable software — not just working code.
                    </p>
                </div>

                {/* Steps */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
                    {steps?.map((step, i) => (
                        <div
                            key={step?.number}
                            className="relative p-6 rounded-3xl bg-bg-card border border-border-subtle hover:border-border-medium transition-all duration-300 hover:-translate-y-1 reveal-hidden group"
                            style={{ transitionDelay: `${i * 100}ms` }}
                        >
                            {/* Connector line on desktop */}
                            {i < steps?.length - 1 && (
                                <div
                                    className="absolute top-10 -right-3 w-6 h-px hidden lg:block"
                                    style={{ background: `linear-gradient(to right, ${step?.color}40, transparent)` }}
                                />
                            )}

                            {/* Step number + icon */}
                            <div className="flex items-center justify-between mb-5">
                                <span
                                    className="text-xs font-mono font-bold"
                                    style={{ color: step?.color }}
                                >
                                    {step?.number}
                                </span>
                                <div
                                    className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                                    style={{ background: step?.colorDim, border: `1px solid ${step?.colorBorder}` }}
                                >
                                    {step?.icon}
                                </div>
                            </div>

                            {/* Duration badge */}
                            <div
                                className="inline-flex px-2 py-0.5 rounded-md text-[10px] font-mono mb-3"
                                style={{
                                    background: step?.colorDim,
                                    color: step?.color,
                                    border: `1px solid ${step?.colorBorder}`,
                                }}
                            >
                                ⏱ {step?.duration}
                            </div>

                            <h3
                                className="font-display font-black text-base text-text-primary mb-3 group-hover:transition-colors"
                                style={{ color: undefined }}
                            >
                                {step?.title}
                            </h3>
                            <p className="text-xs text-text-muted leading-relaxed mb-4">{step?.description}</p>

                            {/* Deliverables */}
                            <ul className="space-y-1.5">
                                {step?.deliverables?.map((d) => (
                                    <li key={d} className="flex items-center gap-2 text-[11px] font-mono text-text-muted">
                                        <span style={{ color: step?.color }}>✓</span>
                                        {d}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Principles */}
                <div className="p-8 rounded-3xl bg-bg-card border border-border-subtle reveal-hidden">
                    <h3 className="font-display font-bold text-lg text-text-primary mb-6">
                        Engineering Principles
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {principles?.map((p, i) => (
                            <div
                                key={i}
                                className="flex items-start gap-3 p-4 rounded-2xl bg-bg-primary border border-border-subtle hover:border-accent-amber/20 transition-colors"
                            >
                                <span className="text-lg shrink-0">{p?.icon}</span>
                                <p className="text-sm text-text-secondary leading-relaxed">{p?.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}