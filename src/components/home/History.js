"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const History = () => {
    const timelineItems = [
        {
            year: '1971',
            title: 'Founded in London',
            desc: 'Established with a vision to provide accessible legal excellence, tackling our first major pro-bono cases that defined our values.'
        },
        {
            year: '1986',
            title: 'Firm Expansion',
            desc: 'Opened new offices across Europe and Asia, growing our team of dedicated attorneys to serve a global clientele with local expertise.'
        },
        {
            year: '1991',
            title: 'Landmark Case Victory',
            desc: 'Secured a pivotal win in the Supreme Court that set a new precedent for corporate accountability and environmental protection.'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    const imageVariantsLeft = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 1, ease: "easeOut" }
        }
    };

    return (
        <section className="pt-5 pb-20 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">
                    {/* Left Column - Images */}
                    <div className="space-y-8 flex flex-col justify-between h-full py-3">
                        {/* Top Image - Scales */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative h-[400px] w-full bg-gray-100 rounded-sm overflow-hidden group"
                        >
                            <Image
                                src="/images/timeline-1.png"
                                alt="Law firm history timeline illustration"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </motion.div>
                        {/* Bottom Image - Lawyer */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative h-[500px] w-full bg-gray-100 rounded-sm overflow-hidden group"
                        >
                            <Image
                                src="/images/timeline-2.png"
                                alt="Lawyer walking outside court"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </motion.div>
                    </div>

                    {/* Right Column - Content */}
                    <div className="flex flex-col justify-between h-full lg:pl-10 relative">
                        {/* Section Heading */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="mb-20"
                        >
                            <h2 className="text-4xl lg:text-5xl font-forum leading-tight text-secondary max-w-lg">
                                Serving clients in every area of law since 1971 with experience and dedication.
                            </h2>
                        </motion.div>

                        {/* Timeline Wrapper */}
                        <div className="relative">
                            {/* Decorative Side Elements */}
                            <div className="absolute right-0 top-0 h-full flex flex-col items-center justify-center hidden xl:flex translate-x-1/2">
                                <div className="relative w-[1px] h-3/4">
                                    <Image src="/images/border.png" alt="border" fill className="object-cover" />
                                </div>
                                <div className="absolute top-[40%] -right-10 translate-x-full">
                                    <Image src="/images/arrow-left-1.png" alt="arrow up" width={85} height={65} className="object-contain " />
                                </div>
                                <div className="absolute bottom-[40%] -right-10 translate-x-full">
                                    <Image src="/images/arrow-left.png" alt="arrow down" width={3085} height={65} className="object-contain" />
                                </div>
                            </div>

                            {/* Timeline Items */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={containerVariants}
                                className="space-y-16 pr-10"
                            >
                                {timelineItems.map((item, index) => (
                                    <motion.div key={index} variants={itemVariants} className="group">
                                        <div className="space-y-4">

                                            {/* Year */}
                                            <div className="inline-block relative">
                                                <span className="text-6xl font-forum text-secondary">{item.year}</span>
                                            </div>

                                            {/* Title with Line */}
                                            <div className="flex items-center gap-4">
                                                <h3 className="text-2xl font-forum text-secondary">{item.title}</h3>
                                                <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
                                            </div>

                                            {/* Description */}
                                            <p className="text-gray-500 leading-relaxed max-w-md">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default History;

