"use client";
import React from 'react';
import Image from 'next/image';

const Hero = () => {
    return (
        <section className="relative bg-white pt-16">
            {/* Header Content */}
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row justify-between items-end pb-12">
                    <div className="max-w-5xl">
                        <h1 className="text-7xl md:text-9xl lg:text-[130px] font-forum leading-[0.85] text-secondary tracking-tight">
                            Justice. Advocacy.<br />
                            <div className="text-primary md:mt-8">Results.</div>
                        </h1>
                    </div>

                    {/* Rotating Circular Text */}
                    <div className="relative mb-8 lg:mb-12 hidden md:block">
                        <div className="w-44 h-44 animate-[spin_25s_linear_infinite] flex items-center justify-center">
                            <svg viewBox="0 0 100 100" className="w-full h-full">
                                <defs>
                                    <path
                                        id="circlePath"
                                        d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                                    />
                                </defs>
                                <text className="text-[9px] tracking-[0.32em] font-medium fill-black">
                                    <textPath xlinkHref="#circlePath">
                                        We will solve your problem today →
                                    </textPath>
                                </text>
                            </svg>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-primary/20 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Social Links Sidebar & Image Section */}
            <div className="container mx-auto px-6 relative mt-12">
                {/* Social Sidebar */}
                <div className="hidden xl:flex flex-col items-center absolute -left-20 top-1/2 -translate-y-1/2 z-20">
                    <div className="flex flex-col gap-10 text-[13px] uppercase tracking-[0.2em] font-medium text-black">
                        <a href="" className="inline-block hover:text-primary active:text-primary transition-all duration-300 vertical-text hover:scale-110 active:scale-95 opacity-70 hover:opacity-100 relative group">
                            Dribbble
                            <span className="absolute -left-2 top-0 w-0.5 h-0 group-hover:h-full bg-primary transition-all duration-300"></span>
                        </a>
                        <a href="" className="inline-block hover:text-primary active:text-primary transition-all duration-300 vertical-text hover:scale-110 active:scale-95 opacity-70 hover:opacity-100 relative group">
                            Behance
                            <span className="absolute -left-2 top-0 w-0.5 h-0 group-hover:h-full bg-primary transition-all duration-300"></span>
                        </a>
                        <a href="" className="inline-block hover:text-primary active:text-primary transition-all duration-300 vertical-text hover:scale-110 active:scale-95 opacity-70 hover:opacity-100 relative group">
                            Github
                            <span className="absolute -left-2 top-0 w-0.5 h-0 group-hover:h-full bg-primary transition-all duration-300"></span>
                        </a>
                        <a href="" className="inline-block hover:text-primary active:text-primary transition-all duration-300 vertical-text hover:scale-110 active:scale-95 opacity-70 hover:opacity-100 relative group">
                            Linkedin
                            <span className="absolute -left-2 top-0 w-0.5 h-0 group-hover:h-full bg-primary transition-all duration-300"></span>
                        </a>
                        <a href="" className="inline-block hover:text-primary active:text-primary transition-all duration-300 vertical-text hover:scale-110 active:scale-95 opacity-70 hover:opacity-100 relative group">
                            Facebook
                            <span className="absolute -left-2 top-0 w-0.5 h-0 group-hover:h-full bg-primary transition-all duration-300"></span>
                        </a>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="w-full h-[450px] md:h-[650px] lg:h-[800px] relative overflow-hidden">
                    <div className="relative w-full h-full">
                        <Image
                            src="/images/hero.png"
                            alt="Justivo Legal Concept"
                            fill
                            className="object-cover object-top"
                            priority
                        />
                        {/* Subtle transition overlay */}
                        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent opacity-60"></div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .vertical-text {
                    writing-mode: vertical-rl;
                    transform: rotate(180deg);
                }
            `}</style>
        </section>
    );
};

export default Hero;
