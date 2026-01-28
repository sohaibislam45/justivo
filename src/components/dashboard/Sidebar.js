"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Sidebar = () => {
    const pathname = usePathname();

    const menuItems = [
        { name: 'Overview', path: '/dashboard', icon: '📊' },
        { name: 'My Cases', path: '/dashboard/cases', icon: '💼' },
        { name: 'Profile Settings', path: '/dashboard/profile', icon: '👤' },
    ];

    return (
        <aside className="w-64 bg-secondary h-screen sticky top-0 flex flex-col pt-8 pb-12 overflow-y-auto">
            <div className="px-8 mb-12">
                <Link href="/">
                    <Image src="/images/logo.png" alt="Justivo Logo" width={120} height={40} className="brightness-0 invert" />
                </Link>
            </div>

            <nav className="flex-1 px-4 space-y-2">
                {menuItems.map((item) => (
                    <Link 
                        key={item.path} 
                        href={item.path}
                        className={`flex items-center gap-4 px-4 py-3 rounded-sm transition-all text-sm font-medium ${pathname === item.path ? 'bg-primary text-white' : 'text-white/60 hover:text-white hover:bg-white/5'}`}
                    >
                        <span>{item.icon}</span>
                        {item.name}
                    </Link>
                ))}
            </nav>

        </aside>
    );
};

export default Sidebar;
