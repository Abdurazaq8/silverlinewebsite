"use client";

import Link from "next/link";
import { projects } from "@/lib/projects";
import CloudImage from "./CloudImage";
import { Reveal } from "./Reveal";

export default function Projects() {
    return (
        <section id="projects" className="py-8 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-6">
                        <Reveal width="100%">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Featured Projects</h2>
                            <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
                        </Reveal>
                        <Reveal width="100%" delay={0.2}>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Explore some of our recent landmark projects that demonstrate our commitment to quality and innovation.
                            </p>
                        </Reveal>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.slice(0, 3).map((project, index) => (
                            <Reveal key={project.id} delay={index * 0.05} width="100%">
                                <Link
                                    href={`/projects/${project.slug}`}
                                    className="group overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 bg-white border border-gray-100 flex flex-col h-full cursor-pointer"
                                >
                                    <div className="relative h-48 w-full overflow-hidden shrink-0">
                                        <CloudImage
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            crop="fill"
                                            loading="lazy"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                                            format="auto"
                                        />
                                        <div className="absolute top-4 left-4 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow">
                                            {project.category}
                                        </div>
                                    </div>
                                    <div className="p-5 flex flex-col flex-grow">
                                        <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">{project.title}</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed flex-grow">{project.description}</p>
                                    </div>
                                </Link>
                            </Reveal>
                        ))}
                    </div>

                    <Reveal width="100%" delay={0.1}>
                        <div className="text-center mt-6">
                            <Link
                                href="/projects"
                                className="inline-block px-8 py-3 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-colors shadow-sm"
                            >
                                View All Projects
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
