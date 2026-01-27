import Image from 'next/image';

const AwardsMarquee = () => {
    const awards = [
        { img: '/images/award-1.png', name: 'Award 1' },
        { img: '/images/award-2.png', name: 'Award 2' },
        { img: '/images/award-3.png', name: 'Award 3' },
        { img: '/images/award-4.png', name: 'Award 4' },
    ];

    return (
        <section className="py-12 border-y border-gray-100 bg-white">
            <div className="container mx-auto px-6 overflow-hidden">
                <div className="flex flex-wrap justify-between items-center gap-12 opacity-40 grayscale group hover:grayscale-0 transition-all duration-700">
                    <span className="text-secondary font-medium uppercase tracking-[0.3em] text-xs">Recognized By</span>
                    <div className="flex flex-1 justify-around items-center gap-12">
                        {/* Duplicate for basic marquee effect if needed, but flex-justify is cleaner for now */}
                        {awards.map((award, idx) => (
                            <div key={idx} className="relative w-32 h-16 transition-transform hover:scale-110">
                                <Image 
                                    src={award.img} 
                                    alt={award.name} 
                                    fill 
                                    className="object-contain" 
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AwardsMarquee;
