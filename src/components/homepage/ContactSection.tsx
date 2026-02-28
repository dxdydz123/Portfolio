"use client";

import { useEffect, useRef, useState } from "react";

const socialLinks = [
    {
        name: "GitHub",
        handle: "@dxdydz123",
        href: "https://github.com/dxdydz123",
        color: "#F1F0EE",
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
        ),
    },
    {
        name: "LinkedIn",
        handle: "Aman Baliyan",
        href: "https://www.linkedin.com/in/aman-baliyan-7804a2205/",
        color: "#60A5FA",
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
        ),
    },
    {
        name: "LeetCode",
        handle: "baliyanaman6",
        href: "https://leetcode.com/u/baliyanaman6/",
        color: "#F59E0B",
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
            </svg>
        ),
    },

];

interface FormState {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export default function ContactSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const [form, setForm] = useState<FormState>({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        if (!sectionRef.current) return;
        const elements = sectionRef.current.querySelectorAll(".reveal-hidden, .reveal-left, .reveal-right");
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        setError(null);

        try {
            const response = await fetch("https://formspree.io/f/mbdabqvw", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            if (response.ok) {
                setSubmitting(false);
                setSubmitted(true);
            } else {
                const data = await response.json();
                setError(data.error || "Something went wrong. Please try again.");
                setSubmitting(false);
            }
        } catch (err) {
            setError("Failed to connect. Please check your internet.");
            setSubmitting(false);
        }
    };

    return (
        <section id="contact" ref={sectionRef} className="py-24 lg:py-32 bg-bg-secondary relative overflow-hidden">
            {/* Ambient glows */}
            <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] glow-amber opacity-20 blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
                {/* Header */}
                <div className="mb-16 text-center reveal-hidden">
                    <div className="flex items-center justify-center gap-3 mb-3">
                        <div className="h-px w-16 bg-gradient-to-r from-transparent to-accent-amber/40" />
                        <span className="text-xs font-mono text-accent-amber tracking-widest uppercase">05 — Contact</span>
                        <div className="h-px w-16 bg-gradient-to-l from-transparent to-accent-amber/40" />
                    </div>
                    <h2 className="font-display text-4xl lg:text-5xl font-black text-text-primary tracking-tight">
                        Let&apos;s Connect
                    </h2>
                    <p className="text-text-secondary mt-3 max-w-lg mx-auto text-base">
                        I&apos;m actively seeking software engineering roles. If you&apos;re building something exciting,
                        I&apos;d love to talk.
                    </p>
                </div>

                <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 items-start">

                    {/* Left: Info */}
                    <div className="reveal-left">
                        {/* Availability card */}
                        <div className="p-6 rounded-3xl bg-accent-green/5 border border-accent-green/20 mb-6">
                            <div className="flex items-center gap-3 mb-3">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75" />
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-green" />
                                </span>
                                <span className="font-display font-bold text-accent-green">Available for opportunities</span>
                            </div>
                            <p className="text-sm text-text-muted leading-relaxed">
                                Looking for full-time software engineering roles, internships, or freelance projects.
                                Response time: within 24 hours.
                            </p>
                        </div>

                        {/* Contact details */}
                        <div className="space-y-4 mb-8">
                            <a
                                href="mailto:baliyanaman6@gmail.com"
                                className="flex items-center gap-4 p-4 rounded-2xl bg-bg-card border border-border-subtle hover:border-accent-amber/30 transition-all duration-200 group"
                            >
                                <div className="w-10 h-10 rounded-xl bg-accent-amber/10 flex items-center justify-center">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                        <polyline points="22,6 12,13 2,6" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-xs font-mono text-text-muted">Email</p>
                                    <p className="text-sm font-display font-semibold text-text-primary group-hover:text-accent-amber transition-colors">
                                        baliyanaman6@gmail.com
                                    </p>
                                </div>
                            </a>

                            <div className="flex items-center gap-4 p-4 rounded-2xl bg-bg-card border border-border-subtle">
                                <div className="w-10 h-10 rounded-xl bg-accent-blue/10 flex items-center justify-center">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="2">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-xs font-mono text-text-muted">Location</p>
                                    <p className="text-sm font-display font-semibold text-text-primary">
                                        India · Open to Remote & Relocation
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Social links */}
                        <div>
                            <p className="text-xs font-mono text-text-muted uppercase tracking-wider mb-4">Find me on</p>
                            <div className="grid grid-cols-2 gap-3">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 p-3 rounded-xl bg-bg-card border border-border-subtle hover:border-border-medium transition-all duration-200 hover:-translate-y-0.5 group"
                                    >
                                        <span style={{ color: social.color }} className="transition-colors">
                                            {social.icon}
                                        </span>
                                        <div>
                                            <p className="text-xs font-display font-semibold text-text-primary">{social.name}</p>
                                            <p className="text-[10px] font-mono text-text-muted">{social.handle}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="reveal-right">
                        {submitted ? (
                            <div className="flex flex-col items-center justify-center h-full min-h-[400px] p-8 rounded-3xl bg-bg-card border border-accent-green/20 text-center">
                                <div className="w-16 h-16 rounded-full bg-accent-green/10 flex items-center justify-center text-3xl mb-4">
                                    ✅
                                </div>
                                <h3 className="font-display font-black text-xl text-text-primary mb-2">
                                    Message Sent!
                                </h3>
                                <p className="text-text-muted text-sm">
                                    Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                                </p>
                                <button
                                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                                    className="mt-6 px-5 py-2 rounded-xl border border-border-subtle text-text-secondary font-mono text-xs hover:border-border-medium transition-colors"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form
                                onSubmit={handleSubmit}
                                className="p-8 rounded-3xl bg-bg-card border border-border-subtle space-y-5"
                            >
                                {error && (
                                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-mono">
                                        ⚠️ {error}
                                    </div>
                                )}
                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-xs font-mono text-text-muted uppercase tracking-wider mb-2">
                                            Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={form.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="Recruiter Name"
                                            className="input-field w-full px-4 py-3 rounded-xl text-sm font-sans"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-mono text-text-muted uppercase tracking-wider mb-2">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="recruiter@company.com"
                                            className="input-field w-full px-4 py-3 rounded-xl text-sm font-sans"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-mono text-text-muted uppercase tracking-wider mb-2">
                                        Subject *
                                    </label>
                                    <select
                                        name="subject"
                                        value={form.subject}
                                        onChange={handleChange}
                                        required
                                        className="input-field w-full px-4 py-3 rounded-xl text-sm font-sans appearance-none cursor-pointer"
                                    >
                                        <option value="" disabled>Select a topic...</option>
                                        <option value="full-time">Full-time Opportunity</option>
                                        <option value="internship">Internship Offer</option>
                                        <option value="freelance">Freelance Project</option>
                                        <option value="collaboration">Collaboration</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs font-mono text-text-muted uppercase tracking-wider mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        placeholder="Tell me about the role, the team, or what you're building..."
                                        className="input-field w-full px-4 py-3 rounded-xl text-sm font-sans resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={submitting}
                                    className="w-full py-4 rounded-xl bg-accent-amber text-bg-primary font-display font-bold text-sm flex items-center justify-center gap-2 hover:bg-yellow-400 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-amber-glow disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                                >
                                    {submitting ? (
                                        <>
                                            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                            </svg>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                <line x1="22" y1="2" x2="11" y2="13" />
                                                <polygon points="22 2 15 22 11 13 2 9 22 2" />
                                            </svg>
                                            Send Message
                                        </>
                                    )}
                                </button>

                                <p className="text-xs font-mono text-text-muted text-center">
                                    Prefer email? Reach me at{" "}
                                    <a href="mailto:baliyanaman6@gmail.com" className="text-accent-amber hover:underline">
                                        baliyanaman6@gmail.com
                                    </a>
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}