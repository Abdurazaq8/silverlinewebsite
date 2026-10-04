"use client";

import Link from "next/link";
import { rawProjects } from "@/lib/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CloudImage from "@/components/CloudImage";
import { MapPin, Calendar, ArrowUpRight, Images } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import Counter from "@/components/Counter";
import { getHeroPosterUrl, getHeroVideoUrl } from "@/lib/cloudinary";

const categories = ["All", ...Array.from(new Set(rawProjects.map((p) => p.category)))];

export default function ProjectsClient() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects =
        activeCategory === "All"
            ? rawProjects
            : rawProjects.filter((p) => p.category === activeCategory);

    const heroPoster = getHeroPosterUrl() || "/construction_hero_modern_site.png";
    const heroVideo = getHeroVideoUrl();

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Header */}
            <section className="relative pt-32 pb-20 bg-primary overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-primary/90 z-10" />
                    {heroVideo ? (
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="metadata"
                            poster={heroPoster}
                            className="w-full h-full object-cover"
                        >
                            <source src={heroVideo} type="video/mp4" />
                        </video>
                    ) : null}
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
                    <div className="max-w-3xl">
                        <Reveal width="100%">
                            <span className="inline-block text-secondary font-semibold text-xs uppercase tracking-widest mb-3">
                                Portfolio
                            </span>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-5">
                                Engineering & <br />
                                Construction Projects
                            </h1>
                        </Reveal>
                        <Reveal width="100%" delay={0.15}>
                            <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
                                Explore our track record of civil, industrial, commercial, and renewable energy infrastructure delivered across Zambia.
                            </p>
                        </Reveal>
                    </div>

                    {/* Stats Strip */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-10 border-t border-white/10">
                        {[
                            {
                                value: rawProjects.filter((p) => p.status === "complete").length,
                                suffix: "+",
                                label: "Completed Projects",
                            },
                            { value: 4, suffix: "+", label: "Years Experience" },
                            { value: 8, suffix: "", label: "Service Categories" },
                            { value: 100, suffix: "%", label: "Client Satisfaction" },
                        ].map((stat, idx) => (
                            <Reveal key={idx} delay={0.2 + idx * 0.08} width="100%">
                                <div>
                                    <p className="text-3xl md:text-4xl font-extrabold text-white mb-1">
                                        <Counter value={stat.value} suffix={stat.suffix} />
                                    </p>
                                    <p className="text-gray-400 text-xs uppercase tracking-wider">{stat.label}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Category Filter */}
            <section className="py-6 bg-white border-b border-gray-200 sticky top-0 z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap gap-2.5 justify-center items-center">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-sm ${
                                    activeCategory === category
                                        ? "bg-primary text-white shadow-md shadow-primary/25 scale-105"
                                        : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900"
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project, index) => (
                            <Reveal key={project.id} width="100%" delay={index * 0.06} className="h-full">
                                <Link
                                    href={`/projects/${project.slug}`}
                                    className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-200/80"
                                >
                                    {/* Image Container */}
                                    <div className="relative h-64 w-full overflow-hidden bg-gray-100">
                                        <CloudImage
                                            src={project.localImage}
                                            alt={project.title}
                                            fill
                                            crop="fill"
                                            loading="lazy"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            format="auto"
                                        />

                                        {/* Category Badge */}
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3.5 py-1.5 bg-primary text-white text-[11px] font-bold rounded-full uppercase tracking-wider shadow-sm">
                                                {project.category}
                                            </span>
                                        </div>

                                        {/* Photo Count Indicator */}
                                        {project.gallery && project.gallery.length > 1 && (
                                            <div className="absolute top-4 right-4">
                                                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-black/65 text-white text-[11px] font-medium rounded-full backdrop-blur-sm shadow-sm">
                                                    <Images size={12} />
                                                    {project.gallery.length} Photos
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Content Card */}
                                    <div className="p-6 flex flex-col flex-grow justify-between">
                                        <div>
                                            <div className="flex items-center justify-between gap-2 mb-3 text-xs">
                                                <span className="font-semibold text-secondary uppercase tracking-wider">
                                                    {project.client}
                                                </span>
                                                <span
                                                    className={`inline-flex items-center px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm animate-pulse ${
                                                        project.status === "ongoing"
                                                            ? "bg-amber-500 text-white shadow-amber-500/30"
                                                            : "bg-emerald-600 text-white shadow-emerald-600/30"
                                                    }`}
                                                >
                                                    {project.status === "ongoing" ? "Active" : "Completed"}
                                                </span>
                                            </div>

                                            <h2 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors leading-snug mb-3">
                                                {project.title}
                                            </h2>

                                            <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 mb-4">
                                                {project.description}
                                            </p>
                                        </div>

                                        <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                                            <span className="flex items-center gap-1 truncate max-w-[180px]">
                                                <MapPin size={13} className="shrink-0 text-gray-400" />
                                                <span className="truncate">{project.location}</span>
                                            </span>

                                            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white font-bold text-xs transition-all duration-300">
                                                <span>View Case Study</span>
                                                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </Reveal>
                        ))}
                    </div>

                    {filteredProjects.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-gray-500">No projects found in this category.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Professional Inquiry CTA */}
            <section className="py-16 bg-primary text-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                        Plan Your Next Project With Silverline Engineering
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto text-base mb-8">
                        Our engineering team provides comprehensive consulting, structural design, civil contracting, and turnkey project delivery.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <Link
                            href="/contact"
                            className="px-8 py-3.5 bg-secondary text-white font-bold text-sm rounded-full hover:bg-orange-600 transition-colors shadow-md"
                        >
                            Request Technical Consultation
                        </Link>
                        <a
                            href="tel:+260966626579"
                            className="px-8 py-3.5 bg-white/10 text-white font-medium text-sm rounded-full hover:bg-white/20 transition-colors border border-white/20"
                        >
                            Call: +260 966 626579
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
