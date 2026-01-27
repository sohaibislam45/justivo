import React from 'react';
import Image from 'next/image';

const InfoMarquee = () => {
    const items = [
        "Since 1987",
        "Thousands of cases won",
        "Nationwide legal support"
    ];

    const StarIcon = () => (
        <Image src="/images/star.png" alt="star" width={24} height={24} className="mx-8 md:mx-12" />
    );

    // Create a sequence of items
    const content = [...items, ...items];

    return (
        <section className="py-6 md:py-8 bg-[#FAF6F3] overflow-hidden my-20">
            <div className="flex whitespace-nowrap animate-marquee">
                {/* First Set */}
                <div className="flex items-center shrink-0">
                    {content.map((item, index) => (
                        <React.Fragment key={`original-${index}`}>
                            <span className="text-2xl md:text-4xl font-forum text-secondary">{item}</span>
                            <StarIcon />
                        </React.Fragment>
                    ))}
                </div>

                {/* Second Set (Duplicate for seamless loop) */}
                <div className="flex items-center shrink-0">
                    {content.map((item, index) => (
                        <React.Fragment key={`duplicate-${index}`}>
                            <span className="text-2xl md:text-4xl font-forum text-secondary">{item}</span>
                            <StarIcon />
                        </React.Fragment>
                    ))}
                </div>

                <div className="flex items-center shrink-0">
                    {content.map((item, index) => (
                        <React.Fragment key={`triplicate-${index}`}>
                            <span className="text-2xl md:text-4xl font-forum text-secondary">{item}</span>
                            <StarIcon />
                        </React.Fragment>
                    ))}
                </div>
                <div className="flex items-center shrink-0">
                    {content.map((item, index) => (
                        <React.Fragment key={`quad-${index}`}>
                            <span className="text-2xl md:text-4xl font-forum text-secondary">{item}</span>
                            <StarIcon />
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InfoMarquee;
