'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';

export function Footer() {
    const footerLinks = {
        Product: [
            { name: 'Robot Kits', href: '/kits' },
            { name: 'Simulation', href: '/simulation' },
            { name: 'Curriculum', href: '/curriculum' },
            { name: 'Pricing', href: '/pricing' },
        ],
        Company: [
            { name: 'About Us', href: '/about' },
            { name: 'Careers', href: '/about' },
            { name: 'Press', href: '/resources' },
            { name: 'Blog', href: '/resources' },
        ],
        Support: [
            { name: 'Help Center', href: '/support' },
            { name: 'Setup Guide', href: '/support' },
            { name: 'Warranty', href: '/support' },
            { name: 'Contact Us', href: '/support' },
        ],
        Education: [
            { name: 'For Schools', href: '/schools' },
            { name: 'Teacher Resources', href: '/curriculum' },
            { name: 'Case Studies', href: '/resources' },
            { name: 'Pilot Program', href: '/schools' },
        ],
    };

    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                    {/* Logo and description */}
                    <div className="col-span-2 md:col-span-1">
                        <p className="text-gray-400 mb-6">
                            Empowering the next generation through hands-on robotics and coding education.
                        </p>
                        <div className="flex space-x-4">
                            <button className="text-gray-400 hover:text-white transition-colors">
                                <Facebook className="h-5 w-5" />
                            </button>
                            <button className="text-gray-400 hover:text-white transition-colors">
                                <Twitter className="h-5 w-5" />
                            </button>
                            <button className="text-gray-400 hover:text-white transition-colors">
                                <Instagram className="h-5 w-5" />
                            </button>
                            <button className="text-gray-400 hover:text-white transition-colors">
                                <Youtube className="h-5 w-5" />
                            </button>
                            <button className="text-gray-400 hover:text-white transition-colors">
                                <Linkedin className="h-5 w-5" />
                            </button>
                        </div>
                    </div>

                    {/* Footer links */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h3 className="font-semibold mb-4">{category}</h3>
                            <ul className="space-y-2">
                                {links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-gray-400 hover:text-white transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Newsletter signup */}
                <div className="border-t border-gray-800 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-4 md:mb-0">
                            <h3 className="font-semibold mb-2">Stay updated with Codino</h3>
                            <p className="text-gray-400">Get the latest news, updates, and educational resources.</p>
                        </div>
                        <div className="flex space-x-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-blue-600 min-w-0 w-64"
                            />
                            <Button className="bg-blue-600 hover:bg-blue-700 whitespace-nowrap">
                                Subscribe
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <div className="flex space-x-6 mb-4 md:mb-0">
                        <button className="text-gray-400 hover:text-white transition-colors">
                            Privacy Policy
                        </button>
                        <button className="text-gray-400 hover:text-white transition-colors">
                            Terms of Service
                        </button>
                        <button className="text-gray-400 hover:text-white transition-colors">
                            Cookie Policy
                        </button>
                    </div>
                    <div className="flex items-center space-x-4">
                        <span className="text-gray-400">Language:</span>
                        <select className="bg-gray-800 border border-gray-700 rounded px-3 py-1 text-white focus:outline-none focus:border-blue-600">
                            <option value="en">English</option>
                            <option value="tr">Türkçe</option>
                        </select>
                    </div>
                </div>

                <div className="text-center text-gray-400 mt-8">
                    <p>&copy; 2024 Codino. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}