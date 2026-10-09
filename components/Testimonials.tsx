"use client";

import { motion } from "framer-motion";
import { Quote, Star, CheckCircle2, Building2 } from "lucide-react";

const testimonials = [
    {
        name: "Hussein Mohamed Ahmed",
        company: "Eco Petroleum",
        initials: "HA",
        project: "Meco Milling Plant & Chalala Fuel Station",
        tag: "Eco Petroleum Review",
        content: "We entrusted the team with two very different projects: the Meco Milling Plant in Ndola and our Chalala fuel station. Both projects were completed to a high standard, with the milling plant now fully operational. Throughout both projects, the team was professional, responsive, and easy to work with. We were very pleased with the results and would gladly work with them again."
    },
    {
        name: "Kayamba Kayamba",
        company: "Oryx Energy",
        initials: "KK",
        project: "Munali & Chalala Fuel Stations",
        tag: "Oryx Energy Review",
        content: "The team served as our main contractors for the Munali filling station and later took on the Chalala site following its acquisition. They handled the renovation of the canopy and the shop rebranding with professionalism and attention to detail. Our experience working with them on both projects was smooth and positive, and we appreciate their commitment to quality and timely delivery."
    },
    {
        name: "Gillian Casilli",
        company: "Napoli Property",
        initials: "GC",
        project: "East Park Mall Expansion",
        tag: "Napoli Property Review",
        content: "The team delivered the East Park Mall expansion works with professionalism, strong communication, and careful site management. Working alongside a busy, fully operational shopping mall presented its challenges, but they managed the works responsibly while keeping us well informed throughout the project. We are very pleased with the quality of the completed works and the overall experience."
    },
    {
        name: "Patrick Muchimba",
        company: "UNDP",
        initials: "PM",
        project: "SCLARA Bulking Centers",
        tag: "UNDP Review",
        content: "The team successfully constructed four portal-framed bulking centers as part of the SCLARA drought mitigation project across Eastern and Western Provinces. They worked professionally and adapted well to the challenges of delivering projects in remote locations. The completed structures will provide a lasting benefit to the communities they were built to serve."
    }
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="relative py-24 bg-gradient-to-b from-gray-50/60 via-white to-gray-50/60 text-gray-900 overflow-hidden">
            {/* Ambient Background Decorative Glows */}
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16 sm:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3 }}
                        className="inline-flex items-center px-4 py-1.5 bg-secondary/10 border border-secondary/20 rounded-full text-secondary text-xs sm:text-sm font-semibold mb-4"
                    >
                        <span>Client Testimonials</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: 0.05 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 tracking-tight"
                    >
                        What Our Clients Say
                    </motion.h2>

                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: 0.1 }}
                        className="w-24 h-1.5 bg-gradient-to-r from-secondary to-orange-500 mx-auto rounded-full mb-6"
                    />

                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: 0.15 }}
                        className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed"
                    >
                        Real feedback from project owners, global organizations, and commercial leaders across Zambia who trust our engineering quality.
                    </motion.p>
                </div>

                {/* Testimonial Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.name}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ duration: 0.35, delay: index * 0.07, ease: "easeOut" }}
                            whileHover={{ y: -8, scale: 1.015 }}
                            className="group relative bg-white rounded-3xl p-8 sm:p-10 border border-gray-200/80 shadow-md hover:shadow-2xl hover:shadow-secondary/15 transition-all duration-500 overflow-hidden flex flex-col justify-between"
                        >
                            {/* Subtle Ambient Hover Glow Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-secondary/[0.04] via-transparent to-primary/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            <div>
                                {/* Card Header: Stars & Project Badge */}
                                <div className="flex items-center justify-between gap-3 mb-6 flex-wrap">
                                    <div className="flex items-center gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                size={17}
                                                className="fill-yellow-400 text-yellow-400 drop-shadow-sm transition-transform duration-300 group-hover:scale-110"
                                                style={{ transitionDelay: `${i * 40}ms` }}
                                            />
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-xs font-semibold text-gray-700 group-hover:bg-secondary/10 group-hover:text-secondary group-hover:border-secondary/30 transition-all duration-300 max-w-full truncate">
                                        <Building2 size={13} className="shrink-0 text-secondary" />
                                        <span className="truncate">{testimonial.project}</span>
                                    </div>
                                </div>

                                {/* Quote mark & content */}
                                <div className="mb-6">
                                    <div className="mb-3.5">
                                        <Quote
                                            size={32}
                                            className="text-secondary/40 group-hover:text-secondary/80 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300"
                                        />
                                    </div>
                                    <p className="text-gray-700 italic text-base sm:text-[1.05rem] leading-relaxed">
                                        &ldquo;{testimonial.content}&rdquo;
                                    </p>
                                </div>
                            </div>

                            {/* Card Footer: Client Details & Verified Tag */}
                            <div className="pt-6 border-t border-gray-100 flex items-center justify-between gap-4 flex-wrap relative z-10">
                                <div className="flex items-center gap-3.5">
                                    {/* Client Avatar with Initials */}
                                    <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-secondary to-orange-500 text-white font-bold text-sm flex items-center justify-center shadow-md shadow-secondary/25 group-hover:scale-110 transition-transform duration-300 shrink-0">
                                        {testimonial.initials}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-base sm:text-lg text-primary group-hover:text-secondary transition-colors duration-300">
                                            {testimonial.name}
                                        </h4>
                                        <div className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-500 font-medium">
                                            <span>{testimonial.company}</span>
                                            <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                                        </div>
                                    </div>
                                </div>

                                <span className="text-xs font-medium text-gray-500 bg-gray-100/80 px-3 py-1.5 rounded-lg border border-gray-200/60 group-hover:bg-primary/5 group-hover:text-primary transition-colors duration-300">
                                    {testimonial.tag}
                                </span>
                            </div>

                            {/* Bottom expanding accent gradient line */}
                            <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-secondary via-orange-500 to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
