"use client";
import React, { useState } from 'react';
import Sidebar from "@/components/dashboard/Sidebar";
import DashboardNavbar from "@/components/dashboard/DashboardNavbar";

export default function Cases() {
    const [cases, setCases] = useState([
        { id: '#LT-241', name: 'Estate Planning Review', area: 'Personal', date: 'Feb 12, 2026', status: 'Active' },
        { id: '#LT-198', name: 'Corporate Merger Adv.', area: 'Business', date: 'Mar 05, 2026', status: 'Pending' },
        { id: '#LT-105', name: 'Zion vs. City Council', area: 'Litigation', date: 'Feb 28, 2026', status: 'Active' },
    ]);

    const deleteCase = (id) => {
        if (confirm('Are you sure you want to remove this case from your view?')) {
            setCases(cases.filter(c => c.id !== id));
        }
    };

    return (
        <div className="flex min-h-screen bg-[#FAF9F6]">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <DashboardNavbar />
                
                <main className="p-8 space-y-8">
                    <div className="flex justify-between items-center">
                        <div className="space-y-2">
                            <h1 className="text-4xl font-forum text-secondary">My Cases</h1>
                            <p className="text-gray-400 text-sm">Manage and track your ongoing legal matters.</p>
                        </div>
                        <button className="bg-primary text-white px-8 py-3 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-secondary transition-all">
                            New Inquiry
                        </button>
                    </div>

                    <div className="bg-white border border-gray-100 rounded-sm overflow-hidden shadow-sm">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-secondary text-white">
                                    <tr>
                                        <th className="px-8 py-5 text-[10px] uppercase tracking-widest font-bold">Case ID</th>
                                        <th className="px-8 py-5 text-[10px] uppercase tracking-widest font-bold">Case Name</th>
                                        <th className="px-8 py-5 text-[10px] uppercase tracking-widest font-bold">Legal Area</th>
                                        <th className="px-8 py-5 text-[10px] uppercase tracking-widest font-bold">Next Hearing</th>
                                        <th className="px-8 py-5 text-[10px] uppercase tracking-widest font-bold">Status</th>
                                        <th className="px-8 py-5 text-[10px] uppercase tracking-widest font-bold text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cases.map((row) => (
                                        <tr key={row.id} className="border-t border-gray-50 hover:bg-[#FAF9F6] transition-colors">
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
                                                <div className="flex justify-center gap-4">
                                                    <button className="text-gray-400 hover:text-primary transition-colors">
                                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                                                    </button>
                                                    <button onClick={() => deleteCase(row.id)} className="text-gray-400 hover:text-red-500 transition-colors">
                                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            {cases.length === 0 && (
                                <div className="py-20 text-center space-y-4">
                                    <h4 className="text-2xl font-forum text-secondary">No cases found</h4>
                                    <p className="text-gray-500">You haven't initiated any inquiries yet.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
