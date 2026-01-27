import Image from 'next/image';

const CaseStudies = () => {
    const cases = [
        { title: 'Corporate Merger Arbitration', category: 'Business Law', img: '/images/case-study-1.png' },
        { title: 'Complex Family Mediation', category: 'Family Law', img: '/images/case-study-2.png' },
        { title: 'Intellectual Property Dispute', category: 'IP Law', img: '/images/case-study-3.png' },
        { title: 'Global Infrastructure Project', category: 'Civil Law', img: '/images/case-study-4.png' },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="space-y-4">
                        <span className="text-primary font-medium tracking-widest uppercase text-sm">Our Work</span>
                        <h2 className="text-4xl md:text-5xl font-forum text-secondary">Case Studies</h2>
                    </div>
                    <button className="text-secondary border-b border-primary pb-1 font-medium hover:text-primary transition-colors">
                        View All Projects
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {cases.map((item, idx) => (
                        <div key={idx} className="group cursor-pointer">
                            <div className="relative aspect-[16/10] overflow-hidden rounded-sm mb-6">
                                <Image 
                                    src={item.img} 
                                    alt={item.title} 
                                    fill 
                                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                                <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="bg-primary text-white text-[10px] uppercase tracking-widest px-3 py-1">View Details</span>
                                </div>
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-2xl font-forum text-secondary group-hover:text-primary transition-colors">{item.title}</h3>
                                    <p className="text-gray-400 text-sm uppercase tracking-widest mt-1">{item.category}</p>
                                </div>
                                <div className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:stroke-white stroke-secondary">
                                        <path d="M1 14L14 1M14 1H1M14 1V14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;
