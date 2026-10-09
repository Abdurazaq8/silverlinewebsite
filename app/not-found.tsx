"use client";

import Link from "next/link";
import { MoveLeft, Compass, HardHat, Building2, Phone, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function NotFound() {
  const directJumps = [
    {
      title: "East Park Mall Expansion",
      category: "Commercial",
      slug: "east-park-mall-expansion",
      client: "Napoli Property",
    },
    {
      title: "UNDP Bulking Centers",
      category: "Humanitarian Hubs",
      slug: "undp-bulking-centers",
      client: "United Nations (UNDP)",
    },
    {
      title: "Meco Milling Plant",
      category: "150T/Day Industrial",
      slug: "meco-milling-plant",
      client: "Eco Petroleum",
    },
    {
      title: "Emergency Dispatch Desk",
      category: "Site Management",
      href: "/contact",
      client: "Lusaka Engineering HQ",
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow pt-28 sm:pt-36 pb-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        <div className="max-w-5xl w-full mx-auto">
          {/* Top Architectural Notice Banner */}
          <div className="bg-gray-50 border border-gray-200/80 rounded-3xl p-8 sm:p-14 text-center relative overflow-hidden mb-10 shadow-sm">
            {/* Engineering Coordinate Technical Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary/10 border border-secondary/20 rounded-full text-secondary text-xs sm:text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span>System Coordinate 404 • Architectural Blueprint</span>
            </div>

            {/* Giant 404 with Brand Colors */}
            <h1 className="text-7xl sm:text-9xl font-extrabold tracking-tight text-primary mb-4 select-none">
              4<span className="text-secondary">0</span>4
            </h1>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              404: Structure Not Located
            </h2>

            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
              The requested CAD blueprint, engineering specification, or project coordinate does not exist or has been relocated to another job site.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-secondary text-white font-bold text-sm rounded-full hover:bg-orange-600 transition-colors shadow-md"
              >
                <MoveLeft size={16} />
                <span>Return to Homepage</span>
              </Link>

              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-white font-bold text-sm rounded-full hover:bg-blue-900 transition-colors shadow-md"
              >
                <Building2 size={16} />
                <span>Browse Projects</span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-gray-900 border border-gray-300 font-bold text-sm rounded-full hover:bg-gray-100 transition-colors shadow-sm"
              >
                <HardHat size={16} />
                <span>Contact Engineering</span>
              </Link>
            </div>
          </div>

          {/* Direct Jumps: Landmark Case Studies & Dispatch */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <Compass size={20} className="text-secondary" />
                <h3 className="text-lg sm:text-xl font-bold text-primary">
                  Direct Jumps: Active Project Coordinates
                </h3>
              </div>
              <Link
                href="/projects"
                className="text-xs sm:text-sm font-bold text-secondary hover:text-orange-600 flex items-center gap-1 transition-colors"
              >
                <span>View Full Portfolio</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {directJumps.map((item) => (
                <Link
                  key={item.title}
                  href={item.slug ? `/projects/${item.slug}` : item.href || "/contact"}
                  className="p-5 bg-white rounded-2xl border border-gray-200 hover:border-secondary hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group block"
                >
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 bg-primary/5 text-primary rounded-full inline-block mb-3 group-hover:bg-secondary group-hover:text-white transition-colors">
                    {item.category}
                  </span>
                  <h4 className="text-base font-bold text-gray-900 group-hover:text-primary transition-colors mb-1 line-clamp-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-500 m-0">
                    {item.client}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* Emergency Dispatch Support Strip */}
          <div className="bg-primary text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="text-center sm:text-left">
              <h4 className="text-lg sm:text-xl font-bold mb-1">
                Emergency Dispatch &amp; Engineering Support Desk
              </h4>
              <p className="text-sm text-gray-300 m-0">
                Contact our Lusaka technical team directly for site consultations and active tenders.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="tel:+260966626579"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider rounded-full transition-colors border border-white/20"
              >
                <Phone size={14} />
                <span>+260 966 626579</span>
              </a>
              <a
                href="https://wa.me/260966626579"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider rounded-full transition-colors shadow-sm"
              >
                <WhatsAppIcon size={14} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
