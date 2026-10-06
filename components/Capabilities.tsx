"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    Factory,
    Cog,
    CheckCircle2,
    Phone,
    ArrowUpRight,
    Clock,
    Layers,
    Play,
    Pause,
    Volume2,
    VolumeX,
    Maximize2,
    X,
    Sparkles,
} from "lucide-react";
import { Reveal } from "./Reveal";
import WhatsAppIcon from "./WhatsAppIcon";

// Premium Custom Dual-Tone Industrial Icons
function EngineeringCompassIcon({ className = "" }: { className?: string }) {
    return (
        <svg viewBox="0 0 48 48" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
            <rect width="48" height="48" rx="14" fill="url(#eng-bg)" />
            <circle cx="24" cy="24" r="15" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
            <circle cx="24" cy="24" r="5" fill="#F97316" fillOpacity="0.25" stroke="#F97316" strokeWidth="2" />
            <path d="M24 9V14M24 34V39M9 24H14M34 24H39" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
            <path d="M16 16L24 24L32 32M16 32L24 24L32 16" stroke="#FFFFFF" strokeWidth="1.75" strokeLinecap="round" />
            <circle cx="24" cy="24" r="2" fill="#FFFFFF" />
            <defs>
                <linearGradient id="eng-bg" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0B1B3D" />
                    <stop stopColor="#1E3A8A" />
                </linearGradient>
            </defs>
        </svg>
    );
}

function FabricationTorchIcon({ className = "" }: { className?: string }) {
    return (
        <svg viewBox="0 0 48 48" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
            <rect width="48" height="48" rx="14" fill="url(#fab-bg)" />
            <path d="M12 36L20 28M15 39L23 31" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M22 26L30 18L33 21L25 29L22 26Z" fill="#38BDF8" fillOpacity="0.3" stroke="#38BDF8" strokeWidth="2" />
            <path d="M30 18L35 13L37 15L32 20" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
            <path d="M37 11L41 7M34 8L36 6M40 14L42 12" stroke="#F97316" strokeWidth="2" strokeLinecap="round" />
            <circle cx="39" cy="9" r="1.5" fill="#FBBF24" />
            <defs>
                <linearGradient id="fab-bg" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0F172A" />
                    <stop stopColor="#1E293B" />
                </linearGradient>
            </defs>
        </svg>
    );
}

function SiteSupervisorIcon({ className = "" }: { className?: string }) {
    return (
        <svg viewBox="0 0 48 48" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
            <rect width="48" height="48" rx="14" fill="url(#sup-bg)" />
            <path d="M13 27C13 20.9249 17.9249 16 24 16C30.0751 16 35 20.9249 35 27V29H13V27Z" fill="#F97316" fillOpacity="0.25" stroke="#F97316" strokeWidth="2" />
            <path d="M10 29C10 28.4477 10.4477 28 11 28H37C37.5523 28 38 28.4477 38 29V31C38 31.5523 37.5523 32 37 32H11C10.4477 32 10 31.5523 10 31V29Z" fill="#F97316" stroke="#F97316" strokeWidth="1.5" />
            <path d="M22 13H26V18H22V13Z" fill="#FFFFFF" />
            <circle cx="24" cy="24" r="3" stroke="#38BDF8" strokeWidth="1.5" />
            <path d="M24 21V27M21 24H27" stroke="#38BDF8" strokeWidth="1.5" />
            <defs>
                <linearGradient id="sup-bg" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#18181B" />
                    <stop stopColor="#27272A" />
                </linearGradient>
            </defs>
        </svg>
    );
}

function SafetyArmorIcon({ className = "" }: { className?: string }) {
    return (
        <svg viewBox="0 0 48 48" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
            <rect width="48" height="48" rx="14" fill="url(#safe-bg)" />
            <path d="M24 10L36 15V24C36 31.5 30.8 38.3 24 40C17.2 38.3 12 31.5 12 24V15L24 10Z" fill="#10B981" fillOpacity="0.2" stroke="#10B981" strokeWidth="2" strokeLinejoin="round" />
            <path d="M24 18V28M19 23H29" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="24" cy="23" r="7" stroke="#38BDF8" strokeWidth="1" strokeDasharray="2 2" />
            <defs>
                <linearGradient id="safe-bg" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#064E3B" />
                    <stop stopColor="#065F46" />
                </linearGradient>
            </defs>
        </svg>
    );
}

