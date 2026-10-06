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
    ArrowRight,
    Clock,
    FileCheck,
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

    // 4 Primary Capability Cards matching Projects & Services component styling
    const capabilityCards = [
        {
            value: "2,500m²",
            title: "Fabrication Facility",
            badge: "Heavy Structural",
            description: "High-capacity Lusaka facility equipped with overhead cranes and automated tooling for large-scale steel manufacturing.",
            image: "/capabilities/fabrication-facility.jpg",
            icon: Factory,
        },
        {
            value: "2,000m²",
            title: "Prefab Production Line",
            badge: "Modular Units",
            description: "Dedicated production line engineered for precision manufacturing of pre-fabricated units and rapid site installation.",
            image: "/capabilities/metal-fabrication.jpg",
            icon: Layers,
        },
        {
            value: "CNC & Plasma",
            title: "Automated Precision",
            badge: "Precision Cutting",
            description: "Equipped with high-accuracy CNC machinery, plasma cutting systems, rolling machines, and multiple welding stations.",
            image: "/capabilities/cnc-frame-2.jpg",
            icon: Cog,
        },
        {
            value: "100%",
            title: "Regulatory Compliance",
            badge: "Certified Standards",
            description: "Full statutory compliance including ZRA Tax Clearance, NAPSA, Workers' Compensation Fund, and ISO certification in progress.",
            image: "/capabilities/welding-workshop.jpg",
            icon: ShieldCheck,
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
            badge: "Compliant",
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
        <section id="capabilities" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header - Matching Services & Projects component style */}
                <div className="text-center mb-16">
                    <Reveal width="100%">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Capabilities</h2>
                        <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
                    </Reveal>
                    <Reveal width="100%" delay={0.2}>
                        <p className="text-gray-900 font-semibold text-lg md:text-xl max-w-3xl mx-auto mb-3">
                            Engineering Capability Built for Complex Projects
                        </p>
                        <p className="text-gray-600 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
                            Silverline Engineering Ltd operates with a strong focus on engineering discipline, operational efficiency, and execution certainty. Our integrated capabilities allow us to deliver projects ranging from steel fabrication and structural installation to turnkey industrial developments.
                        </p>
                    </Reveal>
                </div>

                {/* 4 Cards Grid - Exact Same Component Style as Projects & Services */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {capabilityCards.map((card, index) => (
                        <Reveal key={index} delay={index * 0.1} width="100%">
                            <div className="group overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 bg-white border border-gray-100 flex flex-col h-full cursor-pointer">
                                
                                {/* Image Container with Hover Zoom & Badge */}
                                <div className="relative h-48 w-full overflow-hidden shrink-0 bg-gray-100">
                                    <Image
                                        src={card.image}
                                        alt={card.title}
                                        fill
                                        loading="lazy"
                                        className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                                    <div className="absolute top-4 left-4 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow">
                                        {card.badge}
                                    </div>
                                </div>

                                {/* Content Card Body */}
                                <div className="p-6 flex flex-col flex-grow justify-between">
                                    <div>
                                        <span className="text-3xl font-extrabold text-primary font-[var(--font-outfit)] block mb-1 group-hover:text-secondary transition-colors">
                                            {card.value}
                                        </span>
                                        <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                                            {card.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            {card.description}
                                        </p>
                                    </div>
                                    <div className="w-10 h-0.5 bg-secondary group-hover:w-20 transition-all duration-300 mt-4"></div>
                                </div>

                            </div>
                        </Reveal>
                    ))}
                </div>

                {/* Fabrication Facility Section */}
                <div className="mb-20 pt-8 border-t border-gray-100">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Details */}
                        <Reveal width="100%">
                            <div className="space-y-6">
                                <div>
                                    <span className="text-secondary font-bold text-xs uppercase tracking-wider block mb-2">
                                        Manufacturing Infrastructure
                                    </span>
                                    <h3 className="text-2xl md:text-3xl font-bold text-primary mb-3">
                                        Fabrication Facility
                                    </h3>
                                    <p className="text-gray-600 text-base leading-relaxed">
                                        Our fabrication facility located in Lusaka is designed to support large-scale steel manufacturing and complex structural systems.
                                    </p>
                                </div>

                                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 space-y-3">
                                    <h4 className="text-sm font-bold text-primary uppercase tracking-wide">
                                        Key Facility Features
                                    </h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                                        {fabricationFeatures.map((feature, i) => (
                                            <div key={i} className="flex items-start gap-2 text-xs text-gray-700 font-medium">
                                                <CheckCircle2 size={15} className="text-secondary mt-0.5 shrink-0" />
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <p className="text-gray-600 text-sm leading-relaxed">
                                    This infrastructure allows Silverline Engineering Ltd to fabricate high-performance structural steel systems for industrial and commercial construction projects.
                                </p>
                            </div>
                        </Reveal>

                        {/* Right Video / Workshop Showcase */}
                        <Reveal delay={0.2} width="100%">
                            <div className="space-y-4">
                                <div className="relative rounded-2xl overflow-hidden aspect-video shadow-md border border-gray-200 bg-black group">
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
                                    <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow">
                                        CNC Precision Cutting
                                    </div>
                                    <div className="absolute bottom-4 right-4 flex items-center gap-2">
                                        <button
                                            onClick={togglePlay}
                                            aria-label={isVideoPlaying ? "Pause Video" : "Play Video"}
                                            className="w-8 h-8 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-colors"
                                        >
                                            {isVideoPlaying ? <Pause size={14} /> : <Play size={14} />}
                                        </button>
                                        <button
                                            onClick={toggleMute}
                                            aria-label={isMuted ? "Unmute Video" : "Mute Video"}
                                            className="w-8 h-8 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-colors"
                                        >
                                            {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                                        </button>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="relative aspect-video rounded-xl overflow-hidden shadow-sm border border-gray-100 group">
                                        <Image
                                            src="/capabilities/fabrication-facility.jpg"
                                            alt="Lusaka Facility"
                                            fill
                                            className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                                            sizes="(max-width: 768px) 50vw, 25vw"
                                        />
                                        <div className="absolute bottom-2 left-2 right-2 bg-black/60 backdrop-blur-sm text-white text-[11px] font-medium px-2 py-1 rounded-md text-center">
                                            Lusaka Facility Workshop
                                        </div>
                                    </div>
                                    <div className="relative aspect-video rounded-xl overflow-hidden shadow-sm border border-gray-100 group">
                                        <Image
                                            src="/capabilities/welding-workshop.jpg"
                                            alt="Welding Stations"
                                            fill
                                            className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                                            sizes="(max-width: 768px) 50vw, 25vw"
                                        />
                                        <div className="absolute bottom-2 left-2 right-2 bg-black/60 backdrop-blur-sm text-white text-[11px] font-medium px-2 py-1 rounded-md text-center">
                                            Welding & Assembly Bays
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>

                {/* Engineering & Workforce Section */}
                <div className="mb-20 pt-8 border-t border-gray-100">
                    <div className="text-center mb-12">
                        <Reveal width="100%">
                            <span className="text-secondary font-bold text-xs uppercase tracking-wider block mb-2">
                                Human Capital & Technical Depth
                            </span>
                            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-3">
                                Engineering & Workforce
                            </h3>
                            <p className="text-gray-600 max-w-2xl mx-auto text-sm leading-relaxed">
                                Our technical and operational teams combine engineering expertise with practical construction experience to deliver projects efficiently and maintain consistent quality standards.
                            </p>
                        </Reveal>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {teamStructure.map((team, idx) => (
                            <Reveal key={idx} delay={idx * 0.1} width="100%">
                                <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow h-full border border-gray-100">
                                    <div className="p-4 bg-white rounded-full shadow-sm mb-4 text-secondary">
                                        <team.icon size={28} />
                                    </div>
                                    <h4 className="font-bold text-primary text-base mb-2">{team.title}</h4>
                                    <p className="text-gray-600 text-xs leading-relaxed">{team.description}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>

                {/* Quality Control & Compliance Side-by-Side */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20 pt-8 border-t border-gray-100">
                    {/* Quality Control & Safety */}
                    <Reveal width="100%">
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 h-full flex flex-col justify-between">
                            <div>
                                <div className="flex items-center gap-2 text-secondary font-bold text-xs uppercase tracking-wider mb-2">
                                    <ShieldCheck size={16} />
                                    <span>Inspection Procedures</span>
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-3">Quality Control & Safety</h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                    Silverline Engineering Ltd maintains structured inspection and quality assurance procedures throughout fabrication and construction.
                                </p>
                                <div className="space-y-2.5 mb-6">
                                    {qcSystems.map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 p-2.5 bg-white rounded-lg border border-gray-100 text-xs text-gray-700 font-medium">
                                            <span className="w-5 h-5 rounded-full bg-secondary text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                                                {i + 1}
                                            </span>
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <p className="text-xs text-gray-500 pt-3 border-t border-gray-200/60 italic">
                                These systems ensure projects are delivered safely and according to engineering specifications.
                            </p>
                        </div>
                    </Reveal>

                    {/* Compliance & Certification */}
                    <Reveal width="100%" delay={0.15}>
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 h-full flex flex-col justify-between">
                            <div>
                                <div className="flex items-center gap-2 text-secondary font-bold text-xs uppercase tracking-wider mb-2">
                                    <Award size={16} />
                                    <span>Accredited Operations</span>
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-3">Compliance & Certification</h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                    Silverline Engineering Ltd operates in accordance with statutory and regulatory industry requirements.
                                </p>
                                <div className="space-y-3 mb-6">
                                    {certifications.map((cert, i) => (
                                        <div key={i} className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-100">
                                            <div className="flex items-center gap-2.5">
                                                <FileCheck size={16} className="text-primary shrink-0" />
                                                <div>
                                                    <span className="text-xs font-bold text-gray-900 block">{cert.name}</span>
                                                    <span className="text-[11px] text-gray-500">{cert.status}</span>
                                                </div>
                                            </div>
                                            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800">
                                                {cert.badge}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="pt-3 border-t border-gray-200/60 flex items-center justify-between">
                                <span className="text-xs text-gray-600 font-medium">Tender Compliance Packages</span>
                                <Link href="/contact" className="text-xs font-bold text-secondary hover:underline flex items-center gap-1">
                                    Contact Us <ArrowRight size={13} />
                                </Link>
                            </div>
                        </div>
                    </Reveal>
                </div>

                {/* Call To Action Banner - Matching Footer & Hero CTA components */}
                <Reveal width="100%" delay={0.1}>
                    <div className="bg-primary text-white rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-xl">
                        <div className="max-w-3xl mx-auto space-y-4">
                            <span className="text-secondary font-bold text-xs uppercase tracking-wider block">
                                Steel & Concrete Construction
                            </span>
                            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                                Work With a Team Built for Scale
                            </h3>
                            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                                Silverline Engineering Ltd provides the engineering expertise, fabrication capability, and execution discipline required to deliver complex industrial and infrastructure projects.
                            </p>
                            
                            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                                <Link
                                    href="/contact"
                                    className="px-8 py-3.5 bg-secondary text-white font-bold text-sm rounded-full hover:bg-orange-600 transition-colors shadow-md flex items-center gap-2"
                                >
                                    <span>Request a Quote</span>
                                    <ArrowRight size={16} />
                                </Link>
                                <a
                                    href="tel:+260966626579"
                                    className="px-8 py-3.5 bg-white/10 text-white font-medium text-sm rounded-full hover:bg-white/20 transition-colors border border-white/20 flex items-center gap-2"
                                >
                                    <Phone size={16} />
                                    <span>Call: 0966 626579</span>
                                </a>
                                <a
                                    href="https://wa.me/260966626579"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-3.5 bg-emerald-600 text-white font-semibold text-sm rounded-full hover:bg-emerald-700 transition-colors shadow-sm flex items-center gap-2"
                                >
                                    <WhatsAppIcon size={16} className="text-white" />
                                    <span>WhatsApp</span>
                                </a>
                            </div>

                            <div className="text-xs text-gray-400 pt-2">
                                <Clock size={13} className="inline mr-1 text-secondary" />
                                <span>MON – FRI: 8:00 AM – 5:00 PM | SAT: 8:00 AM – 1:00 PM</span>
                            </div>
                        </div>
                    </div>
                </Reveal>

            </div>
        </section>
    );
}
