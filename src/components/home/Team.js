import Image from 'next/image';

const Team = () => {
    const members = [
        { name: 'James Whitmore', role: 'Senior Partner', address: 'New York', position: 'Head of Corporate Law', img: '/images/James-whitmore.png' },
        { name: 'Alexander Reed', role: 'Legal Consultant', address: 'Chicago', position: 'Lead Business Consultant', img: '/images/Alexander-reed.png' },
        { name: 'Clara Thompson', role: 'Trial Lawyer', address: 'Los Angeles', position: 'Criminal Defense Attorney', img: '/images/Clara-thompson.png' },
        { name: 'Sophia Malik', role: 'Business Analyst', address: 'Houston', position: 'Child Custody Specialist', img: '/images/Sophia-malik.png' }
    ];

    return (
        <section className="py-24 bg-secondary text-white">
            <div className="container mx-auto px-6">
                <div className="text-center space-y-4 mb-20">
                    <span className="text-primary font-medium tracking-widest uppercase text-sm">Our Experts</span>
                    <h2 className="text-4xl md:text-5xl font-forum">Meet Our Professional Team</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {members.map((member, idx) => (
                        <div key={idx} className="group cursor-pointer">
                            <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-white/5 mb-6">
                                <Image
                                    src={member.img}
                                    alt={member.name}
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                            <div className="text-center">
                                <h3 className="text-xl font-forum transition-colors hover:text-primary">{member.name}</h3>
                                <div className="flex justify-center flex-wrap gap-2 mt-6">
                                    <div className="px-2 py-1 border border-white/10 transition-colors hover:border-primary/30">
                                        <p className="text-sm font-forum transition-colors hover:text-primary">{member.address}</p>
                                    </div>
                                    <div className="px-2 py-1 border border-white/10 transition-colors hover:border-primary/30">
                                        <p className="text-sm font-forum transition-colors hover:text-primary">{member.role}</p>
                                    </div>
                                    <div className="px-2 py-1 border border-white/10 transition-colors hover:border-primary/30">
                                        <p className="text-sm font-forum transition-colors hover:text-primary">{member.position}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