// Milestone QC Icons
function PlanningIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor">
            <rect x="3" y="4" width="18" height="18" rx="3" strokeWidth="1.75" />
            <path d="M16 2V6M8 2V6M3 10H21" strokeWidth="1.75" strokeLinecap="round" />
            <path d="M8 14H12M8 17H16" stroke="#F97316" strokeWidth="2" strokeLinecap="round" />
        </svg>
    );
}

function VerificationIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor">
            <circle cx="11" cy="11" r="7" strokeWidth="1.75" />
            <path d="M20 20L16 16" strokeWidth="2" strokeLinecap="round" />
            <path d="M8 11L10 13L14 9" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function InspectionCheckIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" strokeWidth="1.75" strokeLinejoin="round" />
            <path d="M2 17L12 22L22 17" stroke="#F97316" strokeWidth="1.75" strokeLinejoin="round" />
            <path d="M2 12L12 17L22 12" strokeWidth="1.75" strokeLinejoin="round" />
        </svg>
    );
}

function SupervisionCraneIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor">
            <path d="M4 22V6L19 2M4 6H21M19 2V8" strokeWidth="1.75" strokeLinecap="round" />
            <path d="M9 22L13 14M15 22L11 14" stroke="#F97316" strokeWidth="1.75" strokeLinecap="round" />
            <circle cx="19" cy="11" r="2" fill="#38BDF8" />
        </svg>
    );
}

function SiteShieldIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor">
            <path d="M12 2L20 5V11C20 16.5 16.5 21 12 22C7.5 21 4 16.5 4 11V5L12 2Z" strokeWidth="1.75" strokeLinejoin="round" />
            <path d="M9 12L11 14L15 10" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

// Official Crest Seals
function ZRASeal() {
    return (
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-700/30 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0 shadow-inner">
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor">
                <circle cx="12" cy="12" r="9" strokeWidth="1.5" strokeDasharray="2 2" />
                <path d="M8 12H16M12 8V16" strokeWidth="2" strokeLinecap="round" />
                <circle cx="12" cy="12" r="4" fill="#F97316" fillOpacity="0.4" />
            </svg>
        </div>
    );
}

function NapsaSeal() {
    return (
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-700/30 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0 shadow-inner">
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor">
                <path d="M12 3L4 7V13C4 18 7.5 21 12 22C16.5 21 20 18 20 13V7L12 3Z" strokeWidth="1.5" />
                <path d="M9 12L11 14L15 10" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
            </svg>
        </div>
    );
}

function WorkersCompSeal() {
    return (
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-700/30 border border-blue-500/40 flex items-center justify-center text-blue-400 shrink-0 shadow-inner">
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor">
                <circle cx="12" cy="8" r="4" strokeWidth="1.5" />
                <path d="M6 20C6 16.5 9 14 12 14C15 14 18 16.5 18 20" strokeWidth="1.75" strokeLinecap="round" />
                <path d="M18 9L20 11L22 9" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        </div>
    );
}

function ISOSeal() {
    return (
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-fuchsia-700/30 border border-purple-500/40 flex items-center justify-center text-purple-400 shrink-0 shadow-inner">
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor">
                <circle cx="12" cy="12" r="9" strokeWidth="1.75" />
                <circle cx="12" cy="12" r="6" stroke="#C084FC" strokeWidth="1" strokeDasharray="3 3" />
                <circle cx="12" cy="12" r="2.5" fill="#C084FC" />
            </svg>
        </div>
    );
}

