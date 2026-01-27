import Image from 'next/image';

const History = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16">
                    <div className="w-full lg:w-1/2 flex flex-col gap-6">
                        <div className="relative aspect-video rounded-sm overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                            <Image src="/images/timeline-1.png" alt="Office History 1" fill className="object-cover" />
                        </div>
                        <div className="relative aspect-[4/3] w-2/3 ml-auto rounded-sm overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 -mt-20 z-10 border-8 border-white">
                            <Image src="/images/timeline-2.png" alt="Office History 2" fill className="object-cover" />
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 space-y-12">
                        <div className="space-y-4">
                            <span className="text-primary font-medium tracking-widest uppercase text-sm">Our Legacy</span>
                            <h2 className="text-4xl md:text-5xl font-forum text-secondary leading-tight">
                                Since 1971 we represent our <br />
                                world with excellence and <br />
                                dedication.
                            </h2>
                        </div>

                        <div className="space-y-12 relative">
                            {/* Vertical Line */}
                            <div className="absolute left-0 top-2 bottom-2 w-[1px] bg-gray-200"></div>

                            {[
                                { year: '1971', title: 'The Foundation', desc: 'Justivo was founded with a small team and a big vision to provide accessible legal aid.' },
                                { year: '1986', title: 'Global Expansion', desc: 'We opened our first international office, marking our entry into global legal markets.' },
                                { year: '1994', title: 'Digital Transformation', desc: 'Pioneered digital legal research and case management systems in the industry.' }
                            ].map((item, idx) => (
                                <div key={idx} className="pl-8 relative group">
                                    <div className="absolute left-[-4px] top-1.5 w-2 h-2 rounded-full bg-gray-200 group-hover:bg-primary transition-colors"></div>
                                    <h3 className="text-2xl font-forum text-secondary group-hover:text-primary transition-colors">{item.year}</h3>
                                    <div className="mt-2 space-y-1">
                                        <h4 className="font-medium text-secondary">{item.title}</h4>
                                        <p className="text-gray-500 text-sm leading-relaxed max-w-md">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default History;
