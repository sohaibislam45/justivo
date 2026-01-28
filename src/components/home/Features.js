"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Features = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <section className="py-24 bg-white border-t border-gray-100">
            <div className="container mx-auto px-6">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20"
                >

                    {/* Column 1: Main Title & Description */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        <h2 className="text-4xl lg:text-5xl font-forum text-secondary leading-tight">
                            Driving impact through global legal initiatives
                        </h2>
                        <p className="text-gray-500 leading-relaxed text-sm">
                            Our team is dedicated to safeguarding your rights and ensuring justice is served through strategic litigation and expert counsel across all jurisdictions.
                        </p>
                    </motion.div>

                    {/* Column 2: Middle Text & Link */}
                    <motion.div variants={itemVariants} className="flex flex-col justify-end py-2 border-l border-gray-200 pl-8 lg:pl-12">
                        <p className="text-xl font-forum text-secondary leading-normal max-w-xs">
                            Smart, actionable tips for modern businesses
                        </p>
                        <Link href="/about" className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-secondary hover:text-primary transition-colors mt-8">
                            Read More
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 9L9 1M9 1H1M9 1V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                    </motion.div>

                    {/* Column 3: Stat & Link */}
                    <motion.div variants={itemVariants} className="flex flex-col justify-end py-2 border-l border-gray-200 pl-8 lg:pl-12">
                        <div className="space-y-2">
                            <h3 className="text-6xl font-forum text-secondary">960k+</h3>
                            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                                Helping you move forward with confidence
                            </p>
                        </div>
                        <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-secondary hover:text-primary transition-colors mt-8">
                            Read More
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 9L9 1M9 1H1M9 1V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
};

export default Features;

