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
    Cpu,
    Check,
    Compass,
    Sparkles,
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

    const fabricationFeatures = [
        {
            title: "2,500m² Fabrication Facility",
            desc: "Heavy structural steel production floor with high-bay clearance",
        },
        {
            title: "2,000m² Production Line",
            desc: "Dedicated assembly lines for rapid pre-fabricated modular units",
        },
        {
            title: "CNC Precision Machinery",
            desc: "Computerized numerical control profiling for millimeter tolerances",
        },
        {
            title: "Plasma Cutting Systems",
            desc: "High-definition multi-axis steel plate and profile cutting",
        },
        {
            title: "Plate Rolling Machines",
            desc: "Hydraulic section and heavy plate curvature forming",
        },
        {
            title: "Multiple Welding Stations",
            desc: "MIG, TIG, and SAW stations staffed by certified structural welders",
        },
        {
            title: "Heavy Overhead Cranes",
            desc: "Integrated bridge cranes for safe multi-ton structural handling",
        },
    ];

    const teamStructure = [
        {
            number: "01",
            title: "Experienced Engineering Team",
            description: "Registered structural and civil engineers guiding design integrity, calculations, and technical compliance.",
            icon: Users,
            tag: "Design & Calc",
        },
        {
            number: "02",
            title: "Skilled Fabricators & Technicians",
            description: "Certified welders, machinists, and steel fitters delivering high-tolerance structural assemblies.",
            icon: Wrench,
            tag: "Manufacturing",
        },
        {
            number: "03",
            title: "Dedicated Site Supervisors & PMs",
            description: "Seasoned on-site project directors managing critical paths, timelines, and execution milestones.",
            icon: HardHat,
            tag: "Site Command",
        },
        {
            number: "04",
            title: "Safety-Focused Operational Teams",
            description: "Trained HSE officers maintaining zero-harm site protocols, risk mitigation, and compliance.",
            icon: ShieldCheck,
            tag: "Zero-Harm",
        },
    ];

    const qcSystems = [
        {
            step: "01",
            title: "Detailed Project Planning & Scheduling",
            desc: "Critical-path scheduling, engineering milestones, and resource optimization.",
        },
        {
            step: "02",
            title: "Material Inspection & Verification",
            desc: "Mill test certifications, tensile grade validation, and metallurgical testing.",
        },
        {
            step: "03",
            title: "Fabrication Quality Checks",
            desc: "Dimensional tolerance verification, laser alignment, and ultrasonic weld testing.",
        },
        {
            step: "04",
            title: "Structural Installation Supervision",
            desc: "On-site rigging oversight, calibrated bolt torque checks, and plumb verification.",
        },
        {
            step: "05",
            title: "Safety Compliance & Site Management",
            desc: "Daily toolbox briefings, hazardous task permits, and strict zero-harm audit regimes.",
        },
    ];

    const certifications = [
        {
            name: "Zambia Revenue Authority (ZRA)",
            status: "Full Statutory Tax Clearance Verified",
            badge: "Active & Compliant",
            verified: true,
        },
        {
            name: "National Pension Scheme Authority (NAPSA)",
            status: "Formal Workforce Social Security Coverage",
            badge: "Certified",
            verified: true,
        },
        {
            name: "Workers’ Compensation Fund Control Board",
            status: "Comprehensive Statutory Occupational Protection",
            badge: "Compliant",
            verified: true,
        },
        {
            name: "ISO Quality Management Standards",
            status: "Standard Operating Procedure Audits Active",
            badge: "In Progress",
            verified: false,
        },
    ];

    return (
        <section
            id="capabilities"
            className="py-24 lg:py-32 bg-[#FCFDFF] relative overflow-hidden border-t border-slate-100"
        >
            {/* Subtle Architectural Blueprint Background Accents */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:4rem_4rem]" />
            <div className="absolute top-1/4 -right-40 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/3 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                    <Reveal width="100%">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-white text-[11px] font-bold uppercase tracking-[0.2em] mb-5 shadow-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                            <Factory size={13} className="text-secondary" />
                            Our Capabilities
                        </div>
                    </Reveal>

                    <Reveal width="100%" delay={0.1}>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.15] mb-6 font-[var(--font-outfit)]">
                            Engineering Capability Built for{" "}
                            <span className="relative inline-block text-primary">
                                Complex Projects
                                <svg className="absolute -bottom-1.5 left-0 w-full h-2 text-secondary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10, 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                                </svg>
                            </span>
                        </h2>
                    </Reveal>

                    <Reveal width="100%" delay={0.2}>
                        <p className="text-gray-600 text-base md:text-lg leading-relaxed font-normal">
                            <strong className="text-gray-900 font-semibold">High-Capacity Engineering & Construction Expertise:</strong>{" "}
                            Silverline Engineering Ltd operates with a strong focus on engineering discipline, operational efficiency, and execution certainty. Our integrated capabilities allow us to deliver projects ranging from steel fabrication and structural installation to turnkey industrial developments.
                        </p>
                    </Reveal>
                </div>

                {/* Quick Capability Metrics Strip */}
                <Reveal width="100%" delay={0.25}>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-20 lg:mb-28">
                        
                        <div className="group relative bg-white rounded-3xl p-6 lg:p-7 border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">
                            <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-primary via-primary/80 to-transparent rounded-full opacity-80 group-hover:opacity-100 transition-opacity" />
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Main Facility</span>
                                <span className="p-2 rounded-xl bg-primary/5 text-primary group-hover:scale-110 transition-transform">
                                    <Factory size={16} />
                                </span>
                            </div>
                            <span className="text-3xl lg:text-4xl font-extrabold text-primary font-[var(--font-outfit)] tracking-tight block">
                                2,500m²
                            </span>
                            <span className="text-xs font-semibold text-slate-600 uppercase tracking-wide mt-1.5 block">
                                Heavy Fabrication Facility
                            </span>
                        </div>

                        <div className="group relative bg-white rounded-3xl p-6 lg:p-7 border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">
                            <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-secondary via-orange-400 to-transparent rounded-full opacity-80 group-hover:opacity-100 transition-opacity" />
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Modular Assembly</span>
                                <span className="p-2 rounded-xl bg-secondary/10 text-secondary group-hover:scale-110 transition-transform">
                                    <Layers size={16} />
                                </span>
                            </div>
                            <span className="text-3xl lg:text-4xl font-extrabold text-secondary font-[var(--font-outfit)] tracking-tight block">
                                2,000m²
                            </span>
                            <span className="text-xs font-semibold text-slate-600 uppercase tracking-wide mt-1.5 block">
                                Prefab Production Line
                            </span>
                        </div>

                        <div className="group relative bg-white rounded-3xl p-6 lg:p-7 border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">
                            <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-transparent rounded-full opacity-80 group-hover:opacity-100 transition-opacity" />
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Machining Tolerance</span>
                                <span className="p-2 rounded-xl bg-blue-50 text-blue-600 group-hover:scale-110 transition-transform">
                                    <Cpu size={16} />
                                </span>
                            </div>
                            <span className="text-3xl lg:text-4xl font-extrabold text-gray-900 font-[var(--font-outfit)] tracking-tight block">
                                CNC & Plasma
                            </span>
                            <span className="text-xs font-semibold text-slate-600 uppercase tracking-wide mt-1.5 block">
                                Automated Precision
                            </span>
                        </div>

                        <div className="group relative bg-white rounded-3xl p-6 lg:p-7 border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">
                            <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-emerald-600 via-teal-400 to-transparent rounded-full opacity-80 group-hover:opacity-100 transition-opacity" />
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Statutory Clearances</span>
                                <span className="p-2 rounded-xl bg-emerald-50 text-emerald-600 group-hover:scale-110 transition-transform">
                                    <ShieldCheck size={16} />
                                </span>
                            </div>
                            <span className="text-3xl lg:text-4xl font-extrabold text-emerald-600 font-[var(--font-outfit)] tracking-tight block">
                                100%
                            </span>
                            <span className="text-xs font-semibold text-slate-600 uppercase tracking-wide mt-1.5 block">
                                Regulatory Compliance
                            </span>
                        </div>

                    </div>
                </Reveal>

                {/* Capability Pillar 1: Fabrication Facility */}
                <div className="mb-24 lg:mb-32">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                        
                        {/* Left: Text and Features */}
                        <div className="lg:col-span-6 space-y-6">
                            <Reveal width="100%">
                                <div className="space-y-3">
                                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-wider">
                                        <Cog size={14} className="animate-[spin_6s_linear_infinite]" />
                                        Heavy Industrial Infrastructure
                                    </div>
                                    <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight font-[var(--font-outfit)]">
                                        Fabrication Facility
                                    </h3>
                                    <p className="text-gray-600 text-base leading-relaxed">
                                        Our fabrication facility located in Lusaka is designed to support large-scale steel manufacturing and complex structural systems.
                                    </p>
                                </div>
                            </Reveal>

                            <Reveal delay={0.1} width="100%">
                                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow space-y-5">
                                    <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                                        <h4 className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-2">
                                            <Layers size={16} className="text-secondary" />
                                            Key Infrastructure & Machinery
                                        </h4>
                                        <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                                            Fully Operational
                                        </span>
                                    </div>

                                    <div className="grid grid-cols-1 gap-2.5">
                                        {fabricationFeatures.map((feature, i) => (
                                            <div
                                                key={i}
                                                className="group/item flex items-center justify-between p-3 rounded-2xl bg-slate-50/70 hover:bg-slate-100/80 border border-slate-100 hover:border-slate-200 transition-all duration-200"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                                                        <Check size={13} strokeWidth={3} />
                                                    </div>
                                                    <div>
                                                        <span className="text-xs font-bold text-gray-900 block group-hover/item:text-primary transition-colors">
                                                            {feature.title}
                                                        </span>
                                                        <span className="text-[11px] text-gray-500 font-normal">
                                                            {feature.desc}
                                                        </span>
                                                    </div>
                                                </div>
                                                <span className="text-[10px] font-mono text-slate-400 hidden sm:inline">
                                                    0{i + 1}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    <p className="text-xs text-gray-500 pt-3 border-t border-slate-100 italic leading-relaxed">
                                        This infrastructure allows Silverline Engineering Ltd to fabricate high-performance structural steel systems for industrial and commercial construction projects.
                                    </p>
                                </div>
                            </Reveal>
                        </div>

                        {/* Right: Video & Workshop Images Showcase */}
                        <div className="lg:col-span-6 space-y-4">
                            <Reveal delay={0.2} width="100%">
                                {/* High-Tech CNC Video Player */}
                                <div className="relative rounded-3xl overflow-hidden aspect-video shadow-2xl border border-slate-800 bg-slate-950 group">
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

                                    {/* Video Top HUD Overlay */}
                                    <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between pointer-events-none">
                                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md text-white text-xs font-semibold border border-white/10 shadow-sm">
                                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                            <span className="tracking-wide">LUSAKA STEEL WORKS • CNC PLASMA 4.0</span>
                                        </div>
                                        <span className="px-2.5 py-1 rounded-full bg-secondary/90 text-white text-[10px] font-bold uppercase tracking-wider backdrop-blur-md hidden sm:inline">
                                            Live Cut Feed
                                        </span>
                                    </div>

                                    {/* Subtle Gradient Shadow Base */}
                                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

                                    {/* Bottom Control Bar */}
                                    <div className="absolute bottom-4 right-4 z-10 flex items-center gap-2.5">
                                        <button
                                            onClick={togglePlay}
                                            aria-label={isVideoPlaying ? "Pause Video" : "Play Video"}
                                            className="px-3.5 py-1.5 rounded-full bg-black/80 hover:bg-black text-white text-xs font-medium flex items-center gap-1.5 backdrop-blur-md border border-white/15 transition-all active:scale-95 shadow-md"
                                        >
                                            {isVideoPlaying ? (
                                                <>
                                                    <Pause size={13} />
                                                    <span>Pause</span>
                                                </>
                                            ) : (
                                                <>
                                                    <Play size={13} fill="currentColor" />
                                                    <span>Play</span>
                                                </>
                                            )}
                                        </button>

                                        <button
                                            onClick={toggleMute}
                                            aria-label={isMuted ? "Unmute Video" : "Mute Video"}
                                            className="w-8 h-8 rounded-full bg-black/80 hover:bg-black text-white flex items-center justify-center backdrop-blur-md border border-white/15 transition-all active:scale-95 shadow-md"
                                        >
                                            {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                                        </button>
                                    </div>
                                </div>
                            </Reveal>

                            {/* Supplementary Workshop Images */}
                            <Reveal delay={0.3} width="100%">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 group">
                                        <Image
                                            src="/capabilities/fabrication-facility.jpg"
                                            alt="Lusaka Fabrication Facility"
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                            sizes="(max-width: 768px) 50vw, 25vw"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex flex-col justify-end p-4">
                                            <span className="text-[10px] font-bold uppercase tracking-wider text-secondary">
                                                Facility Heavy Bay
                                            </span>
                                            <span className="text-xs sm:text-sm font-bold text-white tracking-tight">
                                                Overhead Crane Handling
                                            </span>
                                        </div>
                                    </div>

                                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 group">
                                        <Image
                                            src="/capabilities/welding-workshop.jpg"
                                            alt="Precision Welding Stations"
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                            sizes="(max-width: 768px) 50vw, 25vw"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex flex-col justify-end p-4">
                                            <span className="text-[10px] font-bold uppercase tracking-wider text-secondary">
                                                Structural Fitment
                                            </span>
                                            <span className="text-xs sm:text-sm font-bold text-white tracking-tight">
                                                Multiple Welding Bays
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        </div>

                    </div>
                </div>

                {/* Capability Pillar 2: Engineering & Workforce */}
                <div className="mb-24 lg:mb-32">
                    <div className="bg-gradient-to-br from-slate-950 via-[#0B1B3D] to-slate-950 text-white rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl border border-slate-800">
                        {/* Ambient Glowing Background Elements */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/15 rounded-full blur-[100px] pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

                        <div className="relative z-10 max-w-3xl mb-12">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-secondary text-xs font-bold uppercase tracking-wider backdrop-blur-md mb-3 border border-white/10">
                                <Users size={14} /> Technical & Operational Excellence
                            </span>
                            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 text-white font-[var(--font-outfit)]">
                                Engineering & Workforce
                            </h3>
                            <p className="text-gray-300 text-base leading-relaxed">
                                Our technical and operational teams combine engineering expertise with practical construction experience to deliver projects efficiently. Our teams work collaboratively to maintain consistent quality standards across all phases of project execution.
                            </p>
                        </div>

                        {/* Team Structure Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10 mb-10">
                            {teamStructure.map((member, i) => (
                                <Reveal key={i} delay={i * 0.08} width="100%">
                                    <div className="group bg-white/[0.04] hover:bg-white/[0.08] backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-secondary/50 transition-all duration-300 h-full flex flex-col justify-between hover:-translate-y-1">
                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between">
                                                <div className="w-11 h-11 rounded-2xl bg-secondary/20 text-secondary flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
                                                    <member.icon size={22} />
                                                </div>
                                                <span className="font-mono text-xs font-bold text-white/30 group-hover:text-secondary transition-colors">
                                                    {member.number}
                                                </span>
                                            </div>

                                            <div>
                                                <h4 className="font-bold text-sm text-white tracking-tight mb-1.5 group-hover:text-secondary transition-colors">
                                                    {member.title}
                                                </h4>
                                                <p className="text-xs text-gray-300/90 leading-relaxed font-normal">
                                                    {member.description}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between">
                                            <span className="text-[10px] font-semibold tracking-wider uppercase text-gray-400">
                                                {member.tag}
                                            </span>
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                        </div>
                                    </div>
                                </Reveal>
                            ))}
                        </div>

                        {/* Visual Photos Row inside Dark Card */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-white/10 relative z-10">
                            <div className="group relative aspect-video rounded-2xl overflow-hidden border border-white/15 shadow-md">
                                <Image
                                    src="/capabilities/metal-fabrication.jpg"
                                    alt="Industrial Metal Fabrication"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                                    <span className="text-[11px] font-semibold text-white tracking-wide">
                                        High-Tolerance Structural Welding
                                    </span>
                                </div>
                            </div>

                            <div className="group relative aspect-video rounded-2xl overflow-hidden border border-white/15 shadow-md">
                                <Image
                                    src="/capabilities/cnc-frame-2.jpg"
                                    alt="CNC Plasma Cutting"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                                    <span className="text-[11px] font-semibold text-white tracking-wide">
                                        Automated Plasma Profile Cutting
                                    </span>
                                </div>
                            </div>

                            <div className="group relative aspect-video rounded-2xl overflow-hidden border border-white/15 shadow-md">
                                <Image
                                    src="/capabilities/cnc-frame-3.jpg"
                                    alt="High Tolerance Finishing"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                                    <span className="text-[11px] font-semibold text-white tracking-wide">
                                        Assembly & Final QA Fitment
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Capability Pillars 3 & 4: Quality Control & Compliance */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20 lg:mb-28">
                    
                    {/* Quality Control & Safety Card */}
                    <Reveal width="100%">
                        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between">
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-wider">
                                        <ShieldCheck size={15} />
                                        Zero-Harm Assurance
                                    </div>
                                    <span className="text-[11px] font-semibold text-slate-400">
                                        5-Stage QA Pipeline
                                    </span>
                                </div>

                                <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mb-3 font-[var(--font-outfit)]">
                                    Quality Control & Safety
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-7 font-normal">
                                    Silverline Engineering Ltd maintains structured inspection and quality assurance procedures throughout fabrication and construction.
                                </p>

                                {/* Structured 5-Step Process */}
                                <div className="space-y-3 mb-6">
                                    {qcSystems.map((system, idx) => (
                                        <div
                                            key={idx}
                                            className="group flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 hover:bg-slate-100/80 border border-slate-100 hover:border-slate-200 transition-all duration-200"
                                        >
                                            <span className="w-7 h-7 rounded-full bg-secondary text-white flex items-center justify-center text-xs font-extrabold shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                                                {system.step}
                                            </span>
                                            <div>
                                                <h4 className="text-xs font-bold text-gray-900 leading-snug group-hover:text-primary transition-colors">
                                                    {system.title}
                                                </h4>
                                                <p className="text-[11px] text-gray-500 leading-relaxed mt-0.5 font-normal">
                                                    {system.desc}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-gray-500 italic">
                                <span>These systems ensure projects are delivered safely and strictly according to engineering specifications.</span>
                            </div>
                        </div>
                    </Reveal>

                    {/* Compliance & Certification Card */}
                    <Reveal width="100%" delay={0.15}>
                        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between">
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider">
                                        <Award size={15} />
                                        Accredited Operations
                                    </div>
                                    <span className="text-[11px] font-semibold text-slate-400">
                                        National Standards
                                    </span>
                                </div>

                                <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mb-3 font-[var(--font-outfit)]">
                                    Compliance & Certification
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-7 font-normal">
                                    Silverline Engineering Ltd operates in strict accordance with regulatory, taxation, and statutory industry requirements in Zambia.
                                </p>

                                {/* Compliance Certification List */}
                                <div className="space-y-3.5 mb-7">
                                    {certifications.map((cert, idx) => (
                                        <div
                                            key={idx}
                                            className="group flex items-center justify-between p-4 rounded-2xl bg-slate-50 hover:bg-slate-100/80 border border-slate-100 hover:border-slate-200 transition-all duration-200 gap-3"
                                        >
                                            <div className="flex items-center gap-3.5">
                                                <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                                                    <FileCheck2 size={18} />
                                                </div>
                                                <div>
                                                    <h4 className="text-xs font-bold text-gray-900 group-hover:text-primary transition-colors">
                                                        {cert.name}
                                                    </h4>
                                                    <span className="text-[11px] text-gray-500 font-normal block mt-0.5">
                                                        {cert.status}
                                                    </span>
                                                </div>
                                            </div>

                                            <span
                                                className={`px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider shrink-0 shadow-sm ${
                                                    cert.badge === "In Progress"
                                                        ? "bg-amber-100/90 text-amber-800 border border-amber-200"
                                                        : "bg-emerald-100/90 text-emerald-800 border border-emerald-200"
                                                }`}
                                            >
                                                {cert.badge}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Tender Verification Notice */}
                            <div className="p-4 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-between gap-3">
                                <div className="flex items-center gap-2">
                                    <Sparkles size={15} className="text-secondary shrink-0" />
                                    <span className="text-xs font-semibold text-primary">Need verified compliance documents for tender submissions?</span>
                                </div>
                                <Link
                                    href="/contact"
                                    className="text-xs font-bold text-secondary hover:text-orange-600 flex items-center gap-1 shrink-0 group"
                                >
                                    <span>Contact Us</span>
                                    <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </Reveal>

                </div>

                {/* Final Call to Action Strip: Work With a Team Built for Scale */}
                <Reveal width="100%" delay={0.2}>
                    <div className="rounded-3xl bg-gradient-to-r from-slate-950 via-[#0B1B3D] to-slate-950 text-white p-8 sm:p-12 lg:p-14 shadow-2xl border border-slate-800 relative overflow-hidden">
                        {/* Glow accent */}
                        <div className="absolute top-0 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl pointer-events-none" />

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                            
                            <div className="lg:col-span-7 space-y-3.5">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 text-secondary text-xs font-bold uppercase tracking-wider border border-secondary/30">
                                    <Factory size={13} />
                                    Steel & Concrete Construction
                                </div>
                                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight font-[var(--font-outfit)] text-white">
                                    Work With a Team Built for Scale
                                </h3>
                                <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-xl">
                                    Silverline Engineering Ltd provides the engineering expertise, fabrication capability, and execution discipline required to deliver complex industrial and infrastructure projects.
                                </p>
                                
                                {/* Operating Hours */}
                                <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-gray-300">
                                    <div className="flex items-center gap-2 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10">
                                        <Clock size={14} className="text-secondary" />
                                        <span className="font-medium">MON – FRI: 8:00 AM – 5:00 PM</span>
                                    </div>
                                    <div className="bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10 font-medium">
                                        SAT: 8:00 AM – 1:00 PM
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-secondary hover:bg-orange-600 text-white font-bold text-sm rounded-full transition-all shadow-xl shadow-secondary/25 hover:scale-[1.02] active:scale-[0.98]"
                                >
                                    <span>Request a Quote</span>
                                    <ArrowUpRight size={17} />
                                </Link>

                                <div className="grid grid-cols-2 gap-2.5">
                                    <a
                                        href="tel:+260966626579"
                                        className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs rounded-full border border-white/15 transition-all active:scale-95 shadow-sm"
                                    >
                                        <Phone size={14} className="text-secondary" />
                                        <span>0966 626579</span>
                                    </a>

                                    <a
                                        href="https://wa.me/260966626579"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-full transition-all shadow-md active:scale-95"
                                    >
                                        <WhatsAppIcon size={15} className="text-white" />
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
