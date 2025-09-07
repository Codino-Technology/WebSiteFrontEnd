'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ImageWithFallback } from '@/components/ImageWithFallback';
import {
    Target,
    Eye,
    Heart,
    Lightbulb,
    Leaf,
    Users,
    GraduationCap,
    Calendar,
    TrendingUp,
    Mail,
    ArrowRight,
    Linkedin,
    Github
} from 'lucide-react';

export default function AboutPage() {
    const coreValues = [
        {
            icon: <Heart className="h-8 w-8 text-red-500" />,
            title: "Accessibility",
            description: "We believe every child, regardless of background or location, deserves access to quality STEM education. Our platform is designed to be inclusive, affordable, and available in multiple languages."
        },
        {
            icon: <Lightbulb className="h-8 w-8 text-yellow-500" />,
            title: "Innovation",
            description: "We continuously push the boundaries of educational technology, combining physical building with digital simulation and AR to create learning experiences that inspire and engage."
        },
        {
            icon: <Leaf className="h-8 w-8 text-green-500" />,
            title: "Sustainability",
            description: "Our commitment to the environment drives us to create durable, reusable components and digital-first learning that reduces waste while maximizing educational impact."
        },
        {
            icon: <Users className="h-8 w-8 text-blue-500" />,
            title: "Inclusivity",
            description: "We design for all learners, ensuring our platform welcomes children of every ability, learning style, and cultural background. Diversity makes us stronger."
        }
    ];

    const teamMembers = [
        {
            name: "Hasan Ayberk Aydemir",
            role: "Co-Founder & Backend/Architecture Lead",
            bio: "Expert in scalable system architecture and cloud infrastructure. Ayberk ensures Codino's platform can serve millions of students worldwide while maintaining security, performance, and reliability. His vision for robust backend systems powers our global educational mission.",
            image: "/avatar-ayberk.svg",
            linkedin: "https://www.linkedin.com/in/aydemirayberk/",
            email: "ayberk.aydemir@codinotechnology.com",
            github: "https://github.com/ayberkaydemir"
        },
        {
            name: "Göktuğ Gümüş",
            role: "Co-Founder & Simulation Lead",
            bio: "Pioneering the future of educational simulation and AR experiences. Göktuğ combines deep knowledge of physics engines, computer graphics, and educational psychology to create virtual environments where students can safely experiment and learn robotics concepts.",
            image: "/avatar-goktug.svg",
            linkedin: "https://www.linkedin.com/in/goktuggumuss/",
            email: "goktug.gumus@codinotechnology.com",
            github: "https://github.com/goktuggumus"
        }
    ];

    const milestones = [
        {
            year: "2025",
            title: "Company Founded",
            description: "Three passionate engineers unite with a shared vision to revolutionize STEM education through hands-on robotics."
        },
        {
            year: "2026",
            title: "MVP Development",
            description: "First robot kits and basic simulation platform developed. Pilot program launches with select schools in Turkey."
        },
        {
            year: "2027",
            title: "Global Launch",
            description: "International expansion begins with English platform launch. AR features and advanced simulation environment released."
        },
        {
            year: "2030",
            title: "Scale & Innovation",
            description: "AI-powered personalized learning paths, competitive robotics platform, and partnerships with 1000+ schools worldwide."
        }
    ];


    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-6">
                            Our Story
                        </Badge>
                        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8">
                            Building the Future of
                            <br />
                            <span className="text-blue-600">STEM Education</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            At Codino, we believe that every child has the potential to become a creator, innovator, and problem-solver.
                             We&apos;re on a mission to make robotics and coding education accessible, engaging, and impactful for learners worldwide.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12">
                        <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100">
                            <CardContent className="p-8">
                                <div className="flex items-center mb-6">
                                    <Target className="h-10 w-10 text-blue-600 mr-4" />
                                    <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                                </div>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    To democratize STEM education by providing hands-on, interactive robotics experiences that inspire
                                    curiosity, develop critical thinking skills, and prepare the next generation for a technology-driven future.
                                    We combine physical building with digital innovation to create learning that is both tangible and transformative.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-purple-100">
                            <CardContent className="p-8">
                                <div className="flex items-center mb-6">
                                    <Eye className="h-10 w-10 text-purple-600 mr-4" />
                                    <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                                </div>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    A world where every child, regardless of their background or location, has access to world-class STEM education
                                    that empowers them to build, create, and innovate. We envision classrooms and homes worldwide where learning
                                    is hands-on, collaborative, and joyful.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-16 lg:py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Our Core Values</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            These principles guide every decision we make and every product we create
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {coreValues.map((value, index) => (
                            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                                <CardContent className="p-8 text-center">
                                    <div className="mb-6 flex justify-center">
                                        {value.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Meet Our Founding Team</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Three passionate engineers united by a shared vision to transform STEM education
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {teamMembers.map((member, index) => (
                            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                                <CardHeader>
                                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                                        <ImageWithFallback
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover"
                                            width={128}
                                            height={128}
                                        />
                                    </div>
                                    <CardTitle className="text-xl text-center text-gray-900">{member.name}</CardTitle>
                                    <p className="text-blue-600 text-center font-medium">{member.role}</p>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 leading-relaxed mb-6">{member.bio}</p>
                                    <div className="flex justify-center space-x-4">
                                        <a 
                                            href={member.linkedin} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:text-blue-700 transition-colors"
                                        >
                                            <Linkedin className="h-5 w-5" />
                                        </a>
                                        <a 
                                            href={member.github} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="text-gray-600 hover:text-gray-700 transition-colors"
                                        >
                                            <Github className="h-5 w-5" />
                                        </a>
                                        <a 
                                            href={`mailto:${member.email}`}
                                            className="text-gray-600 hover:text-gray-700 transition-colors"
                                        >
                                            <Mail className="h-5 w-5" />
                                        </a>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Global Impact */}
            {/* <section className="py-16 lg:py-24 bg-blue-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Our Global Impact</h2>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                            Empowering learners, educators, and institutions worldwide to embrace the future of STEM education
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8 mb-16">
                        {impactStats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                    {stat.icon}
                                </div>
                                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                                <div className="text-blue-100">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                            <CardContent className="p-8 text-center">
                                <BookOpen className="h-12 w-12 text-white mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-white mb-4">For Families</h3>
                                <p className="text-blue-100">
                                    Bringing world-class STEM education into homes, making learning accessible and affordable for every family.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                            <CardContent className="p-8 text-center">
                                <Building className="h-12 w-12 text-white mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-white mb-4">For Schools</h3>
                                <p className="text-blue-100">
                                    Transforming classrooms with comprehensive curriculum, teacher training, and cutting-edge educational technology.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                            <CardContent className="p-8 text-center">
                                <Users className="h-12 w-12 text-white mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-white mb-4">For Lifelong Learners</h3>
                                <p className="text-blue-100">
                                    Supporting curiosity at every age with advanced projects, community challenges, and continuous skill development.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section> */}


            {/* Milestones & Roadmap */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Our Journey & Roadmap</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            From startup vision to global impact—here&apos;s how we&apos;re building the future of education
                        </p>
                    </div>

                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-200"></div>

                        <div className="space-y-12">
                            {milestones.map((milestone, index) => (
                                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                                    {/* Timeline dot */}
                                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                                    <Card className={`w-5/12 border-0 shadow-lg ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}>
                                        <CardContent className="p-6">
                                            <div className="flex items-center mb-3">
                                                <Badge className="bg-blue-100 text-blue-800 mr-3">{milestone.year}</Badge>
                                                <Calendar className="h-4 w-4 text-gray-400" />
                                            </div>
                                            <h3 className="text-lg font-bold text-gray-900 mb-2">{milestone.title}</h3>
                                            <p className="text-gray-600">{milestone.description}</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 to-purple-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                        Join Our Mission
                    </h2>
                    <p className="text-xl text-blue-100 mb-12 leading-relaxed">
                        Whether you&apos;re a parent looking to inspire your child, an educator seeking to transform your classroom,
                        or a partner wanting to shape the future of education—we invite you to be part of the Codino community.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                            <CardContent className="p-6 text-center">
                                <Heart className="h-8 w-8 text-white mx-auto mb-3" />
                                <h3 className="font-bold text-white mb-2">Parents</h3>
                                <p className="text-blue-100 text-sm mb-4">Give your child the gift of hands-on STEM learning</p>
                                <Link href="/kits">
                                    <Button
                                        variant="secondary"
                                        size="sm"
                                        className="bg-white text-blue-600 hover:bg-gray-100"
                                    >
                                        Explore Kits
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>

                        <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                            <CardContent className="p-6 text-center">
                                <GraduationCap className="h-8 w-8 text-white mx-auto mb-3" />
                                <h3 className="font-bold text-white mb-2">Educators</h3>
                                <p className="text-blue-100 text-sm mb-4">Transform your classroom with cutting-edge robotics</p>
                                <Link href="/schools">
                                    <Button
                                        variant="secondary"
                                        size="sm"
                                        className="bg-white text-blue-600 hover:bg-gray-100"
                                    >
                                        School Programs
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>

                        <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                            <CardContent className="p-6 text-center">
                                <TrendingUp className="h-8 w-8 text-white mx-auto mb-3" />
                                <h3 className="font-bold text-white mb-2">Partners</h3>
                                <p className="text-blue-100 text-sm mb-4">Collaborate with us to scale educational impact</p>
                                <Link href="/support">
                                    <Button
                                        variant="secondary"
                                        size="sm"
                                        className="bg-white text-blue-600 hover:bg-gray-100"
                                    >
                                        Get in Touch
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/simulation">
                            <Button
                                size="lg"
                                variant="secondary"
                                className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3"
                            >
                                Try Our Simulation
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                        <Link href="/support">
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3"
                            >
                                Contact Our Team
                            </Button>
                        </Link>
                    </div>

                    <p className="text-sm text-blue-200 mt-8">
                        Ready to shape the future of education? Let&apos;s build it together.
                    </p>
                </div>
            </section>
        </div>
    );
}