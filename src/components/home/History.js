
const History = () => {
    return (
        <section className="py-10 bg-white border-y border-gray-100">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3">
                    {/* Column 1 */}
                    <div className="md:pb-0 md:pt-7 border-b md:border-b-0 md:border-r border-gray-200">
                        <div className="space-y-8">
                            <h2 className="text-4xl md:text-5xl font-forum text-secondary leading-[1.1]">
                                Driving impact through <br /> global legal initiatives
                            </h2>
                            <p className="text-gray-500 text-lg leading-relaxed max-w-sm">
                                Driving impact through global legal initiatives means shaping policies that transcend borders and foster justice worldwide
                            </p>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className="px-0 md:px-12 py-12 md:py-0 border-b md:border-b-0 md:border-r border-gray-200 flex flex-col justify-end">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-forum text-secondary leading-snug max-w-[240px]">
                                Smart, actionable tips for modern businesses
                            </h3>
                            <button className="flex items-center gap-2 text-secondary hover:text-primary transition-colors group">
                                <span className="text-sm font-medium tracking-wider uppercase">Read More</span>
                                <span className="text-xl transform group-hover:translate-x-1 transition-transform">↗</span>
                            </button>
                        </div>
                    </div>

                    {/* Column 3 */}
                    <div className="pl-0 md:pl-12 pt-12 md:pt-0 flex flex-col justify-end min-h-[300px]">
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <span className="text-6xl font-forum text-secondary block">960k+</span>
                                <p className="text-lg text-secondary/80 max-w-[240px] leading-snug">
                                    Helping you move forward with confidence
                                </p>
                            </div>
                            <button className="flex items-center gap-2 text-secondary hover:text-primary transition-colors group">
                                <span className="text-sm font-medium tracking-wider uppercase">Read More</span>
                                <span className="text-xl transform group-hover:translate-x-1 transition-transform">↗</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default History;
