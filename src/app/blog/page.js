import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import Image from 'next/image';
import Link from 'next/link';

const posts = [
    { id: 1, title: 'Navigating New International Trade Regulations', date: 'Jan 15, 2026', img: '/images/news-1.png', category: 'International' },
    { id: 2, title: 'The Future of AI in Legal Research & Ethics', date: 'Jan 10, 2026', img: '/images/news-2.png', category: 'Tech' },
    { id: 3, title: 'Protecting Intellectual Property in the Digital Age', date: 'Jan 05, 2026', img: '/images/news-3.png', category: 'IP Law' },
    { id: 4, title: 'Environmental Law: Key Updates for 2026', date: 'Dec 28, 2025', img: '/images/timeline-1.png', category: 'Civil' },
    { id: 5, title: 'Building a Strong Corporate Defense Strategy', date: 'Dec 20, 2025', img: '/images/timeline-2.png', category: 'Business' },
    { id: 6, title: 'Understanding Family Mediation Processes', date: 'Dec 15, 2025', img: '/images/case-study-2.png', category: 'Family' },
];

export default function Blog() {
    return (
        <div className="min-h-screen bg-white selection:bg-primary/30 selection:text-secondary">
            <Navbar />
            <main>
                <PageHeader 
                    title="Legal News & Insights" 
                    subtitle="Expert analysis and updates on the latest legal trends and global developments."
                />

                <section className="py-24">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                            {posts.map((post) => (
                                <div key={post.id} className="group cursor-pointer">
                                    <div className="relative aspect-[16/10] overflow-hidden rounded-sm mb-6 grayscale group-hover:grayscale-0 transition-all duration-700">
                                        <Image src={post.img} alt={post.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-white/90 backdrop-blur-sm text-secondary text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-sm">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <p className="text-xs text-primary font-medium uppercase tracking-widest">{post.date}</p>
                                        <h3 className="text-2xl font-forum text-secondary group-hover:text-primary transition-colors leading-tight">
                                            {post.title}
                                        </h3>
                                        <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation...
                                        </p>
                                        <Link href={`/blog/${post.id}`} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-secondary hover:text-primary transition-colors pt-4">
                                            Read Article
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Newsletter Card */}
                        <div className="mt-24 bg-secondary p-12 lg:p-20 text-center space-y-8 rounded-sm overflow-hidden relative">
                            <div className="relative z-10 space-y-4">
                                <span className="text-primary font-medium tracking-widest uppercase text-sm">Stay Updated</span>
                                <h3 className="text-4xl md:text-5xl font-forum text-white">Subscribe to our Legal Journal</h3>
                                <p className="text-white/60 max-w-xl mx-auto">Get monthly insights, case studies, and legal updates delivered right to your inbox.</p>
                                <form className="max-w-md mx-auto flex flex-col md:flex-row gap-4 pt-6">
                                    <input type="email" placeholder="Email Address" className="flex-1 bg-white/5 border border-white/10 px-6 py-4 rounded-sm text-white focus:outline-none focus:border-primary transition-colors" />
                                    <button className="bg-primary hover:bg-white hover:text-secondary text-white px-8 py-4 rounded-sm transition-all text-sm font-bold uppercase tracking-widest">
                                        Subscribe
                                    </button>
                                </form>
                            </div>
                            <div className="absolute right-0 bottom-0 w-1/3 h-full opacity-5 pointer-events-none">
                                <Image src="/images/footer-vector.png" alt="Decoration" fill className="object-contain object-right-bottom" />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
