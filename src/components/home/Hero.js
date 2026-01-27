import Image from 'next/image';

const Hero = () => {
    return (
        <section className="relative pt-16 pb-24 overflow-hidden bg-[#FAF9F6]">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="w-full lg:w-1/2">
                        <div className="space-y-6">
                            <h1 className="text-6xl md:text-8xl leading-[1.1] text-secondary font-forum">
                                Justice. Advocacy. <br />
                                <span className="text-primary italic">Results.</span>
                            </h1>
                            <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
                                We provide expert legal counsel and representation across a spectrum of legal areas, ensuring your rights are protected and your voice is heard.
                            </p>
                            <div className="flex items-center gap-4 pt-4">
                                <div className="w-12 h-[1px] bg-primary"></div>
                                <span className="text-sm uppercase tracking-widest text-primary font-medium">Est. 1971</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="w-full lg:w-1/2 relative">
                        <div className="relative aspect-[4/3] rounded-sm overflow-hidden border-[12px] border-white shadow-2xl">
                            <Image 
                                src="/images/hero.png" 
                                alt="Legal Handshake" 
                                fill 
                                className="object-cover"
                                priority
                            />
                        </div>
                        {/* Decorative circle/sticker */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-white rounded-full shadow-lg flex items-center justify-center p-4">
                            <div className="w-full h-full border border-dashed border-primary rounded-full flex items-center justify-center text-center p-2">
                                <span className="text-[10px] font-medium uppercase tracking-tighter text-secondary">World Class <br/>Legal Solutions</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Stats Part */}
                <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-gray-200">
                    <div className="space-y-2">
                        <h4 className="text-3xl font-forum text-secondary">50+</h4>
                        <p className="text-sm text-gray-500 uppercase tracking-widest">Expert Attorneys</p>
                    </div>
                    <div className="space-y-2">
                        <h4 className="text-3xl font-forum text-secondary">1000+</h4>
                        <p className="text-sm text-gray-500 uppercase tracking-widest">Cases Won</p>
                    </div>
                    <div className="space-y-2">
                        <h4 className="text-3xl font-forum text-secondary">500+</h4>
                        <p className="text-sm text-gray-500 uppercase tracking-widest">Global Clients</p>
                    </div>
                    <div className="space-y-2">
                        <h4 className="text-3xl font-forum text-secondary">25+</h4>
                        <p className="text-sm text-gray-500 uppercase tracking-widest">Years of Excellence</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
