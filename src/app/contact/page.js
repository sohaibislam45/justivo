import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import Image from 'next/image';

export default function Contact() {
    return (
        <div className="min-h-screen bg-white selection:bg-primary/30 selection:text-secondary">
            <Navbar />
            <main>
                <PageHeader 
                    title="Get In Touch" 
                    subtitle="We are here to provide the legal support you need. Contact us today for a confidential consultation."
                />

                <section className="py-24">
                    <div className="container mx-auto px-6">
                        {/* Info Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
                            {[
                                { title: 'Office Address', detail: '123 Legal Avenue, NY 10001', icon: '📍' },
                                { title: 'Phone Number', detail: '+1 (555) 123-4567', icon: '📞' },
                                { title: 'Email Address', detail: 'contact@justivo.com', icon: '✉️' },
                                { title: 'Office Hours', detail: 'Mon - Fri: 9am - 6pm', icon: '🕒' }
                            ].map((item, idx) => (
                                <div key={idx} className="p-8 bg-[#FAF9F6] border border-gray-100 rounded-sm space-y-4 hover:border-primary transition-colors group">
                                    <div className="text-3xl text-primary transition-transform group-hover:scale-110 duration-300">{item.icon}</div>
                                    <h4 className="text-xl font-forum text-secondary">{item.title}</h4>
                                    <p className="text-gray-500 text-sm">{item.detail}</p>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col lg:flex-row gap-20">
                            {/* Contact Form */}
                            <div className="w-full lg:w-1/2 space-y-12">
                                <div className="space-y-4">
                                    <span className="text-primary font-medium tracking-widest uppercase text-sm">Send us a message</span>
                                    <h2 className="text-4xl font-forum text-secondary">How can we help you?</h2>
                                </div>
                                
                                <form className="space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <input type="text" placeholder="Full Name" className="w-full bg-transparent border-b border-gray-200 py-4 focus:outline-none focus:border-primary transition-colors text-secondary" />
                                        </div>
                                        <div className="space-y-2">
                                            <input type="email" placeholder="Email Address" className="w-full bg-transparent border-b border-gray-200 py-4 focus:outline-none focus:border-primary transition-colors text-secondary" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <input type="text" placeholder="Subject" className="w-full bg-transparent border-b border-gray-200 py-4 focus:outline-none focus:border-primary transition-colors text-secondary" />
                                    </div>
                                    <div className="space-y-2">
                                        <textarea rows="5" placeholder="Your Message" className="w-full bg-transparent border-b border-gray-200 py-4 focus:outline-none focus:border-primary transition-colors text-secondary resize-none"></textarea>
                                    </div>
                                    <button className="bg-secondary hover:bg-primary text-white px-12 py-5 rounded-sm transition-all text-sm font-bold uppercase tracking-widest">
                                        Send Message
                                    </button>
                                </form>
                            </div>

                            {/* Map Placeholder */}
                            <div className="w-full lg:w-1/2">
                                <div className="relative h-full min-h-[500px] rounded-sm overflow-hidden bg-secondary grayscale">
                                    {/* Using an image as a map placeholder with dark/premium overlay */}
                                    <Image 
                                        src="/images/timeline-2.png" 
                                        alt="Map Location" 
                                        fill 
                                        className="object-cover opacity-30"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center p-12">
                                        <div className="bg-white/90 backdrop-blur-md p-10 rounded-sm border border-gray-100 space-y-4 max-w-sm shadow-2xl">
                                            <h4 className="text-2xl font-forum text-secondary">Main Office</h4>
                                            <p className="text-gray-500 text-sm leading-relaxed">
                                                Our headquarters is located in the heart of the city's legal district. Visit us for a personal consultation.
                                            </p>
                                            <button className="text-primary font-bold text-xs uppercase tracking-widest border-b border-primary/20 hover:border-primary transition-all pb-1">
                                                Get Directions
                                            </button>
                                        </div>
                                    </div>
                                    {/* Marker decoration */}
                                    <div className="absolute top-1/2 left-1/3 w-4 h-4 bg-primary rounded-full animate-ping"></div>
                                    <div className="absolute top-1/2 left-1/3 w-4 h-4 bg-primary rounded-full border-4 border-white"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
