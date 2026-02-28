"use client";

import { useEffect, useRef, useState } from "react";

const dsaTopics = [
    { name: "Arrays & Strings", solved: 85, total: 90, color: "#F59E0B" },
    { name: "Trees & Graphs", solved: 72, total: 85, color: "#60A5FA" },
    { name: "Dynamic Programming", solved: 58, total: 75, color: "#A78BFA" },
    { name: "Linked Lists", solved: 45, total: 50, color: "#34D399" },
    { name: "Stacks & Queues", solved: 40, total: 45, color: "#F87171" },
    { name: "Greedy & Backtracking", solved: 55, total: 65, color: "#FB923C" },
];

const dsaStats = [
    { platform: "LeetCode", problems: "100+", rating: "1680", badge: "Knight", color: "#F59E0B" },

];



function CircularProgress({ value, max, color, size = 80 }: { value: number; max: number; color: string; size?: number }) {
    const [progress, setProgress] = useState(0);
    const ref = useRef<SVGCircleElement>(null);
    const percentage = Math.round((value / max) * 100);
    const radius = (size - 10) / 2;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => setProgress(percentage), 200);
                    }
                });
            },
            { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [percentage]);

    return (
        <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
            <svg width={size} height={size} className="-rotate-90">
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    stroke="rgba(255,255,255,0.05)"
                    strokeWidth="4"
                />
                <circle
                    ref={ref}
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    stroke={color}
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    style={{ transition: "stroke-dashoffset 1s cubic-bezier(0.25, 1, 0.5, 1)" }}
                />
            </svg>
            <span
                className="absolute text-xs font-mono font-bold"
                style={{ color }}
            >
                {progress}%
            </span>
        </div>
    );
}

