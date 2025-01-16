import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center">
                <div className="absolute inset-0">
                    <Image
                        src="/dan-gold.jpg"
                        alt="Modern interior design"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-beige-900/20" />
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-2xl pl-8">
                     
                            <h1 className="text-7xl font-bold text-white mb-4">LUSTER</h1>
                            <p className="text-3xl text-white/90 mb-8">Architecture Design Studio</p>
                       
                        <Link
                            href="/portfolio"
                            className="mt-8 px-8 py-4 bg-white text-beige-900 rounded-lg hover:bg-beige-50 transition-colors transition-transform hover:scale-105 inline-flex items-center gap-2 group"
                        >
                            View Our Projects
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Featured Projects */}
            <section className="py-24 bg-beige-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto text-center mb-16">
                        <h2 className="text-4xl font-bold text-beige-900 mb-4">Featured Projects</h2>
                        <p className="text-lg text-beige-700">
                            Discover our latest architectural masterpieces and interior transformations
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                id: 1,
                                title: "Modern Urban Apartment",
                                description: "A sleek and contemporary apartment design in the heart of the city.",
                                image: "/pexel (1).jpg", // Replace with your image
                            },
                            {
                                id: 2,
                                title: "Luxury Beach House",
                                description: "A stunning beachfront property with panoramic ocean views.",
                                image: "/pexel (2).jpg", // Replace with your image
                            },
                            {
                                id: 3,
                                title: "Rustic Mountain Cabin",
                                description: "A cozy cabin nestled in the mountains, blending rustic charm with modern amenities.",
                                image: "/pexel (3).jpg", // Replace with your image
                            },
                        ].map((project) => (
                            <Link href={`/portfolio/${project.id}`} key={project.id} className="group cursor-pointer">
                                <div className="relative h-[400px] mb-4 overflow-hidden rounded-lg">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-beige-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <h3 className="text-xl font-semibold text-beige-900 mb-2">{project.title}</h3>
                                <p className="text-beige-700">{project.description}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-4xl font-bold text-beige-900 mb-6">
                            Ready to Transform Your Space?
                        </h2>
                        <p className="text-lg text-beige-700 mb-8">
                            Schedule a free consultation with our design experts and start your journey towards your
                            dream space.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="px-8 py-4 bg-beige-900 text-white rounded-lg hover:bg-beige-800 transition-colors transition-transform hover:scale-105"
                            >
                                Schedule Consultation
                            </Link>
                            <Link
                                href="/portfolio"
                                className="px-8 py-4 border-2 border-beige-900 text-beige-900 rounded-lg hover:bg-beige-50 transition-colors transition-transform hover:scale-105"
                            >
                                View Portfolio
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}