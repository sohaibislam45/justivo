
import Image from 'next/image';

const CompanyHistory = () => {
    const timelineItems = [
        {
            year: '1971',
            title: 'Founded in London',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.'
        },
        {
            year: '1986',
            title: 'Firm Expansion',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.'
        },
        {
            year: '1991',
            title: 'Landmark Case Victory',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.'
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    {/* Left Column - Images */}
                    <div className="space-y-8 flex flex-col justify-center">
                        {/* Top Image - Scales */}
                        <div className="relative h-[400px] w-full bg-gray-100 rounded-sm overflow-hidden group">
                            <Image
                                src="/images/timeline-1.png"
                                alt="Scales of Justice"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        {/* Bottom Image - Lawyer */}
                        <div className="relative h-[500px] w-full bg-gray-100 rounded-sm overflow-hidden group">
                            <Image
                                src="/images/timeline-2.png"
                                alt="Lawyer walking outside court"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </div>

                    {/* Right Column - Content */}
                    <div className="flex flex-col justify-center lg:pl-10">
                        {/* Section Heading */}
                        <div className="mb-20">
                            <h2 className="text-4xl lg:text-5xl font-forum leading-tight text-secondary max-w-lg">
                                Serving clients in every area of law since 1971 with experience and dedication.
                            </h2>
                        </div>

                        {/* Timeline Wrapper */}
                        <div className="relative">
                            {/* Optional Right Arrows - purely decorative based on screenshot */}
                            <div className="absolute -right-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-8 text-gray-300">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="rotate-0"><path d="M12 19V5M5 12l7-7 7 7" /></svg>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="rotate-0"><path d="M12 5v14M5 12l7 7 7-7" /></svg>
                            </div>

                            {/* Timeline Items */}
                            <div className="space-y-16">
                                {timelineItems.map((item, index) => (
                                    <div key={index} className="group">
                                        <div className="space-y-4">

                                            {/* Year */}
                                            <div className="inline-block relative">
                                                <span className="text-6xl font-forum text-secondary">{item.year}</span>
                                            </div>

                                            {/* Title with Line */}
                                            <div className="flex items-center gap-4">
                                                <h3 className="text-2xl font-forum text-secondary">{item.title}</h3>
                                                <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
                                            </div>

                                            {/* Description */}
                                            <p className="text-gray-500 leading-relaxed max-w-md">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompanyHistory;
