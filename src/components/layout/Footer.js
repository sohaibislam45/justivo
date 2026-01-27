import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="relative bg-secondary text-white pt-24 pb-12 overflow-hidden">
            {/* Background Vector Image */}
            <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-10 pointer-events-none">
                <Image 
                    src="/images/footer-vector.png" 
                    alt="Footer Background" 
                    fill 
                    className="object-contain object-right-bottom" 
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    {/* Brand Section */}
                    <div className="space-y-8">
                        <Image src="/images/logo.png" alt="Justivo Logo white" width={140} height={40} className="brightness-0 invert" />
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Dedicated to providing world-class legal solutions with integrity, excellence, and a commitment to justice for over two decades.
                        </p>
                        <div className="flex items-center gap-4">
                            {['fb', 'tw', 'ln', 'ig'].map((social) => (
                                <Link key={social} href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300">
                                    <span className="text-[10px] uppercase font-bold">{social}</span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-8">
                        <h4 className="text-lg font-forum">Quick Links</h4>
                        <ul className="space-y-4">
                            {['About Us', 'Practices', 'Case Studies', 'Legal News', 'Contact'].map((link) => (
                                <li key={link}>
                                    <Link href="#" className="text-gray-400 hover:text-primary transition-colors text-sm font-medium">
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Practices */}
                    <div className="space-y-8">
                        <h4 className="text-lg font-forum">Practice Areas</h4>
                        <ul className="space-y-4">
                            {['Business Law', 'Criminal Defense', 'Family Law', 'Real Estate', 'Dispute Resolution'].map((practice) => (
                                <li key={practice}>
                                    <Link href="#" className="text-gray-400 hover:text-primary transition-colors text-sm font-medium">
                                        {practice}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <h4 className="text-lg font-forum">Office Info</h4>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="text-primary mt-1">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C4.7 0 2 2.7 2 6c0 4.4 6 10 6 10s6-5.6 6-10c0-3.3-2.7-6-6-6zm0 8.5c-1.4 0-2.5-1.1-2.5-2.5S6.6 3.5 8 3.5 10.5 4.6 10.5 6 9.4 8.5 8 8.5z"/></svg>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    123 Legal Avenue, <br />
                                    Justice Towers, NY 10001
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <div className="text-primary mt-1">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M14.5 11c-.7 0-1.4-.1-2-.3-.2-.1-.4 0-.6.1l-1.4 1.4c-1.8-1-3.2-2.4-4.2-4.2l1.4-1.4c.2-.2.2-.4.1-.6-.2-.6-.3-1.3-.3-2C7.5 3.2 6.8 2.5 6 2.5H1.5C.7 2.5 0 3.2 0 4c0 6.6 5.4 12 12 12 .8 0 1.5-.7 1.5-1.5V12.5c0-.8-.7-1.5-1.5-1.5z"/></svg>
                                </div>
                                <p className="text-gray-400 text-sm">
                                    +1 (555) 123-4567
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-500 text-xs">
                        © 2026 Justivo. All Rights Reserved.
                    </p>
                    <div className="flex gap-8">
                        <Link href="#" className="text-gray-500 hover:text-white text-xs transition-colors">Privacy Policy</Link>
                        <Link href="#" className="text-gray-500 hover:text-white text-xs transition-colors">Terms of Service</Link>
                        <Link href="#" className="text-gray-500 hover:text-white text-xs transition-colors">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
