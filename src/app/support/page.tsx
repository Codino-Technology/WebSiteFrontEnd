

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import {
    Mail,
    Phone,
    MapPin,
    MessageSquare,
    Handshake,
    HelpCircle,
    Newspaper,
    Facebook,
    Twitter,
    Instagram,
    Youtube,
    Linkedin,
    Clock,
    Send,
    CheckCircle
} from 'lucide-react';

export default function SupportPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        inquiryType: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Create email body with form data
            const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Inquiry Type: ${formData.inquiryType || 'Not specified'}
Subject: ${formData.subject}

Message:
${formData.message}

---
Sent via Codino Technology contact form
            `.trim();

            // Create mailto link with form data
            const mailtoLink = `mailto:info@codinotechnology.com?subject=${encodeURIComponent(`Contact Form: ${formData.subject}`)}&body=${encodeURIComponent(emailBody)}`;
            
            // Open user's email client
            window.location.href = mailtoLink;
            
            // Small delay to allow email client to open
            await new Promise(resolve => setTimeout(resolve, 1000));

            setIsSubmitting(false);
            setIsSubmitted(true);

            // Reset form after 3 seconds
            setTimeout(() => {
                setIsSubmitted(false);
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    inquiryType: '',
                    message: ''
                });
            }, 3000);
        } catch (error) {
            console.error('Error sending message:', error);
            setIsSubmitting(false);
            // Could add error state handling here
        }
    };

    const contactSections = [
        {
            icon: <MessageSquare className="h-8 w-8 text-blue-600" />,
            title: "General Inquiries",
            description: "Questions about our products, educational philosophy, or company information",
            email: "info@codinotechnology.com",
            responseTime: "Within 24 hours"
        },
        {
            icon: <Handshake className="h-8 w-8 text-green-600" />,
            title: "Sales & Partnerships",
            description: "Bulk orders, school programs, distribution partnerships, or collaboration opportunities",
            email: "partnerships@codino.com",
            responseTime: "Within 1 business day"
        },
        {
            icon: <HelpCircle className="h-8 w-8 text-purple-600" />,
            title: "Support & Technical Help",
            description: "Product setup, troubleshooting, warranty claims, or technical assistance",
            email: "support@codino.com",
            responseTime: "Within 4 hours"
        },
        {
            icon: <Newspaper className="h-8 w-8 text-orange-600" />,
            title: "Media & Press",
            description: "Press inquiries, media kits, interview requests, or feature stories",
            email: "press@codino.com",
            responseTime: "Within 2 business days"
        }
    ];

    const socialLinks = [
        { name: 'Facebook', icon: <Facebook className="h-5 w-5" />, url: 'https://facebook.com/codino', color: 'text-blue-600' },
        { name: 'Twitter', icon: <Twitter className="h-5 w-5" />, url: 'https://twitter.com/codino', color: 'text-blue-400' },
        { name: 'Instagram', icon: <Instagram className="h-5 w-5" />, url: 'https://instagram.com/codino', color: 'text-pink-600' },
        { name: 'YouTube', icon: <Youtube className="h-5 w-5" />, url: 'https://youtube.com/codino', color: 'text-red-600' },
        { name: 'LinkedIn', icon: <Linkedin className="h-5 w-5" />, url: 'https://linkedin.com/company/codino', color: 'text-blue-700' }
    ];

    if (isSubmitted) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center max-w-md mx-auto px-4">
                    <div className="bg-white rounded-2xl shadow-xl p-12">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircle className="h-8 w-8 text-green-600" />
                        </div>
                        <h1 className="text-2xl font-bold text-gray-900 mb-4">Message Sent!</h1>
                        <p className="text-gray-600 mb-6">
                            Thank you for reaching out to us. We&apos;ve received your message and will get back to you soon.
                        </p>
                        <p className="text-sm text-gray-500">
                            Redirecting you back to the contact form...
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 lg:py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-6">
                        Get in Touch
                    </Badge>
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        We&apos;d Love to Hear from You
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        Whether you&apos;re a parent exploring STEM education for your child, an educator looking to transform your classroom,
                        or a partner interested in collaborating with us, we&apos;re here to help. Reach out and let&apos;s start a conversation
                        about building the future of robotics education together.
                    </p>
                </div>
            </section>

            {/* Contact Sections */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">How Can We Help You?</h2>
                        <p className="text-lg text-gray-600">Choose the best way to reach us based on your needs</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {contactSections.map((section, index) => (
                            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                                <CardHeader className="text-center pb-4">
                                    <div className="mb-4 flex justify-center">
                                        {section.icon}
                                    </div>
                                    <CardTitle className="text-lg">{section.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <p className="text-sm text-gray-600 mb-4">{section.description}</p>
                                    <div className="space-y-2">
                                        <a
                                            href={`mailto:${section.email}`}
                                            className="block text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
                                        >
                                            {section.email}
                                        </a>
                                        <div className="flex items-center justify-center text-xs text-gray-500">
                                            <Clock className="h-3 w-3 mr-1" />
                                            {section.responseTime}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form and Info */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <Card className="border-0 shadow-xl">
                            <CardHeader>
                                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                                <p className="text-gray-600">Fill out the form below and we&apos;ll get back to you as soon as possible.</p>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <Label htmlFor="name">Full Name *</Label>
                                            <Input
                                                id="name"
                                                value={formData.name}
                                                onChange={(e) => handleInputChange('name', e.target.value)}
                                                placeholder="Your name"
                                                required
                                                className="mt-2"
                                            />
                                        </div>
                                        <div>
                                            <Label htmlFor="email">Email Address *</Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) => handleInputChange('email', e.target.value)}
                                                placeholder="your@email.com"
                                                required
                                                className="mt-2"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <Label htmlFor="inquiryType">Type of Inquiry</Label>
                                        <Select value={formData.inquiryType} onValueChange={(value) => handleInputChange('inquiryType', value)}>
                                            <SelectTrigger className="mt-2">
                                                <SelectValue placeholder="Select inquiry type" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="general">General Inquiry</SelectItem>
                                                <SelectItem value="sales">Sales & Partnerships</SelectItem>
                                                <SelectItem value="support">Technical Support</SelectItem>
                                                <SelectItem value="media">Media & Press</SelectItem>
                                                <SelectItem value="other">Other</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div>
                                        <Label htmlFor="subject">Subject *</Label>
                                        <Input
                                            id="subject"
                                            value={formData.subject}
                                            onChange={(e) => handleInputChange('subject', e.target.value)}
                                            placeholder="Brief subject line"
                                            required
                                            className="mt-2"
                                        />
                                    </div>

                                    <div>
                                        <Label htmlFor="message">Message *</Label>
                                        <Textarea
                                            id="message"
                                            value={formData.message}
                                            onChange={(e) => handleInputChange('message', e.target.value)}
                                            placeholder="Tell us more about how we can help you..."
                                            rows={5}
                                            required
                                            className="mt-2"
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        size="lg"
                                        className="w-full bg-blue-600 hover:bg-blue-700"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="h-4 w-4 mr-2" />
                                                Send Message
                                            </>
                                        )}
                                    </Button>

                                    <p className="text-xs text-gray-500 text-center">
                                        By submitting this form, you agree to our privacy policy and terms of service.
                                    </p>
                                </form>
                            </CardContent>
                        </Card>

                        {/* Contact Information */}
                        <div className="space-y-8">
                            {/* Alternative Contact Methods */}
                            <Card className="border-0 shadow-lg">
                                <CardHeader>
                                    <CardTitle className="text-xl">Other Ways to Reach Us</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="bg-blue-100 rounded-full p-2">
                                            <Mail className="h-5 w-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900">Email</h4>
                                            <p className="text-gray-600">info@codinotechnology.com</p>
                                            <p className="text-sm text-gray-500">General inquiries and information</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="bg-green-100 rounded-full p-2">
                                            <Phone className="h-5 w-5 text-green-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900">Phone</h4>
                                            <p className="text-gray-600">+90 (539) 220 6169</p>
                                            <p className="text-sm text-gray-500">Mon-Fri, 9 AM - 6 PM EST</p>
                                        </div>
                                    </div>
                                    {/*
                                    <div className="flex items-start space-x-4">
                                        <div className="bg-purple-100 rounded-full p-2">
                                            <MapPin className="h-5 w-5 text-purple-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900">Office</h4>
                                            <p className="text-gray-600">
                                                123 Innovation Drive<br />
                                                Tech Valley, CA 94105<br />
                                                United States
                                            </p>
                                        </div>
                                    </div>*/}
                                </CardContent>
                            </Card>

                            {/* Social Media */}
                            <Card className="border-0 shadow-lg">
                                <CardHeader>
                                    <CardTitle className="text-xl">Follow Us</CardTitle>
                                    <p className="text-gray-600">Stay connected for updates, tips, and community highlights</p>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid grid-cols-5 gap-4">
                                        {socialLinks.map((social, index) => (
                                            <a
                                                key={index}
                                                href={social.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`flex items-center justify-center w-12 h-12 rounded-full border-2 hover:border-current transition-colors ${social.color} hover:bg-gray-50`}
                                                aria-label={`Follow us on ${social.name}`}
                                            >
                                                {social.icon}
                                            </a>
                                        ))}
                                    </div>
                                    <p className="text-sm text-gray-500 mt-4">
                                        Join our community of educators, parents, and students sharing their robotics journey.
                                    </p>
                                </CardContent>
                            </Card>

                            {/* Quick Actions */}
                            <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-purple-50">
                                <CardContent className="p-6">
                                    <h3 className="font-semibold text-gray-900 mb-4">Need Immediate Help?</h3>
                                    <div className="space-y-3">
                                        <Link href="/kits">
                                            <Button
                                                variant="outline"
                                                className="w-full justify-start border-blue-600 text-blue-600 hover:bg-blue-50"
                                            >
                                                Browse Robot Kits
                                            </Button>
                                        </Link>
                                        <Link href="/simulation">
                                            <Button
                                                variant="outline"
                                                className="w-full justify-start border-green-600 text-green-600 hover:bg-green-50"
                                            >
                                                Try Free Simulation
                                            </Button>
                                        </Link>
                                        <Link href="/schools">
                                            <Button
                                                variant="outline"
                                                className="w-full justify-start border-purple-600 text-purple-600 hover:bg-purple-50"
                                            >
                                                School Programs
                                            </Button>
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Response Time Assurance */}
            <section className="py-12 bg-blue-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                        <Clock className="h-12 w-12 text-white mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-white mb-4">Our Response Commitment</h3>
                        <p className="text-blue-100 text-lg mb-6">
                            We know your time is valuable. That&apos;s why we&apos;re committed to responding to all inquiries
                            within 1-2 business days, with most technical support requests answered within 4 hours.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6 text-center">
                            <div className="bg-white/10 rounded-lg p-4">
                                <div className="text-2xl font-bold text-white">&lt; 4 Hours</div>
                                <div className="text-blue-200">Technical Support</div>
                            </div>
                            <div className="bg-white/10 rounded-lg p-4">
                                <div className="text-2xl font-bold text-white">1-2 Days</div>
                                <div className="text-blue-200">General Inquiries</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}