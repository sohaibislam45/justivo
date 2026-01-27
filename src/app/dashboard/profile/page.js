"use client";
import React, { useState } from 'react';
import Sidebar from "@/components/dashboard/Sidebar";
import DashboardNavbar from "@/components/dashboard/DashboardNavbar";

export default function Profile() {
    const [isEditing, setIsEditing] = useState(false);
    const [profile, setProfile] = useState({
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        phone: '+1 (555) 123-4567',
        address: '123 Legal Avenue, NY 10001',
        bio: 'Dedicated client seeking property law assistance.'
    });

    const handleSave = (e) => {
        e.preventDefault();
        setIsEditing(false);
    };

    return (
        <div className="flex min-h-screen bg-[#FAF9F6]">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <DashboardNavbar />
                
                <main className="p-8">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <div className="flex justify-between items-end border-b border-gray-100 pb-8">
                            <div className="space-y-4">
                                <h1 className="text-5xl font-forum text-secondary">My Profile</h1>
                                <p className="text-gray-400">Manage your personal information and account settings.</p>
                            </div>
                            <button 
                                onClick={() => setIsEditing(!isEditing)}
                                className="bg-primary text-white px-8 py-3 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-secondary transition-all"
                            >
                                {isEditing ? 'Cancel' : 'Edit Profile'}
                            </button>
                        </div>

                        <div className="flex flex-col md:flex-row gap-16">
                            {/* Left: Avatar & Summary */}
                            <div className="w-full md:w-1/3 text-center space-y-6">
                                <div className="relative inline-block">
                                    <div className="w-48 h-48 bg-secondary rounded-full flex items-center justify-center text-white text-6xl font-forum mx-auto overflow-hidden ring-8 ring-white shadow-xl">
                                        JD
                                    </div>
                                    {isEditing && (
                                        <button className="absolute bottom-4 right-4 bg-primary p-3 rounded-full shadow-lg hover:scale-110 transition-transform">
                                            📸
                                        </button>
                                    )}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-forum text-secondary">{profile.firstName} {profile.lastName}</h3>
                                    <p className="text-primary font-bold text-xs uppercase tracking-widest mt-1">CLIENT ID: #JD9921</p>
                                </div>
                            </div>

                            {/* Right: Form */}
                            <form onSubmit={handleSave} className="flex-1 space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">First Name</label>
                                        <input 
                                            type="text" 
                                            disabled={!isEditing}
                                            value={profile.firstName}
                                            onChange={(e) => setProfile({...profile, firstName: e.target.value})}
                                            className="w-full bg-white border border-gray-100 px-6 py-4 rounded-sm focus:outline-none focus:border-primary disabled:bg-transparent disabled:border-transparent text-secondary italic" 
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Last Name</label>
                                        <input 
                                            type="text" 
                                            disabled={!isEditing}
                                            value={profile.lastName}
                                            onChange={(e) => setProfile({...profile, lastName: e.target.value})}
                                            className="w-full bg-white border border-gray-100 px-6 py-4 rounded-sm focus:outline-none focus:border-primary disabled:bg-transparent disabled:border-transparent text-secondary italic" 
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Email Address</label>
                                    <input 
                                        type="email" 
                                        disabled={!isEditing}
                                        value={profile.email}
                                        onChange={(e) => setProfile({...profile, email: e.target.value})}
                                        className="w-full bg-white border border-gray-100 px-6 py-4 rounded-sm focus:outline-none focus:border-primary disabled:bg-transparent disabled:border-transparent text-secondary italic" 
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Phone</label>
                                    <input 
                                        type="text" 
                                        disabled={!isEditing}
                                        value={profile.phone}
                                        onChange={(e) => setProfile({...profile, phone: e.target.value})}
                                        className="w-full bg-white border border-gray-100 px-6 py-4 rounded-sm focus:outline-none focus:border-primary disabled:bg-transparent disabled:border-transparent text-secondary italic" 
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Address</label>
                                    <input 
                                        type="text" 
                                        disabled={!isEditing}
                                        value={profile.address}
                                        onChange={(e) => setProfile({...profile, address: e.target.value})}
                                        className="w-full bg-white border border-gray-100 px-6 py-4 rounded-sm focus:outline-none focus:border-primary disabled:bg-transparent disabled:border-transparent text-secondary italic" 
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Bio</label>
                                    <textarea 
                                        rows="4"
                                        disabled={!isEditing}
                                        value={profile.bio}
                                        onChange={(e) => setProfile({...profile, bio: e.target.value})}
                                        className="w-full bg-white border border-gray-100 px-6 py-4 rounded-sm focus:outline-none focus:border-primary disabled:bg-transparent disabled:border-transparent text-secondary italic resize-none" 
                                    ></textarea>
                                </div>

                                {isEditing && (
                                    <div className="pt-4">
                                        <button className="w-full bg-secondary text-white py-4 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-primary transition-all">
                                            Save Changes
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
