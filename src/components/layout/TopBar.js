import Link from 'next/link';

const TopBar = () => {
    return (
        <div className="bg-white border-b border-[#be7d601a] py-3 hidden lg:block">
            <div className="container mx-auto px-6 flex justify-between items-center">
                <div className="flex items-center gap-8 text-[16px] font-medium">
                    <Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link>
                    <Link href="/personnel" className="hover:text-primary transition-colors">Personnel</Link>
                    <Link href="/expertise" className="hover:text-primary transition-colors">Our Expertise</Link>
                </div>
                
                <div className="flex items-center gap-10 text-[16px] font-medium">
                    <a href="mailto:consultancy@email.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                        <span className="text-primary">✉</span> consultancy@email.com
                    </a>
                    <div className="flex items-center gap-2">
                        <span className="text-primary font-normal">🕒</span> Mon - Sat : 8:00 - 16:00
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
