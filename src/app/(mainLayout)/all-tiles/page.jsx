import TilesCard from "@/components/Shared/TilesCard";
import { Button, InputGroup } from "@heroui/react";
import { SlMagnifier } from "react-icons/sl";

import GetProducts from "@/utils/GetProducts";
import GetCategory from "@/utils/GetCategory";
import SearchTiles from "@/lib/SearchTiles";
import SearchBox from "@/utils/SearchBox";
import NoDataUi from "@/components/Shared/NoDataUi";
import CategoryFilter from "@/utils/CategoryFilter";

const ALlTilesPage = async ({ searchParams }) => {
  const allTilesInfo = await GetProducts();
  const Categories = await GetCategory();

  const { tiles } = await searchParams;
  const filterTiles = SearchTiles(tiles, allTilesInfo) || allTilesInfo;
  console.log(filterTiles);

  return (
    <div className="bg-[#f9f9ff] py-10 lg:py-16">
      <div className="container mx-auto px-4">
        {/* HEADER */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="font-epi font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 leading-tight">
            All Tile Masterpieces
          </h2>

          <p className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed">
            Browse our complete collection of high-end tiles designed to bring
            elegance, durability, and timeless beauty to every space.
          </p>
        </div>

        {/* STICKY CONTROL BAR */}
        <div className="sticky top-16 z-40 bg-[#f9f9ff]/80 backdrop-blur-md py-6">
          <div className="max-w-4xl mx-auto space-y-5">
            {/* SEARCH */}
            <InputGroup className="w-full bg-white shadow-sm border border-gray-200 rounded-xl px-3 py-2 focus-within:ring-2 focus-within:ring-[#3B82F6]/30 transition-all">
              <InputGroup.Prefix>
                <SlMagnifier className="size-5 text-gray-500" />
              </InputGroup.Prefix>
              <SearchBox />
            </InputGroup>

            {/* FILTER */}
            <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
              {Categories.map((category, ind) => (
                <CategoryFilter key={ind} category={category} />
              ))}
            </div>
          </div>
        </div>

        {/* GRID */}
        <div className="grid mt-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filterTiles.length > 0 ? (
            filterTiles.map((tilesInfo, ind) => (
              <TilesCard key={ind} tilesInfo={tilesInfo} />
            ))
          ) : (
            <NoDataUi />
          )}
        </div>
      </div>
    </div>
  );
};

export default ALlTilesPage;
