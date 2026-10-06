"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Phone, Clock, Play, Pause, Volume2, VolumeX } from "lucide-react";
import { Reveal } from "./Reveal";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Capabilities() {
    const [activeTab, setActiveTab] = useState<"facility" | "workforce" | "quality" | "compliance">("facility");
    const [isVideoPlaying, setIsVideoPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(true);

    const togglePlay = () => {
        const video = document.getElementById("cnc-video") as HTMLVideoElement;
        if (video) {
            if (video.paused) {
                video.play();
                setIsVideoPlaying(true);
            } else {
                video.pause();
                setIsVideoPlaying(false);
            }
        }
    };

    const toggleMute = () => {
        const video = document.getElementById("cnc-video") as HTMLVideoElement;
        if (video) {
            video.muted = !video.muted;
            setIsMuted(video.muted);
        }
    };

    const tabs = [
        { id: "facility" as const, number: "01", label: "Fabrication Facility" },
        { id: "workforce" as const, number: "02", label: "Engineering & Workforce" },
        { id: "quality" as const, number: "03", label: "Quality Control & Safety" },
        { id: "compliance" as const, number: "04", label: "Compliance & Certification" },
    ];

    return (
        <section id="capabilities" className="py-24 bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="max-w-3xl mb-14">
                    <Reveal width="100%">
                        <span className="text-secondary font-bold text-xs uppercase tracking-[0.25em] block mb-3">
                            Our Capabilities
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary tracking-tight leading-tight mb-5 font-[var(--font-outfit)]">
                            Engineering Capability Built for Complex Projects
                        </h2>
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
                            High-Capacity Engineering & Construction Expertise
                        </h3>
                        <p className="text-gray-600 text-base leading-relaxed mb-3">
                            Silverline Engineering Ltd operates with a strong focus on engineering discipline, operational efficiency, and execution certainty. Our integrated capabilities allow us to deliver projects ranging from steel fabrication and structural installation to turnkey industrial developments.
                        </p>
                        <p className="text-gray-600 text-base leading-relaxed">
                            By maintaining strict quality standards and investing in modern equipment and skilled personnel, we ensure every project is delivered with durability, safety, and long-term performance in mind.
                        </p>
                    </Reveal>
                </div>

                {/* Architectural Navigation Switcher */}
                <div className="flex flex-wrap gap-2 mb-12 border-b border-gray-200 pb-4">
                    {tabs.map((tab) => {
                        const isActive = activeTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-2.5 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                                    isActive
                                        ? "bg-primary text-white shadow-md shadow-primary/20"
                                        : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900"
                                }`}
                            >
                                <span className={isActive ? "text-secondary font-mono" : "text-gray-400 font-mono"}>
                                    {tab.number}
                                </span>
                                <span>{tab.label}</span>
                            </button>
                        );
                    })}
                </div>

                {/* TAB 1: FABRICATION FACILITY */}
                {activeTab === "facility" && (
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        {/* Text & Specs */}
                        <div className="lg:col-span-6 space-y-8">
                            <div>
                                <span className="text-xs font-bold text-secondary tracking-widest uppercase block mb-2 font-mono">
                                    01 / Manufacturing Base
                                </span>
                                <h3 className="text-3xl font-bold text-primary mb-4 font-[var(--font-outfit)]">
                                    Fabrication Facility
                                </h3>
                                <p className="text-gray-600 text-base leading-relaxed">
                                    Our fabrication facility located in Lusaka is designed to support large-scale steel manufacturing and complex structural systems.
                                </p>
                            </div>

                            {/* Technical Specs Table */}
                            <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-200/80">
                                <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-5 font-mono">
                                    Key Infrastructure & Equipment
                                </h4>
                                <dl className="divide-y divide-gray-200 text-sm">
                                    <div className="py-3 flex justify-between gap-4">
                                        <dt className="text-gray-500 font-medium">Fabrication Facility</dt>
                                        <dd className="font-bold text-gray-900 text-right">2,500m² enclosed facility</dd>
                                    </div>
                                    <div className="py-3 flex justify-between gap-4">
                                        <dt className="text-gray-500 font-medium">Production Line</dt>
                                        <dd className="font-bold text-gray-900 text-right">2,000m² Pre-Fabricated Units</dd>
                                    </div>
                                    <div className="py-3 flex justify-between gap-4">
                                        <dt className="text-gray-500 font-medium">Automated Cutting</dt>
                                        <dd className="font-bold text-gray-900 text-right">CNC Precision & Plasma Cutting</dd>
                                    </div>
                                    <div className="py-3 flex justify-between gap-4">
                                        <dt className="text-gray-500 font-medium">Steel Forming</dt>
                                        <dd className="font-bold text-gray-900 text-right">Heavy Rolling Machines</dd>
                                    </div>
                                    <div className="py-3 flex justify-between gap-4">
                                        <dt className="text-gray-500 font-medium">Welding Stations</dt>
                                        <dd className="font-bold text-gray-900 text-right">Multiple Certified Bays</dd>
                                    </div>
                                    <div className="py-3 flex justify-between gap-4">
                                        <dt className="text-gray-500 font-medium">Material Handling</dt>
                                        <dd className="font-bold text-gray-900 text-right">Overhead Cranes for Heavy Steel</dd>
                                    </div>
                                </dl>
                            </div>

                            <p className="text-sm text-gray-600 leading-relaxed pl-4 border-l-2 border-secondary italic">
                                This infrastructure allows Silverline Engineering Ltd to fabricate high-performance structural steel systems for industrial and commercial construction projects.
                            </p>
                        </div>

                        {/* Media Grid */}
                        <div className="lg:col-span-6 space-y-6">
                            {/* CNC Video Box */}
                            <div className="relative rounded-2xl overflow-hidden aspect-video bg-black shadow-lg border border-gray-200 group">
                                <video
                                    id="cnc-video"
                                    src="/capabilities/cnc-machine.mp4"
                                    poster="/capabilities/cnc-frame-1.jpg"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-4 left-4 px-3 py-1 bg-black/70 backdrop-blur-sm text-white text-[11px] font-mono uppercase tracking-wider rounded-full">
                                    CNC Plasma Automation In Action
                                </div>
                                <div className="absolute bottom-4 right-4 flex gap-2">
                                    <button
                                        onClick={togglePlay}
                                        aria-label={isVideoPlaying ? "Pause Video" : "Play Video"}
                                        className="w-9 h-9 rounded-full bg-black/75 hover:bg-black text-white flex items-center justify-center transition-colors"
                                    >
                                        {isVideoPlaying ? <Pause size={14} /> : <Play size={14} />}
                                    </button>
                                    <button
                                        onClick={toggleMute}
                                        aria-label={isMuted ? "Unmute Video" : "Mute Video"}
                                        className="w-9 h-9 rounded-full bg-black/75 hover:bg-black text-white flex items-center justify-center transition-colors"
                                    >
                                        {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                                    </button>
                                </div>
                            </div>

                            {/* Workshop Images */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 border border-gray-200">
                                    <Image
                                        src="/capabilities/fabrication-facility.jpg"
                                        alt="Lusaka Fabrication Workshop & Overhead Cranes"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 25vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                                        <span className="text-white text-xs font-semibold">Lusaka Workshop & Overhead Cranes</span>
                                    </div>
                                </div>
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 border border-gray-200">
                                    <Image
                                        src="/capabilities/welding-workshop.jpg"
                                        alt="Certified Welding Bays"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 25vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                                        <span className="text-white text-xs font-semibold">Certified Welding Bays</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* TAB 2: ENGINEERING & WORKFORCE */}
                {activeTab === "workforce" && (
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        {/* Text & Team Structure */}
                        <div className="lg:col-span-6 space-y-8">
                            <div>
                                <span className="text-xs font-bold text-secondary tracking-widest uppercase block mb-2 font-mono">
                                    02 / Personnel & Execution
                                </span>
                                <h3 className="text-3xl font-bold text-primary mb-4 font-[var(--font-outfit)]">
                                    Engineering & Workforce
                                </h3>
                                <p className="text-gray-600 text-base leading-relaxed">
                                    Our technical and operational teams combine engineering expertise with practical construction experience to deliver projects efficiently.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h4 className="text-xs font-bold uppercase tracking-widest text-primary font-mono">
                                    Team Structure
                                </h4>
                                <div className="space-y-3">
                                    {[
                                        {
                                            role: "Experienced Engineering Team",
                                            detail: "Registered structural and civil engineers overseeing design integrity, load calculations, and site specifications.",
                                        },
                                        {
                                            role: "Skilled Fabricators and Technicians",
                                            detail: "Certified steel fabricators, machine operators, and welders executing precision structural assemblies.",
                                        },
                                        {
                                            role: "Dedicated Site Supervisors & Project Managers",
                                            detail: "On-site management maintaining project milestones, logistics coordination, and direct stakeholder communication.",
                                        },
                                        {
                                            role: "Safety-Focused Operational Teams",
                                            detail: "Rigorous safety officers implementing zero-harm protocols and daily hazard compliance across all active sites.",
                                        },
                                    ].map((team, idx) => (
                                        <div key={idx} className="p-4 rounded-2xl bg-gray-50 border border-gray-200/80">
                                            <h5 className="font-bold text-sm text-gray-900 mb-1">{team.role}</h5>
                                            <p className="text-xs text-gray-600 leading-relaxed">{team.detail}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <p className="text-sm text-gray-600 leading-relaxed pl-4 border-l-2 border-secondary italic">
                                Our teams work collaboratively to maintain consistent quality standards across all phases of project execution.
                            </p>
                        </div>

                        {/* Visual Media Showcase */}
                        <div className="lg:col-span-6 space-y-6">
                            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 shadow-md">
                                <Image
                                    src="/capabilities/metal-fabrication.jpg"
                                    alt="Industrial Steel Fabrication"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-5">
                                    <span className="text-white text-sm font-semibold">Heavy Industrial Structural Welding</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 border border-gray-200">
                                    <Image
                                        src="/capabilities/cnc-frame-2.jpg"
                                        alt="Automated CNC Fabrication"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 25vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
                                        <span className="text-white text-xs font-semibold">Precision Cut Finishing</span>
                                    </div>
                                </div>
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 border border-gray-200">
                                    <Image
                                        src="/capabilities/cnc-frame-3.jpg"
                                        alt="Fabrication Assembly Detail"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 25vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
                                        <span className="text-white text-xs font-semibold">Quality Verified Assemblies</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* TAB 3: QUALITY CONTROL & SAFETY */}
                {activeTab === "quality" && (
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        {/* Text & Steps */}
                        <div className="lg:col-span-6 space-y-8">
                            <div>
                                <span className="text-xs font-bold text-secondary tracking-widest uppercase block mb-2 font-mono">
                                    03 / Assurance & Safety
                                </span>
                                <h3 className="text-3xl font-bold text-primary mb-4 font-[var(--font-outfit)]">
                                    Quality Control & Safety
                                </h3>
                                <p className="text-gray-600 text-base leading-relaxed">
                                    Silverline Engineering Ltd maintains structured inspection and quality assurance procedures throughout fabrication and construction.
                                </p>
                            </div>

                            <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-200/80">
                                <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-4 font-mono">
                                    Our Project Management Approach Includes:
                                </h4>
                                <ul className="space-y-3.5 text-sm text-gray-700">
                                    {[
                                        "Detailed project planning and scheduling",
                                        "Material inspection and verification",
                                        "Fabrication quality checks",
                                        "Structural installation supervision",
                                        "Safety compliance and site management",
                                    ].map((step, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <span className="w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center text-[10px] font-mono font-bold shrink-0 mt-0.5">
                                                {idx + 1}
                                            </span>
                                            <span className="font-medium text-gray-900">{step}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <p className="text-sm text-gray-600 leading-relaxed pl-4 border-l-2 border-secondary italic">
                                These systems ensure projects are delivered safely and according to engineering specifications.
                            </p>
                        </div>

                        {/* Photographic Reference */}
                        <div className="lg:col-span-6 space-y-6">
                            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 shadow-md">
                                <Image
                                    src="/capabilities/fabrication-facility.jpg"
                                    alt="Overhead Cranes and High-Bay Fabrication Shop"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-5">
                                    <span className="text-white text-sm font-semibold">Strict Workshop Safety & Structural Protocols</span>
                                </div>
                            </div>

                            <div className="p-6 rounded-2xl bg-primary text-white space-y-3">
                                <h5 className="font-bold text-sm tracking-wide uppercase font-mono text-secondary">
                                    Zero-Harm Philosophy
                                </h5>
                                <p className="text-xs text-gray-300 leading-relaxed">
                                    Every fabrication job and field erection adheres to strict occupational health and safety guidelines. Continuous supervision ensures every weld and anchor bolts placement meets Zambian and international engineering standards.
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* TAB 4: COMPLIANCE & CERTIFICATION */}
                {activeTab === "compliance" && (
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        {/* Text & Certifications */}
                        <div className="lg:col-span-6 space-y-8">
                            <div>
                                <span className="text-xs font-bold text-secondary tracking-widest uppercase block mb-2 font-mono">
                                    04 / Governance & Standards
                                </span>
                                <h3 className="text-3xl font-bold text-primary mb-4 font-[var(--font-outfit)]">
                                    Compliance & Certification
                                </h3>
                                <p className="text-gray-600 text-base leading-relaxed">
                                    Silverline Engineering Ltd operates in accordance with regulatory and industry requirements.
                                </p>
                            </div>

                            <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-200/80 space-y-4">
                                <h4 className="text-xs font-bold uppercase tracking-widest text-primary font-mono">
                                    Our Compliance Includes:
                                </h4>
                                <div className="space-y-3">
                                    {[
                                        {
                                            agency: "Zambia Revenue Authority (ZRA)",
                                            status: "Tax Clearance Certified",
                                            badge: "Compliant",
                                        },
                                        {
                                            agency: "National Pension Scheme Authority (NAPSA)",
                                            status: "Full Statutory Pension Compliance",
                                            badge: "Compliant",
                                        },
                                        {
                                            agency: "Workers’ Compensation Fund Control Board",
                                            status: "Workforce Occupational Coverage",
                                            badge: "Compliant",
                                        },
                                        {
                                            agency: "ISO Management Standards",
                                            status: "Quality & Safety Systems Certification",
                                            badge: "In Progress",
                                        },
                                    ].map((item, idx) => (
                                        <div key={idx} className="p-4 rounded-xl bg-white border border-gray-200 flex items-center justify-between gap-4">
                                            <div>
                                                <h5 className="font-bold text-xs text-gray-900">{item.agency}</h5>
                                                <p className="text-[11px] text-gray-500">{item.status}</p>
                                            </div>
                                            <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                                                item.badge === "In Progress"
                                                    ? "bg-amber-100 text-amber-900"
                                                    : "bg-emerald-100 text-emerald-900"
                                            }`}>
                                                {item.badge}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Photographic Reference */}
                        <div className="lg:col-span-6 space-y-6">
                            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 shadow-md">
                                <Image
                                    src="/capabilities/welding-workshop.jpg"
                                    alt="Certified Fabrication Operations"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-5">
                                    <span className="text-white text-sm font-semibold">Certified Engineering Operations in Lusaka</span>
                                </div>
                            </div>

                            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 flex items-center justify-between">
                                <span className="text-xs text-gray-600 font-medium">Need verified compliance documentation for tenders?</span>
                                <Link
                                    href="/contact"
                                    className="text-xs font-bold text-primary hover:text-secondary flex items-center gap-1 transition-colors"
                                >
                                    <span>Contact us</span>
                                    <ArrowUpRight size={14} />
                                </Link>
                            </div>
                        </div>
                    </div>
                )}

                {/* Bottom Call to Action Strip: Work With a Team Built for Scale */}
                <div className="mt-20 bg-primary text-white rounded-3xl p-8 sm:p-12 border border-gray-800">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-7 space-y-3">
                            <span className="text-xs font-bold uppercase tracking-widest text-secondary font-mono">
                                Steel & Concrete Construction
                            </span>
                            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight font-[var(--font-outfit)]">
                                Work With a Team Built for Scale
                            </h3>
                            <p className="text-gray-300 text-sm leading-relaxed max-w-xl">
                                Silverline Engineering Ltd provides the engineering expertise, fabrication capability, and execution discipline required to deliver complex industrial and infrastructure projects.
                            </p>
                            <div className="flex items-center gap-2 pt-2 text-xs text-gray-400">
                                <Clock size={14} className="text-secondary shrink-0" />
                                <span>MON – FRI: 8:00 AM – 5:00 PM | SAT: 8:00 AM – 1:00 PM</span>
                            </div>
                        </div>

                        <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-secondary hover:bg-orange-600 text-white font-bold text-xs rounded-full transition-all shadow-md uppercase tracking-wider"
                            >
                                <span>Request a Quote</span>
                                <ArrowUpRight size={15} />
                            </Link>

                            <div className="grid grid-cols-2 gap-2">
                                <a
                                    href="tel:+260966626579"
                                    className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-white/10 hover:bg-white/20 text-white font-medium text-xs rounded-full border border-white/10 transition-colors"
                                >
                                    <Phone size={13} />
                                    <span>0966 626579</span>
                                </a>
                                <a
                                    href="https://wa.me/260966626579"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs rounded-full transition-colors shadow-sm"
                                >
                                    <WhatsAppIcon size={14} className="text-white" />
                                    <span>WhatsApp</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
