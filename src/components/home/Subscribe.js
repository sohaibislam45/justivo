'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Subscribe = () => {
    return (
        <section className="bg-[#F9F3F0] py-16 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-[700px] mx-auto flex flex-col md:flex-row items-center border-b border-primary/20 pb-2"
                >
                    <input
                        type="email"
                        placeholder="Enter you email.."
                        className="w-full bg-transparent text-black font-forum text-xl outline-none placeholder:text-black placeholder:font-light py-2"
                    />
                    <Link href="#" className="inline-flex items-center gap-2 text-primary font-forum text-sm whitespace-nowrap hover:opacity-80 transition-opacity uppercase tracking-widest pl-4">
                        Subscribe
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="rotate-[-45deg]"
                        >
                            <path
                                d="M1 7H13M13 7L7 1M13 7L7 13"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </Link>
                </motion.div>
            </div>

            {/* Decorative SVG Line */}
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 0.2, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 pointer-events-none"
            >
                <svg
                    width="400"
                    height="100"
                    viewBox="0 0 400 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full"
                >
                    <path
                        d="M0 80C100 80 150 20 250 20C350 20 400 50 450 10"
                        stroke="#BE7D60"
                        strokeWidth="1"
                        strokeLinecap="round"
                    />
                    <circle cx="390" cy="10" r="2" fill="#BE7D60" />
                </svg>
            </motion.div>
        </section>
    );
};

export default Subscribe;

