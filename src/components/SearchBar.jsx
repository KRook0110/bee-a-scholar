import React from "react";

const SearchBar = ({ filter, setFilter, searchQuery, setSearchQuery }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 w-full px-[5%] raleway">
      <div
        className="flex py-2 px-2 w-full md:w-7/12 text-xs sm:text-base gap-2"
        style={{ backgroundColor: "#D9D9D9", borderRadius: "35px" }}
      >
        <button
          onClick={() => setFilter("all")}
          className={`font-semibold py-2 px-2 rounded-full w-full ${
            filter === "all" ? "bg-[#1C429A] text-white" : "bg-none"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter("academic")}
          className={`font-semibold py-2 px-2 rounded-full w-full relative ${
            filter === "academic" ? "bg-[#1C429A] text-white" : "bg-none"
          }`}
        >
          <img className={`absolute w-20 bottom-10 left-[40%] ${
            filter === "academic" ? "" : "opacity-50"
          } transition-all ease-in-out`} src="logos/academic_scholarship.png" alt="" />
          Academic
        </button>
        <button
          onClick={() => setFilter("nonAcademic")}
          className={`font-semibold py-2 px-2 rounded-full w-full relative ${
            filter === "nonAcademic" ? "bg-[#1C429A] text-white" : "bg-none"
          }`}
        >
          <img className={`absolute w-20 bottom-10 left-[40%] ${
            filter === "nonAcademic" ? "" : "opacity-50"
          } transition-all ease-in-out`} src="logos/non_academic_scholarship.png" alt="" />
          Non-Academic
        </button>
        <button
          onClick={() => setFilter("research")}
          className={`font-semibold flex items-center justify-center py-2 px-2 rounded-full w-full relative ${
            filter === "research" ? "bg-[#1C429A] text-white" : "bg-none"
          }`}
        >
          <img className={`absolute w-20 bottom-10 left-[40%] ${
            filter === "research" ? "" : "opacity-50"
          } transition-all ease-in-out`} src="logos/research_scholarship.png" alt="" />
          Research
        </button>
        <button
          onClick={() => setFilter("career")}
          className={`font-semibold flex items-center justify-center py-2 px-2 rounded-full w-full relative ${
            filter === "career" ? "bg-[#1C429A] text-white" : "bg-none"
          }`}
        >
          <img className={`absolute w-20 bottom-10 left-[40%] ${
            filter === "career" ? "" : "opacity-50"
          } transition-all ease-in-out`} src="logos/career_scholarship.png" alt="" />
          Career
        </button>
      </div>

      <div className="flex w-full md:w-5/12 gap-3">
        <div className="flex items-center justify-between border-[3px] rounded-full bg-white w-3/4">
          <input
            type="text"
            placeholder="Search..."
            className="py-2 px-3 bg-transparent w-full focus:outline-none text-xs sm:text-base"
            value={searchQuery} // Bind searchQuery state
            onChange={(e) => setSearchQuery(e.target.value)} // Update searchQuery state
          />
          <button className="py-2 px-4 rounded">
            <img className="w-4" src="./assets/Icons/Search.png" alt="" />
          </button>
        </div>

        {/* <button className="bg-yellow w-1/4 py-2 px-4 rounded-full font-semibold text-xs sm:text-base">
          Filter ⏷
        </button> */}
      </div>
    </div>
  );
};

export default SearchBar;
