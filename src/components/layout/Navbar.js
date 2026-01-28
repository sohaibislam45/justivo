"use client";
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import TopBar from './TopBar';
import { useAuth } from '@/context/AuthContext';

const Navbar = () => {
    const pathname = usePathname();
    const { user } = useAuth();
    const isLoggedIn = !!user;
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Practice Areas', href: '/services' },
        { name: 'Our Team', href: '/team' },
        { name: 'Case Studies', href: '/blog' },
        { name: 'Contact', href: '/contact' },
    ];

    // Close menu when pathname changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    return (
        <>
            <TopBar />
            <nav className="sticky top-0 z-50 w-full bg-white/90 text-black shadow-sm backdrop-blur-md">
                <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                    <Link href="/" className='flex items-center gap-3 group'>
                        <div className="flex items-center transition-transform duration-300 group-hover:scale-110">
                            <Image src="/images/logo.png" alt="Justivo Logo" width={51} height={50} className="object-contain" />
                        </div>
                        <div className="text-3xl font-base font-[24px] text-black">Justivo</div>
                    </Link>

                    {/* Desktop Navigation */}
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
                            className="inline-block bg-black hover:bg-black/80 text-white px-6 py-2 rounded-sm transition-all duration-300 hover:scale-110 active:scale-95 text-base tracking-widest uppercase text-center"
                        >
                            {isLoggedIn ? "Dashboard" : "Free Consultation"}
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(true)}
                        className="md:hidden p-2 text-black hover:text-primary transition-colors active:scale-90"
                        aria-label="Open Menu"
                    >
                        <svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="30" height="2" fill="currentColor" />
                            <rect y="11" width="30" height="2" fill="currentColor" />
                            <rect y="22" width="30" height="2" fill="currentColor" />
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Mobile Sidebar (Drawer) */}
            <div
                className={`fixed inset-0 z-[100] transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
            >
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                    onClick={() => setIsMenuOpen(false)}
                />

                {/* Sidebar */}
                <div
                    className={`absolute right-0 top-0 h-full w-[80%] max-w-sm bg-white shadow-2xl transition-transform duration-500 ease-out flex flex-col ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                >
                    <div className="flex items-center justify-between p-6 border-b border-gray-100">
                        <div className='flex items-center gap-3'>
                            <Image src="/images/logo.png" alt="Justivo Logo" width={40} height={39} className="object-contain" />
                            <div className="text-2xl font-base text-black">Justivo</div>
                        </div>
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="p-2 text-gray-500 hover:text-primary transition-colors active:scale-90"
                            aria-label="Close Menu"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto py-8 px-6">
                        <div className="flex flex-col gap-6">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={`text-2xl font-medium tracking-tight transition-colors ${isActive ? 'text-primary' : 'text-secondary hover:text-primary'
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    <div className="p-6 border-t border-gray-100">
                        <Link
                            href={isLoggedIn ? "/dashboard" : "/login"}
                            className="block w-full bg-black hover:bg-black/80 text-white py-4 rounded-sm transition-all text-center tracking-widest uppercase text-sm font-bold"
                        >
                            {isLoggedIn ? "Dashboard" : "Free Consultation"}
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
