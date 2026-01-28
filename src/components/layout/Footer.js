"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <footer className="relative bg-secondary text-white pt-24 pb-8 overflow-hidden">
            {/* Background Vector Image (Lady Justice) */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 0.1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
                <div className="relative w-full max-w-4xl h-full">
                    <Image
                        src="/images/footer-vector.png"
                        alt="Lady Justice"
                        fill
                        className="object-contain"
                    />
                </div>
            </motion.div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-24"
                >
                    {/* Left Section: Quote & Socials */}
                    <motion.div variants={itemVariants} className="lg:col-span-5 space-y-12">
                        <h2 className="text-4xl lg:text-5xl font-forum font-normal max-w-md">
                            Together, we build smarter legal outcomes
                        </h2>
                        <div className="flex items-center gap-8">
                            {[
                                { name: 'Linkedin', href: '#' },
                                { name: 'Facebook', href: '#' },
                                { name: 'Twitter', href: '#' }
                            ].map((social) => (
                                <Link
                                    key={social.name}
                                    href={social.href}
                                    className="text-white hover:text-primary transition-colors flex items-center gap-1 group"
                                >
                                    <span className="text-sm font-medium">{social.name}</span>
                                    <span className="text-sm group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
                                </Link>
                            ))}
                        </div>
                    </motion.div>

                    {/* Middle Section: Emails & Google Maps */}
                    <motion.div variants={itemVariants} className="lg:col-span-3 lg:pl-12 space-y-12">
                        <div className="space-y-2">
                            <p className="text-2xl font-forum">contact@emailcom</p>
                            <p className="text-2xl font-forum">consultancy@emailcom</p>
                        </div>
                        <Link
                            href="#"
                            className="inline-flex items-center gap-1 text-white hover:text-primary transition-colors group"
                        >
                            <span className="text-sm font-medium">Google Maps</span>
                            <span className="text-sm group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
                        </Link>
                    </motion.div>

                    {/* Right Section: Address & Phone */}
                    <motion.div variants={itemVariants} className="lg:col-span-4 space-y-12 text-right">
                        <p className="text-xl leading-relaxed max-w-[200px] ml-auto">
                            612-7 Roanoke Rd,<br />
                            Toronto, ON M3A 1E3,<br />
                            Canada
                        </p>
                        <div className="space-y-2">
                            <p className="text-2xl font-forum">+1-416-8241228</p>
                            <p className="text-2xl font-forum">+1-416-8241228</p>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6"
                >
                    <p className="text-gray-500 text-sm">
                        2025 thememarch All right reserved
                    </p>
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
                        {[
                            'Home', 'About Us', 'Practice Areas', 'Our Team', 'Case Studies', 'Blog', 'Contact'
                        ].map((link) => (
                            <Link
                                key={link}
                                href="#"
                                className="text-gray-400 hover:text-white text-sm transition-colors border-b border-transparent hover:border-white/20 pb-0.5"
                            >
                                {link}
                            </Link>
                        ))}
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;


