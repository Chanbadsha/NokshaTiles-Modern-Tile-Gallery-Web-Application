import TilesCard from "@/components/Shared/TilesCard";
import { Button, InputGroup } from "@heroui/react";
import { SlMagnifier } from "react-icons/sl";
import Categories from "@/../public/categories.json";

const ALlTilesPage = () => {
  const allTilesInfo = [
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
  ];
  return (
    <div className="bg-[#f9f9ff] py-10 lg:py-16">
      <div className="container mx-auto px-4">
        {/* HEADING */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="font-epi font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 leading-tight">
            All Tile Masterpieces
          </h2>

          <p className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed">
            Browse our complete collection of high-end tiles designed to bring
            elegance, durability, and timeless beauty to every space. Explore
            premium surfaces crafted for modern interiors.
          </p>

          {/* SEARCH */}
          <div className="mt-8 flex justify-center">
            <InputGroup className="w-full max-w-2xl bg-white shadow-sm border border-gray-200 rounded-xl px-3 py-2 focus-within:ring-2 focus-within:ring-[#3B82F6]/30 transition-all">
              <InputGroup.Prefix>
                <SlMagnifier className="size-5 text-gray-500" />
              </InputGroup.Prefix>

              <InputGroup.Input
                className="w-full text-base md:text-lg bg-transparent outline-none px-2"
                placeholder="Search tiles by name..."
              />
            </InputGroup>
          </div>

          {/* Category Filter */}
          <ul className="flex gap-3 flex-wrap  mt-6 md:gap-4 items-center overflow-x-auto py-2 scrollbar-hide">
            {Categories.map((category, ind) => (
              <li key={ind} className="shrink-0">
                <Button
                  className="
          px-4 py-2 font-man rounded-full text-sm md:text-base
          border border-gray-200 bg-white text-gray-700
          hover:bg-[#3B82F6] hover:text-white hover:border-[#3B82F6]
          transition-all duration-300
        "
                >
                  {category.category}
                </Button>
              </li>
            ))}
          </ul>
        </div>

        {/* GRID */}
        <div className="grid mt-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allTilesInfo.map((tilesInfo, ind) => (
            <TilesCard key={ind} tilesInfo={tilesInfo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ALlTilesPage;
