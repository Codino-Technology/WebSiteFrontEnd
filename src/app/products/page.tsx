'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ImageWithFallback } from '@/components/ImageWithFallback';
import {
    Cpu,
    Zap,
    Shield,
    Bluetooth,
    Battery,
    Settings,
    Download,
    Monitor,
    Users,
    BookOpen,
    CheckCircle,
    ChevronRight
} from 'lucide-react';

export default function ProductsPage() {
    const kits = [
        {
            id: 'starter',
            name: 'Codino Starter Kit',
            price: '$89',
            age: '8-10 years',
            difficulty: 'Beginner',
            servos: 2,
            image: 'https://images.unsplash.com/photo-1752761425062-cdf05be3b1a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxyb2JvdCUyMGtpdCUyMGNvbXBvbmVudHMlMjBlbGVjdHJvbmljc3xlbnwxfHx8fDE3NTcxNTc5NjJ8MA&ixlib=rb-4.1.0&q=80&w=400',
            description: 'Perfect introduction to robotics with simplified components and guided projects.',
            features: ['2 Servo Motors', '1 ESP32 Controller', 'Basic Sensors', '20 Projects', 'Safety Certified'],
            badge: 'Most Popular'
        },
        {
            id: 'advanced',
            name: 'Codino Advanced Kit',
            price: '$149',
            age: '11-14 years',
            difficulty: 'Intermediate',
            servos: 4,
            image: 'https://images.unsplash.com/photo-1752761425062-cdf05be3b1a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxyb2JvdCUyMGtpdCUyMGNvbXBvbmVudHMlMjBlbGVjdHJvbmljc3xlbnwxfHx8fDE3NTcxNTc5NjJ8MA&ixlib=rb-4.1.0&q=80&w=400',
            description: 'Comprehensive kit with advanced sensors and more complex building possibilities.',
            features: ['4 Servo Motors', '1 ESP32 Pro', 'Advanced Sensors', '40 Projects', 'Bluetooth Module'],
            badge: 'Best Value'
        },
        {
            id: 'pro',
            name: 'Codino Pro Kit',
            price: '$229',
            age: '13-16 years',
            difficulty: 'Advanced',
            servos: 6,
            image: 'https://images.unsplash.com/photo-1752761425062-cdf05be3b1a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxyb2JvdCUyMGtpdCUyMGNvbXBvbmVudHMlMjBlbGVjdHJvbmljc3xlbnwxfHx8fDE3NTcxNTc5NjJ8MA&ixlib=rb-4.1.0&q=80&w=400',
            description: 'Professional-grade components for serious robotics enthusiasts and competitive builders.',
            features: ['6 Servo Motors', '1 ESP32 Pro Max', 'Pro Sensor Suite', '60+ Projects', 'Competition Ready'],
            badge: 'Pro Level'
        }
    ];

    const technicalSpecs = [
        {
            icon: <Cpu className="h-6 w-6 text-blue-600" />,
            title: 'ESP32 Microcontroller',
            description: 'Dual-core processor with WiFi and Bluetooth capabilities, perfect for learning embedded programming concepts.'
        },
        {
            icon: <Zap className="h-6 w-6 text-yellow-600" />,
            title: 'High-Torque Servos',
            description: 'Precision servo motors with metal gears for reliable movement and long-lasting performance.'
        },
        {
            icon: <Bluetooth className="h-6 w-6 text-blue-500" />,
            title: 'Wireless Connectivity',
            description: 'Built-in Bluetooth and WiFi for remote control and IoT project capabilities.'
        },
        {
            icon: <Battery className="h-6 w-6 text-green-600" />,
            title: 'Safe Battery System',
            description: 'Child-safe rechargeable batteries with overcharge protection and auto-shutoff features.'
        },
        {
            icon: <Shield className="h-6 w-6 text-red-600" />,
            title: 'Safety Certified',
            description: 'All components meet international safety standards for educational use with proper age recommendations.'
        },
        {
            icon: <Settings className="h-6 w-6 text-gray-600" />,
            title: 'Modular Design',
            description: 'Snap-together components that are easy to assemble and reconfigure for different projects.'
        }
    ];

    const simulationFeatures = [
        {
            title: 'Visual Programming',
            description: 'Drag-and-drop block-based coding that makes programming concepts accessible to all ages.',
            icon: <Monitor className="h-8 w-8 text-purple-600" />
        },
        {
            title: 'Physics Simulation',
            description: 'Realistic physics engine that accurately simulates robot movement and interactions.',
            icon: <Zap className="h-8 w-8 text-blue-600" />
        },
        {
            title: 'AR Integration',
            description: 'Augmented reality features that bring virtual robots into the real world for enhanced learning.',
            icon: <BookOpen className="h-8 w-8 text-green-600" />
        }
    ];

    const parentDashboardFeatures = [
        'Real-time progress tracking',
        'Skill development milestones',
        'Project completion status',
        'Time spent learning analytics',
        'Safety and screen time controls',
        'Achievement and badge system',
        'Weekly progress reports',
        'Parent-child collaboration tools'
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-6">
                            Complete Robotics Solution
                        </Badge>
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            Robot Kits & Digital Platform
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive robotics education combining physical building with digital learning.
                            Choose the perfect kit for your child&apos;s age and skill level.
                        </p>
                    </div>
                </div>
            </section>

            {/* Product Kits */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Robot Kit</h2>
                        <p className="text-lg text-gray-600">Age-appropriate kits designed to grow with your child&apos;s learning journey</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        {kits.map((kit) => (
                            <Card key={kit.id} className="relative border-2 hover:border-blue-300 transition-colors">
                                {kit.badge && (
                                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                        <Badge className="bg-blue-600 text-white hover:bg-blue-600">
                                            {kit.badge}
                                        </Badge>
                                    </div>
                                )}
                                <CardHeader>
                                    <div className="aspect-square w-full rounded-lg overflow-hidden mb-4">
                                        <ImageWithFallback
                                            src={kit.image}
                                            alt={kit.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <CardTitle className="text-xl text-gray-900">{kit.name}</CardTitle>
                                    <div className="flex justify-between items-center text-sm text-gray-600">
                                        <span>{kit.age}</span>
                                        <span>{kit.difficulty}</span>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 mb-4">{kit.description}</p>
                                    <ul className="space-y-2 mb-6">
                                        {kit.features.map((feature, index) => (
                                            <li key={index} className="flex items-center text-sm text-gray-600">
                                                <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-3xl font-bold text-blue-600">{kit.price}</span>
                                        <span className="text-sm text-gray-500">Free shipping</span>
                                    </div>
                                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                                        Add to Cart
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="text-center">
                        <Link href="/kits">
                            <Button
                                variant="outline"
                                size="lg"
                                className="border-blue-600 text-blue-600 hover:bg-blue-50"
                            >
                                Compare All Kits
                                <ChevronRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Technical Features */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Technical Specifications</h2>
                        <p className="text-lg text-gray-600">Professional-grade components designed for educational use</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {technicalSpecs.map((spec, index) => (
                            <Card key={index} className="border-0 shadow-md">
                                <CardContent className="p-6">
                                    <div className="flex items-center mb-4">
                                        {spec.icon}
                                        <h3 className="font-semibold text-gray-900 ml-3">{spec.title}</h3>
                                    </div>
                                    <p className="text-gray-600 text-sm">{spec.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Simulation Mode */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100 mb-6">
                                Digital Platform
                            </Badge>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                Advanced Simulation Environment
                            </h2>
                            <p className="text-lg text-gray-600 mb-8">
                                Test and debug your robot code in a realistic virtual environment before building physically.
                                Our simulation includes accurate physics, interactive challenges, and AR integration.
                            </p>

                            <div className="space-y-6 mb-8">
                                {simulationFeatures.map((feature, index) => (
                                    <div key={index} className="flex items-start">
                                        <div className="mr-4 mt-1">
                                            {feature.icon}
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                                            <p className="text-gray-600">{feature.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <Link href="/simulation">
                                <Button
                                    size="lg"
                                    className="bg-purple-600 hover:bg-purple-700"
                                >
                                    Try Simulation Free
                                    <ChevronRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                        </div>

                        <div className="aspect-video bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl flex items-center justify-center">
                            <ImageWithFallback
                                src="https://images.unsplash.com/photo-1731834453355-df041245e7d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb25hbCUyMHRlY2hub2xvZ3klMjBzaW11bGF0aW9uJTIwc2NyZWVufGVufDF8fHx8MTc1NzE1Nzk2NXww&ixlib=rb-4.1.0&q=80&w=600"
                                alt="Simulation environment"
                                className="w-full h-full object-cover rounded-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Parent Dashboard */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="aspect-video bg-gradient-to-br from-green-100 to-blue-100 rounded-xl flex items-center justify-center">
                            <div className="text-center">
                                <Users className="h-16 w-16 text-green-600 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Parent Dashboard</h3>
                                <p className="text-gray-600">Monitor progress and engage with learning</p>
                            </div>
                        </div>

                        <div>
                            <Badge className="bg-green-100 text-green-800 hover:bg-green-100 mb-6">
                                Family Features
                            </Badge>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                Parent Dashboard & Controls
                            </h2>
                            <p className="text-lg text-gray-600 mb-8">
                                Stay involved in your child&apos;s learning journey with comprehensive progress tracking,
                                safety controls, and collaborative features that bring families together.
                            </p>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                {parentDashboardFeatures.map((feature, index) => (
                                    <div key={index} className="flex items-center">
                                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                                        <span className="text-sm text-gray-700">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <p className="text-sm text-gray-500 mb-6">
                                All data is encrypted and privacy-protected. We never share personal information and comply with COPPA regulations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Downloadable Resources */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                        Downloadable Resources
                    </h2>
                    <p className="text-lg text-gray-600 mb-12">
                        Get detailed information about our products and educational approach
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className="border-2 border-dashed border-gray-300 hover:border-blue-300 transition-colors">
                            <CardContent className="p-8 text-center">
                                <Download className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                                <h3 className="font-semibold text-gray-900 mb-2">Product Brochure</h3>
                                <p className="text-sm text-gray-600 mb-4">Comprehensive overview of all kits and features</p>
                                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                                    Download PDF
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="border-2 border-dashed border-gray-300 hover:border-green-300 transition-colors">
                            <CardContent className="p-8 text-center">
                                <BookOpen className="h-12 w-12 text-green-600 mx-auto mb-4" />
                                <h3 className="font-semibold text-gray-900 mb-2">Curriculum Guide</h3>
                                <p className="text-sm text-gray-600 mb-4">Learning objectives and skill progression</p>
                                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                                    Download PDF
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="border-2 border-dashed border-gray-300 hover:border-purple-300 transition-colors">
                            <CardContent className="p-8 text-center">
                                <Settings className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                                <h3 className="font-semibold text-gray-900 mb-2">Setup Guide</h3>
                                <p className="text-sm text-gray-600 mb-4">Quick start instructions and troubleshooting</p>
                                <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                                    Download PDF
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-blue-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">
                        Ready to Start Building?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8">
                        Join thousands of families already learning with Codino. Try our simulation for free or order your first kit today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/simulation">
                            <Button
                                size="lg"
                                variant="secondary"
                                className="bg-white text-blue-600 hover:bg-gray-100"
                            >
                                Try Free Simulation
                            </Button>
                        </Link>
                        <Link href="/kits">
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-white text-white hover:bg-white hover:text-blue-600"
                            >
                                Shop Robot Kits
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}