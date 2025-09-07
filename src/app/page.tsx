'use client'

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ImageWithFallback } from '@/components/ImageWithFallback';
import {
    Play,
    Code,
    Cpu,
    Gamepad2,
    Star,
    ChevronRight,
    Zap,
    Target,
    Brain
} from 'lucide-react';

export default function HomePage() {
    const benefits = [
        {
            icon: <Brain className="h-8 w-8 text-blue-600"/>,
            title: "Hands-On Learning",
            description: "Build real robots while learning programming concepts through interactive, gamified experiences that make coding fun and tangible."
        },
        {
            icon: <Target className="h-8 w-8 text-green-600"/>,
            title: "STEM Skills Development",
            description: "Develop critical thinking, problem-solving, and computational skills that prepare students for future careers in technology."
        },
        {
            icon: <Zap className="h-8 w-8 text-purple-600"/>,
            title: "Simulation & AR Mode",
            description: "Test code in virtual environments before building physically, reducing costs while expanding learning possibilities."
        }
    ];

    const steps = [
        {
            number: "01",
            title: "Get Your Kit",
            description: "Choose from age-appropriate robot kits with ESP32 microcontrollers, servo motors, and safety-certified components.",
            image: "https://images.unsplash.com/photo-1752761425062-cdf05be3b1a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxyb2JvdCUyMGtpdCUyMGNvbXBvbmVudHMlMjBlbGVjdHJvbmljc3xlbnwxfHx8fDE3NTcxNTc5NjJ8MA&ixlib=rb-4.1.0&q=80&w=400"
        },
        {
            number: "02",
            title: "Code & Build",
            description: "Use our intuitive block-based programming platform to write code, then build and program your robot step-by-step.",
            image: "https://images.unsplash.com/photo-1731834453355-df041245e7d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb25hbCUyMHRlY2hub2xvZ3klMjBzaW11bGF0aW9uJTIwc2NyZWVufGVufDF8fHx8MTc1NzE1Nzk2NXww&ixlib=rb-4.1.0&q=80&w=400"
        },
        {
            number: "03",
            title: "Learn & Grow",
            description: "Progress through structured learning paths, earn achievements, and advance from beginner to advanced robotics concepts.",
            image: "https://images.unsplash.com/photo-1623287072519-d224cfbac5a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHByb2dyYW1taW5nJTIwcm9ib3RzJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc1NzE1Nzk1OHww&ixlib=rb-4.1.0&q=80&w=400"
        }
    ];


    const faqs = [
        {
            question: "What age groups is Codino suitable for?",
            answer: "Codino is designed for children ages 8-16, with different kit levels and curriculum paths tailored to specific age groups and skill levels. Our Starter Kit is perfect for ages 8-10, while our Advanced Kit challenges students up to 16."
        },
        {
            question: "Do I need any programming experience to get started?",
            answer: "No programming experience is required! Codino uses a visual, block-based coding system that makes programming intuitive and fun. Students naturally progress from drag-and-drop blocks to understanding fundamental programming concepts."
        },
        {
            question: "What's included in the robot kits?",
            answer: "Each kit includes an ESP32 microcontroller, servo motors, sensors, structural components, cables, and a comprehensive guide. All components are safety-certified and designed for young learners. Battery safety features and child-safe connectors are standard."
        },
        {
            question: "Can I try before purchasing?",
            answer: "Absolutely! Our browser-based simulation allows you to experience Codino's programming environment and test robot behaviors virtually before purchasing a physical kit. Try our free simulation now!"
        },
        {
            question: "Is there support for schools and teachers?",
            answer: "Yes! We offer comprehensive school programs including classroom licenses, teacher training, curriculum guides aligned with educational standards, and dedicated support. Contact us for pilot program options."
        },
        {
            question: "What makes Codino different from other robotics kits?",
            answer: "Codino uniquely combines physical robot building with virtual simulation and AR experiences. Our gamified learning progression, safety-first design, and comprehensive curriculum support set us apart from traditional robotics kits."
        }
    ];

    return (
        <div className="min-h-screen">
            {/*Hero Section*/}
            <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-6">
                                🚀 Now Available - AR Simulation Mode
                            </Badge>
                            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                                Build Robots.
                                <br/>
                                <span className="text-blue-600">Learn Code.</span>
                                <br/>
                                Shape the Future.
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                Codino combines hands-on robot building with gamified programming education.
                                Perfect for curious minds ages 8-16, our platform makes STEM learning
                                engaging, safe, and accessible for families and schools worldwide.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                <Link href="/simulation">
                                    <Button
                                        size="lg"
                                        className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3"
                                    >
                                        Try Free Simulation
                                        <ChevronRight className="ml-2 h-5 w-5"/>
                                    </Button>
                                </Link>
                                <Link href="/kits">
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="border-blue-600 text-blue-600 hover:bg-blue-50 text-lg px-8 py-3"
                                    >
                                        Shop Robot Kits
                                    </Button>
                                </Link>
                            </div>
                            <p className="text-sm text-gray-500">
                                ✓ Free shipping worldwide • ✓ 30-day money-back guarantee • ✓ Safety certified
                            </p>
                        </div>
                        <div className="relative">
                            <div className="aspect-video bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
                                <ImageWithFallback
                                    src="https://images.unsplash.com/photo-1623287072519-d224cfbac5a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHByb2dyYW1taW5nJTIwcm9ib3RzJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc1NzE1Nzk1OHww&ixlib=rb-4.1.0&q=80&w=1080"
                                    alt="Children programming robots in classroom"
                                    className="w-full h-full object-cover"
                                />
                                <div
                                    className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                                    <Button
                                        size="lg"
                                        variant="secondary"
                                        className="bg-white hover:bg-gray-100 text-gray-900"
                                    >
                                        <Play className="mr-2 h-6 w-6"/>
                                        Watch 90s Demo
                                    </Button>
                                </div>
                            </div>
                            <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4 max-w-xs">
                                <div className="flex items-center space-x-3">
                                    <div className="bg-green-100 rounded-full p-2">
                                        <Star className="h-5 w-5 text-green-600"/>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">4.9/5 Rating</p>
                                        <p className="text-sm text-gray-600">From 2,500+ families</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Why Choose Codino?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Our unique approach combines physical building with virtual learning,
                            creating an engaging and comprehensive STEM education experience.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                                <CardContent className="p-8">
                                    <div className="mb-6">
                                        {benefit.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 lg:py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            How It Works
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Get started with Codino in three simple steps. From unboxing to building
                            your first robot, we guide you every step of the way.
                        </p>
                    </div>
                    <div className="grid lg:grid-cols-3 gap-8">
                        {steps.map((step, index) => (
                            <div key={index} className="text-center">
                                <div className="relative mb-8">
                                    <div className="aspect-square w-64 mx-auto rounded-xl overflow-hidden shadow-lg">
                                        <ImageWithFallback
                                            src={step.image}
                                            alt={step.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div
                                        className="absolute -top-4 -left-4 bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                                        {step.number}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100 mb-6">
                                🎮 Interactive Simulation
                            </Badge>
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                                Test Your Code Before Building
                            </h2>
                            <p className="text-xl text-gray-600 mb-8">
                                Our advanced simulation environment lets you test robot behaviors,
                                debug code, and experiment with unlimited possibilities before
                                assembling physical components.
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center">
                                    <div className="bg-green-100 rounded-full p-1 mr-3">
                                        <Code className="h-4 w-4 text-green-600"/>
                                    </div>
                                    <span className="text-gray-700">Visual block-based programming</span>
                                </li>
                                <li className="flex items-center">
                                    <div className="bg-green-100 rounded-full p-1 mr-3">
                                        <Cpu className="h-4 w-4 text-green-600"/>
                                    </div>
                                    <span className="text-gray-700">Real-time physics simulation</span>
                                </li>
                                <li className="flex items-center">
                                    <div className="bg-green-100 rounded-full p-1 mr-3">
                                        <Gamepad2 className="h-4 w-4 text-green-600"/>
                                    </div>
                                    <span className="text-gray-700">AR integration for enhanced learning</span>
                                </li>
                            </ul>
                            <Link href="/simulation">
                                <Button
                                    size="lg"
                                    className="bg-purple-600 hover:bg-purple-700"
                                >
                                    Try Simulation Now
                                    <ChevronRight className="ml-2 h-5 w-5"/>
                                </Button>
                            </Link>
                        </div>
                        <div
                            className="aspect-video bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl flex items-center justify-center">
                            <div className="text-center">
                                <div className="bg-white rounded-full p-6 mb-4 shadow-lg mx-auto w-fit">
                                    <Gamepad2 className="h-12 w-12 text-purple-600"/>
                                </div>
                                <p className="text-gray-600 font-medium">Interactive Simulation Preview</p>
                                <p className="text-sm text-gray-500">Click Try Simulation Now to experience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 lg:py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* School Logos */}
                    {/*  <div className="text-center mb-16">
                        <p className="text-gray-500 mb-8">Trusted by schools and families worldwide</p>
                        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 items-center opacity-60">
                            {schoolLogos.map((school, index) => (
                                <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                                    <p className="text-sm font-medium text-gray-600 text-center">{school}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/*  <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <Card key={index} className="border-0 shadow-lg">
                                <CardContent className="p-6">
                                    <div className="flex items-center mb-4">
                                        <ImageWithFallback
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-12 h-12 rounded-full mr-4"
                                            width={48}
                                            height={48}
                                        />
                                        <div>
                                            <p className="font-semibold text-gray-900">{testimonial.name}</p>
                                            <p className="text-sm text-gray-600">{testimonial.role}</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 italic">&ldquo;{testimonial.content}&ldquo;</p>
                                    <div className="flex mt-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="h-4 w-4 text-yellow-400 fill-current"/>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>*/}

                </div>
            </section>

            {/* Pricing Teaser */}
            <section className="py-16 lg:py-24 bg-blue-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="text-white mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                            Start Learning Today
                        </h2>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                            Choose from flexible pricing options for individuals and schools.
                            Every plan includes our comprehensive curriculum and support.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <Card className="border-0 shadow-xl">
                            <CardContent className="p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">For Families</h3>
                                <p className="text-gray-600 mb-6">Perfect for individual learners and homeschooling</p>
                                <div className="text-3xl font-bold text-blue-600 mb-6">From $89</div>
                                <Link href="/pricing">
                                    <Button
                                        size="lg"
                                        className="w-full bg-blue-600 hover:bg-blue-700"
                                    >
                                        View Family Plans
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                        <Card className="border-0 shadow-xl">
                            <CardContent className="p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">For Schools</h3>
                                <p className="text-gray-600 mb-6">Classroom licenses with teacher training included</p>
                                <div className="text-3xl font-bold text-blue-600 mb-6">Custom</div>
                                <Link href="/schools">
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="w-full border-blue-600 text-blue-600 hover:bg-blue-50"
                                    >
                                        Request Quote
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-xl text-gray-600">
                            Everything you need to know about Codino and our robotics education platform.
                        </p>
                    </div>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`}
                                           className="border border-gray-200 rounded-lg px-6">
                                <AccordionTrigger
                                    className="text-left font-semibold text-gray-900 hover:no-underline py-6">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 pb-6">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                    <div className="text-center mt-12">
                        <p className="text-gray-600 mb-4">Still have questions?</p>
                        <Link href="/support">
                            <Button
                                variant="outline"
                                className="border-blue-600 text-blue-600 hover:bg-blue-50"
                            >
                                Contact Support
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
