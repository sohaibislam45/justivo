import Image from 'next/image';

const InternsAndContact = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-20">
                    {/* Interns Side */}
                    <div className="w-full lg:w-1/2 space-y-12">
                        <div className="space-y-4">
                            <span className="text-primary font-medium tracking-widest uppercase text-sm">Opportunities</span>
                            <h2 className="text-4xl md:text-5xl font-forum text-secondary">Become our intern</h2>
                            <p className="text-gray-500 max-w-md leading-relaxed">
                                Join our prestigious internship program and work alongside world-class legal experts to shape the future of justice.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-6">
                                <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
                                    <Image src="/images/intern-1.png" alt="Intern 1" fill className="object-cover" />
                                </div>
                                <div className="relative aspect-square rounded-sm overflow-hidden w-2/3 ml-auto">
                                    <Image src="/images/intern-3.png" alt="Intern 3" fill className="object-cover" />
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="relative aspect-[4/5] w-full rounded-sm overflow-hidden">
                                    <Image src="/images/intern-2.png" alt="Intern 2" fill className="object-cover" />
                                </div>
                            </div>
                        </div>

                        <button className="text-secondary border-b border-primary pb-1 font-medium hover:text-primary transition-colors">
                            Apply Now
                        </button>
                    </div>

                    {/* Contact Form Side */}
                    <div className="w-full lg:w-1/2 bg-[#FAF9F6] p-12 rounded-sm border border-gray-100">
                        <div className="space-y-4 mb-10">
                            <h3 className="text-3xl font-forum text-secondary text-center">Inquire now and get a consultation</h3>
                        </div>
                        
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-gray-400 font-medium">Your Name</label>
                                    <input type="text" placeholder="John Doe" className="w-full bg-transparent border-b border-gray-200 py-3 focus:outline-none focus:border-primary transition-colors text-secondary" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-gray-400 font-medium">Email Address</label>
                                    <input type="email" placeholder="john@example.com" className="w-full bg-transparent border-b border-gray-200 py-3 focus:outline-none focus:border-primary transition-colors text-secondary" />
                                </div>
                            </div>
                            
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-gray-400 font-medium">Legal Area</label>
                                <select className="w-full bg-transparent border-b border-gray-200 py-3 focus:outline-none focus:border-primary transition-colors text-secondary appearance-none">
                                    <option>Business Law</option>
                                    <option>Family Law</option>
                                    <option>Criminal Defense</option>
                                    <option>Others</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-gray-400 font-medium">Message</label>
                                <textarea rows="4" placeholder="How can we help you?" className="w-full bg-transparent border-b border-gray-200 py-3 focus:outline-none focus:border-primary transition-colors text-secondary resize-none"></textarea>
                            </div>

                            <button className="w-full bg-secondary hover:bg-primary text-white py-4 rounded-sm transition-all text-sm font-medium tracking-widest uppercase mt-4">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InternsAndContact;
