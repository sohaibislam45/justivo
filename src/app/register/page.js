"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '@/context/AuthContext';
import { FcGoogle } from 'react-icons/fc';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import { useRouter } from 'next/navigation';

export default function Register() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const { register, googleSignIn } = useAuth();
    const router = useRouter();

    const handleRegister = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');
        try {
            const displayName = `${firstName} ${lastName}`.trim();
            await register(email, password, displayName);
            router.push('/dashboard');
        } catch (err) {
            console.error(err);
            setError(err.message || 'Failed to create an account. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleGoogleSignIn = async () => {
        setIsLoading(true);
        setError('');
        try {
            await googleSignIn();
            router.push('/dashboard');
        } catch (err) {
            console.error(err);
            setError('Failed to sign up with Google.');
        } finally {
            setIsLoading(false);
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
                    <h1 className="text-5xl font-forum text-white leading-tight">Start your journey <br /> with Justivo.</h1>
                    <p className="text-white/60 max-w-sm">Join thousands of clients who trust us with their legal representation and advisory needs.</p>
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
                        <h2 className="text-4xl font-forum text-secondary">Join Now</h2>
                        <p className="text-gray-500">Already have an account? <Link href="/login" className="text-primary font-bold hover:underline">Sign in here</Link></p>
                    </div>

                    {error && (
                        <div className="bg-red-50 text-red-600 p-4 rounded-sm text-xs font-bold uppercase tracking-widest border border-red-100">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleRegister} className="space-y-6 text-sm">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">First Name</label>
                                <input
                                    type="text"
                                    required
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    className="w-full bg-white border border-gray-100 px-6 py-4 rounded-sm focus:outline-none focus:border-primary text-secondary"
                                    placeholder="Shohaib"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">Last Name</label>
                                <input
                                    type="text"
                                    required
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    className="w-full bg-white border border-gray-100 px-6 py-4 rounded-sm focus:outline-none focus:border-primary text-secondary"
                                    placeholder="Islam"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">Email Address</label>
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-white border border-gray-100 px-6 py-4 rounded-sm focus:outline-none focus:border-primary text-secondary"
                                placeholder="name@example.com"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-white border border-gray-100 px-6 py-4 rounded-sm focus:outline-none focus:border-primary text-secondary pr-12"
                                    placeholder="••••••••"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary transition-colors focus:outline-none"
                                >
                                    {showPassword ? <HiEyeOff className="text-xl" /> : <HiEye className="text-xl" />}
                                </button>
                            </div>
                        </div>

                        <div className="flex items-start gap-3 pt-2">
                            <input type="checkbox" required id="terms" className="mt-1 accent-primary" />
                            <label htmlFor="terms" className="text-xs text-gray-400 leading-relaxed">
                                I agree to the <Link href="#" className="text-secondary font-bold hover:text-primary">Terms of Service</Link> and <Link href="#" className="text-secondary font-bold hover:text-primary">Privacy Policy</Link>.
                            </label>
                        </div>

                        <button
                            disabled={isLoading}
                            type="submit"
                            className="w-full bg-secondary hover:bg-primary text-white py-4 rounded-sm transition-all text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2"
                        >
                            {isLoading ? (
                                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            ) : 'Create Account'}
                        </button>
                    </form>

                    <div className="relative py-4">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200"></div>
                        </div>
                        <div className="relative flex justify-center text-xs uppercase tracking-widest font-bold">
                            <span className="bg-[#FAF9F6] px-4 text-gray-400">Or sign up with</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        <button
                            onClick={handleGoogleSignIn}
                            disabled={isLoading}
                            className="flex items-center justify-center gap-3 bg-white border border-gray-100 py-3 rounded-sm hover:border-primary transition-all text-xs font-bold uppercase tracking-widest text-secondary"
                        >
                            <FcGoogle className="text-lg" />
                            <span>Google</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
