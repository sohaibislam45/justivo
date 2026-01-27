import Image from 'next/image';

const Testimonial = () => {
    return (
        <section className="py-24 bg-[#FAF9F6] overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="max-w-5xl mx-auto text-center space-y-10">
                    <div className="flex justify-center">
                        <span className="text-secondary/20 text-9xl font-serif leading-none italic">"</span>
                    </div>
                    
                    <h2 className="text-3xl md:text-5xl font-forum text-secondary leading-tight -mt-16">
                        The practice of law is a service to the community, and we are dedicated to providing that service with the highest level of professionalism and integrity.
                    </h2>

                    <div className="flex flex-col items-center gap-4">
                        <div className="relative w-16 h-16 rounded-full overflow-hidden grayscale">
                            <Image src="/images/james-walker.png" alt="James Walker" fill className="object-cover" />
                        </div>
                        <div>
                            <h4 className="text-lg font-forum text-secondary">James Walker</h4>
                            <p className="text-sm text-primary uppercase tracking-widest font-medium">Founding Partner</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
