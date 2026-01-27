import Image from 'next/image';

const StatsList = () => {
    const listItems = [
        { name: 'James Whitmore', title: 'Expert Counsel', img: '/images/James-whitmore.png', desc: 'Strategic advisory for complex corporate litigation cases.' },
        { name: 'Alexander Reed', title: 'Strategic Planning', img: '/images/Alexander-reed.png', desc: 'Precision in legal planning and risk assessment.' },
        { name: 'Clara Thompson', title: 'Client Focused', img: '/images/Clara-thompson.png', desc: 'Dedicated representation with a focus on family disputes.' },
        { name: 'Sophia Malik', title: 'Result Oriented', img: '/images/Sophia-malik.png', desc: 'Data-driven insights for efficient business legal solutions.' }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-20">
                    {/* Stats Side */}
                    <div className="w-full lg:w-1/3 grid grid-cols-1 gap-12">
                        <div className="space-y-4">
                            <h3 className="text-5xl font-forum text-secondary">50+</h3>
                            <p className="text-xs uppercase tracking-[0.3em] font-bold text-gray-400">Expert Attorneys</p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-5xl font-forum text-secondary">4000+</h3>
                            <p className="text-xs uppercase tracking-[0.3em] font-bold text-gray-400">Successful Cases</p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-5xl font-forum text-secondary">500+</h3>
                            <p className="text-xs uppercase tracking-[0.3em] font-bold text-gray-400">Global Clients</p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-5xl font-forum text-secondary">25+</h3>
                            <p className="text-xs uppercase tracking-[0.3em] font-bold text-gray-400">Years of Experience</p>
                        </div>
                    </div>

                    {/* List Side */}
                    <div className="w-full lg:w-2/3 space-y-6">
                        {listItems.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-8 p-6 rounded-sm hover:bg-[#FAF9F6] transition-all border border-transparent hover:border-gray-100 group">
                                <div className="relative w-16 h-16 rounded-full overflow-hidden grayscale group-hover:grayscale-0 transition-all shrink-0">
                                    <Image src={item.img} alt={item.name} fill className="object-cover" />
                                </div>
                                <div className="flex-1 space-y-1">
                                    <h4 className="text-xl font-forum text-secondary">{item.title}</h4>
                                    <p className="text-sm text-gray-500 line-clamp-1">{item.desc}</p>
                                </div>
                                <button className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center hover:bg-primary hover:border-primary transition-all group">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:stroke-white stroke-secondary">
                                        <path d="M1 11L11 1M11 1H1M11 1V11" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsList;
