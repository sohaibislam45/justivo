import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import History from "@/components/home/History";
import Team from "@/components/home/Team";
import Image from 'next/image';

export default function About() {
    return (
        <div className="min-h-screen bg-white selection:bg-primary/30 selection:text-secondary">
            <Navbar />
            <main>
                <PageHeader 
                    title="About Our Firm" 
                    subtitle="Establishing a legacy of excellence and unwavering commitment to our clients since 1971."
                />
                
                {/* Mission Section */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col lg:flex-row gap-20 items-center">
                            <div className="w-full lg:w-1/2 relative">
                                <div className="relative aspect-[4/5] rounded-sm overflow-hidden border-[12px] border-[#FAF9F6]">
                                    <Image src="/images/timeline-1.png" alt="Mission" fill className="object-cover" />
                                </div>
                                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary p-8 hidden md:flex items-center justify-center text-white text-center rounded-sm">
                                    <p className="text-xl font-forum italic">"Commitment to Justice is Our Core Value"</p>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 space-y-8">
                                <span className="text-primary font-medium tracking-widest uppercase text-sm">Our Mission</span>
                                <h2 className="text-4xl font-forum text-secondary leading-tight">
                                    We strive to provide premium legal solutions that empower our clients.
                                </h2>
                                <p className="text-gray-500 leading-relaxed text-lg">
                                    Our firm was founded on the principles of integrity, transparency, and relentless advocacy. We understand that legal challenges can be daunting, which is why we approach every case with a unique blend of strategic thinking and empathetic support.
                                </p>
                                <div className="grid grid-cols-2 gap-8 pt-4">
                                    <div className="space-y-4">
                                        <h4 className="text-xl font-forum text-secondary">Transparency</h4>
                                        <p className="text-sm text-gray-500">We keep our clients informed at every step of the process.</p>
                                    </div>
                                    <div className="space-y-4">
                                        <h4 className="text-xl font-forum text-secondary">Excellence</h4>
                                        <p className="text-sm text-gray-500">We aim for the highest standards in legal research and representation.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <History />
                
                {/* Values Section */}
                <section className="py-24 bg-secondary text-white">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16 space-y-4">
                            <span className="text-primary font-medium tracking-widest uppercase text-sm">Core Values</span>
                            <h2 className="text-4xl font-forum">What We Stand For</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {[
                                { title: 'Integrity', desc: 'Doing what is right, even when no one is watching.' },
                                { title: 'Collaboration', desc: 'Working together to achieve the best outcomes for our clients.' },
                                { title: 'Innovation', desc: 'Leveraging modern technology to enhance our legal strategies.' }
                            ].map((value, idx) => (
                                <div key={idx} className="p-8 border border-white/10 rounded-sm hover:border-primary transition-colors text-center space-y-4">
                                    <h4 className="text-2xl font-forum text-primary">{value.title}</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">{value.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <Team />
            </main>
            <Footer />
        </div>
    );
}
