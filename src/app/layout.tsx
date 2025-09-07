import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import { Header } from '@/components/Header';

import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Codino - Learn Robotics Through Coding',
    description: 'Build robots, learn code, shape the future. Codino combines hands-on robot building with gamified programming education for ages 8-16.',
    keywords: 'robotics, programming, education, STEM, kids, learning, ESP32, coding',
    authors: [{ name: 'Codino Team' }],
    creator: 'Codino',
    publisher: 'Codino',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <div className="min-h-screen bg-background">
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div>
        </body>
        </html>
    );
}