import Link from 'next/link';

const Features = () => {
    return (
        <section className="py-24 bg-white border-t border-gray-100">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">

                    {/* Column 1: Main Title & Description */}
                    <div className="space-y-6">
                        <h2 className="text-4xl lg:text-5xl font-forum text-secondary leading-tight">
                            Driving impact through global legal initiatives
                        </h2>
                        <p className="text-gray-500 leading-relaxed text-sm">
                            Our team is dedicated to safeguarding your rights and ensuring justice is served through strategic litigation and expert counsel across all jurisdictions.
                        </p>
                    </div>

                    {/* Column 2: Middle Text & Link */}
                    <div className="flex flex-col justify-between py-2 border-l border-gray-200 pl-8 lg:pl-12">
                        <p className="text-xl font-forum text-secondary leading-normal max-w-xs">
                            Smart, actionable tips for modern businesses
                        </p>
                        <Link href="/about" className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-secondary hover:text-primary transition-colors mt-8">
                            Read More
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 9L9 1M9 1H1M9 1V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                    </div>

                    {/* Column 3: Stat & Link */}
                    <div className="flex flex-col justify-between py-2 border-l border-gray-200 pl-8 lg:pl-12">
                        <div className="space-y-2">
                            <h3 className="text-6xl font-forum text-secondary">960k+</h3>
                            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                                Helping you move forward with confidence
                            </p>
                        </div>
                        <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-secondary hover:text-primary transition-colors mt-8">
                            Read More
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 9L9 1M9 1H1M9 1V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Features;
