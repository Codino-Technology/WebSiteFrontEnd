// src/app/simulation/page.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function SimulationPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="text-center max-w-2xl mx-auto px-4">
                <div className="bg-white rounded-2xl shadow-xl p-12">
                    <h1 className="text-3xl font-bold text-gray-900 mb-6">Simulation Coming Soon!</h1>
                    <p className="text-lg text-gray-600 mb-8">
                        Our interactive browser-based simulation is currently in development.
                        Try our physical robot kits in the meantime!
                    </p>
                    <Link href="/kits">
                        <Button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                            View Robot Kits
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

