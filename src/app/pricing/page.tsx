import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function PricingPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="text-center max-w-2xl mx-auto px-4">
                <div className="bg-white rounded-2xl shadow-xl p-12">
                    <h1 className="text-3xl font-bold text-gray-900 mb-6">Pricing Coming Soon!</h1>
                    <p className="text-lg text-gray-600 mb-8">
                        Our detailed pricing plans are currently being finalized.
                        Check out our robot kits for now!
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