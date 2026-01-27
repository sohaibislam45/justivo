'use client';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

const testimonials = [
    {
        name: "Mostahid Patwary",
        location: "From Bangladesh",
        quote: "Joining this organization has been a truly transformative experience. As an intern, I was welcomed into a supportive environment where my ideas were valued and my contributions made a real impact. I had the opportunity to work on meaningful global legal initiatives that not only enhanced my skills but also broadened my perspective on justice and advocacy.",
        image: "/images/Alexander-reed.png"
    },
    {
        name: "Grace Morgan",
        location: "From UK",
        quote: "The mentorship I received was exceptional, guiding me to grow both professionally and personally. Every project challenged me to think critically and creatively, while also reinforcing the importance of collaboration. I feel much more confident in my abilities and ready to take on new challenges in the legal field.",
        image: "/images/Clara-thompson.png"
    },
    {
        name: "Benjamin Scott",
        location: "From Canada",
        quote: "Working here has given me a deep understanding of international law and human rights. The team is dedicated and passionate, and the atmosphere is incredibly inspiring. I am grateful for the chance to contribute to such important work and to learn from some of the best in the field.",
        image: "/images/James-whitmore.png"
    },
    {
        name: "James Walker",
        location: "From USA",
        quote: "Every project challenged me to think critically and creatively, while also reinforcing the importance of collaboration. The global reach of this organization is impressive, and being part of it has been a highlight of my career. I've gained invaluable experience that will stay with me forever.",
        image: "/images/james-walker.png"
    },
    {
        name: "Emma Wallace",
        location: "From Australia",
        quote: "I had the opportunity to work on meaningful global legal initiatives that not only enhanced my skills but also broadened my perspective on justice and advocacy. The support from the senior staff was incredible, and I felt like a valued member of the team from day one.",
        image: "/images/Sophia-malik.png"
    }
];

const Testimonial = () => {
    const [activeIndex, setActiveIndex] = useState(3);

    const activeTestimonial = testimonials[activeIndex];

    return (
        <section className="py-24 bg-[#041c2c] overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="max-w-5xl mx-auto text-center space-y-10">
                    <div className="flex justify-center items-center h-[35px]">
                        <Image src="/images/5-star.png" alt="5-stars" width={140} height={28} className="object-contain" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-light font-forum text-white mt-10 min-h-[160px] flex items-center justify-center">
                        "{activeTestimonial.quote}"
                    </h2>

                    <div className="flex flex-col md:flex-row items-center md:justify-center gap-4">
                        <div className="relative w-16 h-16 rounded-full overflow-hidden grayscale">
                            <Image src={activeTestimonial.image} alt={activeTestimonial.name} fill className="object-cover" />
                        </div>
                        <div>
                            <h4 className="text-xl font-forum text-white text-left">{activeTestimonial.name}</h4>
                            <p className="text-sm text-white uppercase tracking-widest font-medium text-left">{activeTestimonial.location}</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center items-center gap-6 mt-12">
                        {testimonials.map((testimonial, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`text-sm uppercase tracking-widest font-medium transition-all duration-300 relative py-2 ${activeIndex === index
                                    ? "text-white opacity-100 scale-105"
                                    : "text-white/40 hover:text-white/70"
                                    }`}
                            >
                                {testimonial.name}
                                {activeIndex === index && (
                                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white transition-all duration-300"></span>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center items-center mt-12">
                    <Link href="/contact" className="text-white font-medium py-2 underline flex items-center gap-2 group decoration-white/30 hover:decoration-white transition-all">
                        Check out our google review
                        <Image
                            src="/images/arrow-left.png"
                            alt="arrow"
                            width={16}
                            height={16}
                            className="-rotate-90 ml-2 group-hover:opacity-100 transition-opacity"
                        />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
