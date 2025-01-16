import Image from 'next/image';
import { notFound } from 'next/navigation';

const projects = [
    {
        id: 1,
        title: 'Modern Minimalist Home',
        category: 'Residential',
        description: 'A sleek and minimalist home design that maximizes space and natural light.',
        image: '/pexel (1).jpg', // Replace with your image
        location: 'New York, USA',
        year: 2023,
        size: '3,500 sq ft',
        client: 'Private Homeowner',
    },
    {
        id: 2,
        title: 'Urban Office Complex',
        category: 'Commercial',
        description: 'A state-of-the-art office complex designed for productivity and collaboration.',
        image: '/pexel (2).jpg', // Replace with your image
        location: 'San Francisco, USA',
        year: 2022,
        size: '50,000 sq ft',
        client: 'Tech Corporation',
    },
    {
        id: 3,
        title: 'Sustainable Community Center',
        category: 'Public',
        description: 'An eco-friendly community center that serves as a hub for local activities.',
        image: '/pexel (3).jpg', // Replace with your image
        location: 'Austin, USA',
        year: 2021,
        size: '15,000 sq ft',
        client: 'City Council',
    },
    {
        id: 4,
        title: 'Luxury Beachfront Villa',
        category: 'Residential',
        description: 'An exquisite beachfront property that blends modern luxury with coastal charm.',
        image: '/pexel (4).jpg', // Replace with your image
        location: 'Miami, USA',
        year: 2023,
        size: '6,000 sq ft',
        client: 'Private Investor',
    },
    {
        id: 5,
        title: 'Innovative Tech Hub',
        category: 'Commercial',
        description: 'A cutting-edge facility designed to foster innovation in the tech industry.',
        image: '/pexel (5).jpg', // Replace with your image
        location: 'Seattle, USA',
        year: 2022,
        size: '75,000 sq ft',
        client: 'Tech Startup',
    },
    {
        id: 6,
        title: 'Eco-Friendly School',
        category: 'Educational',
        description: 'A sustainable school campus that promotes environmental awareness and learning.',
        image: '/pexel (6).jpg', // Replace with your image
        location: 'Portland, USA',
        year: 2023,
        size: '20,000 sq ft',
        client: 'Local School District',
    },
];

export default function Project({ params }: { params: { id: string } }) {
    const project = projects.find((p) => p.id === parseInt(params.id));

    if (!project) {
        notFound();
    }

    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold text-beige-900 mb-8">{project.title}</h1>
            <div className="grid md:grid-cols-2 gap-8">
                {/* Project Image */}
                <div>
                    <Image
                        src={project.image}
                        alt={project.title}
                        width={800}
                        height={600}
                        className="rounded-lg"
                    />
                </div>

                {/* Project Details */}
                <div>
                    <p className="text-xl text-beige-700 mb-4">{project.category}</p>
                    <p className="text-beige-800 mb-8">{project.description}</p>

                    <h2 className="text-2xl font-semibold text-beige-900 mb-4">Project Details</h2>
                    <ul className="list-disc list-inside text-beige-800 space-y-2">
                        <li>Location: {project.location}</li>
                        <li>Year: {project.year}</li>
                        <li>Size: {project.size}</li>
                        <li>Client: {project.client}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}