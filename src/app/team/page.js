"use client";
import React from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import Team from "@/components/home/Team";
import Image from 'next/image';
import Link from 'next/link';

const TeamPage = () => {
    const associates = [
        { name: 'David Miller', role: 'Junior Associate', position: 'Corporate Law', img: '/images/intern-1.png' },
        { name: 'Emily Chen', role: 'Legal Assistant', position: 'Litigation Support', img: '/images/intern-2.png' },
        { name: 'Michael Ross', role: 'Junior Associate', position: 'Family Law', img: '/images/intern-3.png' }
    ];

    return (
        <div className="min-h-screen bg-white selection:bg-primary/30 selection:text-secondary">
            <Navbar />
            <main>
                <PageHeader
                    title="Our Extraordinary Team"
                    subtitle="Meet the dedicated professionals who work tirelessly to ensure justice and provide world-class legal representation."
                />

                {/* Partners Section (Reusing Home Team Component) */}
                <Team />

                {/* Staff / Associates Section */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="text-center space-y-4 mb-20">
                            <span className="text-primary font-medium tracking-widest uppercase text-sm">Legal Associates</span>
                            <h2 className="text-4xl md:text-5xl font-forum text-secondary">The Force Behind Our Success</h2>
                            <p className="text-gray-500 max-w-2xl mx-auto">
                                Our associates and assistants bring fresh perspectives and unmatched dedication to every case, ensuring no detail is overlooked.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                            {associates.map((member, idx) => (
                                <div key={idx} className="group">
                                    <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-gray-100 mb-6">
                                        <Image
                                            src={member.img}
                                            alt={member.name}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-2xl font-forum text-secondary group-hover:text-primary transition-colors">{member.name}</h3>
                                        <div className="flex items-center gap-3">
                                            <span className="text-primary text-sm font-medium uppercase tracking-wider">{member.role}</span>
                                            <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                                            <span className="text-gray-500 text-sm">{member.position}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 bg-[#FAF9F6]">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto bg-white p-12 md:p-20 shadow-xl border border-gray-100 text-center space-y-8 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full"></div>
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/5 rounded-tr-full"></div>

                            <span className="text-primary font-medium tracking-widest uppercase text-sm block">Careers</span>
                            <h2 className="text-4xl md:text-5xl font-forum text-secondary relative z-10">
                                Want to Join Our Elite Team?
                            </h2>
                            <p className="text-gray-500 text-lg leading-relaxed relative z-10">
                                We are always looking for passionate legal professionals who share our commitment to justice and excellence. If you believe you have what it takes, we'd love to hear from you.
                            </p>
                            <div className="pt-4 relative z-10">
                                <Link
                                    href="/contact"
                                    className="inline-block bg-secondary hover:bg-primary text-white px-12 py-4 rounded-sm transition-all duration-300 hover:scale-105 active:scale-95 text-lg font-medium tracking-widest uppercase"
                                >
                                    Work With Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default TeamPage;
