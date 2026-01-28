"use client";
import Link from 'next/link';

const HomeContact = () => {
    return (
        <section className="bg-white py-10">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row min-h-[600px]">
                    {/* Left Column: Contact Info */}
                    <div className="lg:w-[35%] bg-white p-8 lg:p-16 flex flex-col justify-center space-y-12">
                        {/* Location */}
                        <div className="flex items-start gap-6">
                            <div className="w-10 h-10 bg-primary flex items-center justify-center shrink-0">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                                    <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 22C16 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 8 18 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className="space-y-1">
                                <p className="text-gray-500 text-base">Location:</p>
                                <p className="text-primary text-base leading-relaxed max-w-[200px]">
                                    612-7 Roanoke Rd,<br />
                                    Toronto, ON M3A 1E3,<br />
                                    Canada
                                </p>
                                <Link href="#" className="text-sm border-b border-gray-400 inline-flex items-center gap-2 group mt-2">
                                    Google Maps
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                                        <path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-start gap-6">
                            <div className="w-10 h-10 bg-primary flex items-center justify-center shrink-0">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                                    <path d="M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className="space-y-1">
                                <p className="text-gray-500 text-sm">Email:</p>
                                <p className="text-2xl font-forum text-secondary">contact@emailcom</p>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-start gap-6">
                            <div className="w-10 h-10 bg-primary flex items-center justify-center shrink-0">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                                    <path d="M22 16.92V19.92C22 20.47 21.55 20.92 21 20.92C11.61 20.92 4 13.31 4 3.92C4 3.37 4.45 2.92 5 2.92H8C8.55 2.92 9 3.37 9.17 3.92C9.43 4.8 9.81 5.64 10.29 6.42C10.46 6.69 10.39 7.04 10.17 7.26L8.41 9.02C9.72 11.31 11.61 13.2 13.9 14.51L15.66 12.75C15.88 12.53 16.23 12.46 16.5 12.63C17.28 13.11 18.12 13.49 19 13.75C19.55 13.92 20 14.37 20 14.92V17.92L22 16.92Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className="space-y-1">
                                <p className="text-gray-500 text-sm">Phone:</p>
                                <div className="space-y-1">
                                    <p className="text-2xl font-forum text-secondary">+1-416-8241228</p>
                                    <p className="text-2xl font-forum text-secondary">+1-416-8241228</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <Link href="#" className="px-8 py-3 border border-gray-200 text-primary text-sm tracking-widest hover:bg-gray-50 transition-all inline-flex items-center gap-3 group">
                                Read More
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform rotate-45 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                                    <path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="lg:w-[65%] bg-[#FDF2ED] p-8 lg:p-20 border-l border-[#BE7D60]/20">
                        <div className="max-w-2xl">
                            <h2 className="text-4xl lg:text-5xl font-forum text-secondary leading-tight mb-16">
                                Fill out the form we will get in touch shortly
                            </h2>

                            <form className="space-y-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    <div className="space-y-2 group">
                                        <label className="text-xs uppercase tracking-widest text-black font-medium">First name...</label>
                                        <input
                                            type="text"
                                            className="w-full bg-transparent border-b border-gray-200 py-2 focus:border-primary outline-none transition-colors"
                                        />
                                    </div>
                                    <div className="space-y-2 group">
                                        <label className="text-xs uppercase tracking-widest text-black font-medium">Last name...</label>
                                        <input
                                            type="text"
                                            className="w-full bg-transparent border-b border-gray-200 py-2 focus:border-primary outline-none transition-colors"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    <div className="space-y-2 group">
                                        <label className="text-xs uppercase tracking-widest text-black font-medium">Email...</label>
                                        <input
                                            type="email"
                                            className="w-full bg-transparent border-b border-gray-200 py-2 focus:border-primary outline-none transition-colors"
                                        />
                                    </div>
                                    <div className="space-y-2 group">
                                        <label className="text-xs uppercase tracking-widest text-black font-medium">Phone...</label>
                                        <input
                                            type="tel"
                                            className="w-full bg-transparent border-b border-gray-200 py-2 focus:border-primary outline-none transition-colors"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2 group">
                                    <label className="text-xs uppercase tracking-widest text-black font-medium">Subject...</label>
                                    <input
                                        type="text"
                                        className="w-full bg-transparent border-b border-gray-200 py-2 focus:border-primary outline-none transition-colors"
                                    />
                                </div>

                                <div className="space-y-2 group">
                                    <label className="text-xs uppercase tracking-widest text-black font-medium">Message...</label>
                                    <textarea
                                        rows="1"
                                        className="w-full bg-transparent border-b border-gray-200 py-2 focus:border-primary outline-none transition-colors resize-none"
                                    ></textarea>
                                </div>

                                <div className="pt-6">
                                    <Link href="#" className="inline-block transition-transform hover:translate-x-0.5 hover:-translate-y-0.5 bg-secondary text-white px-10 py-5 text-sm tracking-widest hover:bg-black/60 transition-all">
                                        Send Message
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeContact;
