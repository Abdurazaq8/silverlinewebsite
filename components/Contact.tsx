"use client";

import { useState } from "react";
import Image from "next/image";
import { Instagram, Facebook } from "lucide-react";
import { Reveal } from "./Reveal";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Contact() {
    const [inquiryType, setInquiryType] = useState("General");


    const inquiryTypes = ["Residential", "Commercial", "Renovation", "Infrastructure", "Consultation"];

    // Social media links with icons
    const socialLinks = [
        {
            name: "WhatsApp",
            icon: WhatsAppIcon,
            href: "https://wa.me/260966626579",
            color: "hover:text-emerald-600 hover:bg-emerald-50",
        },
        {
            name: "Facebook",
            icon: Facebook,
            href: "https://www.facebook.com/share/1KntzJukRd/?mibextid=wwXIfr",
            color: "hover:text-blue-600 hover:bg-blue-50",
        },
        {
            name: "Instagram",
            icon: Instagram,
            href: "https://www.instagram.com/silverline.eng_limited?stkn=aGtib2tuc2hvNW5w",
            color: "hover:text-pink-600 hover:bg-pink-50",
        },
    ];

    return (
        <section id="contact" className="min-h-screen flex items-center py-12 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    {/* Left Side - Content */}
                    <div className="space-y-8">
                        {/* Heading */}
                        <Reveal width="100%">
                            <div className="space-y-4">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                    Ready to Build
                                    <br />
                                    <span className="text-primary">Your Vision?</span>
                                </h2>
                                <p className="text-gray-500 text-base leading-relaxed max-w-lg">
                                    From concept to completion, we deliver engineering excellence.
                                    Let's discuss your next construction project today.
                                </p>
                            </div>
                        </Reveal>

                        {/* Image Grid */}
                        <Reveal delay={0.2} width="100%">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="relative rounded-2xl overflow-hidden aspect-video shadow-lg">
                                    <Image
                                        src="/luxury_villa_zambia.png"
                                        alt="Modern Residential"
                                        fill
                                        loading="lazy"
                                        placeholder="blur"
                                        blurDataURL="data:image/gif;base64,R0lGODlhAQABAAAAACw="
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                <div className="relative rounded-2xl overflow-hidden aspect-video shadow-lg mt-4">
                                    <Image
                                        src="/office_complex_lusaka.png"
                                        alt="Commercial Complex"
                                        fill
                                        loading="lazy"
                                        placeholder="blur"
                                        blurDataURL="data:image/gif;base64,R0lGODlhAQABAAAAACw="
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            </div>
                        </Reveal>

                        {/* Contact Info Grid */}
                        <Reveal delay={0.3} width="100%">
                            <div className="grid grid-cols-2 gap-x-8 gap-y-6 pt-6 border-t border-gray-100">
                                {/* Location */}
                                <div className="space-y-1">
                                    <h3 className="text-gray-900 font-bold text-sm flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                                        Location
                                    </h3>
                                    <p className="text-gray-500 text-xs pl-3.5">
                                        Plot 10, Buluwe Street, Woodlands, Zambia
                                    </p>
                                </div>

                                {/* Email */}
                                <div className="space-y-1">
                                    <h3 className="text-gray-900 font-bold text-sm flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                                        Email
                                    </h3>
                                    <a href="mailto:info@silverlineng.com" className="text-gray-500 text-xs hover:text-primary transition-colors pl-3.5 block">
                                        info@silverlineng.com
                                    </a>
                                </div>

                                {/* Phone */}
                                <div className="space-y-1">
                                    <h3 className="text-gray-900 font-bold text-sm flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                                        Phone & WhatsApp
                                    </h3>
                                    <div className="pl-3.5 space-y-1.5 pt-0.5">
                                        <a
                                            href="https://wa.me/260966626579"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-gray-700 hover:text-emerald-600 transition-colors text-xs font-medium group"
                                        >
                                            <WhatsAppIcon size={14} className="text-emerald-600 group-hover:scale-110 transition-transform flex-shrink-0" />
                                            <span>+260 966 626579</span>
                                        </a>
                                        <a
                                            href="https://wa.me/260771814040"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-gray-700 hover:text-emerald-600 transition-colors text-xs font-medium group"
                                        >
                                            <WhatsAppIcon size={14} className="text-emerald-600 group-hover:scale-110 transition-transform flex-shrink-0" />
                                            <span>+260 771 814040</span>
                                        </a>
                                    </div>
                                </div>

                                {/* Social Media */}
                                <div className="space-y-1">
                                    <h3 className="text-gray-900 font-bold text-sm flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                                        Social Media
                                    </h3>
                                    <div className="flex gap-3 pl-3.5">
                                        {socialLinks.map((social) => (
                                            <a
                                                key={social.name}
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={social.name}
                                                className={`text-gray-400 transition-colors bg-gray-50 p-2 rounded-full hover:bg-gray-100 ${social.color}`}
                                            >
                                                <social.icon size={18} />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    {/* Right Side - Form */}
                    <div className="bg-gray-50 rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-100">
                        <div className="mb-6">
                            <Reveal width="100%">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    Tell Us What You Need
                                </h3>
                                <p className="text-sm text-gray-600">
                                    Ready to start your project? Let&apos;s discuss how we can help bring your vision to life.
                                </p>
                            </Reveal>
                        </div>

                        {/* Direct WhatsApp Quick Chat Bar */}
                        <Reveal delay={0.1} width="100%">
                            <div className="mb-6 p-5 sm:p-6 rounded-2xl bg-white border border-gray-200/90 shadow-sm">
                                <div className="flex items-center gap-2.5 mb-4">
                                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex-shrink-0">
                                        <WhatsAppIcon size={16} />
                                    </span>
                                    <span className="text-xs font-bold uppercase tracking-wider text-gray-800">
                                        Chat Directly on WhatsApp
                                    </span>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <a
                                        href="https://wa.me/260966626579"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shadow-sm hover:shadow transition-all group"
                                    >
                                        <WhatsAppIcon size={16} className="text-white group-hover:scale-110 transition-transform flex-shrink-0" />
                                        <span>+260 966 626579</span>
                                    </a>
                                    <a
                                        href="https://wa.me/260771814040"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shadow-sm hover:shadow transition-all group"
                                    >
                                        <WhatsAppIcon size={16} className="text-white group-hover:scale-110 transition-transform flex-shrink-0" />
                                        <span>+260 771 814040</span>
                                    </a>
                                </div>
                            </div>
                        </Reveal>

                        <div className="relative flex py-2 items-center mb-6">
                            <div className="flex-grow border-t border-gray-200"></div>
                            <span className="flex-shrink mx-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
                                Or Send A Message
                            </span>
                            <div className="flex-grow border-t border-gray-200"></div>
                        </div>

                        <form className="space-y-4">
                            {/* Name Fields */}
                            <Reveal delay={0.05} width="100%">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <input
                                            type="text"
                                            placeholder="First Name"
                                            className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <input
                                            type="text"
                                            placeholder="Last Name"
                                            className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                                        />
                                    </div>
                                </div>
                            </Reveal>

                            {/* Contact Details */}
                            <Reveal delay={0.1} width="100%">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <input
                                            type="email"
                                            placeholder="Email Address"
                                            className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <input
                                            type="tel"
                                            placeholder="Phone Number"
                                            className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                                        />
                                    </div>
                                </div>
                            </Reveal>

                            {/* Inquiry Type */}
                            <Reveal delay={0.15} width="100%">
                                <div className="space-y-2">
                                    <p className="text-sm font-medium text-gray-700">Type of Inquiry</p>
                                    <div className="flex flex-wrap gap-2">
                                        {inquiryTypes.map((type) => (
                                            <button
                                                key={type}
                                                type="button"
                                                onClick={() => setInquiryType(type)}
                                                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${inquiryType === type
                                                    ? "bg-primary text-white shadow-md shadow-primary/20"
                                                    : "bg-white border border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50"
                                                    }`}
                                            >
                                                {type}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </Reveal>

                            {/* Message & Submit */}
                            <Reveal delay={0.2} width="100%">
                                <div className="space-y-4">
                                    <div className="space-y-1">
                                        <textarea
                                            rows={3}
                                            placeholder="Message..."
                                            className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none text-sm"
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-primary text-white font-bold py-3 rounded-full hover:bg-blue-900 transition-colors shadow-lg shadow-primary/25 text-sm"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </Reveal>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
