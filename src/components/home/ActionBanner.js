"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ActionBanner = () => {
    return (
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
            <motion.div
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0"
            >
                <Image
                    src="/images/Contributing-Important-Global-Initiatives.png"
                    alt="Global Initiatives"
                    fill
                    className="object-cover"
                    priority
                />
            </motion.div>
            <div className="absolute inset-0 bg-secondary/60"></div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-3xl mx-auto space-y-8"
                >
                    <span className="text-primary font-medium tracking-widest uppercase text-sm">Our Impact</span>
                    <h2 className="text-4xl md:text-6xl font-forum text-white leading-tight">
                        Contributing to Important Global Initiatives & Legal Aid
                    </h2>
                    <p className="text-white/80 text-lg max-w-xl mx-auto">
                        We believe in justice for all. Our firm dedicates over 5,000 hours annually to pro-bono work and international human rights causes.
                    </p>
                    <Link href="/about" className="inline-block bg-primary hover:bg-white hover:text-secondary text-white px-10 py-4 rounded-sm transition-all text-sm font-medium tracking-widest uppercase mt-4">
                        Our Mission
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default ActionBanner;

