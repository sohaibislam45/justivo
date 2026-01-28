"use client";
import React, { useState, useEffect } from 'react';
import Sidebar from "@/components/dashboard/Sidebar";
import DashboardNavbar from "@/components/dashboard/DashboardNavbar";
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { updateProfile } from 'firebase/auth';

export default function Profile() {
    const { user, loading } = useAuth();
    const router = useRouter();
    const [isEditing, setIsEditing] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const [profile, setProfile] = useState({
        displayName: '',
        email: '',
        phone: '',
        address: '',
        bio: ''
    });

    useEffect(() => {
        if (!loading && !user) {
            router.push('/login');
        } else if (user) {
            setProfile({
                displayName: user.displayName || '',
                email: user.email || '',
                phone: '', // Firebase Auth doesn't store these by default
                address: '',
                bio: ''
            });
        }
    }, [user, loading, router]);

    const handleSave = async (e) => {
        e.preventDefault();
        setIsSaving(true);
        setError('');
        setSuccess('');
        try {
            await updateProfile(user, {
                displayName: profile.displayName
            });
            setSuccess('Profile updated successfully.');
            setIsEditing(false);
            // Reload to reflect changes if necessary, 
            // though AuthContext should update automatically if listening for updates
        } catch (err) {
            console.error(err);
            setError('Failed to update profile.');
        } finally {
            setIsSaving(false);
        }
    };

    const getInitials = (name) => {
        if (!name) return 'U';
        return name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2);
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#FAF9F6]">
                <div className="w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
            </div>
        );
    }

    if (!user) return null;

    return (
        <div className="flex min-h-screen bg-[#FAF9F6]">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <DashboardNavbar />

                <main className="p-8">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-gray-100 pb-8 gap-4">
                            <div className="space-y-4">
                                <h1 className="text-5xl font-forum text-secondary">My Profile</h1>
                                <p className="text-gray-400">Manage your personal information and account settings.</p>
                            </div>
                            <button
                                onClick={() => {
                                    setIsEditing(!isEditing);
                                    setError('');
                                    setSuccess('');
                                }}
                                className="bg-primary text-white px-8 py-3 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-secondary transition-all"
                            >
                                {isEditing ? 'Cancel' : 'Edit Profile'}
                            </button>
                        </div>

                        {error && (
                            <div className="bg-red-50 text-red-600 p-4 rounded-sm text-xs font-bold uppercase tracking-widest border border-red-100">
                                {error}
                            </div>
                        )}
                        {success && (
                            <div className="bg-green-50 text-green-600 p-4 rounded-sm text-xs font-bold uppercase tracking-widest border border-green-100">
                                {success}
                            </div>
                        )}

                        <div className="flex flex-col md:flex-row gap-16">
                            {/* Left: Avatar & Summary */}
                            <div className="w-full md:w-1/3 text-center space-y-6">
                                <div className="relative inline-block">
                                    <div className="w-48 h-48 bg-secondary rounded-full flex items-center justify-center text-white text-6xl font-forum mx-auto overflow-hidden ring-8 ring-white shadow-xl">
                                        {user.photoURL ? (
                                            <Image src={user.photoURL} alt={user.displayName || 'User'} width={192} height={192} className="object-cover" />
                                        ) : (
                                            getInitials(user.displayName || user.email)
                                        )}
                                    </div>
                                    {isEditing && (
                                        <button className="absolute bottom-4 right-4 bg-primary p-3 rounded-full shadow-lg hover:scale-110 transition-transform">
                                            📸
                                        </button>
                                    )}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-forum text-secondary">{user.displayName || 'Justivo User'}</h3>
                                    <p className="text-primary font-bold text-xs uppercase tracking-widest mt-1">CLIENT ID: #{user.uid.substring(0, 6).toUpperCase()}</p>
                                </div>
                            </div>

                            {/* Right: Form */}
                            <form onSubmit={handleSave} className="flex-1 space-y-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Full Name</label>
                                    <input
                                        type="text"
                                        disabled={!isEditing}
                                        value={profile.displayName}
                                        onChange={(e) => setProfile({ ...profile, displayName: e.target.value })}
                                        className="w-full bg-white border border-gray-100 px-6 py-4 rounded-sm focus:outline-none focus:border-primary disabled:bg-transparent disabled:border-transparent text-secondary italic transition-all"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Email Address</label>
                                    <input
                                        type="email"
                                        disabled={true} // Email is usually managed differently or kept as a constant UID
                                        value={profile.email}
                                        className="w-full bg-transparent border-transparent px-6 py-4 rounded-sm text-secondary italic opacity-60 cursor-not-allowed"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Phone</label>
                                    <input
                                        type="text"
                                        disabled={!isEditing}
                                        value={profile.phone}
                                        onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                                        className="w-full bg-white border border-gray-100 px-6 py-4 rounded-sm focus:outline-none focus:border-primary disabled:bg-transparent disabled:border-transparent text-secondary italic transition-all"
                                        placeholder="Add your phone number..."
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Address</label>
                                    <input
                                        type="text"
                                        disabled={!isEditing}
                                        value={profile.address}
                                        onChange={(e) => setProfile({ ...profile, address: e.target.value })}
                                        className="w-full bg-white border border-gray-100 px-6 py-4 rounded-sm focus:outline-none focus:border-primary disabled:bg-transparent disabled:border-transparent text-secondary italic transition-all"
                                        placeholder="Add your address..."
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Bio</label>
                                    <textarea
                                        rows="4"
                                        disabled={!isEditing}
                                        value={profile.bio}
                                        onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                                        className="w-full bg-white border border-gray-100 px-6 py-4 rounded-sm focus:outline-none focus:border-primary disabled:bg-transparent disabled:border-transparent text-secondary italic resize-none transition-all"
                                        placeholder="Tell us about yourself..."
                                    ></textarea>
                                </div>

                                {isEditing && (
                                    <div className="pt-4">
                                        <button
                                            disabled={isSaving}
                                            className="w-full bg-secondary text-white py-4 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-primary transition-all flex items-center justify-center gap-2"
                                        >
                                            {isSaving ? (
                                                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                            ) : 'Save Changes'}
                                        </button>
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
