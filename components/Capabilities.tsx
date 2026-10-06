"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    Factory,
    Cog,
    ShieldCheck,
    CheckCircle2,
    Award,
    Users,
    Wrench,
    HardHat,
    Phone,
    ArrowUpRight,
    Clock,
    FileCheck2,
    Layers,
    Play,
    Pause,
    Volume2,
    VolumeX,
} from "lucide-react";
import { Reveal } from "./Reveal";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Capabilities() {
    const [isVideoPlaying, setIsVideoPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(true);

    const togglePlay = () => {
        const video = document.getElementById("cnc-capability-video") as HTMLVideoElement;
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
        const video = document.getElementById("cnc-capability-video") as HTMLVideoElement;
        if (video) {
            video.muted = !video.muted;
            setIsMuted(video.muted);
        }
    };

    const capabilityMetrics = [
        {
            value: "2,500m²",
            title: "Fabrication Facility",
            tag: "Heavy Structural",
            description: "High-capacity steel workshop with overhead cranes in Lusaka",
            image: "/capabilities/fabrication-facility.jpg",
            icon: Factory,
            badgeColor: "bg-blue-500/20 text-blue-300 border-blue-400/30",
            valueColor: "text-white",
            accentColor: "bg-blue-400",
        },
        {
            value: "2,000m²",
            title: "Prefab Production Line",
            tag: "Modular Units",
            description: "Dedicated pre-engineered and rapid building production line",
            image: "/capabilities/metal-fabrication.jpg",
            icon: Layers,
            badgeColor: "bg-orange-500/20 text-orange-300 border-orange-400/30",
            valueColor: "text-amber-400",
            accentColor: "bg-secondary",
        },
        {
            value: "CNC & Plasma",
            title: "Automated Precision",
            tag: "Computerized Cutting",
            description: "Multi-axis plasma cutting torches and precision plate rolling",
            image: "/capabilities/cnc-frame-2.jpg",
            icon: Cog,
            badgeColor: "bg-indigo-500/20 text-indigo-300 border-indigo-400/30",
            valueColor: "text-sky-300",
            accentColor: "bg-sky-400",
        },
        {
            value: "100%",
            title: "Regulatory Compliance",
            tag: "Statutory Accredited",
            description: "Full ZRA, NAPSA, Workers' Compensation & ISO progress",
            image: "/capabilities/welding-workshop.jpg",
            icon: ShieldCheck,
            badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-400/30",
            valueColor: "text-emerald-400",
            accentColor: "bg-emerald-500",
        },
    ];

    const fabricationFeatures = [
        "2,500m² fabrication facility",
        "2,000m² Production Line of Pre-Fabricated units",
        "CNC machinery for precision fabrication",
        "Plasma cutting systems",
        "Rolling machines",
        "Multiple welding stations",
        "Overhead cranes for heavy structural handling",
    ];

    const teamStructure = [
        {
            title: "Experienced Engineering Team",
            description: "Registered structural and civil engineers guiding design integrity and technical compliance.",
            icon: Users,
        },
        {
            title: "Skilled Fabricators & Technicians",
            description: "Certified welders, machinists, and steel fitters delivering high-tolerance structural components.",
            icon: Wrench,
        },
        {
            title: "Dedicated Site Supervisors & PMs",
            description: "On-site leadership managing timelines, subcontractor alignment, and execution milestones.",
            icon: HardHat,
        },
        {
            title: "Safety-Focused Operational Teams",
            description: "Trained safety officers ensuring zero-harm site protocols and daily hazard mitigation.",
            icon: ShieldCheck,
        },
    ];

    const qcSystems = [
        "Detailed project planning and scheduling",
        "Material inspection and verification",
        "Fabrication quality checks",
        "Structural installation supervision",
        "Safety compliance and site management",
    ];

    const certifications = [
        {
            name: "Zambia Revenue Authority (ZRA)",
            status: "Tax Clearance Certified",
            badge: "Active & Compliant",
        },
        {
            name: "National Pension Scheme Authority (NAPSA)",
            status: "Statutory Workforce Compliance",
            badge: "Certified",
        },
        {
            name: "Workers’ Compensation Fund Control Board",
            status: "Full Statutory Occupational Coverage",
            badge: "Compliant",
        },
        {
            name: "ISO Quality Management Standards",
            status: "ISO Certification Process",
            badge: "In Progress",
        },
    ];

    return (
        <section id="capabilities" className="py-24 bg-gradient-to-b from-white via-gray-50/50 to-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <Reveal width="100%">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest mb-4 border border-primary/10">
                            <Factory size={14} className="text-secondary" />
                            Our Capabilities
                        </div>
                    </Reveal>

                    <Reveal width="100%" delay={0.1}>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary tracking-tight leading-tight mb-5">
                            Engineering Capability Built for{" "}
                            <span className="text-secondary">Complex Projects</span>
                        </h2>
                    </Reveal>

                    <Reveal width="100%" delay={0.2}>
                        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                            <strong className="text-gray-900 font-semibold">High-Capacity Engineering & Construction Expertise:</strong>{" "}
                            Silverline Engineering Ltd operates with a strong focus on engineering discipline, operational efficiency, and execution certainty. Our integrated capabilities allow us to deliver projects ranging from steel fabrication and structural installation to turnkey industrial developments.
                        </p>
                    </Reveal>
                </div>

                {/* Quick Capability Metrics Strip - Google UI Interactive Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-24">
                    {capabilityMetrics.map((metric, idx) => (
                        <Reveal key={idx} width="100%" delay={0.15 + idx * 0.08}>
                            <div className="group relative h-72 sm:h-80 rounded-3xl overflow-hidden border border-gray-200/90 shadow-sm hover:shadow-2xl hover:shadow-primary/25 transition-all duration-500 hover:-translate-y-2 cursor-pointer flex flex-col justify-between p-6 bg-slate-950">
                                
                                {/* Background Image with Smooth Zoom on Hover */}
                                <Image
                                    src={metric.image}
                                    alt={metric.title}
                                    fill
                                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110 filter brightness-[0.70] group-hover:brightness-[0.80]"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                />

                                {/* Multi-Layer Gradient Overlays for High Contrast & Sleek Google UI Aesthetic */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/30 transition-opacity duration-500 group-hover:from-slate-950/90 group-hover:via-slate-950/50" />
                                
                                {/* Subtle Glass Highlight Ring on Hover */}
                                <div className="absolute inset-0 rounded-3xl border border-white/10 group-hover:border-white/30 transition-colors duration-500 pointer-events-none" />

                                {/* Card Header (Pill Badge + Arrow) */}
                                <div className="relative z-10 flex items-center justify-between gap-2">
                                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase border backdrop-blur-md shadow-sm ${metric.badgeColor}`}>
                                        <metric.icon size={13} className="shrink-0" />
                                        <span>{metric.tag}</span>
                                    </span>
                                    <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white/70 group-hover:text-white group-hover:bg-white/20 transition-all duration-300">
                                        <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                    </div>
                                </div>

                                {/* Card Footer (Value, Title, Description, Animated Accent Line) */}
                                <div className="relative z-10 space-y-1.5 pt-4">
                                    <span className={`text-3xl sm:text-4xl font-extrabold tracking-tight font-[var(--font-outfit)] block ${metric.valueColor} drop-shadow-sm`}>
                                        {metric.value}
                                    </span>
                                    <h4 className="text-base font-bold text-white tracking-wide leading-snug">
                                        {metric.title}
                                    </h4>
                                    <p className="text-xs text-gray-300/90 leading-relaxed line-clamp-2">
                                        {metric.description}
                                    </p>
                                    {/* Google UI Interactive Expanding Accent Bar */}
                                    <div className="pt-2">
                                        <div className={`h-1 w-10 group-hover:w-20 rounded-full transition-all duration-500 ease-out ${metric.accentColor}`} />
                                    </div>
                                </div>

                            </div>
                        </Reveal>
                    ))}
                </div>

                {/* Capability Pillar 1: Fabrication Facility */}
                <div className="mb-24">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                        {/* Text and Features */}
                        <div className="lg:col-span-6 space-y-6">
                            <Reveal width="100%">
                                <div className="space-y-3">
                                    <span className="text-secondary font-bold text-xs uppercase tracking-widest flex items-center gap-1.5">
                                        <Cog size={15} /> Heavy Industrial Infrastructure
                                    </span>
                                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
                                        Fabrication Facility
                                    </h3>
                                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                        Our fabrication facility located in Lusaka is designed to support large-scale steel manufacturing and complex structural systems.
                                    </p>
                                </div>
                            </Reveal>

                            <Reveal delay={0.1} width="100%">
                                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/90 shadow-sm space-y-4">
                                    <h4 className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-2">
                                        <Layers size={16} className="text-secondary" />
                                        Key Infrastructure & Machinery
                                    </h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                                        {fabricationFeatures.map((feature, i) => (
                                            <div key={i} className="flex items-start gap-2.5 text-xs text-gray-700 font-medium">
                                                <CheckCircle2 size={15} className="text-emerald-600 mt-0.5 shrink-0" />
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <p className="text-xs text-gray-500 pt-3 border-t border-gray-100 italic leading-relaxed">
                                        This infrastructure allows Silverline Engineering Ltd to fabricate high-performance structural steel systems for industrial and commercial construction projects.
                                    </p>
                                </div>
                            </Reveal>
                        </div>

                        {/* Video & Workshop Images Showcase */}
                        <div className="lg:col-span-6 space-y-4">
                            <Reveal delay={0.2} width="100%">
                                {/* CNC Video Player */}
                                <div className="relative rounded-3xl overflow-hidden aspect-video shadow-xl border border-gray-200 bg-gray-900 group">
                                    <video
                                        id="cnc-capability-video"
                                        src="/capabilities/cnc-machine.mp4"
                                        poster="/capabilities/cnc-frame-1.jpg"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Video Overlay Badge */}
                                    <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-semibold">
                                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                        CNC Automated Precision
                                    </div>

                                    {/* Media Controls */}
                                    <div className="absolute bottom-4 right-4 z-10 flex items-center gap-2 opacity-90 group-hover:opacity-100 transition-opacity">
                                        <button
                                            onClick={togglePlay}
                                            aria-label={isVideoPlaying ? "Pause Video" : "Play Video"}
                                            className="w-9 h-9 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center backdrop-blur-md transition-colors"
                                        >
                                            {isVideoPlaying ? <Pause size={15} /> : <Play size={15} />}
                                        </button>
                                        <button
                                            onClick={toggleMute}
                                            aria-label={isMuted ? "Unmute Video" : "Mute Video"}
                                            className="w-9 h-9 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center backdrop-blur-md transition-colors"
                                        >
                                            {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
                                        </button>
                                    </div>
                                </div>
                            </Reveal>

                            {/* Supplementary Images */}
                            <Reveal delay={0.3} width="100%">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-gray-100 group">
                                        <Image
                                            src="/capabilities/fabrication-facility.jpg"
                                            alt="Lusaka Fabrication Facility"
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                            sizes="(max-width: 768px) 50vw, 25vw"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-3">
                                            <span className="text-[11px] font-semibold text-white tracking-wide">Lusaka Workshop & Cranes</span>
                                        </div>
                                    </div>

                                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-gray-100 group">
                                        <Image
                                            src="/capabilities/welding-workshop.jpg"
                                            alt="Precision Welding Stations"
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                            sizes="(max-width: 768px) 50vw, 25vw"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-3">
                                            <span className="text-[11px] font-semibold text-white tracking-wide">Multiple Welding Stations</span>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </div>

                {/* Capability Pillar 2: Engineering & Workforce */}
                <div className="mb-24">
                    <div className="bg-primary text-white rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
                        <div className="relative z-10 max-w-3xl mb-12">
                            <span className="text-secondary font-bold text-xs uppercase tracking-widest flex items-center gap-1.5 mb-2">
                                <Users size={15} /> Technical & Operational Excellence
                            </span>
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-white">
                                Engineering & Workforce
                            </h3>
                            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                                Our technical and operational teams combine engineering expertise with practical construction experience to deliver projects efficiently. Our teams work collaboratively to maintain consistent quality standards across all phases of project execution.
                            </p>
                        </div>

                        {/* Team Structure Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 mb-8">
                            {teamStructure.map((member, i) => (
                                <Reveal key={i} delay={i * 0.1} width="100%">
                                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 hover:bg-white/15 transition-all duration-300 h-full flex flex-col justify-between">
                                        <div className="space-y-3">
                                            <div className="w-10 h-10 rounded-full bg-secondary/20 text-secondary flex items-center justify-center">
                                                <member.icon size={20} />
                                            </div>
                                            <h4 className="font-bold text-sm text-white">{member.title}</h4>
                                            <p className="text-xs text-gray-300 leading-relaxed">{member.description}</p>
                                        </div>
                                    </div>
                                </Reveal>
                            ))}
                        </div>

                        {/* Visual Photos Row inside Dark Card */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-white/10 relative z-10">
                            <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10">
                                <Image
                                    src="/capabilities/metal-fabrication.jpg"
                                    alt="Industrial Metal Fabrication"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>
                            <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10">
                                <Image
                                    src="/capabilities/cnc-frame-2.jpg"
                                    alt="CNC Plasma Cutting"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>
                            <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10">
                                <Image
                                    src="/capabilities/cnc-frame-3.jpg"
                                    alt="High Tolerance Finishing"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Capability Pillars 3 & 4: Quality Control & Compliance */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
                    
                    {/* Quality Control & Safety Card */}
                    <Reveal width="100%">
                        <div className="bg-white rounded-3xl p-8 border border-gray-200/90 shadow-sm h-full flex flex-col justify-between">
                            <div>
                                <div className="flex items-center gap-2 mb-3 text-secondary text-xs font-bold uppercase tracking-wider">
                                    <ShieldCheck size={16} />
                                    Zero-Harm Assurance
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 tracking-tight mb-3">
                                    Quality Control & Safety
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                    Silverline Engineering Ltd maintains structured inspection and quality assurance procedures throughout fabrication and construction.
                                </p>

                                <div className="space-y-3 mb-6">
                                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block">
                                        Our Project Management Approach Includes:
                                    </span>
                                    {qcSystems.map((system, idx) => (
                                        <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100 text-xs text-gray-800 font-medium">
                                            <span className="w-5 h-5 rounded-full bg-secondary text-white flex items-center justify-center text-[10px] font-bold shrink-0">
                                                {idx + 1}
                                            </span>
                                            <span>{system}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <p className="text-xs text-gray-500 pt-4 border-t border-gray-100 leading-relaxed italic">
                                These systems ensure projects are delivered safely and strictly according to engineering specifications.
                            </p>
                        </div>
                    </Reveal>

                    {/* Compliance & Certification Card */}
                    <Reveal width="100%" delay={0.15}>
                        <div className="bg-white rounded-3xl p-8 border border-gray-200/90 shadow-sm h-full flex flex-col justify-between">
                            <div>
                                <div className="flex items-center gap-2 mb-3 text-emerald-600 text-xs font-bold uppercase tracking-wider">
                                    <Award size={16} />
                                    Accredited Operations
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 tracking-tight mb-3">
                                    Compliance & Certification
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                    Silverline Engineering Ltd operates in strict accordance with statutory, regulatory, and national industry requirements in Zambia.
                                </p>

                                <div className="space-y-3.5 mb-6">
                                    {certifications.map((cert, idx) => (
                                        <div key={idx} className="flex items-center justify-between p-3.5 rounded-xl bg-gray-50 border border-gray-100 gap-3">
                                            <div className="flex items-center gap-2.5">
                                                <FileCheck2 size={16} className="text-primary shrink-0" />
                                                <div>
                                                    <span className="text-xs font-bold text-gray-900 block">{cert.name}</span>
                                                    <span className="text-[11px] text-gray-500">{cert.status}</span>
                                                </div>
                                            </div>
                                            <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shrink-0 ${
                                                cert.badge === "In Progress"
                                                    ? "bg-amber-100 text-amber-800"
                                                    : "bg-emerald-100 text-emerald-800"
                                            }`}>
                                                {cert.badge}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="p-4 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-between">
                                <span className="text-xs font-semibold text-primary">Need verified compliance documents for tender?</span>
                                <Link
                                    href="/contact"
                                    className="text-xs font-bold text-secondary hover:underline flex items-center gap-1 shrink-0"
                                >
                                    Contact Us <ArrowUpRight size={13} />
                                </Link>
                            </div>
                        </div>
                    </Reveal>
                </div>

                {/* Final Call to Action Strip: Work With a Team Built for Scale */}
                <Reveal width="100%" delay={0.2}>
                    <div className="rounded-3xl bg-gradient-to-r from-primary via-slate-900 to-primary text-white p-8 sm:p-12 shadow-xl border border-gray-800">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                            
                            <div className="lg:col-span-7 space-y-3">
                                <span className="text-secondary text-xs font-bold uppercase tracking-widest">
                                    Steel & Concrete Construction
                                </span>
                                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                                    Work With a Team Built for Scale
                                </h3>
                                <p className="text-gray-300 text-sm leading-relaxed max-w-xl">
                                    Silverline Engineering Ltd provides the engineering expertise, fabrication capability, and execution discipline required to deliver complex industrial and infrastructure projects.
                                </p>
                                
                                {/* Operating Hours */}
                                <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-gray-400">
                                    <div className="flex items-center gap-1.5">
                                        <Clock size={14} className="text-secondary" />
                                        <span>MON – FRI: 8:00 AM – 5:00 PM</span>
                                    </div>
                                    <span className="hidden sm:inline text-gray-600">•</span>
                                    <div>SAT: 8:00 AM – 1:00 PM</div>
                                </div>
                            </div>

                            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-secondary hover:bg-orange-600 text-white font-bold text-sm rounded-full transition-all shadow-lg shadow-secondary/25 hover:scale-[1.02] active:scale-[0.98]"
                                >
                                    <span>Request a Quote</span>
                                    <ArrowUpRight size={16} />
                                </Link>

                                <div className="grid grid-cols-2 gap-2">
                                    <a
                                        href="tel:+260966626579"
                                        className="inline-flex items-center justify-center gap-1.5 px-4 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs rounded-full border border-white/10 transition-colors"
                                    >
                                        <Phone size={14} />
                                        <span>0966 626579</span>
                                    </a>

                                    <a
                                        href="https://wa.me/260966626579"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-1.5 px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-full transition-colors shadow-sm"
                                    >
                                        <WhatsAppIcon size={14} className="text-white" />
                                        <span>WhatsApp</span>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </Reveal>

            </div>
        </section>
    );
}
