import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "LUSTER - Architecture Design Studio",
    description: "Modern architecture and interior design studio",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`${inter.className} bg-white flex flex-col min-h-screen`}>
                <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
                    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                        <Link href="/" className="text-beige-800">
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                className="w-10 h-10"
                            >
                                <rect x="3" y="3" width="18" height="18" rx="2" />
                                <line x1="8" y1="3" x2="8" y2="21" />
                                <line x1="16" y1="3" x2="16" y2="21" />
                            </svg>
                        </Link>
                        <div className="flex gap-8">
                            <Link href="/" className="text-beige-800 hover:text-beige-600 transition-colors">
                                Home
                            </Link>
                            <Link href="/portfolio" className="text-beige-800 hover:text-beige-600 transition-colors">
                                Portfolio
                            </Link>
                            <Link href="/about" className="text-beige-800 hover:text-beige-600 transition-colors">
                                About
                            </Link>
                            <Link href="/contact" className="text-beige-800 hover:text-beige-600 transition-colors">
                                Contact
                            </Link>
                        </div>
                    </div>
                </nav>
                <main className="flex-grow pt-16">
                    {children}
                </main>
                <footer className="bg-black text-white py-12">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="flex flex-col items-center md:items-start">
                                <svg
                                    viewBox="0 0 100 100"
                                    className="w-16 h-16 mb-4 text-white"
                                    fill="currentColor"
                                >
                                    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="80" fontWeight="bold">
                                        L
                                    </text>
                                </svg>
                                <p className="text-gray-300 text-sm text-center md:text-left">
                                    Creating exceptional spaces that inspire and transform lives through innovative design.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-4">Contact</h3>
                                <address className="text-gray-300 not-italic">
                                    Noor Nagar<br />
                                    New Delhi<br />
                                    India<br />
                                    <a href="tel:+91 8077937494" className="hover:text-white transition-colors">+91 8077937494</a><br />
                                    <a href="mailto:info@luster.com" className="hover:text-white transition-colors">info@luster.com</a>
                                </address>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                                <ul className="space-y-2">
                                    <li><Link href="/portfolio" className="text-gray-300 hover:text-white transition-colors">Portfolio</Link></li>
                                    <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
                                    <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
                                    <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                                <div className="flex space-x-4">
                                    <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                        <Facebook className="w-6 h-6" />
                                        <span className="sr-only">Facebook</span>
                                    </a>
                                    <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                        <Instagram className="w-6 h-6" />
                                        <span className="sr-only">Instagram</span>
                                    </a>
                                    <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                        <Twitter className="w-6 h-6" />
                                        <span className="sr-only">Twitter</span>
                                    </a>
                                    <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                        <Linkedin className="w-6 h-6" />
                                        <span className="sr-only">LinkedIn</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 pt-8 border-t border-beige-800 text-center">
                            <p className="text-gray-300">&copy; {new Date().getFullYear()} LUSTER. All rights reserved.</p>
                        </div>
                    </div>
                </footer>
            </body>
        </html>
    )
}

