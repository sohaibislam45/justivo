"use client";
import { useState } from 'react';
import Image from 'next/image';

const InternsAndContact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        area: 'Business Law',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.message.trim()) newErrors.message = 'Message is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitStatus(null);

        if (!validateForm()) return;

        setIsSubmitting(true);

        // Simulate API call
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            setSubmitStatus('success');
            setFormData({ name: '', email: '', area: 'Business Law', message: '' });
            setErrors({});
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    return (
        <section className="bg-white">
            {/* Interns Section */}
            <div className="relative py-32 lg:py-48 overflow-hidden">
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="max-w-2xl mx-auto space-y-8">
                        <h2 className="text-5xl md:text-7xl font-forum text-secondary">become our intern</h2>
                        <p className="text-black max-w-xl mx-auto">
                            Become our intern and gain hands-on experience working on impactful global legal and advocacy projects. This is your chance to learn, grow, and contribute to meaningful initiatives that drive real change
                        </p>
                        <div className="pt-8">
                            <button className="bg-primary hover:bg-[#A86D52] text-white px-10 py-4 rounded-sm transition-all duration-300 flex items-center gap-3 mx-auto uppercase tracking-widest text-sm font-medium">
                                Free Consultation
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Scattered Images */}
                <div className="hidden lg:block absolute inset-0 pointer-events-none">
                    {/* Top Right - Man walking */}
                    <div className="absolute top-10 right-10 mr-30 xl:right-32 w-[244px] h-[194px] aspect-[3/4] rounded-sm overflow-hidden shadow-sm">
                        <Image src="/images/intern-1.png" alt="Intern 1" fill className="object-cover" />
                    </div>

                    {/* Bottom Left - Woman at desk */}
                    <div className="absolute bottom-10 left-10 ml-15 xl:left-32 w-72 aspect-[4/3] rounded-sm overflow-hidden shadow-sm">
                        <Image src="/images/intern-2.png" alt="Intern 2" fill className="object-cover" />
                    </div>

                    {/* Bottom Right - Man with briefcase */}
                    <div className="absolute bottom-0 right-10 mb-20 xl:right-40 w-[240px] h-[215px] aspect-[3/5] rounded-sm overflow-hidden shadow-sm translate-y-1/4">
                        <Image src="/images/intern-3.png" alt="Intern 3" fill className="object-cover" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InternsAndContact;