export default function DSASection() {
    const sectionRef = useRef<HTMLElement>(null);
    const [activeTab, setActiveTab] = useState<"dsa" | "genai">("dsa");

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
        <section id="dsa-genai" ref={sectionRef} className="py-24 lg:py-32 bg-bg-secondary relative overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] glow-purple opacity-15 blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
                {/* Header */}
                <div className="mb-12 reveal-hidden">
                    <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-mono text-accent-amber tracking-widest uppercase">04 — Journey</span>
                        <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-accent-amber/40 to-transparent" />
                    </div>
                    <h2 className="font-display text-4xl lg:text-5xl font-black text-text-primary tracking-tight">
                        DSA & GenAI Journey
                    </h2>
                    <p className="text-text-secondary mt-3 max-w-xl text-base">
                        From competitive programming to the frontier of Generative AI — two parallel tracks of deep learning.
                    </p>
                </div>

                {/* Tab switcher */}
                <div className="flex gap-1 p-1 bg-bg-card border border-border-subtle rounded-2xl w-fit mb-10 reveal-hidden">
                    {(["dsa", "genai"] as const).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-6 py-2.5 rounded-xl text-sm font-display font-semibold transition-all duration-200 ${activeTab === tab
                                ? "bg-accent-amber text-bg-primary" : "text-text-secondary hover:text-text-primary"
                                }`}
                        >
                            {tab === "dsa" ? "🔢 DSA Mastery" : "🤖 GenAI Learning"}
                        </button>
                    ))}
                </div>

                {/* DSA Tab */}
                {activeTab === "dsa" && (
                    <div className="grid lg:grid-cols-[1fr_1.3fr] gap-8">
                        {/* Left: Platform stats */}
                        <div className="space-y-4 reveal-left">
                            <h3 className="font-display font-bold text-lg text-text-primary mb-4">
                                Platform Performance
                            </h3>
                            {dsaStats.map((stat, i) => (
                                <div
                                    key={stat.platform}
                                    className="p-5 rounded-2xl bg-bg-card border border-border-subtle hover:border-border-medium transition-all duration-200 reveal-hidden"
                                    style={{ transitionDelay: `${i * 100}ms` }}
                                >
                                    <div className="flex items-center justify-between mb-3">
                                        <div>
                                            <h4 className="font-display font-bold text-base text-text-primary">
                                                {stat.platform}
                                            </h4>
                                            <p className="text-xs font-mono text-text-muted">{stat.problems} problems solved</p>
                                        </div>
                                        <span
                                            className="px-3 py-1 rounded-full text-xs font-mono font-bold"
                                            style={{
                                                background: `${stat.color}15`,
                                                color: stat.color,
                                                border: `1px solid ${stat.color}30`,
                                            }}
                                        >
                                            {stat.badge}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="flex-1 h-1.5 bg-bg-primary rounded-full overflow-hidden">
                                            <div
                                                className="h-full rounded-full transition-all duration-1000"
                                                style={{
                                                    width: `${(parseInt(stat.rating) / 2000) * 100}%`,
                                                    background: stat.color,
                                                }}
                                            />
                                        </div>
                                        <span className="text-xs font-mono" style={{ color: stat.color }}>
                                            {stat.rating}
                                        </span>
                                    </div>
                                </div>
                            ))}

                            {/* Total count */}
                            <div className="p-5 rounded-2xl bg-accent-amber/5 border border-accent-amber/20">
                                <div className="flex items-center gap-4">
                                    <div>
                                        <p className="font-display font-black text-4xl text-accent-amber">100+</p>
                                        <p className="text-xs font-mono text-text-muted">Total DSA Problems</p>
                                    </div>
                                    <div className="ml-auto text-right">
                                        <p className="text-sm font-display font-semibold text-text-secondary">Across all platforms</p>
                                        <p className="text-xs font-mono text-text-muted">Updated Feb 2026</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Topic breakdown */}
                        <div className="reveal-right">
                            <h3 className="font-display font-bold text-lg text-text-primary mb-6">
                                Topic Mastery
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                {dsaTopics.map((topic, i) => (
                                    <div
                                        key={topic.name}
                                        className="p-4 rounded-2xl bg-bg-card border border-border-subtle flex flex-col items-center text-center reveal-hidden"
                                        style={{ transitionDelay: `${i * 80}ms` }}
                                    >
                                        <CircularProgress
                                            value={topic.solved}
                                            max={topic.total}
                                            color={topic.color}
                                            size={72}
                                        />
                                        <h4 className="font-display font-semibold text-xs text-text-primary mt-3 leading-tight">
                                            {topic.name}
                                        </h4>
                                        <p className="text-[10px] font-mono text-text-muted mt-1">
                                            {topic.solved}/{topic.total}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Consistency note */}
                            <div className="mt-6 p-5 rounded-2xl bg-bg-card border border-border-subtle">
                                <div className="flex items-start gap-3">
                                    <span className="text-xl">🔥</span>
                                    <div>
                                        <h4 className="font-display font-semibold text-sm text-text-primary mb-1">
                                            Daily Practice Habit
                                        </h4>
                                        <p className="text-xs text-text-muted leading-relaxed">
                                            Maintained a consistent streak of solving 2–3 problems daily for 8+ months.
                                            Focus: medium and hard problems in DP, graphs, and trees.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* GenAI Tab */}
                {activeTab === "genai" && (
                    <div className="reveal-hidden">
                        {/* Learning philosophy */}
                        <div className="p-6 rounded-3xl bg-accent-purple/5 border border-accent-purple/20 mb-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-accent-purple/10 flex items-center justify-center text-2xl shrink-0">
                                    🚀
                                </div>
                                <div>
                                    <h3 className="font-display font-bold text-lg text-text-primary mb-2">
                                        Why Generative AI?
                                    </h3>
                                    <p className="text-text-secondary text-sm leading-relaxed">
                                        I believe the next decade of software engineering will be fundamentally shaped by LLMs and
                                        generative systems. I&apos;m not just learning to use AI tools — I&apos;m learning to build them.
                                        My goal: understand the architecture deeply enough to engineer novel applications.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Topic grid */}


                        {/* FinTech connection */}
                        <div className="mt-6 p-5 rounded-2xl bg-accent-amber/5 border border-accent-amber/20">
                            <div className="flex items-center gap-3">
                                <span className="text-xl">💰</span>
                                <div>
                                    <h4 className="font-display font-semibold text-sm text-text-primary">
                                        Applied: FinTech Expense Platform
                                    </h4>
                                    <p className="text-xs text-text-muted mt-0.5">
                                        Building a full-stack application with JWT-based authentication and real-time analytics.
                                    </p>
                                </div>
                                <a
                                    href="#projects"
                                    className="ml-auto text-xs font-mono text-accent-amber hover:underline whitespace-nowrap"
                                >
                                    View Project →
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}