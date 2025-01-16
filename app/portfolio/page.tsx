import Image from 'next/image';
import Link from 'next/link';

const projects = [
    {
        id: 1,
        title: 'Modern Minimalist Home',
        category: 'Residential',
        description: 'A sleek and contemporary home design featuring clean lines, open spaces, and natural light.',
        image: '/pexel (1).jpg', // Replace with your image
    },
    {
        id: 2,
        title: 'Urban Office Complex',
        category: 'Commercial',
        description: 'A state-of-the-art office complex designed for productivity and collaboration in a bustling urban environment.',
        image: '/pexel (2).jpg', // Replace with your image
    },
    {
        id: 3,
        title: 'Sustainable Community Center',
        category: 'Public',
        description: 'An eco-friendly community center built with sustainable materials and energy-efficient systems.',
        image: '/pexel (3).jpg', // Replace with your image
    },
    {
        id: 4,
        title: 'Luxury Beachfront Villa',
        category: 'Residential',
        description: 'A luxurious villa with panoramic ocean views, designed for relaxation and entertainment.',
        image: '/pexel (4).jpg', // Replace with your image
    },
    {
        id: 5,
        title: 'Innovative Tech Hub',
        category: 'Commercial',
        description: 'A cutting-edge tech hub with flexible workspaces and modern amenities for innovation and creativity.',
        image: '/pexel (5).jpg', // Replace with your image
    },
    {
        id: 6,
        title: 'Eco-Friendly School',
        category: 'Educational',
        description: 'A green school designed to inspire learning with sustainable architecture and eco-conscious features.',
        image: '/pexel (6).jpg', // Replace with your image
    },
];

export default function Portfolio() {
    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold text-beige-900 mb-8">Our Portfolio</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <Link href={`/portfolio/${project.id}`} key={project.id} className="group">
                        <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-beige-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <h2 className="text-xl font-semibold text-beige-900 mb-2">{project.title}</h2>
                        <p className="text-beige-700">{project.category}</p>
                        <p className="text-beige-600 mt-2">{project.description}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}