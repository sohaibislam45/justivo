"use client";
import React, { useEffect } from 'react';
import Sidebar from "@/components/dashboard/Sidebar";
import DashboardNavbar from "@/components/dashboard/DashboardNavbar";
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            router.push('/login');
        }
    }, [user, loading, router]);

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

                <main className="p-8 space-y-12">
                    {/* Overview Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: 'Active Cases', value: '03', change: '+1 this month', icon: '⚖️' },
                            { title: 'Pending Tasks', value: '12', change: 'Updated 2h ago', icon: '📋' },
                            { title: 'Upcoming Hearings', value: '01', change: 'Next: Feb 12', icon: '🏛️' },
                            { title: 'Invoices Due', value: '$2,400', change: 'Due in 5 days', icon: '💰' },
                        ].map((card, idx) => (
                            <div key={idx} className="bg-white p-8 border border-gray-100 rounded-sm space-y-4 hover:shadow-lg transition-shadow">
                                <div className="flex justify-between items-start">
                                    <span className="text-2xl">{card.icon}</span>
                                    <span className="text-[10px] uppercase font-bold text-primary bg-primary/10 px-2 py-1 rounded-sm">Monthly</span>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest">{card.title}</h4>
                                    <p className="text-3xl font-forum text-secondary">{card.value}</p>
                                </div>
                                <p className="text-xs text-secondary font-medium">{card.change}</p>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Mock Chart Area */}
                        <div className="lg:col-span-2 bg-white p-8 border border-gray-100 rounded-sm space-y-8">
                            <div className="flex justify-between items-center">
                                <h3 className="text-2xl font-forum text-secondary">Legal Activity Trends</h3>
                                <select className="bg-[#FAF9F6] border-none text-xs font-bold uppercase tracking-widest text-gray-400 p-2">
                                    <option>Last 6 Months</option>
                                    <option>Last Year</option>
                                </select>
                            </div>
                            <div className="h-64 flex items-end justify-between gap-4">
                                {[40, 70, 45, 90, 65, 80].map((h, i) => (
                                    <div key={i} className="flex-1 bg-[#FAF9F6] relative group rounded-t-sm">
                                        <div
                                            style={{ height: `${h}%` }}
                                            className="absolute bottom-0 w-full bg-secondary group-hover:bg-primary transition-all duration-500"
                                        ></div>
                                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-secondary text-white text-[10px] px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                            {h}%
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-between text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                                <span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span><span>Jan</span>
                            </div>
                        </div>

                        {/* Recent Alerts */}
                        <div className="bg-white p-8 border border-gray-100 rounded-sm space-y-8">
                            <h3 className="text-2xl font-forum text-secondary">Quick Alerts</h3>
                            <div className="space-y-6">
                                {[
                                    { title: 'Document Signed', time: '2h ago', status: 'Completed', color: 'text-green-500' },
                                    { title: 'New Hearing Set', time: '5h ago', status: 'Action Required', color: 'text-orange-500' },
                                    { title: 'Payment Received', time: '1d ago', status: 'Invoice #241', color: 'text-blue-500' },
                                ].map((alert, i) => (
                                    <div key={i} className="flex gap-4 border-b border-gray-50 pb-4 last:border-0 last:pb-0">
                                        <div className="w-2 h-2 rounded-full bg-primary mt-1.5 ring-4 ring-primary/10"></div>
                                        <div>
                                            <p className="text-sm font-bold text-secondary uppercase tracking-widest">{alert.title}</p>
                                            <div className="flex gap-3 items-center mt-1">
                                                <span className="text-[10px] text-gray-400">{alert.time}</span>
                                                <span className={`text-[10px] font-bold ${alert.color}`}>{alert.status}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button className="w-full text-center text-xs font-bold uppercase tracking-widest text-primary border-t border-gray-50 pt-6">View All Activity</button>
                        </div>
                    </div>

                    {/* Cases Table */}
                    <div className="bg-white border border-gray-100 rounded-sm overflow-hidden">
                        <div className="p-8 border-b border-gray-50 flex justify-between items-center">
                            <h3 className="text-2xl font-forum text-secondary">My Recent Cases</h3>
                            <button className="text-xs font-bold uppercase tracking-widest text-primary border-b border-primary/20 hover:border-primary transition-all pb-1">View All Cases</button>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-[#FAF9F6]">
                                    <tr>
                                        <th className="px-8 py-4 text-[10px] uppercase tracking-widest font-bold text-gray-400">Case ID</th>
                                        <th className="px-8 py-4 text-[10px] uppercase tracking-widest font-bold text-gray-400">Case Name</th>
                                        <th className="px-8 py-4 text-[10px] uppercase tracking-widest font-bold text-gray-400">Legal Area</th>
                                        <th className="px-8 py-4 text-[10px] uppercase tracking-widest font-bold text-gray-400">Next Hearing</th>
                                        <th className="px-8 py-4 text-[10px] uppercase tracking-widest font-bold text-gray-400">Status</th>
                                        <th className="px-8 py-4 text-[10px] uppercase tracking-widest font-bold text-gray-400">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { id: '#LT-241', name: 'Estate Planning Review', area: 'Personal', date: 'Feb 12, 2026', status: 'Active' },
                                        { id: '#LT-198', name: 'Corporate Merger Adv.', area: 'Business', date: 'Mar 05, 2026', status: 'Pending' },
                                        { id: '#LT-105', name: 'Zion vs. City Council', area: 'Litigation', date: 'Feb 28, 2026', status: 'Active' },
                                    ].map((row, i) => (
                                        <tr key={i} className="border-t border-gray-50 hover:bg-[#FAF9F6] transition-colors">
                                            <td className="px-8 py-6 text-sm font-bold text-secondary">{row.id}</td>
                                            <td className="px-8 py-6 text-sm font-medium text-secondary">{row.name}</td>
                                            <td className="px-8 py-6 text-[10px] font-bold text-gray-400 uppercase tracking-widest"><span className="bg-gray-100 px-2 py-1 rounded-sm">{row.area}</span></td>
                                            <td className="px-8 py-6 text-sm text-gray-500">{row.date}</td>
                                            <td className="px-8 py-6">
                                                <span className={`text-[10px] font-bold uppercase px-3 py-1 rounded-sm ${row.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                                                    {row.status}
                                                </span>
                                            </td>
                                            <td className="px-8 py-6">
                                                <button className="text-secondary hover:text-primary transition-colors">
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14m-7-7v14" /></svg>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
