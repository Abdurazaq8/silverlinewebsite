import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { rawProjects, getProjectBySlug } from "@/lib/projects";
import { ArrowLeft, ArrowRight, ArrowUpRight, MapPin, Calendar, Building2, Layers } from "lucide-react";
import ProjectDetailClient from "./ProjectDetailClient";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return rawProjects.map((project) => ({
        slug: project.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        return {
            title: "Project Not Found - Silverline Engineering",
        };
    }

    return {
        title: `${project.title} | Silverline Engineering Case Study`,
        description: project.overview || project.description,
        openGraph: {
            title: `${project.title} - Silverline Engineering`,
            description: project.description,
            images: [project.localImage],
        },
    };
}

export default async function ProjectPage({ params }: Props) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    const currentIndex = rawProjects.findIndex((p) => p.slug === project.slug);
    const prevProject =
        currentIndex > 0 ? rawProjects[currentIndex - 1] : rawProjects[rawProjects.length - 1];
    const nextProject =
        currentIndex < rawProjects.length - 1 ? rawProjects[currentIndex + 1] : rawProjects[0];

    const relatedProjects = rawProjects.filter((p) => p.slug !== project.slug).slice(0, 3);

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Breadcrumb & Header */}
            <header className="pt-28 pb-10 bg-gray-50 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumbs */}
                    <nav className="flex items-center gap-2 text-xs text-gray-500 mb-6 font-medium">
                        <Link href="/" className="hover:text-primary transition-colors">
                            Home
                        </Link>
                        <span>/</span>
                        <Link href="/projects" className="hover:text-primary transition-colors">
                            Projects
                        </Link>
                        <span>/</span>
                        <span className="text-gray-900 font-semibold truncate">{project.title}</span>
                    </nav>

                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div className="max-w-3xl">
                            <div className="flex items-center gap-3 mb-3">
                                <span className="px-3.5 py-1.5 bg-primary text-white text-[11px] font-bold rounded-full uppercase tracking-wider shadow-sm">
                                    {project.category}
                                </span>
                                <span
                                    className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm animate-pulse ${
                                        project.status === "ongoing"
                                            ? "bg-amber-500 text-white shadow-amber-500/30"
                                            : "bg-emerald-600 text-white shadow-emerald-600/30"
                                    }`}
                                >
                                    {project.status === "ongoing" ? "Active Site" : "Completed Project"}
                                </span>
                            </div>

                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
                                {project.title}
                            </h1>
                        </div>

                        <Link
                            href="/projects"
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-700 hover:text-primary transition-colors py-2 px-4 rounded-full border border-gray-200 bg-white hover:border-gray-300 shadow-sm self-start md:self-auto shrink-0"
                        >
                            <ArrowLeft size={14} />
                            <span>All Projects</span>
                        </Link>
                    </div>
                </div>
            </header>

            {/* Interactive Multi-Image Gallery and Content Client */}
            <ProjectDetailClient project={project} />

            {/* Project Navigation Footer (Prev / Next Case Study) */}
            <section className="border-t border-b border-gray-200 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
                        {/* Prev Project */}
                        <Link
                            href={`/projects/${prevProject.slug}`}
                            className="group p-6 md:p-8 flex items-center gap-4 hover:bg-gray-50 transition-colors"
                        >
                            <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 group-hover:text-primary group-hover:border-primary shrink-0 transition-colors">
                                <ArrowLeft size={18} />
                            </div>
                            <div className="min-w-0">
                                <p className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold">Previous Project</p>
                                <p className="text-base font-bold text-gray-900 group-hover:text-primary transition-colors truncate">
                                    {prevProject.title}
                                </p>
                            </div>
                        </Link>

                        {/* Next Project */}
                        <Link
                            href={`/projects/${nextProject.slug}`}
                            className="group p-6 md:p-8 flex items-center justify-between sm:justify-end gap-4 hover:bg-gray-50 transition-colors text-right"
                        >
                            <div className="min-w-0 order-1 sm:order-none">
                                <p className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold">Next Project</p>
                                <p className="text-base font-bold text-gray-900 group-hover:text-primary transition-colors truncate">
                                    {nextProject.title}
                                </p>
                            </div>
                            <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 group-hover:text-primary group-hover:border-primary shrink-0 transition-colors">
                                <ArrowRight size={18} />
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Related Projects Grid */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between mb-10">
                        <div>
                            <p className="text-xs font-bold text-secondary uppercase tracking-widest">More Works</p>
                            <h2 className="text-2xl font-bold text-gray-900 mt-1">Other Landmark Projects</h2>
                        </div>
                        <Link
                            href="/projects"
                            className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary/5 hover:bg-primary/10 text-primary font-bold text-xs rounded-full transition-colors"
                        >
                            <span>View Full Portfolio</span>
                            <ArrowUpRight size={14} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {relatedProjects.map((other) => (
                            <Link
                                key={other.id}
                                href={`/projects/${other.slug}`}
                                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 flex flex-col"
                            >
                                <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                                    <Image
                                        src={other.localImage}
                                        alt={other.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                    <div className="absolute top-3 left-3">
                                        <span className="px-3 py-1 bg-primary text-white text-[10px] font-bold rounded-full uppercase tracking-wider shadow-sm">
                                            {other.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-5 flex-1 flex flex-col justify-between">
                                    <div>
                                        <p className="text-xs text-secondary font-semibold uppercase tracking-wider">{other.client}</p>
                                        <h3 className="text-base font-bold text-gray-900 group-hover:text-primary transition-colors mt-1 leading-snug">
                                            {other.title}
                                        </h3>
                                    </div>
                                    <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                                        <span>{other.location}</span>
                                        <ArrowUpRight size={14} className="text-gray-400 group-hover:text-primary transition-colors" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
