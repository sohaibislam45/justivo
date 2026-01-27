import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Image src="/images/logo.png" alt="Justivo Logo" width={120} height={40} className="object-contain" />
                </div>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-secondary">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <Link href="/about" className="hover:text-primary transition-colors">About</Link>
                    
                    {/* Services Dropdown */}
                    <div className="relative group">
                        <button className="flex items-center gap-1 hover:text-primary transition-colors">
                            Services
                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                        <div className="absolute top-full left-0 mt-4 w-56 bg-white shadow-xl border border-gray-100 py-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 rounded-sm">
                            <Link href="/services/business" className="block px-6 py-2 hover:bg-[#FAF9F6] hover:text-primary transition-colors">Business Law</Link>
                            <Link href="/services/criminal" className="block px-6 py-2 hover:bg-[#FAF9F6] hover:text-primary transition-colors">Criminal Defense</Link>
                            <Link href="/services/family" className="block px-6 py-2 hover:bg-[#FAF9F6] hover:text-primary transition-colors">Family Law</Link>
                            <Link href="/services/real-estate" className="block px-6 py-2 hover:bg-[#FAF9F6] hover:text-primary transition-colors">Real Estate Law</Link>
                        </div>
                    </div>

                    <Link href="/team" className="hover:text-primary transition-colors">Team</Link>
                    <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
                    <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
                    <Link href="/login" className="hover:text-primary transition-colors font-bold border-l border-gray-100 pl-8">Login</Link>
                </div>

                <Link 
                    href="/dashboard" 
                    className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-sm transition-all text-sm font-medium tracking-wide uppercase"
                >
                    Dashboard
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
