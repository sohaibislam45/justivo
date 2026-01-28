import Image from 'next/image';
import Link from 'next/link';

const StatsList = () => {
    const listItems = [
        {
            stat: '54+',
            statLabel: '/Years',
            statDesc: 'of legal excellence',
            title: 'Best law firm of the year',
            img: '/images/James-whitmore.png',
            desc: 'Awarded for outstanding legal service and client satisfaction across all practice areas.'
        },
        {
            stat: '500+',
            statLabel: '/Cases',
            statDesc: 'successfully resolved',
            title: 'Top litigation firm – national legal excellence awards',
            img: '/images/Alexander-reed.png',
            desc: 'Recognized for exceptional courtroom performance and high-profile case victories.'
        },
        {
            stat: '850k+',
            statLabel: '/Areas',
            statDesc: 'handled across jurisdictions',
            title: 'Client choice award for legal services',
            img: '/images/Clara-thompson.png',
            desc: 'Honored for consistent client satisfaction, trust, and long-term relationships.'
        },
        {
            stat: '10k+',
            statLabel: '/Hours',
            statDesc: 'of courtroom representation',
            title: 'Client choice award for legal services',
            img: '/images/Sophia-malik.png',
            desc: 'Honored for consistent client satisfaction, trust, and long-term relationships.'
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col space-y-0">
                    {listItems.map((item, idx) => (
                        <div key={idx} className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-10 items-center border-b border-gray-100 last:border-0 hover:bg-[#FAF9F6] transition-all group">
                            {/* Stat Column */}
                            <div className="lg:col-span-3 space-y-1">
                                <div className="flex items-baseline gap-2">
                                    <h3 className="text-5xl font-forum text-secondary">{item.stat}</h3>
                                    <span className='text-lg font-light'>{item.statLabel}</span>
                                </div>
                                <p className="text-xs uppercase tracking-[0.1em] text-gray-400 font-medium">{item.statDesc}</p>
                            </div>

                            {/* Image & Title Column */}
                            <div className="lg:col-span-4 flex items-center gap-6">
                                <div className="relative w-20 h-24 rounded-2xl overflow-hidden shrink-0">
                                    <Image src={item.img} alt={item.title} fill className="object-cover" />
                                </div>
                                <h4 className="text-2xl font-forum text-secondary leading-tight">{item.title}</h4>
                            </div>

                            {/* Description Column */}
                            <div className="lg:col-span-4">
                                <p className="text-sm text-gray-500 max-w-sm leading-relaxed">{item.desc}</p>
                            </div>

                            {/* Action Column */}
                            <div className="lg:col-span-1 flex justify-end">
                                <Link href="#" className="w-12 h-12 border border-secondary/20 rounded-full flex items-center justify-center hover:bg-secondary group/btn transition-all">
                                    <svg width="18" height="18" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover/btn:stroke-white stroke-secondary transform rotate-45">
                                        <path d="M1 11L11 1M11 1H1M11 1V11" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsList;
