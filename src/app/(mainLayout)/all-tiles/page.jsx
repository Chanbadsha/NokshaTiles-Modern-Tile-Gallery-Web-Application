import TilesCard from "@/components/Shared/TilesCard";
import { Button, InputGroup } from "@heroui/react";
import { SlMagnifier } from "react-icons/sl";
import Categories from "@/../public/categories.json";

const ALlTilesPage = () => {
  const allTilesInfo = Array.from({ length: 12 }, (_, i) => ({ id: i }));

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

              <InputGroup.Input
                className="w-full text-base md:text-lg bg-transparent outline-none px-2"
                placeholder="Search tiles by name..."
              />
            </InputGroup>

            {/* FILTER */}
            <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
              {Categories.map((category, ind) => (
                <Button
                  key={ind}
                  className="
                    flex-shrink-0 px-4 py-2 rounded-full text-sm md:text-base
                    border border-gray-200 bg-white text-gray-700
                    hover:bg-[#3B82F6] hover:text-white hover:border-[#3B82F6]
                    transition-all duration-300
                  "
                >
                  {category.category}
                </Button>
              ))}
            </div>
          </div>
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
