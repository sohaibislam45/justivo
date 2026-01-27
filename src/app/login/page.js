"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        setIsLoading(true);
        // Mock login
        setTimeout(() => {
            setIsLoading(false);
            window.location.href = '/dashboard';
        }, 1500);
    };

    const fillDemo = (role) => {
        if (role === 'admin') {
            setEmail('admin@justivo.com');
            setPassword('admin123');
        } else {
            setEmail('user@justivo.com');
            setPassword('user123');
        }
    };

    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-white selection:bg-primary/30 selection:text-secondary">
            {/* Left Side: Branding/Image */}
            <div className="hidden md:flex md:w-1/2 bg-secondary relative flex-col justify-between p-12">
                <div className="relative z-10">
                    <Link href="/">
                        <Image src="/images/logo.png" alt="Justivo Logo" width={140} height={40} className="brightness-0 invert" />
                    </Link>
                </div>
                
                <div className="relative z-10 space-y-6">
                    <h1 className="text-5xl font-forum text-white leading-tight">Welcome back to <br/> our legal portal.</h1>
                    <p className="text-white/60 max-w-sm">Access your case documents, track progress, and communicate with your legal team.</p>
                </div>

                <div className="absolute right-0 bottom-0 w-full h-1/2 opacity-10 pointer-events-none">
                    <Image src="/images/footer-vector.png" alt="Decoration" fill className="object-contain object-right-bottom" />
                </div>
            </div>

            {/* Right Side: Form */}
            <div className="flex-1 flex items-center justify-center p-8 md:p-24 bg-[#FAF9F6]">
                <div className="w-full max-w-md space-y-10">
                    <div className="md:hidden">
                        <Link href="/">
                            <Image src="/images/logo.png" alt="Justivo Logo" width={120} height={40} />
                        </Link>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-4xl font-forum text-secondary">Login</h2>
                        <p className="text-gray-500">New to Justivo? <Link href="/register" className="text-primary font-bold hover:underline">Create an account</Link></p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6 text-sm">
                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">Email Address</label>
                            <input 
                                type="email" 
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-white border border-gray-100 px-6 py-4 rounded-sm focus:outline-none focus:border-primary text-secondary transition-all" 
                                placeholder="name@example.com"
                            />
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">Password</label>
                                <Link href="#" className="text-[10px] uppercase font-bold text-gray-400 hover:text-primary">Forgot Password?</Link>
                            </div>
                            <input 
                                type="password" 
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-white border border-gray-100 px-6 py-4 rounded-sm focus:outline-none focus:border-primary text-secondary transition-all" 
                                placeholder="••••••••"
                            />
                        </div>

                        <button 
                            disabled={isLoading}
                            className="w-full bg-secondary hover:bg-primary text-white py-4 rounded-sm transition-all text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2"
                        >
                            {isLoading ? (
                                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            ) : 'Sign In'}
                        </button>
                    </form>

                    <div className="relative py-4">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200"></div>
                        </div>
                        <div className="relative flex justify-center text-xs uppercase tracking-widest font-bold">
                            <span className="bg-[#FAF9F6] px-4 text-gray-400">Or continue with</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <button className="flex items-center justify-center gap-3 bg-white border border-gray-100 py-3 rounded-sm hover:border-primary transition-all text-xs font-bold uppercase tracking-widest text-secondary">
                            <span>Google</span>
                        </button>
                        <button className="flex items-center justify-center gap-3 bg-white border border-gray-100 py-3 rounded-sm hover:border-primary transition-all text-xs font-bold uppercase tracking-widest text-secondary">
                            <span>Facebook</span>
                        </button>
                    </div>

                    <div className="pt-8 border-t border-gray-100 space-y-4">
                        <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400 text-center">Quick Access for Review</p>
                        <div className="flex gap-4">
                            <button onClick={() => fillDemo('user')} className="flex-1 text-[10px] uppercase font-bold text-secondary border border-gray-100 py-2 rounded-sm hover:bg-white transition-all">Demo User</button>
                            <button onClick={() => fillDemo('admin')} className="flex-1 text-[10px] uppercase font-bold text-secondary border border-gray-100 py-2 rounded-sm hover:bg-white transition-all">Demo Admin</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
