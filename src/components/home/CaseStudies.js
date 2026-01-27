import Image from 'next/image';
import Link from 'next/link';

const CaseStudies = () => {
    const cases = [
        { title: 'Secured $2.5m settlement in construction injury case', category: 'Business Law', img: '/images/case-study-1.png' },
        { title: 'Won full custody for father in complex divorce case', category: 'Family Law', img: '/images/case-study-2.png' },
        { title: 'Cleared wrongfully accused client in criminal defense case', category: 'IP Law', img: '/images/case-study-3.png' },
        { title: 'Closed a major m&a deal with full legal oversight', category: 'Civil Law', img: '/images/case-study-4.png' },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-5xl font-forum text-secondary">Case Studies</h2>
                    </div>
                    <Link href="#" className="text-secondary border-b border-primary pb-1 font-medium hover:text-primary transition-colors">
                        View All Projects
                    </Link>
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
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                                    <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-500">
                                        <Image
                                            src="/images/arrow.png"
                                            width={40}
                                            height={40}
                                            alt="View Details"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-2xl font-forum text-secondary group-hover:text-primary transition-colors">{item.title}</h3>
                                    <p className="text-gray-400 text-sm uppercase tracking-widest mt-1">{item.category}</p>
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
