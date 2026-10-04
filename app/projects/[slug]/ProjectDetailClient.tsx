"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ProjectItem } from "@/lib/projects";
import {
    ChevronLeft,
    ChevronRight,
    Maximize2,
    X,
    CheckCircle2,
    ArrowUpRight,
    Building2,
    MapPin,
    Calendar,
    Briefcase,
    ShieldCheck,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectDetailClient({ project }: { project: ProjectItem }) {
    const gallery =
        project.gallery && project.gallery.length > 0 ? project.gallery : [project.localImage];
    const [selectedIdx, setSelectedIdx] = useState(0);
    const [isLightbox, setIsLightbox] = useState(false);

    const activeImage = gallery[selectedIdx] || gallery[0];

    return (
        <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                {/* Multi-Image Gallery */}
                <div className="space-y-3">
                    <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden bg-gray-950 group shadow-md border border-gray-100">
                        <Image
                            key={activeImage}
                            src={activeImage}
                            alt={`${project.title} - Site Photo ${selectedIdx + 1}`}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                            sizes="(max-width: 1200px) 100vw, 1200px"
                            priority
                        />

                        {/* Lightbox Trigger */}
                        <button
                            onClick={() => setIsLightbox(true)}
                            className="absolute bottom-4 right-4 z-10 inline-flex items-center gap-1.5 px-4 py-2 bg-black/75 hover:bg-black text-white rounded-full text-xs font-medium backdrop-blur-sm transition-colors shadow-sm"
                        >
                            <Maximize2 size={13} />
                            <span>View Fullscreen</span>
                        </button>

                        {/* Counter */}
                        <div className="absolute bottom-4 left-4 z-10 px-3.5 py-1.5 bg-black/75 text-white rounded-full text-xs font-mono backdrop-blur-sm shadow-sm">
                            Photo {selectedIdx + 1} of {gallery.length}
                        </div>

                        {/* Navigation Arrows */}
                        {gallery.length > 1 && (
                            <>
                                <button
                                    onClick={() =>
                                        setSelectedIdx((prev) =>
                                            prev === 0 ? gallery.length - 1 : prev - 1
                                        )
                                    }
                                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                                    aria-label="Previous photo"
                                >
                                    <ChevronLeft size={22} />
                                </button>
                                <button
                                    onClick={() =>
                                        setSelectedIdx((prev) =>
                                            prev === gallery.length - 1 ? 0 : prev + 1
                                        )
                                    }
                                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                                    aria-label="Next photo"
                                >
                                    <ChevronRight size={22} />
                                </button>
                            </>
                        )}
                    </div>

                    {/* Thumbnail Bar */}
                    {gallery.length > 1 && (
                        <div className="flex gap-2.5 overflow-x-auto pb-2 pt-1 scrollbar-thin">
                            {gallery.map((img, i) => (
                                <button
                                    key={i}
                                    onClick={() => setSelectedIdx(i)}
                                    className={`relative w-24 sm:w-28 aspect-[16/10] rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                                        selectedIdx === i
                                            ? "border-primary shadow-sm"
                                            : "border-transparent opacity-60 hover:opacity-100"
                                    }`}
                                >
                                    <Image
                                        src={img}
                                        alt={`Thumbnail ${i + 1}`}
                                        fill
                                        className="object-cover"
                                        sizes="112px"
                                    />
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Case Study Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-4">
                    {/* Main Content (8 cols) */}
                    <div className="lg:col-span-8 space-y-10">
                        {/* Project Narrative */}
                        <div>
                            <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                                Project Overview
                            </h2>
                            <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                                {project.overview}
                            </p>
                        </div>

                        {/* Scope of Work */}
                        {project.scope && project.scope.length > 0 && (
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                                    Technical Scope & Deliverables
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {project.scope.map((item, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-start gap-3 p-3.5 rounded-lg bg-gray-50 border border-gray-200/70"
                                        >
                                            <CheckCircle2
                                                size={16}
                                                className="text-secondary shrink-0 mt-0.5"
                                            />
                                            <span className="text-sm text-gray-800 font-medium leading-snug">
                                                {item}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Highlights */}
                        {project.highlights && project.highlights.length > 0 && (
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                                    Engineering Execution & Key Achievements
                                </h3>
                                <ul className="space-y-3">
                                    {project.highlights.map((h, i) => (
                                        <li
                                            key={i}
                                            className="flex items-start gap-3 text-sm text-gray-700"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                                            <span className="leading-relaxed">{h}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Client Testimonial */}
                        {project.testimonial && (
                            <div className="p-6 sm:p-8 rounded-xl bg-gray-50 border-l-4 border-primary">
                                <p className="text-sm sm:text-base text-gray-800 italic leading-relaxed mb-4">
                                    &ldquo;{project.testimonial.quote}&rdquo;
                                </p>
                                <div>
                                    <p className="text-sm font-bold text-gray-900">
                                        {project.testimonial.author}
                                    </p>
                                    <p className="text-xs text-gray-500 font-medium">
                                        {project.testimonial.role}
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Technical Sidebar (4 cols) */}
                    <div className="lg:col-span-4 space-y-6">
                        {/* Project Fact Sheet */}
                        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200/80">
                            <h3 className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-4">
                                Project Specification
                            </h3>
                            <dl className="space-y-4 text-sm divide-y divide-gray-200/60">
                                <div className="pt-2 flex justify-between gap-4">
                                    <dt className="text-gray-500">Client</dt>
                                    <dd className="font-bold text-gray-900 text-right">{project.client}</dd>
                                </div>
                                <div className="pt-3 flex justify-between gap-4">
                                    <dt className="text-gray-500">Location</dt>
                                    <dd className="font-bold text-gray-900 text-right">{project.location}</dd>
                                </div>
                                <div className="pt-3 flex justify-between gap-4">
                                    <dt className="text-gray-500">Sector</dt>
                                    <dd className="font-bold text-gray-900 text-right">{project.category}</dd>
                                </div>
                                <div className="pt-3 flex justify-between gap-4">
                                    <dt className="text-gray-500">Timeline</dt>
                                    <dd className="font-bold text-gray-900 text-right">{project.year}</dd>
                                </div>
                                <div className="pt-3 flex justify-between items-center gap-4">
                                    <dt className="text-gray-500">Status</dt>
                                    <dd>
                                        <span
                                            className={`inline-flex items-center px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm animate-pulse ${
                                                project.status === "ongoing"
                                                    ? "bg-amber-500 text-white shadow-amber-500/30"
                                                    : "bg-emerald-600 text-white shadow-emerald-600/30"
                                            }`}
                                        >
                                            {project.status === "ongoing" ? "Active" : "Completed"}
                                        </span>
                                    </dd>
                                </div>
                                <div className="pt-3 flex justify-between gap-4">
                                    <dt className="text-gray-500">Contractor</dt>
                                    <dd className="font-bold text-gray-900 text-right">Silverline Engineering Ltd</dd>
                                </div>
                            </dl>
                        </div>

                        {/* Inquiry Box */}
                        <div className="bg-primary text-white rounded-2xl p-6 space-y-4 shadow-lg">
                            <h4 className="text-base font-bold">Have an Engineering Project?</h4>
                            <p className="text-xs text-gray-300 leading-relaxed">
                                Connect with our technical team for preliminary consultations, tenders, or site assessments.
                            </p>
                            <div className="space-y-2.5 pt-2">
                                <Link
                                    href="/contact"
                                    className="w-full inline-flex items-center justify-center gap-1.5 px-6 py-3 bg-secondary hover:bg-orange-600 text-white font-bold text-xs rounded-full transition-colors shadow-md"
                                >
                                    <span>Inquire With Our Team</span>
                                    <ArrowUpRight size={14} />
                                </Link>
                                <a
                                    href="tel:+260966626579"
                                    className="w-full inline-flex items-center justify-center gap-1 px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white font-medium text-xs rounded-full transition-colors border border-white/10"
                                >
                                    <span>Call: +260 966 626579</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Lightbox Fullscreen */}
            <AnimatePresence>
                {isLightbox && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
                        onClick={() => setIsLightbox(false)}
                    >
                        <button
                            onClick={() => setIsLightbox(false)}
                            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-20"
                            aria-label="Close fullscreen"
                        >
                            <X size={20} />
                        </button>

                        <div
                            className="relative w-full max-w-6xl max-h-[85vh] aspect-[16/10]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={activeImage}
                                alt={project.title}
                                fill
                                className="object-contain"
                                sizes="100vw"
                            />
                        </div>

                        {gallery.length > 1 && (
                            <>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSelectedIdx((prev) =>
                                            prev === 0 ? gallery.length - 1 : prev - 1
                                        );
                                    }}
                                    className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                                    aria-label="Previous photo"
                                >
                                    <ChevronLeft size={28} />
                                </button>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSelectedIdx((prev) =>
                                            prev === gallery.length - 1 ? 0 : prev + 1
                                        );
                                    }}
                                    className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                                    aria-label="Next photo"
                                >
                                    <ChevronRight size={28} />
                                </button>
                            </>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
