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
                <div className="text-2xl font-base font-[24px] text-black">Justivo</div>
                </div>
                <div className="hidden md:flex items-center gap-8 text-base font-medium text-black">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <Link href="/about" className="hover:text-primary transition-colors">About Us</Link>
                    <Link href="/services" className="hover:text-primary transition-colors">Practice Areas</Link>
                    <Link href="/team" className="hover:text-primary transition-colors">Our Team</Link>
                    <Link href="/blog" className="hover:text-primary transition-colors">Case Studies</Link>
                    <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
                </div>

                <Link 
                    href={isLoggedIn ? "/dashboard" : "/login"} 
                    className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-sm transition-all text-xs font-bold tracking-widest uppercase"
                >
                    {isLoggedIn ? "Dashboard" : "Free Consultation"}
                </Link>
            </div>
        </nav>
        </>
    );
};

export default Navbar;
