"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const DashboardNavbar = () => {
    const [showProfile, setShowProfile] = useState(false);
    const { user, logout } = useAuth();
    const router = useRouter();

    const handleLogout = async () => {
        try {
            await logout();
            router.push('/login');
        } catch (error) {
            console.error('Failed to log out', error);
        }
    };

    const getInitials = (name) => {
        if (!name) return 'U';
        return name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2);
    };

    return (
        <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-8 sticky top-0 z-40">
            <div className="flex items-center gap-4">
                <h3 className="text-xl font-forum text-secondary">Dashboard</h3>
            </div>

            <div className="flex items-center gap-8">
                <div className="hidden md:flex items-center gap-2 bg-[#FAF9F6] border border-gray-100 px-4 py-2 rounded-sm text-sm text-gray-400">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M12.5 12.5L9.5 9.5M11.5 6C11.5 9.03757 9.03757 11.5 6 11.5C2.96243 11.5 0.5 9.03757 0.5 6C0.5 2.96243 2.96243 0.5 6 0.5C9.03757 0.5 11.5 2.96243 11.5 6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    <input type="text" placeholder="Search data..." className="bg-transparent border-none focus:outline-none" />
                </div>

                <div className="flex items-center gap-6">
                    <button className="relative text-gray-400 hover:text-secondary transition-colors">
                        <span className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full border-2 border-white text-[8px] flex items-center justify-center text-white">2</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>
                    </button>

                    <div className="relative">
                        <button
                            onClick={() => setShowProfile(!showProfile)}
                            className="flex items-center gap-3 group"
                        >
                            {user?.photoURL ? (
                                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/20">
                                    <Image src={user.photoURL} alt={user.displayName || 'User'} width={40} height={40} className="object-cover" />
                                </div>
                            ) : (
                                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                                    {getInitials(user?.displayName || user?.email)}
                                </div>
                            )}
                            <div className="hidden md:block text-left">
                                <p className="text-xs font-bold text-secondary uppercase tracking-widest">{user?.displayName || 'Justivo User'}</p>
                                <p className="text-[10px] text-gray-400 font-medium">Verified Client</p>
                            </div>
                        </button>

                        {showProfile && (
                            <div className="absolute top-full right-0 mt-4 w-48 bg-white shadow-xl border border-gray-100 py-3 rounded-sm">
                                <Link href="/dashboard/profile" className="block px-6 py-2 text-sm text-secondary hover:bg-[#FAF9F6] hover:text-primary">Profile</Link>
                                <Link href="/dashboard/settings" className="block px-6 py-2 text-sm text-secondary hover:bg-[#FAF9F6] hover:text-primary">Settings</Link>
                                <div className="border-t border-gray-100 my-2"></div>
                                <button
                                    onClick={handleLogout}
                                    className="block w-full text-left px-6 py-2 text-sm text-red-500 hover:bg-[#FAF9F6] transition-colors"
                                >
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default DashboardNavbar;
