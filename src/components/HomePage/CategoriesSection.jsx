import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import tilesCategories from "@/../public/categories.json";
import GetProducts from "@/utils/GetProducts";
import CategoriesCard from "../Shared/CategoriesCard";
import TilesCard from "../Shared/TilesCard";

const CategoriesSection = async () => {
  const allTiles = await GetProducts();
  return (
    <section className="bg-gray-50/50 py-10 lg:py-16">
      <div className="container mx-auto px-4">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div className="space-y-2">
            <h3 className="font-epi text-2xl lg:text-4xl font-bold text-gray-900">
              Curated Tile Collections
            </h3>

            <p className="text-sm md:text-base text-gray-600 max-w-md">
              Handpicked premium designs for modern spaces
            </p>
          </div>

          {/* CTA */}
          <Link
            href="/all-tiles"
            className="inline-flex justify-end items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800 transition-all group"
          >
            View All
            <FaArrowRightLong className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        {/* GRID */}
        <div className="grid pt-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-8">
          {allTiles.slice(0, 4).map((tilesInfo) => (
            <TilesCard key={tilesInfo.id} tilesInfo={tilesInfo} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
