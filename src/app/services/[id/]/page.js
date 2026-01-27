"use client";
import React from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import Image from 'next/image';
import Link from 'next/link';

// Mock data fetching based on ID
const getServiceData = (id) => {
    const services = {
        '1': { title: 'Corporate Law', category: 'Business', img: '/images/case-study-1.png', price: '$250/hr' },
        '2': { title: 'Criminal Defense', category: 'Litigation', img: '/images/case-study-2.png', price: '$300/hr' },
        '3': { title: 'Family Law', category: 'Personal', img: '/images/case-study-3.png', price: '$200/hr' },
        '4': { title: 'Real Estate', category: 'Business', img: '/images/case-study-4.png', price: '$150/hr' },
    };
    return services[id] || services['1'];
};

const ServiceDetails = ({ params }) => {
    const id = React.use(params).id;
    const service = getServiceData(id);

    return (
        <div className="min-h-screen bg-white selection:bg-primary/30 selection:text-secondary">
            <Navbar />
            <main>
                <PageHeader 
                    title={service.title} 
                    subtitle={`Professional ${service.category} legal services tailored to your needs.`}
                />

                <section className="py-24">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col lg:flex-row gap-16">
                            {/* Left Side: Images & Info */}
                            <div className="w-full lg:w-2/3 space-y-12">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="relative aspect-[4/5] rounded-sm overflow-hidden border-8 border-[#FAF9F6]">
                                        <Image src={service.img} alt={service.title} fill className="object-cover" />
                                    </div>
                                    <div className="relative aspect-[4/5] rounded-sm overflow-hidden border-8 border-[#FAF9F6] mt-12">
                                        <Image src="/images/timeline-1.png" alt="Detail 1" fill className="object-cover" />
                                    </div>
                                </div>

                                <div className="space-y-8">
                                    <div className="border-b border-gray-100 pb-8">
                                        <h2 className="text-4xl font-forum text-secondary mb-6">Service Overview</h2>
                                        <p className="text-gray-500 leading-relaxed text-lg">
                                            Our {service.title} department consists of seasoned professionals with decades of experience in the {service.category.toLowerCase()} sector. We provide comprehensive legal support reaching from initial advisory to complex courtroom litigation.
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-4">
                                        <div className="space-y-6">
                                            <h3 className="text-2xl font-forum text-secondary">Key Information</h3>
                                            <ul className="space-y-4">
                                                {['Initial Consultation', 'Case Evaluation', 'Document Drafting', 'Representation'].map((item, idx) => (
                                                    <li key={idx} className="flex items-center gap-3 text-gray-500">
                                                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="space-y-6">
                                            <h3 className="text-2xl font-forum text-secondary">Expertise Level</h3>
                                            <div className="space-y-4">
                                                <div className="p-4 bg-[#FAF9F6] rounded-sm border border-gray-100">
                                                    <p className="text-sm font-bold text-secondary uppercase tracking-widest">Industry Rating</p>
                                                    <p className="text-2xl font-forum text-primary">Top Tier (A+)</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-12">
                                        <h3 className="text-3xl font-forum text-secondary mb-8">Client Reviews</h3>
                                        <div className="space-y-8">
                                            {[1, 2].map(rev => (
                                                <div key={rev} className="p-8 bg-secondary text-white rounded-sm space-y-4">
                                                    <div className="flex text-primary gap-1">
                                                        {[1,2,3,4,5].map(s => <span key={s}>★</span>)}
                                                    </div>
                                                    <p className="text-white/80 italic">"The level of professionalism and attention to detail provided by the Justivo team was exceptional. Highly recommended for complex {service.category.toLowerCase()} matters."</p>
                                                    <p className="text-sm uppercase tracking-widest font-bold text-primary">— Satisfied Client</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side: Sidebar */}
                            <div className="w-full lg:w-1/3 space-y-8">
                                <div className="p-10 bg-secondary text-white rounded-sm space-y-8 sticky top-32">
                                    <div className="space-y-2">
                                        <p className="text-xs uppercase tracking-[0.3em] font-bold text-primary">Service Fee</p>
                                        <h4 className="text-4xl font-forum">{service.price} <span className="text-sm text-white/40">/ hour</span></h4>
                                    </div>
                                    <div className="space-y-4">
                                        <Link href="/contact" className="block w-full bg-primary hover:bg-white hover:text-secondary text-center py-4 rounded-sm transition-all text-sm font-bold uppercase tracking-widest">
                                            Book Consultation
                                        </Link>
                                        <button className="block w-full border border-white/20 hover:border-white py-4 rounded-sm transition-all text-sm font-bold uppercase tracking-widest">
                                            Download Brochure
                                        </button>
                                    </div>
                                    <div className="pt-8 border-t border-white/10 space-y-6">
                                        <h5 className="text-lg font-forum">Related Services</h5>
                                        <div className="space-y-4">
                                            {[1, 2, 3].map(id => (
                                                <Link key={id} href={`/services/${id}`} className="flex items-center justify-between group">
                                                    <span className="text-sm text-white/60 group-hover:text-primary transition-colors">Related Service {id}</span>
                                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="group-hover:translate-x-1 transition-transform stroke-white group-hover:stroke-primary">
                                                        <path d="M1 11L11 1M11 1H1M11 1V11" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default ServiceDetails;
