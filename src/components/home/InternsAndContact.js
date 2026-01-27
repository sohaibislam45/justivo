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
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-20">
                    {/* Interns Side */}
                    <div className="w-full lg:w-1/2 space-y-12">
                        <div className="space-y-4">
                            <span className="text-primary font-medium tracking-widest uppercase text-sm">Opportunities</span>
                            <h2 className="text-4xl md:text-5xl font-forum text-secondary">Become our intern</h2>
                            <p className="text-gray-500 max-w-md leading-relaxed">
                                Join our prestigious internship program and work alongside world-class legal experts to shape the future of justice.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-6">
                                <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
                                    <Image src="/images/intern-1.png" alt="Intern 1" fill className="object-cover hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="relative aspect-square rounded-sm overflow-hidden w-2/3 ml-auto">
                                    <Image src="/images/intern-3.png" alt="Intern 3" fill className="object-cover hover:scale-105 transition-transform duration-500" />
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="relative aspect-[4/5] w-full rounded-sm overflow-hidden">
                                    <Image src="/images/intern-2.png" alt="Intern 2" fill className="object-cover hover:scale-105 transition-transform duration-500" />
                                </div>
                            </div>
                        </div>

                        <button className="text-secondary border-b border-primary pb-1 font-medium hover:text-primary transition-colors">
                            Apply Now
                        </button>
                    </div>

                    {/* Contact Form Side */}
                    <div className="w-full lg:w-1/2 bg-[#FAF9F6] p-12 rounded-sm border border-gray-100">
                        <div className="space-y-4 mb-10">
                            <h3 className="text-3xl font-forum text-secondary text-center">Inquire now and get a consultation</h3>
                        </div>

                        {submitStatus === 'success' ? (
                            <div className="h-[400px] flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in duration-500">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                </div>
                                <h4 className="text-2xl font-forum text-secondary">Message Sent Successfully</h4>
                                <p className="text-gray-500">Thank you for contacting us. We will get back to you shortly.</p>
                                <button
                                    onClick={() => setSubmitStatus(null)}
                                    className="text-primary font-medium hover:text-secondary underline mt-4"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs uppercase tracking-widest text-gray-400 font-medium">Your Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            className={`w-full bg-transparent border-b ${errors.name ? 'border-red-400' : 'border-gray-200'} py-3 focus:outline-none focus:border-primary transition-colors text-secondary placeholder-gray-300`}
                                        />
                                        {errors.name && <p className="text-red-400 text-xs">{errors.name}</p>}
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs uppercase tracking-widest text-gray-400 font-medium">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="john@example.com"
                                            className={`w-full bg-transparent border-b ${errors.email ? 'border-red-400' : 'border-gray-200'} py-3 focus:outline-none focus:border-primary transition-colors text-secondary placeholder-gray-300`}
                                        />
                                        {errors.email && <p className="text-red-400 text-xs">{errors.email}</p>}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-gray-400 font-medium">Legal Area</label>
                                    <select
                                        name="area"
                                        value={formData.area}
                                        onChange={handleChange}
                                        className="w-full bg-transparent border-b border-gray-200 py-3 focus:outline-none focus:border-primary transition-colors text-secondary appearance-none cursor-pointer"
                                    >
                                        <option>Business Law</option>
                                        <option>Family Law</option>
                                        <option>Criminal Defense</option>
                                        <option>Real Estate Law</option>
                                        <option>Others</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-gray-400 font-medium">Message</label>
                                    <textarea
                                        rows="4"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="How can we help you?"
                                        className={`w-full bg-transparent border-b ${errors.message ? 'border-red-400' : 'border-gray-200'} py-3 focus:outline-none focus:border-primary transition-colors text-secondary resize-none placeholder-gray-300`}
                                    ></textarea>
                                    {errors.message && <p className="text-red-400 text-xs">{errors.message}</p>}
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-secondary hover:bg-primary text-white py-4 rounded-sm transition-all text-sm font-medium tracking-widest uppercase mt-4 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                                            Sending...
                                        </>
                                    ) : (
                                        'Send Message'
                                    )}
                                </button>
                                {submitStatus === 'error' && (
                                    <p className="text-red-500 text-sm text-center">Something went wrong. Please try again.</p>
                                )}
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InternsAndContact;
