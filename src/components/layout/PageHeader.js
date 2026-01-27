const PageHeader = ({ title, subtitle }) => {
    return (
        <section className="bg-secondary pt-40 pb-24 text-white">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl space-y-4">
                    <span className="text-primary font-medium tracking-widest uppercase text-sm">Justivo Law Firm</span>
                    <h1 className="text-5xl md:text-7xl font-forum leading-tight">{title}</h1>
                    {subtitle && <p className="text-white/60 text-lg max-w-xl">{subtitle}</p>}
                </div>
            </div>
        </section>
    );
};

export default PageHeader;
