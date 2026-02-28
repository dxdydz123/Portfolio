"use client";

import { useState, useEffect } from "react";


const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Journey", href: "#dsa-genai" },
    { label: "Process", href: "#approach" },
    { label: "Contact", href: "#contact" },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (href: string) => {
        setMenuOpen(false);
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-bg-primary/90 backdrop-blur-xl border-b border-border-subtle" : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
                {/* Logo */}
                <button
                    onClick={() => handleNavClick("#hero")}
                    className="flex items-center gap-2 group"
                    aria-label="Back to top"
                >
                    <div className="w-8 h-8 rounded-lg bg-accent-amber flex items-center justify-center">
                        <span className="text-bg-primary font-display font-black text-sm">A</span>
                    </div>
                    <span className="font-display font-bold text-text-primary text-sm hidden sm:block">
                        Aman<span className="text-accent-amber">.</span>
                    </span>
                </button>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <button
                            key={link.href}
                            onClick={() => handleNavClick(link.href)}
                            className="nav-link px-4 py-2 rounded-xl text-sm font-display font-medium text-text-secondary hover:text-text-primary transition-colors"
                        >
                            {link.label}
                        </button>
                    ))}
                </nav>

                {/* CTA */}
                <div className="hidden md:flex items-center gap-3">
                    <a
                        href="/Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-border-subtle text-text-secondary font-mono text-xs hover:border-accent-amber/40 hover:text-accent-amber transition-all duration-200"
                    >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                        Resume
                    </a>
                    <button
                        onClick={() => handleNavClick("#contact")}
                        className="px-4 py-2 rounded-xl bg-accent-amber text-bg-primary font-display font-bold text-xs hover:bg-yellow-400 transition-all duration-200 hover:-translate-y-0.5"
                    >
                        Hire Me
                    </button>
                </div>

                {/* Mobile menu button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden w-9 h-9rounded-xl border border-border-subtle flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors"
                    aria-label="Toggle menu"
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        {menuOpen ? (
                            <>
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </>
                        ) : (
                            <>
                                <line x1="3" y1="6" x2="21" y2="6" />
                                <line x1="3" y1="12" x2="21" y2="12" />
                                <line x1="3" y1="18" x2="21" y2="18" />
                            </>
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="md:hidden bg-bg-primary/95 backdrop-blur-xl border-b border-border-subtle">
                    <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
                        {navLinks.map((link) => (
                            <button
                                key={link.href}
                                onClick={() => handleNavClick(link.href)}
                                className="text-left px-4 py-3 rounded-xl text-sm font-display font-medium text-text-secondary hover:text-text-primary hover:bg-bg-card transition-all"
                            >
                                {link.label}
                            </button>
                        ))}
                        <div className="flex gap-3 mt-3 pt-3 border-t border-border-subtle">
                            <a
                                href="/Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 text-center px-4 py-2.5 rounded-xl border border-border-subtle text-text-secondary font-mono text-xs hover:border-accent-amber/40 hover:text-accent-amber transition-all"
                            >
                                Resume
                            </a>
                            <button
                                onClick={() => handleNavClick("#contact")}
                                className="flex-1 px-4 py-2.5 rounded-xl bg-accent-amber text-bg-primary font-display font-bold text-xs"
                            >
                                Hire Me
                            </button>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}