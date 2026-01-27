"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import TopBar from './TopBar';

const Navbar = () => {
    // Mocked logged-in state
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <>
            <TopBar />
            <nav className="sticky top-0 z-50 w-full bg-white/90 text-black shadow-sm">
                <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                    <div className='flex items-center gap-3'>
                        <div className="flex items-center">
                            <Image src="/images/logo.png" alt="Justivo Logo" width={51} height={50} className="object-contain" />
                        </div>
                        <div className="text-3xl font-base font-[24px] text-black">Justivo</div>
                    </div>
                    <div className="hidden md:flex items-center gap-8 text-xl font-medium text-black">
                        <Link href="/" className="inline-block hover:text-primary transition-all duration-300 hover:scale-110 active:scale-95">Home</Link>
                        <Link href="/about" className="inline-block hover:text-primary transition-all duration-300 hover:scale-110 active:scale-95">About Us</Link>
                        <Link href="/services" className="inline-block hover:text-primary transition-all duration-300 hover:scale-110 active:scale-95">Practice Areas</Link>
                        <Link href="/team" className="inline-block hover:text-primary transition-all duration-300 hover:scale-110 active:scale-95">Our Team</Link>
                        <Link href="/blog" className="inline-block hover:text-primary transition-all duration-300 hover:scale-110 active:scale-95">Case Studies</Link>
                        <Link href="/contact" className="inline-block hover:text-primary transition-all duration-300 hover:scale-110 active:scale-95">Blog</Link>
                        <Link href="/contact" className="inline-block hover:text-primary transition-all duration-300 hover:scale-110 active:scale-95">Contact</Link>
                        <Link
                            href={isLoggedIn ? "/dashboard" : "/login"}
                            className="inline-block bg-black hover:bg-black/60 text-white px-6 py-2 rounded-sm transition-all duration-300 hover:scale-110 active:scale-95 text-base tracking-widest uppercase text-center"
                        >
                            {isLoggedIn ? "Dashboard" : "Free Consultation"}
                        </Link>
                    </div>

                </div>
            </nav>
        </>
    );
};

export default Navbar;
