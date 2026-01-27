import Image from 'next/image';

const Team = () => {
    const members = [
        { name: 'James Whitmore', role: 'Senior Partner', img: '/images/James-whitmore.png' },
        { name: 'Alexander Reed', role: 'Legal Consultant', img: '/images/Alexander-reed.png' },
        { name: 'Clara Thompson', role: 'Trial Lawyer', img: '/images/Clara-thompson.png' },
        { name: 'Sophia Malik', role: 'Business Analyst', img: '/images/Sophia-malik.png' }
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
                                <h3 className="text-xl font-forum transition-colors group-hover:text-primary">{member.name}</h3>
                                <p className="text-gray-400 text-sm uppercase tracking-widest mt-1">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
