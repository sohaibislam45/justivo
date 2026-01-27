"use client";
import { useState } from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import Image from 'next/image';
import Link from 'next/link';

const practices = [
    { id: 1, title: 'Corporate Law', category: 'Business', price: '$250/hr', img: '/images/case-study-1.png', desc: 'Expert guidance for business formation, mergers, and acquisitions.' },
    { id: 2, title: 'Criminal Defense', category: 'Litigation', price: '$300/hr', img: '/images/case-study-2.png', desc: 'Strong representation for various criminal charges and legal disputes.' },
    { id: 3, title: 'Family Law', category: 'Personal', price: '$200/hr', img: '/images/case-study-3.png', desc: 'Compassionate support for divorce, custody, and family matters.' },
    { id: 4, title: 'Real Estate', category: 'Business', price: '$150/hr', img: '/images/case-study-4.png', desc: 'Legal assistance for property transactions and development.' },
    { id: 5, title: 'Intellectual Property', category: 'Business', price: '$275/hr', img: '/images/timeline-1.png', desc: 'Protecting your innovations and creative works globally.' },
    { id: 6, title: 'Tax Litigation', category: 'Litigation', price: '$350/hr', img: '/images/timeline-2.png', desc: 'Navigating complex tax disputes and regulatory issues.' },
];

export default function Services() {
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('All');
    const [sort, setSort] = useState('Newest');

    const filteredPractices = practices
        .filter(p => (category === 'All' || p.category === category))
        .filter(p => p.title.toLowerCase().includes(search.toLowerCase()))
        .sort((a, b) => {
            if (sort === 'Price Low-High') return parseInt(a.price.slice(1)) - parseInt(b.price.slice(1));
            if (sort === 'Price High-Low') return parseInt(b.price.slice(1)) - parseInt(a.price.slice(1));
            return 0;
        });

    return (
        <div className="min-h-screen bg-white selection:bg-primary/30 selection:text-secondary">
            <Navbar />
            <main>
                <PageHeader 
                    title="Practice Areas" 
                    subtitle="We offer a comprehensive range of legal services tailored to meet your specific needs."
                />

                <section className="py-24">
                    <div className="container mx-auto px-6">
                        {/* Filters & Search */}
                        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-16 bg-[#FAF9F6] p-8 rounded-sm">
                            <div className="w-full lg:w-1/3 relative">
                                <input 
                                    type="text" 
                                    placeholder="Search practices..." 
                                    className="w-full bg-white border border-gray-100 px-6 py-4 rounded-sm focus:outline-none focus:border-primary text-secondary"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                                <div className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M19 19L14.65 14.65M17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-6 items-center w-full lg:w-auto">
                                <div className="flex items-center gap-3">
                                    <span className="text-xs uppercase tracking-widest font-bold text-gray-400 shrink-0">Filter By</span>
                                    <select 
                                        className="bg-white border border-gray-100 px-4 py-2 rounded-sm focus:outline-none focus:border-primary text-sm font-medium text-secondary"
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                    >
                                        <option>All</option>
                                        <option>Business</option>
                                        <option>Litigation</option>
                                        <option>Personal</option>
                                    </select>
                                </div>

                                <div className="flex items-center gap-3">
                                    <span className="text-xs uppercase tracking-widest font-bold text-gray-400 shrink-0">Sort By</span>
                                    <select 
                                        className="bg-white border border-gray-100 px-4 py-2 rounded-sm focus:outline-none focus:border-primary text-sm font-medium text-secondary"
                                        value={sort}
                                        onChange={(e) => setSort(e.target.value)}
                                    >
                                        <option>Newest</option>
                                        <option>Price Low-High</option>
                                        <option>Price High-Low</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {filteredPractices.map((item) => (
                                <div key={item.id} className="group cursor-pointer">
                                    <div className="relative aspect-[4/3] overflow-hidden rounded-sm mb-6 grayscale group-hover:grayscale-0 transition-all duration-700">
                                        <Image src={item.img} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-primary text-white text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-sm">
                                                {item.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center">
                                            <h3 className="text-2xl font-forum text-secondary group-hover:text-primary transition-colors">{item.title}</h3>
                                            <span className="text-primary font-bold text-sm">{item.price}</span>
                                        </div>
                                        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{item.desc}</p>
                                        <Link href={`/services/${item.id}`} className="inline-block pt-4 text-xs font-bold uppercase tracking-widest text-secondary hover:text-primary border-b border-primary/20 hover:border-primary transition-all">
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Empty State */}
                        {filteredPractices.length === 0 && (
                            <div className="py-24 text-center space-y-4">
                                <h3 className="text-3xl font-forum text-secondary">No practices found</h3>
                                <p className="text-gray-500">Try adjusting your filters or search keywords.</p>
                                <button 
                                    onClick={() => {setSearch(''); setCategory('All');}}
                                    className="text-primary border-b border-primary font-medium"
                                >
                                    Reset Filters
                                </button>
                            </div>
                        )}

                        {/* Pagination Placeholder */}
                        <div className="mt-24 flex items-center justify-center gap-4">
                            {[1, 2, 3].map(num => (
                                <button key={num} className={`w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-sm font-medium transition-all ${num === 1 ? 'bg-primary text-white border-primary' : 'text-secondary hover:border-primary hover:text-primary'}`}>
                                    {num}
                                </button>
                            ))}
                            <button className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-secondary hover:border-primary hover:text-primary transition-all">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 1L11 6L1 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            </button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
