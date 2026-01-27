import Image from 'next/image';

const News = () => {
    const articles = [
        { 
            date: 'Jan 15, 2026', 
            title: 'Navigating New International Trade Regulations', 
            img: '/images/news-1.png',
            link: '#'
        },
        { 
            date: 'Jan 10, 2026', 
            title: 'The Future of AI in Legal Research & Ethics', 
            img: '/images/news-2.png',
            link: '#'
        },
        { 
            date: 'Jan 05, 2026', 
            title: 'Protecting Intellectual Property in the Digital Age', 
            img: '/images/news-3.png',
            link: '#'
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="space-y-4">
                        <span className="text-primary font-medium tracking-widest uppercase text-sm">Insights</span>
                        <h2 className="text-4xl md:text-5xl font-forum text-secondary">Our Latest News</h2>
                    </div>
                    <button className="text-secondary border-b border-primary pb-1 font-medium hover:text-primary transition-colors text-sm uppercase tracking-widest">
                        View All News
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {articles.map((article, idx) => (
                        <div key={idx} className="group cursor-pointer">
                            <div className="relative aspect-[16/11] overflow-hidden rounded-sm mb-6 grayscale group-hover:grayscale-0 transition-all duration-700">
                                <Image 
                                    src={article.img} 
                                    alt={article.title} 
                                    fill 
                                    className="object-cover transition-transform duration-700 group-hover:scale-110" 
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-white/90 backdrop-blur-sm text-secondary text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-sm">
                                        Law Journal
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <p className="text-xs text-primary font-medium uppercase tracking-widest">{article.date}</p>
                                <h3 className="text-2xl font-forum text-secondary group-hover:text-primary transition-colors leading-tight">
                                    {article.title}
                                </h3>
                                <div className="pt-2 flex items-center gap-2 group-hover:gap-4 transition-all text-secondary group-hover:text-primary">
                                    <span className="text-xs uppercase font-bold tracking-widest">Read More</span>
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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

export default News;
