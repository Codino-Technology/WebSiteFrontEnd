'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ImageWithFallback } from '@/components/ImageWithFallback';
import {
    Check,
    X,
    Star,
    Users,
    Clock,
    Zap,
    ShoppingCart,
    Heart
} from 'lucide-react';

export default function KitsPage() {
    const [selectedKit, setSelectedKit] = useState<string | null>(null);

    const kits = [
        {
            id: 'starter',
            name: 'Codino Starter Kit',
            subtitle: 'Perfect First Robot',
            price: 89,
            originalPrice: null,
            age: '8-10 years',
            difficulty: 'Beginner',
            servoCount: 2,
            projects: 20,
            buildTime: '30-60 min',
            image: 'https://images.unsplash.com/photo-1752761425062-cdf05be3b1a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxyb2JvdCUyMGtpdCUyMGNvbXBvbmVudHMlMjBlbGVjdHJvbmljc3xlbnwxfHx8fDE3NTcxNTc5NjJ8MA&ixlib=rb-4.1.0&q=80&w=400',
            badge: 'Most Popular',
            badgeColor: 'bg-green-100 text-green-800',
            rating: 4.8,
            reviews: 1247,
            highlights: [
                'Large, easy-to-handle components',
                'Guided step-by-step tutorials',
                'Safety-certified for young learners',
                'No small parts choking hazard'
            ],
            components: {
                controller: 'ESP32 Basic',
                servos: '2x Standard Servo Motors',
                sensors: 'Light, Touch, Sound',
                connectivity: 'WiFi',
                battery: 'Rechargeable Li-Po (safe)',
                extras: 'Building blocks, cables, tools'
            }
        },
        {
            id: 'advanced',
            name: 'Codino Advanced Kit',
            subtitle: 'More Power, More Possibilities',
            price: 149,
            originalPrice: 179,
            age: '11-14 years',
            difficulty: 'Intermediate',
            servoCount: 4,
            projects: 40,
            buildTime: '45-90 min',
            image: 'https://images.unsplash.com/photo-1752761425062-cdf05be3b1a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxyb2JvdCUyMGtpdCUyMGNvbXBvbmVudHMlMjBlbGVjdHJvbmljc3xlbnwxfHx8fDE3NTcxNTc5NjJ8MA&ixlib=rb-4.1.0&q=80&w=400',
            badge: 'Best Value',
            badgeColor: 'bg-blue-100 text-blue-800',
            rating: 4.9,
            reviews: 892,
            highlights: [
                'More servo motors for complex builds',
                'Advanced sensor suite included',
                'Bluetooth connectivity for remote control',
                'Competition-ready capabilities'
            ],
            components: {
                controller: 'ESP32 Pro',
                servos: '4x High-Torque Servo Motors',
                sensors: 'Ultrasonic, Gyroscope, Camera',
                connectivity: 'WiFi + Bluetooth',
                battery: 'Extended Li-Po + Power Bank',
                extras: 'Advanced building kit, tools, case'
            }
        },
        {
            id: 'pro',
            name: 'Codino Pro Kit',
            subtitle: 'Professional Robotics Experience',
            price: 229,
            originalPrice: null,
            age: '13-16 years',
            difficulty: 'Advanced',
            servoCount: 6,
            projects: 60,
            buildTime: '60-120 min',
            image: 'https://images.unsplash.com/photo-1752761425062-cdf05be3b1a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxyb2JvdCUyMGtpdCUyMGNvbXBvbmVudHMlMjBlbGVjdHJvbmljc3xlbnwxfHx8fDE3NTcxNTc5NjJ8MA&ixlib=rb-4.1.0&q=80&w=400',
            badge: 'Pro Level',
            badgeColor: 'bg-purple-100 text-purple-800',
            rating: 4.9,
            reviews: 456,
            highlights: [
                'Professional-grade components',
                'Advanced AI and computer vision',
                'Competition and hackathon ready',
                'University-level project complexity'
            ],
            components: {
                controller: 'ESP32 Pro Max + AI Chip',
                servos: '6x Metal-Gear Servo Motors',
                sensors: 'Full Sensor Suite + AI Camera',
                connectivity: 'WiFi + Bluetooth + 4G',
                battery: 'High-Capacity Li-Po + Wireless',
                extras: 'Professional toolkit, carry case'
            }
        }
    ];

    const comparisonFeatures = [
        { feature: 'Age Range', starter: '8-10 years', advanced: '11-14 years', pro: '13-16 years' },
        { feature: 'Difficulty Level', starter: 'Beginner', advanced: 'Intermediate', pro: 'Advanced' },
        { feature: 'Servo Motors', starter: '2', advanced: '4', pro: '6' },
        { feature: 'Projects Included', starter: '20', advanced: '40', pro: '60+' },
        { feature: 'Build Time', starter: '30-60 min', advanced: '45-90 min', pro: '60-120 min' },
        { feature: 'ESP32 Controller', starter: 'Basic', advanced: 'Pro', pro: 'Pro Max + AI' },
        { feature: 'WiFi Connectivity', starter: true, advanced: true, pro: true },
        { feature: 'Bluetooth', starter: false, advanced: true, pro: true },
        { feature: 'Camera/Vision', starter: false, advanced: 'Basic', pro: 'AI-Powered' },
        { feature: 'Mobile App Control', starter: true, advanced: true, pro: true },
        { feature: 'Simulation Mode', starter: true, advanced: true, pro: true },
        { feature: 'Competition Ready', starter: false, advanced: 'Regional', pro: 'International' },
        { feature: 'Warranty', starter: '1 Year', advanced: '2 Years', pro: '2 Years' }
    ];

    const accessories = [
        {
            name: 'Extra Servo Pack',
            price: 29,
            image: 'https://images.unsplash.com/photo-1752761425062-cdf05be3b1a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxyb2JvdCUyMGtpdCUyMGNvbXBvbmVudHMlMjBlbGVjdHJvbmljc3xlbnwxfHx8fDE3NTcxNTc5NjJ8MA&ixlib=rb-4.1.0&q=80&w=200',
            description: '2 additional servo motors for expanded builds'
        },
        {
            name: 'Sensor Expansion Kit',
            price: 39,
            image: 'https://images.unsplash.com/photo-1752761425062-cdf05be3b1a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxyb2JvdCUyMGtpdCUyMGNvbXBvbmVudHMlMjBlbGVjdHJvbmljc3xlbnwxfHx8fDE3NTcxNTc5NjJ8MA&ixlib=rb-4.1.0&q=80&w=200',
            description: 'Temperature, humidity, and proximity sensors'
        },
        {
            name: 'Premium Carry Case',
            price: 49,
            image: 'https://images.unsplash.com/photo-1752761425062-cdf05be3b1a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxyb2JvdCUyMGtpdCUyMGNvbXBvbmVudHMlMjBlbGVjdHJvbmljc3xlbnwxfHx8fDE3NTcxNTc5NjJ8MA&ixlib=rb-4.1.0&q=80&w=200',
            description: 'Organized storage for all components and projects'
        }
    ];

    const renderFeatureCell = (value: string | boolean) => {
        if (typeof value === 'boolean') {
            return value ? (
                <Check className="h-5 w-5 text-green-600 mx-auto" />
            ) : (
                <X className="h-5 w-5 text-gray-400 mx-auto" />
            );
        }
        return <span className="text-center">{value}</span>;
    };

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-6">
                            Robot Kits for Every Age
                        </Badge>
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            Choose Your Perfect Robot Kit
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            From beginner-friendly builds to advanced robotics projects, find the kit that matches
                            your child&apos;s age, interests, and skill level.
                        </p>
                    </div>
                </div>
            </section>

            {/* Kit Cards */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-8 mb-16">
                        {kits.map((kit) => (
                            <Card
                                key={kit.id}
                                className={`relative border-2 transition-all duration-300 ${
                                    selectedKit === kit.id ? 'border-blue-500 shadow-xl scale-105' : 'border-gray-200 hover:border-blue-300 hover:shadow-lg'
                                }`}
                            >
                                {kit.badge && (
                                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                                        <Badge className={kit.badgeColor}>
                                            {kit.badge}
                                        </Badge>
                                    </div>
                                )}

                                <CardHeader className="pb-4">
                                    <div className="aspect-square w-full rounded-lg overflow-hidden mb-4">
                                        <ImageWithFallback
                                            src={kit.image}
                                            alt={kit.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    <CardTitle className="text-xl text-gray-900">{kit.name}</CardTitle>
                                    <p className="text-sm text-gray-600">{kit.subtitle}</p>

                                    <div className="flex items-center justify-between text-sm text-gray-500">
                                        <span>{kit.age}</span>
                                        <div className="flex items-center">
                                            <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                                            <span>{kit.rating}</span>
                                            <span className="ml-1">({kit.reviews})</span>
                                        </div>
                                    </div>
                                </CardHeader>

                                <CardContent className="pt-0">
                                    <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                                        <div>
                                            <div className="font-semibold text-blue-600">{kit.servoCount}</div>
                                            <div className="text-xs text-gray-500">Servos</div>
                                        </div>
                                        <div>
                                            <div className="font-semibold text-green-600">{kit.projects}</div>
                                            <div className="text-xs text-gray-500">Projects</div>
                                        </div>
                                        <div>
                                            <div className="font-semibold text-purple-600">{kit.difficulty}</div>
                                            <div className="text-xs text-gray-500">Level</div>
                                        </div>
                                    </div>

                                    <div className="space-y-2 mb-6">
                                        {kit.highlights.map((highlight, index) => (
                                            <div key={index} className="flex items-center text-sm text-gray-600">
                                                <Check className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                                                {highlight}
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center">
                                            <span className="text-3xl font-bold text-blue-600">${kit.price}</span>
                                            {kit.originalPrice && (
                                                <span className="text-lg text-gray-400 line-through ml-2">${kit.originalPrice}</span>
                                            )}
                                        </div>
                                        <button
                                            onClick={() => setSelectedKit(selectedKit === kit.id ? null : kit.id)}
                                            className="text-blue-600 hover:text-blue-700 text-sm"
                                        >
                                            {selectedKit === kit.id ? 'Hide Details' : 'View Details'}
                                        </button>
                                    </div>

                                    <div className="flex gap-2">
                                        <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                                            <ShoppingCart className="h-4 w-4 mr-2" />
                                            Add to Cart
                                        </Button>
                                        <Button variant="outline" size="icon" className="border-gray-300">
                                            <Heart className="h-4 w-4" />
                                        </Button>
                                    </div>

                                    {selectedKit === kit.id && (
                                        <div className="mt-6 pt-6 border-t border-gray-200">
                                            <h4 className="font-semibold text-gray-900 mb-3">What&apos;s Included:</h4>
                                            <div className="space-y-2 text-sm text-gray-600">
                                                <div><strong>Controller:</strong> {kit.components.controller}</div>
                                                <div><strong>Motors:</strong> {kit.components.servos}</div>
                                                <div><strong>Sensors:</strong> {kit.components.sensors}</div>
                                                <div><strong>Connectivity:</strong> {kit.components.connectivity}</div>
                                                <div><strong>Power:</strong> {kit.components.battery}</div>
                                                <div><strong>Extras:</strong> {kit.components.extras}</div>
                                            </div>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Compare All Kits</h2>
                        <p className="text-lg text-gray-600">Side-by-side comparison to help you choose the perfect kit</p>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                        <Table>
                            <TableHeader>
                                <TableRow className="bg-gray-50">
                                    <TableHead className="font-semibold text-gray-900 w-1/4">Features</TableHead>
                                    <TableHead className="font-semibold text-gray-900 text-center">Starter Kit</TableHead>
                                    <TableHead className="font-semibold text-gray-900 text-center">Advanced Kit</TableHead>
                                    <TableHead className="font-semibold text-gray-900 text-center">Pro Kit</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {comparisonFeatures.map((row, index) => (
                                    <TableRow key={index} className={index % 2 === 0 ? 'bg-gray-25' : 'bg-white'}>
                                        <TableCell className="font-medium text-gray-900">{row.feature}</TableCell>
                                        <TableCell className="text-center">{renderFeatureCell(row.starter)}</TableCell>
                                        <TableCell className="text-center">{renderFeatureCell(row.advanced)}</TableCell>
                                        <TableCell className="text-center">{renderFeatureCell(row.pro)}</TableCell>
                                    </TableRow>
                                ))}
                                <TableRow className="bg-blue-50 border-t-2 border-blue-200">
                                    <TableCell className="font-bold text-gray-900">Price</TableCell>
                                    <TableCell className="text-center font-bold text-blue-600">$89</TableCell>
                                    <TableCell className="text-center font-bold text-blue-600">$149</TableCell>
                                    <TableCell className="text-center font-bold text-blue-600">$229</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </section>

            {/* Accessories */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Expand Your Kit</h2>
                        <p className="text-lg text-gray-600">Additional components and accessories to enhance your robotics experience</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        {accessories.map((accessory, index) => (
                            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                                <CardContent className="p-6">
                                    <div className="aspect-square w-24 h-24 mx-auto mb-4 rounded-lg overflow-hidden">
                                        <ImageWithFallback
                                            src={accessory.image}
                                            alt={accessory.name}
                                            className="w-full h-full object-cover"
                                            width={96}
                                            height={96}
                                        />
                                    </div>
                                    <h3 className="font-semibold text-gray-900 text-center mb-2">{accessory.name}</h3>
                                    <p className="text-sm text-gray-600 text-center mb-4">{accessory.description}</p>
                                    <div className="text-center">
                                        <div className="text-xl font-bold text-blue-600 mb-3">${accessory.price}</div>
                                        <Button size="sm" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                                            Add to Cart
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ for Kits */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Kit Selection Help</h2>
                        <p className="text-lg text-gray-600">Not sure which kit is right for you? Here&apos;s some guidance</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className="border-0 shadow-md">
                            <CardContent className="p-6">
                                <Users className="h-8 w-8 text-green-600 mb-4" />
                                <h3 className="font-semibold text-gray-900 mb-2">First-Time Builders</h3>
                                <p className="text-sm text-gray-600 mb-4">
                                    Start with the Starter Kit for ages 8-10, or Advanced Kit for ages 11+. Both include everything needed for a great introduction to robotics.
                                </p>
                                <Button
                                    size="sm"
                                    variant="outline"
                                    className="border-green-600 text-green-600 hover:bg-green-50"
                                >
                                    Choose Starter Kit
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="border-0 shadow-md">
                            <CardContent className="p-6">
                                <Zap className="h-8 w-8 text-blue-600 mb-4" />
                                <h3 className="font-semibold text-gray-900 mb-2">Experienced Coders</h3>
                                <p className="text-sm text-gray-600 mb-4">
                                    If your child already knows programming basics, jump to the Advanced or Pro Kit for more challenging projects and capabilities.
                                </p>
                                <Button
                                    size="sm"
                                    variant="outline"
                                    className="border-blue-600 text-blue-600 hover:bg-blue-50"
                                >
                                    Choose Advanced Kit
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="border-0 shadow-md">
                            <CardContent className="p-6">
                                <Clock className="h-8 w-8 text-purple-600 mb-4" />
                                <h3 className="font-semibold text-gray-900 mb-2">Competition Ready</h3>
                                <p className="text-sm text-gray-600 mb-4">
                                    For robotics competitions, hackathons, or advanced STEM programs, the Pro Kit offers professional-grade capabilities.
                                </p>
                                <Button
                                    size="sm"
                                    variant="outline"
                                    className="border-purple-600 text-purple-600 hover:bg-purple-50"
                                >
                                    Choose Pro Kit
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
                        Still Not Sure Which Kit to Choose?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8">
                        Try our simulation for free to get a feel for the programming environment, or contact our education team for personalized recommendations.
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
                        <Link href="/support">
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-white text-white hover:bg-white hover:text-blue-600"
                            >
                                Get Expert Advice
                            </Button>
                        </Link>
                    </div>
                    <p className="text-sm text-blue-200 mt-6">
                        30-day money-back guarantee • Free worldwide shipping • 1-2 year warranty included
                    </p>
                </div>
            </section>
        </div>
    );
}