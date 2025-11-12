import { useState, useEffect } from "react";
import ShowCard from "../components/common/ShowCard";

export default function ShowPage() {
    const [shows, setShows] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("");
    const [dateFilter, setDateFilter] = useState("");
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const [isDateOpen, setIsDateOpen] = useState(false);

    // fetch data
    useEffect(() => {
        fetch("/data/event.json")
            .then((res) => res.json())
            .then(setShows)
            .catch((err) => console.error("Error fetching shows:", err));
    }, []);

    // filtering
    const filteredShows = shows.filter((show) => {
        const lower = searchTerm.toLowerCase();
        const matchSearch =
            show.title.toLowerCase().includes(lower) ||
            show.category.toLowerCase().includes(lower) ||
            show.tags.some((tag) => tag.toLowerCase().includes(lower));

        const matchCategory =
            !categoryFilter || show.category === categoryFilter;

        const matchDate =
            !dateFilter ||
            new Date(show.time.start).toISOString().split("T")[0] === dateFilter;

        return matchSearch && matchCategory && matchDate;
    });

    const categories = [...new Set(shows.map((s) => s.category))];

    return (
        <main className="bg-primary-black min-h-screen px-6 md:px-10 py-5 pb-20 text-primary-white">
            {/* Title */}
            <h1 className="text-h1 text-primary-yellow font-climate-crisis mb-8 ml-6">
                Shows
            </h1>

            {/* --- Filter section --- */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6 w-full md:w-5/6 mx-auto mb-10">
                {/* Search bar */}
                <div className="flex items-center gap-2 border-b border-primary-yellow pb-1 w-full md:w-1/3">
                    <img
                        src="/MagnifyingGlass.svg"
                        alt="search"
                        className="w-5 h-5 mt-1 object-contain"
                    />
                    <input
                        type="text"
                        placeholder="Search shows"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-primary-black text-primary-white focus:outline-none text-sm"
                    />
                </div>

                {/* Filter buttons */}
                <div className="flex gap-3 md:gap-4 justify-end w-full md:w-auto">
                    {/* Date */}
                    <div className="relative">
                        <button
                            onClick={() => {
                                setIsDateOpen(!isDateOpen);
                                setIsCategoryOpen(false);
                            }}
                            className="flex items-center justify-between border border-primary-yellow text-white rounded-md px-4 py-1.5 w-28 sm:w-32 text-sm font-dm-sans hover:bg-secondary-yellow hover:text-primary-black transition"
                        >
                            <span>{dateFilter ? dateFilter : "Date"}</span>
                            <img
                                src={isDateOpen ? "/ArrowUp.svg" : "/ArrowDown.svg"}
                                alt="arrow"
                                className="w-3 h-3 object-contain z-60"
                            />
                        </button>

                        {isDateOpen && (
                            <div className="absolute right-0 bg-primary-black border border-primary-yellow rounded-md p-3 z--50] w-28 sm:w-32 flex flex-col gap-2">
                                {/* calender */}
                                <input
                                    type="date"
                                    value={dateFilter}
                                    onChange={(e) => setDateFilter(e.target.value)}
                                    className="bg-primary-black text-primary-white border border-primary-yellow rounded-md px-2 py-1 text-sm focus:outline-none cursor-pointer w-full"
                                />

                                {/* Clear */}
                                <button
                                    onClick={() => {
                                        setDateFilter("");
                                        setIsDateOpen(false);
                                    }}
                                    className="text-xs text-primary-yellow underline hover:text-secondary-yellow transition text-center"
                                >
                                    Clear
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Category */}
                    <div className="relative">
                        <button
                            onClick={() => {
                                setIsCategoryOpen(!isCategoryOpen);
                                setIsDateOpen(false);
                            }}
                            className="flex items-center justify-between border border-primary-yellow text-primary-white rounded-md px-4 py-1.5 w-36 sm:w-40 text-sm font-dm-sans hover:bg-secondary-yellow hover:text-black transition"
                        >
                            <span>{categoryFilter || "Categories"}</span>
                            <img
                                src={isCategoryOpen ? "/ArrowUp.svg" : "/ArrowDown.svg"}
                                alt="arrow"
                                className="w-3 h-3 object-contain"
                            />
                        </button>

                        {isCategoryOpen && (
                            <div className="absolute right-0 top-0 bg-primary-black border border-primary-yellow rounded-md w-full z-50">
                                {/* Categories reset */}
                                <div
                                    onClick={() => {
                                        setCategoryFilter("");
                                        setIsCategoryOpen(false);
                                    }}
                                    className="px-4 py-2 hover:bg-secondary-yellow hover:text-primary-black cursor-pointer text-sm border-b border-primary-yellow"
                                >
                                    Categories
                                </div>

                                {/* other categories */}
                                {categories.map((cat) => (
                                    <div
                                        key={cat}
                                        onClick={() => {
                                            setCategoryFilter(cat);
                                            setIsCategoryOpen(false);
                                        }}
                                        className="px-4 py-2 hover:bg-secondary-yellow hover:text-primary-black cursor-pointer text-sm border-t border-primary-yellow"
                                    >
                                        {cat}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* --- Cards --- */}
            <section className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:w-5/6 mx-auto">
                {filteredShows.length > 0 ? (
                    filteredShows.map((show) => (
                        <ShowCard key={show.id} show={show} />
                    ))
                ) : (
                    <p className="col-span-full text-center text-primary-yellow text-detail">
                        No shows found.
                    </p>
                )}
            </section>

            {/* View More */}
            <div className="text-center mt-10">
                <button className="border border-[#E8E357] text-body text-primary-yellow font-dm-sans px-6 py-2 rounded-md hover:bg-secondary-yellow hover:text-black transition">
                    View More
                </button>
            </div>
        </main>
    );
}
