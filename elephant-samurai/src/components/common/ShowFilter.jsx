export default function ShowFilter({
    searchTerm,
    setSearchTerm,
    categoryFilter,
    setCategoryFilter,
    dateFilter,
    setDateFilter,
    isCategoryOpen,
    setIsCategoryOpen,
    categories,
}) {
    const handleDateChange = (e) => {
        setDateFilter(e.target.value);
    };

    return (
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
                    className="w-full bg-primary-black text-primary-white focus:outline-none focus:placeholder-primary-white text-sm font-dm-sans"
                />
            </div>

            {/* Filter buttons */}
            <div className="flex gap-2 justify-end w-full lg:w-auto relative">
                {/* Date button using label */}
                <div className="relative">
                    <label
                        htmlFor="date-input"
                        className="flex items-center justify-between border border-primary-yellow text-white rounded-[5%] px-4 py-2 text-sm font-dm-sans hover:bg-secondary-yellow hover:text-primary-black transition cursor-pointer"
                    >
                        <span>{dateFilter ? dateFilter : "Date"}</span>
                        <img
                            src="/Vector.png"
                            alt="arrow"
                            className="w-3 h-3 object-contain ml-2"
                        />
                    </label>

                    <input
                        id="date-input"
                        type="date"
                        value={dateFilter}
                        onChange={handleDateChange}
                        className="absolute top-0 left-0 opacity-0 w-full h-full cursor-pointer"
                    />
                </div>

                {dateFilter && (
                    <button
                        onClick={() => setDateFilter("")}
                        className="text-xs text-primary-yellow underline hover:text-secondary-yellow transition"
                    >
                        Clear
                    </button>
                )}

                {/* Category */}
                <div className="relative">
                    <button
                        onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                        className="flex items-center justify-between border border-primary-yellow text-primary-white rounded-[5%] px-4 py-2 text-sm font-dm-sans hover:bg-[#E8E357] hover:text-black transition whitespace-nowrap"
                    >
                        <span className="truncate max-w-[8rem]">{categoryFilter || "Categories"}</span>
                        <img src="/Vector.png" alt="arrow" className="w-3 h-3 object-contain ml-2" />
                    </button>


                    {isCategoryOpen && (
                        <div className="absolute right-0 bg-primary-black border border-primary-yellow w-full z-50">
                            {categories.map((cat) => (
                                <div
                                    key={cat}
                                    onClick={() => {
                                        setCategoryFilter(categoryFilter === cat ? "" : cat);
                                        setIsCategoryOpen(false);
                                    }}
                                    className={`px-4 py-2 cursor-pointer text-sm border-b border-primary-yellow hover:bg-secondary-yellow hover:text-primary-black ${categoryFilter === cat
                                            ? "bg-secondary-yellow text-black font-medium"
                                            : ""
                                        }`}
                                >
                                    {cat}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
