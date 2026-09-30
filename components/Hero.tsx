"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { getHeroPosterUrl, getHeroVideoUrl } from "@/lib/cloudinary";

const lineVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: (i: number) => ({
        y: 0,
        opacity: 1,
        transition: { duration: 1, delay: i * 0.15, ease: "easeOut" as const },
    }),
};

export default function Hero() {
    const heroPoster = getHeroPosterUrl() || "/office_complex_lusaka.png";
    const heroVideo = getHeroVideoUrl();

    return (
        <section id="hero" className="relative h-screen min-h-[600px] w-full overflow-hidden flex items-center pt-32">
            {/* Video Background */}
            <div className="absolute inset-0 w-full h-full z-0">
                <div className="absolute inset-0 bg-black/60 z-10"></div>
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
                ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                        src={heroPoster}
                        alt=""
                        className="w-full h-full object-cover"
                    />
                )}
            </div>

            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex items-center">
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                    {/* Left Side - Title & Description */}
                    <div className="space-y-6 text-left">
                        <div className="space-y-2">
                            <h1 className="font-bold text-white leading-tight">
                                <div className="overflow-hidden">
                                    <motion.span
                                        className="block text-5xl md:text-6xl xl:text-7xl"
                                        variants={lineVariants}
                                        initial="hidden"
                                        animate="visible"
                                        custom={0}
                                    >
                                        SILVERLINE
                                    </motion.span>
                                </div>
                                <div className="overflow-hidden">
                                    <motion.span
                                        className="block text-5xl md:text-6xl xl:text-7xl"
                                        variants={lineVariants}
                                        initial="hidden"
                                        animate="visible"
                                        custom={1}
                                    >
                                        ENGINEERING
                                    </motion.span>
                                </div>
                                <div className="overflow-hidden">
                                    <motion.span
                                        className="block text-5xl md:text-6xl xl:text-7xl"
                                        variants={lineVariants}
                                        initial="hidden"
                                        animate="visible"
                                        custom={2}
                                    >
                                        LIMITED
                                    </motion.span>
                                </div>
                            </h1>
                        </div>

                        <motion.p
                            className="text-lg md:text-xl text-gray-200 max-w-xl leading-relaxed"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                        >
                            Zambian owned Construction Company specializing in Civil, Electrical, Mechanical, and Solar Engineering services.
                        </motion.p>
                    </div>

                    {/* Right Side - CTAs & Testimonial */}
                    <div className="space-y-6 flex flex-col items-start lg:items-center">
                        <motion.div
                            className="flex flex-col w-full gap-4"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
                        >
                            <Link
                                href="#contact"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-white font-bold rounded-full hover:bg-orange-600 transition-colors text-lg w-full lg:w-auto"
                            >
                                Discuss Project
                                <ArrowRight size={20} />
                            </Link>
                            <Link
                                href="/projects"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/30 font-bold rounded-full hover:bg-white/20 transition-colors text-lg w-full lg:w-auto"
                            >
                                View Our Work
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
                        >
                            <Link href="/#testimonials" className="cursor-pointer group block">
                                <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl flex items-center gap-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                                    <div className="flex -space-x-2">
                                        {["J", "S", "M"].map((initial, i) => (
                                            <div
                                                key={initial}
                                                className="w-10 h-10 rounded-full border-2 border-white/20 bg-secondary/80 text-white text-sm font-bold flex items-center justify-center"
                                                style={{ zIndex: 3 - i }}
                                                aria-hidden
                                            >
                                                {initial}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="text-left">
                                        <div className="flex items-center gap-1">
                                            <span className="text-white font-bold">Excellent</span>
                                            <Star className="text-yellow-400 fill-yellow-400" size={14} />
                                        </div>
                                        <p className="text-gray-300 text-xs">Based on client reviews</p>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
