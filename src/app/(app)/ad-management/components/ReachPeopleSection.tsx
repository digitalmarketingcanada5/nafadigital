const ReachPeopleSection = () => (
    <section className="py-20 bg-white">
        <div className="container px-6 md:px-12 mx-auto max-w-7xl">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                    Reach the right people with search ads
                </h2>
                <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-light">
                    Boost your visibility and generate leads from potential customers in your area.
                </p>
            </div>
        </div>
        <div className="container px-6 md:px-12 mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="group relative rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-[#0075E3]/20 flex flex-col gap-6 items-center">
                    <h3 className="text-xl md:text-2xl text-gray-900 font-bold text-center">
                        Reach people searching for your business
                    </h3>
                    <div className="flex flex-col gap-4 w-full">
                        <img src="https://cdn.searchkings.ca/img/ads-management/search-1-8bfa1cc5b3.svg" alt="Search Bars" className="rounded-full shadow-lg transform group-hover:scale-105 transition-transform duration-300" />
                        <img src="https://cdn.searchkings.ca/img/ads-management/search-2-e23420b4f4.svg" alt="Search Bars" className="rounded-full shadow-lg transform group-hover:scale-105 transition-transform duration-300" />
                        <img src="https://cdn.searchkings.ca/img/ads-management/search-3-e3b089e69a.svg" alt="Search Bars" className="rounded-full shadow-lg transform group-hover:scale-105 transition-transform duration-300" />
                    </div>
                </div>
                <div className="group relative rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-[#0075E3]/20 flex flex-col gap-6 items-center">
                    <h3 className="text-xl md:text-2xl text-gray-900 font-bold text-center">
                        Achieve your performance goals
                    </h3>
                    <div className="relative w-full">
                        <img src="https://cdn.searchkings.ca/img/ads-management/graph-1-789ed76194.svg" alt="performance graph" className="rounded-3xl shadow-xl w-full" />
                        <img src="https://cdn.searchkings.ca/img/ads-management/graph-2-e5b43c8365.svg" alt="performance result" className="rounded-2xl shadow-xl absolute -bottom-10 right-0 transform group-hover:scale-110 transition-transform duration-300" />
                    </div>
                </div>
                <div className="group relative rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-[#0075E3]/20 flex flex-col gap-6 items-center md:col-span-2 lg:col-span-1">
                    <h3 className="text-xl md:text-2xl text-gray-900 font-bold text-center">
                        Highlight your products and services
                    </h3>
                    <div className="flex flex-col gap-4 w-full">
                        <img src="https://cdn.searchkings.ca/img/ads-management/results-1-f683275b4a.svg" alt="Google search bar" className="rounded-3xl shadow-lg transform group-hover:scale-105 transition-transform duration-300" />
                        <img src="https://cdn.searchkings.ca/img/ads-management/results-2-1fa12a6f4b.svg" alt="Google search result" className="rounded-xl shadow-lg transform group-hover:scale-105 transition-transform duration-300" />
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default ReachPeopleSection;
