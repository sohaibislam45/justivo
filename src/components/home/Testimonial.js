import Image from 'next/image';

const Testimonial = () => {
    return (
        <section className="py-24 bg-[#041c2c] overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="max-w-5xl mx-auto text-center space-y-10">
                    <div className="flex justify-center items-center h-[35px]">
                        <Image src="/images/5-star.png" alt="5-stars" width={140} height={28} className="object-contain" />
                    </div>
                    <h2 className="text-2xl md:text-2xl font-light font-forum text-white mt-10">
                        Joining this organization has been a truly transformative experience. As an intern, I was welcomed into a supportive environment where my ideas were valued and my contributions made a real impact. I had the opportunity to work on meaningful global legal initiatives that not only enhanced my skills but also broadened my perspective on justice and advocacy. The mentorship I received was exceptional, guiding me to grow both professionally and personally. Every project challenged me to think critically and creatively, while also reinforcing the importance of collaboration.
                    </h2>

                    <div className="flex flex-col md:flex-row items-center md:justify-center gap-4">
                        <div className="relative w-16 h-16 rounded-full overflow-hidden grayscale">
                            <Image src="/images/james-walker.png" alt="James Walker" fill className="object-cover" />
                        </div>
                        <div>
                            <h4 className="text-xl font-forum text-white text-left">James Walker</h4>
                            <p className="text-sm text-white uppercase tracking-widest font-medium text-left">From USA</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center h-[35px] gap-4 font-extralight">
                        <span className="text-white text-sm uppercase tracking-widest font-medium">Mostahid Patwary</span>
                        <span className="text-white text-sm uppercase tracking-widest font-medium">Grace Morgan</span>
                        <span className="text-white text-sm uppercase tracking-widest font-medium">Benjamin Scott</span>
                        <span className="text-white text-sm uppercase tracking-widest font-medium">James Walker</span>
                        <span className="text-white text-sm uppercase tracking-widest font-medium">Emma Wallace</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
