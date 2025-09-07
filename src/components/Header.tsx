'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const navigation = [
        { name: 'Home', href: '/' },
        {
            name: 'Products',
            href: '#',
            children: [
                { name: 'All Products', href: '/products' },
                { name: 'Robot Kits', href: '/kits' },
                { name: 'Simulation', href: '/simulation' },
            ]
        },
        { name: 'Curriculum', href: '/curriculum' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'For Schools', href: '/schools' },
        {
            name: 'Company',
            href: '#',
            children: [
                { name: 'About Us', href: '/about' },
                { name: 'Resources', href: '/resources' },
                { name: 'Support', href: '/support' },
            ]
        },
    ];

    return (
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                            <Image
                                src="/codinoLogo.svg"
                                alt="Codino Logo"
                                width={128}
                                height={128}
                                className="w-12 h-12"
                            />
                            <span className="text-xl font-bold text-gray-900">Codino Technology</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <NavigationMenu>
                            <NavigationMenuList className="flex space-x-6">
                                {navigation.map((item) => (
                                    item.children ? (
                                        <NavigationMenuItem key={item.name}>
                                            <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600 transition-colors">
                                                {item.name}
                                            </NavigationMenuTrigger>
                                            <NavigationMenuContent>
                                                <div className="p-2 w-48">
                                                    {item.children.map((child) => (
                                                        <NavigationMenuLink key={child.name} asChild>
                                                            <Link
                                                                href={child.href}
                                                                className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md cursor-pointer transition-colors"
                                                            >
                                                                {child.name}
                                                            </Link>
                                                        </NavigationMenuLink>
                                                    ))}
                                                </div>
                                            </NavigationMenuContent>
                                        </NavigationMenuItem>
                                    ) : (
                                        <NavigationMenuItem key={item.name}>
                                            <NavigationMenuLink
                                                href={item.href}
                                                className={`text-gray-700 hover:text-blue-600 transition-colors cursor-pointer ${
                                                    pathname === item.href ? 'text-blue-600 font-medium' : ''
                                                }`}
                                            >
                                                {item.name}
                                            </NavigationMenuLink>
                                        </NavigationMenuItem>
                                    )
                                ))}
                            </NavigationMenuList>
                        </NavigationMenu>

                        <div className="flex items-center space-x-4">
                            <Link href="/simulation">
                                <Button
                                    variant="outline"
                                    className="text-blue-600 border-blue-600 hover:bg-blue-50"
                                >
                                    Try Simulation
                                </Button>
                            </Link>
                            <Link href="/pricing">
                                <Button className="bg-blue-600 hover:bg-blue-700">
                                    Get Started
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="text-gray-700 hover:text-blue-600 transition-colors"
                        >
                            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-200">
                    <div className="px-4 py-4 space-y-2">
                        {navigation.map((item) => (
                            <div key={item.name}>
                                {item.children ? (
                                    <div>
                                        <div className="text-gray-700 font-medium py-2">{item.name}</div>
                                        <div className="pl-4 space-y-1">
                                            {item.children.map((child) => (
                                                <Link
                                                    key={child.name}
                                                    href={child.href}
                                                    onClick={() => setMobileMenuOpen(false)}
                                                    className="block w-full text-left py-2 text-gray-600 hover:text-blue-600 transition-colors"
                                                >
                                                    {child.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <Link
                                        href={item.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={`block w-full text-left py-2 text-gray-700 hover:text-blue-600 transition-colors ${
                                            pathname === item.href ? 'text-blue-600 font-medium' : ''
                                        }`}
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                        <div className="pt-4 space-y-2">
                            <Link href="/simulation">
                                <Button
                                    variant="outline"
                                    className="w-full text-blue-600 border-blue-600 hover:bg-blue-50"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Try Simulation
                                </Button>
                            </Link>
                            <Link href="/pricing">
                                <Button
                                    className="w-full bg-blue-600 hover:bg-blue-700"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Get Started
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}