"use client";
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import TopBar from './TopBar';

const Navbar = () => {
    const pathname = usePathname();
    // Mocked logged-in state
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Practice Areas', href: '/services' },
        { name: 'Our Team', href: '/team' },
        { name: 'Case Studies', href: '/blog' },
        { name: 'Contact', href: '/contact' },
    ];

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
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`inline-block transition-all duration-300 hover:scale-110 active:scale-95 relative group ${isActive ? 'text-primary' : 'hover:text-primary'
                                        }`}
                                >
                                    {link.name}
                                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'
                                        }`}></span>
                                </Link>
                            );
                        })}
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
