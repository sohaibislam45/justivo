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
                    <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
                    <Link href="/team" className="hover:text-primary transition-colors">Team</Link>
                    <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
                    <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
                </div>

                <Link 
                    href="/quote" 
                    className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-sm transition-all text-sm font-medium tracking-wide uppercase"
                >
                    Get a Quote
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