export default function Capabilities() {
    const [isVideoPlaying, setIsVideoPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(true);
    const [lightboxImage, setLightboxImage] = useState<string | null>(null);

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
            code: "DIV-01 // ENGINEERING",
            title: "Experienced Engineering Team",
            description: "Registered structural and civil engineers guiding design integrity, finite element analysis, and technical compliance.",
            Icon: EngineeringCompassIcon,
            tag: "Structural & Civil Leads",
        },
        {
            code: "DIV-02 // FABRICATION",
            title: "Skilled Fabricators & Technicians",
            description: "Certified welders, machinists, and steel fitters delivering high-tolerance structural components to AWS/SABS standards.",
            Icon: FabricationTorchIcon,
            tag: "AWS Certified Welders",
        },
        {
            code: "DIV-03 // SITE LEAD",
            title: "Dedicated Site Supervisors & PMs",
            description: "On-site leadership managing timelines, critical path milestones, heavy crane lifts, and turnkey subcontractor alignment.",
            Icon: SiteSupervisorIcon,
            tag: "Project Delivery Leaders",
        },
        {
            code: "DIV-04 // HSE PROTOCOL",
            title: "Safety-Focused Operational Teams",
            description: "Trained safety officers ensuring zero-harm site protocols, daily hazard mitigation, and rigorous occupational health checks.",
            Icon: SafetyArmorIcon,
            tag: "Zero-Harm Safety Officers",
        },
    ];

    const workshopPhotos = [
        {
            src: "/capabilities/metal-fabrication.jpg",
            title: "Arc Welding & Structural Assembly",
            station: "STATION 01 // TIG/MIG HIGH AMPERAGE",
            spec: "Heavy flange welding & portal joint reinforcement",
        },
        {
            src: "/capabilities/cnc-frame-2.jpg",
            title: "CNC Automated Plasma Gantry",
            station: "STATION 02 // 6-AXIS AUTOMATED BED",
            spec: "Sub-millimeter CNC cutting of structural plates",
        },
        {
            src: "/capabilities/cnc-frame-3.jpg",
            title: "Beam Detailing & Tolerance Inspection",
            station: "STATION 03 // ALIGNMENT & QUALITY INSPECTION",
            spec: "Full ultrasonic weld verification & paint prep",
        },
    ];

    const qcSteps = [
        {
            phase: "01",
            title: "Detailed Project Planning & Scheduling",
            desc: "Comprehensive critical-path milestones, CAD sequencing, and logistics scheduling.",
            Icon: PlanningIcon,
            accent: "from-amber-500/20 to-orange-500/20 border-amber-500/30 text-amber-400",
        },
        {
            phase: "02",
            title: "Material Inspection & Verification",
            desc: "Mill certificate checks, metallurgical chemical analysis, and steel tensile testing.",
            Icon: VerificationIcon,
            accent: "from-sky-500/20 to-blue-500/20 border-sky-500/30 text-sky-400",
        },
        {
            phase: "03",
            title: "Fabrication Quality Checks",
            desc: "Ultrasonic weld inspection, dimensional tolerance auditing, and robotic bed calibration.",
            Icon: InspectionCheckIcon,
            accent: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-400",
        },
        {
            phase: "04",
            title: "Structural Installation Supervision",
            desc: "Certified rigging supervision, torque auditing for structural bolts, and vertical plumb laser checks.",
            Icon: SupervisionCraneIcon,
            accent: "from-purple-500/20 to-indigo-500/20 border-purple-500/30 text-purple-400",
        },
        {
            phase: "05",
            title: "Safety Compliance & Site Management",
            desc: "Daily toolbox meetings, PPE enforcement, and Zero-Harm risk assessments on all active sites.",
            Icon: SiteShieldIcon,
            accent: "from-rose-500/20 to-red-500/20 border-rose-500/30 text-rose-400",
        },
    ];

    const certifications = [
        {
            name: "Zambia Revenue Authority (ZRA)",
            status: "Tax Clearance Certified",
            badge: "ACTIVE & COMPLIANT",
            badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
            Seal: ZRASeal,
            detail: "Official corporate fiscal standing & valid annual clearance",
        },
        {
            name: "National Pension Scheme Authority (NAPSA)",
            status: "Statutory Workforce Compliance",
            badge: "OFFICIALLY CERTIFIED",
            badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
            Seal: NapsaSeal,
            detail: "Full social security contribution compliance for workforce",
        },
        {
            name: "Workers’ Compensation Fund Control Board",
            status: "Occupational Health & Labor Protection",
            badge: "100% COMPLIANT",
            badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
            Seal: WorkersCompSeal,
            detail: "Full statutory labor insurance and site safety coverage",
        },
        {
            name: "ISO Quality Management Standards",
            status: "ISO Certification Process",
            badge: "AUDIT IN PROGRESS",
            badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
            Seal: ISOSeal,
            detail: "Transitioning to ISO 9001:2015 quality assurance protocols",
        },
    ];

    return (
        <section id="capabilities" className="py-24 bg-gradient-to-b from-slate-950 via-[#071329] to-slate-950 text-white overflow-hidden relative">
            
            {/* Ambient Background Grid Animation */}
            <div className="absolute inset-0 animate-moving-grid opacity-15 pointer-events-none" />
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-secondary/15 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-1/2 -left-40 w-96 h-96 bg-primary/25 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <Reveal width="100%">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/30 text-secondary text-xs font-bold uppercase tracking-widest mb-4 shadow-[0_0_15px_rgba(249,115,22,0.2)]">
                            <Factory size={14} className="animate-pulse" />
                            Our Capabilities
                        </div>
                    </Reveal>

                    <Reveal width="100%" delay={0.1}>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-5 text-white">
                            Engineering Capability Built for{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-amber-400 to-orange-500">
                                Complex Projects
                            </span>
                        </h2>
                    </Reveal>

                    <Reveal width="100%" delay={0.2}>
                        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                            <strong className="text-white font-semibold">High-Capacity Engineering & Construction Expertise:</strong>{" "}
                            Silverline Engineering Ltd operates with a strong focus on engineering discipline, operational efficiency, and execution certainty. Our integrated capabilities allow us to deliver projects ranging from steel fabrication and structural installation to turnkey industrial developments.
                        </p>
                    </Reveal>
                </div>

                {/* Industrial Metrics Ribbon */}
                <Reveal width="100%" delay={0.25}>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
                        <div className="bg-gradient-to-b from-slate-900/90 to-slate-950/90 rounded-2xl p-6 border border-slate-800 shadow-xl text-center group hover:border-secondary/50 transition-all duration-300">
                            <span className="text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 font-[var(--font-outfit)] block group-hover:scale-105 transition-transform">
                                2,500m²
                            </span>
                            <span className="text-xs font-semibold text-secondary uppercase tracking-wider mt-1 block">Fabrication Facility</span>
                            <span className="text-[11px] text-gray-400 block mt-0.5">Heavy Lusaka Yard</span>
                        </div>

                        <div className="bg-gradient-to-b from-slate-900/90 to-slate-950/90 rounded-2xl p-6 border border-slate-800 shadow-xl text-center group hover:border-secondary/50 transition-all duration-300">
                            <span className="text-3xl lg:text-4xl font-extrabold text-secondary font-[var(--font-outfit)] block group-hover:scale-105 transition-transform">
                                2,000m²
                            </span>
                            <span className="text-xs font-semibold text-white uppercase tracking-wider mt-1 block">Prefab Production</span>
                            <span className="text-[11px] text-gray-400 block mt-0.5">Modular Assembly Line</span>
                        </div>

                        <div className="bg-gradient-to-b from-slate-900/90 to-slate-950/90 rounded-2xl p-6 border border-slate-800 shadow-xl text-center group hover:border-sky-500/50 transition-all duration-300">
                            <span className="text-3xl lg:text-4xl font-extrabold text-sky-400 font-[var(--font-outfit)] block group-hover:scale-105 transition-transform">
                                CNC Precision
                            </span>
                            <span className="text-xs font-semibold text-gray-300 uppercase tracking-wider mt-1 block">Plasma & Rolling</span>
                            <span className="text-[11px] text-gray-400 block mt-0.5">Automated Machinery</span>
                        </div>

                        <div className="bg-gradient-to-b from-slate-900/90 to-slate-950/90 rounded-2xl p-6 border border-slate-800 shadow-xl text-center group hover:border-emerald-500/50 transition-all duration-300">
                            <span className="text-3xl lg:text-4xl font-extrabold text-emerald-400 font-[var(--font-outfit)] block group-hover:scale-105 transition-transform">
                                100%
                            </span>
                            <span className="text-xs font-semibold text-white uppercase tracking-wider mt-1 block">Regulatory Compliance</span>
                            <span className="text-[11px] text-gray-400 block mt-0.5">ZRA • NAPSA • WCFB</span>
                        </div>
                    </div>
                </Reveal>

                {/* Core Feature 1: Fabrication Facility */}
                <div className="mb-28">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                        <div className="lg:col-span-6 space-y-6">
                            <Reveal width="100%">
                                <div className="space-y-3">
                                    <span className="text-secondary font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                                        <Cog size={15} className="animate-spin-slow" /> Industrial Steel Manufacturing
                                    </span>
                                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                                        Fabrication Facility
                                    </h3>
                                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                                        Our fabrication facility located in Lusaka is designed to support large-scale steel manufacturing and complex structural systems.
                                    </p>
                                </div>
                            </Reveal>

                            <Reveal delay={0.1} width="100%">
                                <div className="bg-slate-900/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl space-y-5">
                                    <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400 flex items-center gap-2">
                                        <Layers size={16} className="text-secondary" />
                                        Key Infrastructure & Heavy Machinery
                                    </h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                                        {fabricationFeatures.map((feature, i) => (
                                            <div key={i} className="flex items-start gap-2.5 text-xs text-gray-200 font-medium group">
                                                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-emerald-500 group-hover:text-black transition-colors">
                                                    <CheckCircle2 size={12} />
                                                </div>
                                                <span className="group-hover:text-white transition-colors">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="pt-4 border-t border-slate-800/80 text-xs text-gray-400 leading-relaxed italic bg-black/20 p-3.5 rounded-xl border border-white/5">
                                        This infrastructure allows Silverline Engineering Ltd to fabricate high-performance structural steel systems for industrial and commercial construction projects.
                                    </div>
                                </div>
                            </Reveal>
                        </div>

                        {/* Interactive CNC Video & Facility Photos */}
                        <div className="lg:col-span-6 space-y-4">
                            <Reveal delay={0.2} width="100%">
                                <div className="relative rounded-3xl overflow-hidden aspect-video shadow-2xl border border-slate-700/80 bg-black group">
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
                                    {/* Scanline Effect */}
                                    <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-sky-400 to-transparent animate-scanline pointer-events-none opacity-70" />

                                    {/* Top Status HUD */}
                                    <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/75 backdrop-blur-md text-white text-xs font-semibold border border-white/10 shadow-lg">
                                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                                        <span>CNC Plasma Automation Active</span>
                                    </div>

                                    {/* Controls */}
                                    <div className="absolute bottom-4 right-4 z-10 flex items-center gap-2">
                                        <button
                                            onClick={togglePlay}
                                            aria-label={isVideoPlaying ? "Pause Video" : "Play Video"}
                                            className="w-9 h-9 rounded-full bg-black/70 hover:bg-secondary text-white flex items-center justify-center backdrop-blur-md transition-all border border-white/20"
                                        >
                                            {isVideoPlaying ? <Pause size={14} /> : <Play size={14} />}
                                        </button>
                                        <button
                                            onClick={toggleMute}
                                            aria-label={isMuted ? "Unmute Video" : "Mute Video"}
                                            className="w-9 h-9 rounded-full bg-black/70 hover:bg-secondary text-white flex items-center justify-center backdrop-blur-md transition-all border border-white/20"
                                        >
                                            {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                                        </button>
                                    </div>
                                </div>
                            </Reveal>

                            <Reveal delay={0.3} width="100%">
                                <div className="grid grid-cols-2 gap-4">
                                    <div
                                        onClick={() => setLightboxImage("/capabilities/fabrication-facility.jpg")}
                                        className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-slate-800 group cursor-pointer"
                                    >
                                        <Image
                                            src="/capabilities/fabrication-facility.jpg"
                                            alt="Lusaka Fabrication Facility"
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                                            sizes="(max-width: 768px) 50vw, 25vw"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end justify-between p-3.5">
                                            <span className="text-xs font-semibold text-white">Lusaka Facility & Overhead Cranes</span>
                                            <Maximize2 size={14} className="text-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                    </div>

                                    <div
                                        onClick={() => setLightboxImage("/capabilities/welding-workshop.jpg")}
                                        className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-slate-800 group cursor-pointer"
                                    >
                                        <Image
                                            src="/capabilities/welding-workshop.jpg"
                                            alt="Welding Workshop"
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                                            sizes="(max-width: 768px) 50vw, 25vw"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end justify-between p-3.5">
                                            <span className="text-xs font-semibold text-white">Multiple Welding Stations</span>
                                            <Maximize2 size={14} className="text-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </div>

                {/* Core Feature 2: Engineering & Workforce (Redesigned with Premium Icons & Animated Photo Cards) */}
                <div className="mb-28">
                    <div className="bg-gradient-to-b from-slate-900 via-[#071329] to-slate-950 rounded-3xl p-8 sm:p-12 lg:p-14 border border-slate-800 shadow-2xl relative overflow-hidden">
                        
                        {/* Moving dots texture inside card */}
                        <div className="absolute inset-0 animate-moving-dots opacity-20 pointer-events-none" />

                        <div className="relative z-10 max-w-3xl mb-12">
                            <span className="text-secondary font-bold text-xs uppercase tracking-widest flex items-center gap-2 mb-2">
                                <Sparkles size={14} /> Technical & Operational Excellence
                            </span>
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-white">
                                Engineering & Workforce
                            </h3>
                            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                                Our technical and operational teams combine engineering expertise with practical construction experience to deliver projects efficiently. Our teams work collaboratively to maintain consistent quality standards across all phases of project execution.
                            </p>
                        </div>

                        {/* 4 Professional Glassmorphic Team Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 mb-12">
                            {teamStructure.map((member, i) => (
                                <Reveal key={i} delay={i * 0.08} width="100%">
                                    <div className="bg-slate-950/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-800/80 hover:border-secondary/60 hover:shadow-[0_10px_35px_-10px_rgba(249,115,22,0.3)] transition-all duration-500 h-full flex flex-col justify-between group relative overflow-hidden">
                                        
                                        {/* Subtle top accent shimmer */}
                                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                                        <div>
                                            {/* Code badge */}
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="text-[10px] font-mono uppercase tracking-wider text-gray-500 group-hover:text-secondary transition-colors">
                                                    {member.code}
                                                </span>
                                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                            </div>

                                            {/* Premium Custom SVG Icon */}
                                            <div className="mb-5 transform group-hover:scale-105 group-hover:-translate-y-1 transition-all duration-300 drop-shadow-lg">
                                                <member.Icon className="w-12 h-12" />
                                            </div>

                                            <h4 className="font-bold text-base text-white mb-2 group-hover:text-amber-300 transition-colors">
                                                {member.title}
                                            </h4>
                                            
                                            <p className="text-xs text-gray-400 leading-relaxed">
                                                {member.description}
                                            </p>
                                        </div>

                                        <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-gray-400">
                                            <span className="text-secondary font-medium">{member.tag}</span>
                                            <span className="text-gray-600 font-mono">2026</span>
                                        </div>
                                    </div>
                                </Reveal>
                            ))}
                        </div>

                        {/* 3 Animated Photos with Live HUD Effects */}
                        <div className="relative z-10 pt-8 border-t border-slate-800/80">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-xs font-bold uppercase tracking-widest text-sky-400 font-mono">
                                    [WORKSHOP MONITORING // ACTIVE PRODUCTION TELEMETRY]
                                </span>
                                <span className="text-[11px] text-emerald-400 flex items-center gap-1.5 font-medium">
                                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                    Live Shopfloor Operations
                                </span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                                {workshopPhotos.map((photo, index) => (
                                    <Reveal key={index} delay={index * 0.1} width="100%">
                                        <div
                                            onClick={() => setLightboxImage(photo.src)}
                                            className="group relative aspect-video rounded-2xl overflow-hidden border border-slate-700/80 shadow-xl cursor-pointer bg-slate-950"
                                        >
                                            <Image
                                                src={photo.src}
                                                alt={photo.title}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-700 filter group-hover:brightness-110"
                                                sizes="(max-width: 768px) 100vw, 33vw"
                                            />

                                            {/* Animated Laser Scanning Line on Hover */}
                                            <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent animate-scanline pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />

                                            {/* Gradient Scrim */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20 group-hover:from-black/75 transition-colors" />

                                            {/* Top Badge */}
                                            <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                                                <span className="px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md text-[10px] font-mono text-amber-300 border border-white/10">
                                                    {photo.station}
                                                </span>
                                                <div className="w-7 h-7 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <Maximize2 size={13} />
                                                </div>
                                            </div>

                                            {/* Bottom Details */}
                                            <div className="absolute bottom-3 left-3 right-3 z-10">
                                                <h5 className="font-bold text-sm text-white group-hover:text-secondary transition-colors">
                                                    {photo.title}
                                                </h5>
                                                <p className="text-[11px] text-gray-300 mt-0.5 font-medium line-clamp-1">
                                                    {photo.spec}
                                                </p>
                                            </div>
                                        </div>
                                    </Reveal>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>

                {/* Core Features 3 & 4: Quality Control & Compliance (Redesigned with Vivid Color Themes & Micro-Animations) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-28">

                    {/* Quality Control & Safety Card */}
                    <Reveal width="100%">
                        <div className="bg-gradient-to-br from-amber-950/30 via-slate-900 to-slate-950 rounded-3xl p-8 sm:p-10 border border-amber-500/30 shadow-2xl h-full flex flex-col justify-between relative overflow-hidden group">
                            
                            {/* Decorative Amber Glow */}
                            <div className="absolute -top-20 -left-20 w-48 h-48 bg-amber-500/10 rounded-full blur-[80px] pointer-events-none" />

                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
                                        <SiteShieldIcon />
                                        Zero-Harm Assurance
                                    </div>
                                    <span className="text-[11px] font-mono text-amber-400/80">SOP-2026/QA</span>
                                </div>

                                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-3">
                                    Quality Control & Safety
                                </h3>
                                
                                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                                    Silverline Engineering Ltd maintains structured inspection and quality assurance procedures throughout fabrication and construction.
                                </p>

                                <div className="space-y-3 mb-6">
                                    <span className="text-xs font-bold uppercase tracking-wider text-amber-300/90 font-mono block">
                                        Our Project Management Approach Includes:
                                    </span>
                                    
                                    {qcSteps.map((step, idx) => (
                                        <div
                                            key={idx}
                                            className="group/item flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/50 hover:bg-slate-850 hover:translate-x-1.5 transition-all duration-300 shadow-md"
                                        >
                                            {/* Phase Number Badge */}
                                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 text-white flex items-center justify-center text-xs font-extrabold shrink-0 shadow-md">
                                                {step.phase}
                                            </div>

                                            {/* Step Details */}
                                            <div className="flex-1">
                                                <h5 className="text-xs font-bold text-white group-hover/item:text-amber-300 transition-colors">
                                                    {step.title}
                                                </h5>
                                                <p className="text-[11px] text-gray-400 mt-0.5 leading-snug">
                                                    {step.desc}
                                                </p>
                                            </div>

                                            {/* Status check */}
                                            <div className="text-emerald-400 opacity-60 group-hover/item:opacity-100 transition-opacity">
                                                <CheckCircle2 size={15} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-4 border-t border-amber-500/20 text-xs text-amber-200/80 leading-relaxed italic bg-amber-950/20 p-3.5 rounded-xl border border-amber-500/10">
                                These systems ensure projects are delivered safely and strictly according to engineering specifications.
                            </div>
                        </div>
                    </Reveal>

                    {/* Compliance & Certification Card */}
                    <Reveal width="100%" delay={0.15}>
                        <div className="bg-gradient-to-br from-emerald-950/30 via-slate-900 to-slate-950 rounded-3xl p-8 sm:p-10 border border-emerald-500/30 shadow-2xl h-full flex flex-col justify-between relative overflow-hidden group">
                            
                            {/* Decorative Emerald Glow */}
                            <div className="absolute -top-20 -right-20 w-48 h-48 bg-emerald-500/10 rounded-full blur-[80px] pointer-events-none" />

                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                                        <CheckCircle2 size={14} />
                                        Accredited Operations
                                    </div>
                                    <span className="text-[11px] font-mono text-emerald-400/80">REPUBLIC OF ZAMBIA</span>
                                </div>

                                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-3">
                                    Compliance & Certification
                                </h3>

                                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                                    Silverline Engineering Ltd operates in accordance with regulatory and industry requirements.
                                </p>

                                <div className="space-y-3.5 mb-6">
                                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-300/90 font-mono block">
                                        Our Compliance Includes:
                                    </span>

                                    {certifications.map((cert, idx) => (
                                        <div
                                            key={idx}
                                            className="group/cert flex items-center justify-between p-4 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-850 hover:translate-x-1.5 transition-all duration-300 gap-3 shadow-md"
                                        >
                                            <div className="flex items-center gap-3.5">
                                                <cert.Seal />
                                                <div>
                                                    <span className="text-xs font-bold text-white block group-hover/cert:text-emerald-300 transition-colors">
                                                        {cert.name}
                                                    </span>
                                                    <span className="text-[11px] text-gray-400 block mt-0.5">
                                                        {cert.status}
                                                    </span>
                                                </div>
                                            </div>

                                            <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border shrink-0 ${cert.badgeColor}`}>
                                                {cert.badge}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/20 flex items-center justify-between gap-3">
                                <span className="text-xs font-semibold text-emerald-200">
                                    Need official statutory compliance documentation for tenders?
                                </span>
                                <Link
                                    href="/contact"
                                    className="px-4 py-1.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-1 transition-colors shrink-0 shadow-md"
                                >
                                    <span>Contact Us</span>
                                    <ArrowUpRight size={13} />
                                </Link>
                            </div>
                        </div>
                    </Reveal>

                </div>

                {/* Core Feature 5: Real Background Image + Moving Patterns Call To Action Banner */}
                <Reveal width="100%" delay={0.2}>
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-secondary/40 group">
                        
                        {/* 1. Real Industrial Workshop Photography Background */}
                        <div className="absolute inset-0 z-0">
                            <Image
                                src="/capabilities/welding-workshop.jpg"
                                alt="Silverline Industrial Workshop"
                                fill
                                className="object-cover object-center filter brightness-[0.25] contrast-125 group-hover:scale-105 transition-transform duration-1000"
                            />
                        </div>

                        {/* 2. Moving CAD Blueprint Grid Pattern */}
                        <div className="absolute inset-0 z-[1] animate-moving-grid opacity-35 pointer-events-none" />

                        {/* 3. Moving Technical Dots Pattern */}
                        <div className="absolute inset-0 z-[2] animate-moving-dots opacity-30 pointer-events-none" />

                        {/* 4. Deep Contrast Gradient Overlay */}
                        <div className="absolute inset-0 z-[3] bg-gradient-to-r from-slate-950 via-[#061126]/90 to-slate-950/80 pointer-events-none" />

                        {/* 5. Animated Ambient Orange Glow Sweeper */}
                        <div className="absolute top-0 right-1/4 w-72 h-72 bg-secondary/20 rounded-full blur-[100px] pointer-events-none animate-pulse" />

                        {/* Content */}
                        <div className="relative z-10 p-8 sm:p-12 lg:p-16">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                                
                                <div className="lg:col-span-7 space-y-4">
                                    {/* Live Indicator */}
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-[11px] font-mono uppercase tracking-wider backdrop-blur-md">
                                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                        <span>Current Production Capacity Available • Lusaka Yard</span>
                                    </div>

                                    <div className="space-y-2">
                                        <span className="text-secondary text-xs font-bold uppercase tracking-widest block font-mono">
                                            [STEEL & CONCRETE CONSTRUCTION // INDUSTRIAL INFRASTRUCTURE]
                                        </span>
                                        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                                            Work With a Team <br className="hidden sm:inline" />
                                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-amber-400 to-orange-400">
                                                Built for Scale
                                            </span>
                                        </h3>
                                    </div>

                                    <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-xl">
                                        Silverline Engineering Ltd provides the engineering expertise, fabrication capability, and execution discipline required to deliver complex industrial and infrastructure projects.
                                    </p>

                                    {/* Operating Hours & Contact Strip */}
                                    <div className="flex flex-wrap items-center gap-4 pt-3 text-xs text-gray-300 font-medium">
                                        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
                                            <Clock size={14} className="text-secondary shrink-0" />
                                            <span>MON – FRI: 8:00 AM – 5:00 PM</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
                                            <span>SAT: 8:00 AM – 1:00 PM</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="lg:col-span-5 flex flex-col gap-3.5 justify-center">
                                    <Link
                                        href="/contact"
                                        className="relative inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-gradient-to-r from-secondary to-orange-600 hover:from-orange-500 hover:to-secondary text-white font-bold text-sm rounded-full transition-all duration-300 shadow-[0_0_25px_rgba(249,115,22,0.45)] hover:shadow-[0_0_35px_rgba(249,115,22,0.7)] hover:scale-[1.02] active:scale-[0.98] border border-orange-400/30"
                                    >
                                        <span>Request a Quote</span>
                                        <ArrowUpRight size={17} />
                                    </Link>

                                    <div className="grid grid-cols-2 gap-3">
                                        <a
                                            href="tel:+260966626579"
                                            className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-slate-900/80 hover:bg-slate-800 text-white font-semibold text-xs rounded-full border border-slate-700/80 backdrop-blur-md transition-all hover:border-slate-500 shadow-md"
                                        >
                                            <Phone size={14} className="text-secondary" />
                                            <span>0966 626579</span>
                                        </a>

                                        <a
                                            href="https://wa.me/260966626579"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs rounded-full transition-all shadow-md shadow-emerald-600/30 hover:scale-[1.02] border border-emerald-400/40"
                                        >
                                            <WhatsAppIcon size={15} className="text-white" />
                                            <span>WhatsApp</span>
                                        </a>
                                    </div>

                                    <p className="text-[11px] text-gray-400 text-center font-mono pt-1">
                                        Direct response from our Lusaka engineering desk
                                    </p>
                                </div>

                            </div>
                        </div>

                    </div>
                </Reveal>

            </div>

            {/* Lightbox Modal for Fullscreen Photo Preview */}
            {lightboxImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
                    onClick={() => setLightboxImage(null)}
                >
                    <button
                        onClick={() => setLightboxImage(null)}
                        className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/20 z-50"
                        aria-label="Close Preview"
                    >
                        <X size={20} />
                    </button>
                    <div className="relative max-w-5xl max-h-[85vh] w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                        <Image
                            src={lightboxImage}
                            alt="Workshop Fullscreen Preview"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            )}

        </section>
    );
}
