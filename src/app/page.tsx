import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/homepage/HeroSection";
import AboutSection from "@/components/homepage/AboutSection";
import SkillsSection from "@/components/homepage/SkillsSection";
import ProjectsSection from "@/components/homepage/ProjectsSection";
import ApproachSection from "@/components/homepage/ApproachSection";
import ContactSection from "@/components/homepage/ContactSection";

export const metadata: Metadata = {
    title: "Aman — Web Developer | MERN Stack | DSA",
    description:
        "Web Developer at Candid Optronix. Building scalable, high-performance solutions using modern full stack technologies like React, Next.js, and Node.js.",
    keywords: [
        "Aman",
        "Web Developer",
        "Candid Optronix",
        "MERN Stack Developer",
        "React Developer",
        "Node.js",
        "DSA",
        "PostgreSQL",
        "Portfolio",
        "Full Stack Developer",
    ],
    openGraph: {
        title: "Aman — Web Developer Portfolio",
        description:
            "MERN Stack · DSA · 100+ Problems · Web Developer at Candid Optronix",
        type: "website",
    },
};

export default function Homepage() {
    return (
        <div className="min-h-screen bg-bg-primary text-text-primary overflow-x-hidden">
            {/* Navigation */}
            <Header />

            {/* Main content */}
            <main>
                {/* 1. Hero — Floating elements pattern */}
                <HeroSection />

                {/* Divider */}
                <div className="section-divider" />

                {/* 2. About — Personal story + timeline */}
                <AboutSection />

                {/* Divider */}
                <div className="section-divider" />

                {/* 3. Skills — Bento grid with skill bars */}
                <SkillsSection />

                {/* Divider */}
                <div className="section-divider" />

                {/* 4. Projects — Featured work cards */}
                <ProjectsSection />

                {/* Divider */}
                <div className="section-divider" />

                {/* 5. DSA + GenAI Journey — Tabbed section */}


                {/* Divider */}
                <div className="section-divider" />

                {/* 6. Development Approach — Process timeline */}
                <ApproachSection />

                {/* Divider */}
                <div className="section-divider" />

                {/* 7. Contact — Form + social links */}
                <ContactSection />
            </main>

            {/* Footer — Pattern 4: Superhuman Minimal */}
            <Footer />
        </div>
    );
}