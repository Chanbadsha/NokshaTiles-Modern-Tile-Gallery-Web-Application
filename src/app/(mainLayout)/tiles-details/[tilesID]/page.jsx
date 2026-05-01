import AllTiles from "@/../public/tiles.json";
import { Button, Separator } from "@heroui/react";
import Image from "next/image";
import { FaFlask, FaGreaterThan, FaHeart } from "react-icons/fa6";
import TilesCate from "@/../public/categories.json";
import GetProducts from "@/utils/GetProducts";

const TilesDetailsPage = async ({ params }) => {
  const { tilesID } = await params;
  const paramLen = tilesID.length;
  const id = tilesID.slice(paramLen - 8, paramLen);

  const allTilesInfo = await GetProducts();
  const tiles = allTilesInfo.find((tile) => tile.id === id);

  if (!tiles) return <p className="p-10">Tile not found</p>;

  const {
    image,
    title,
    inStock,
    description,
    category,
    material,
    dimensions,
    price,
  } = tiles;

  return (
    <div className="container mx-auto py-6  px-4 lg:py-16">
      {/* Details Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* IMAGE */}
        <div className="rounded-2xl h-87.5 md:h-112.5 lg:h-137.5 overflow-hidden shadow-xl self-start">
          <Image
            src={image}
            alt={title}
            width={800}
            height={800}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* CONTENT */}
        <div className="flex flex-col gap-5">
          {/* BREADCRUMB */}
          <ul className="flex items-center text-sm text-gray-500 gap-2">
            <li>Collection</li>
            <FaGreaterThan className="text-xs" />
            <li>Tiles</li>
            <FaGreaterThan className="text-xs" />
            <li className="text-gray-900 font-medium ">{title}</li>
          </ul>

          {/* STOCK */}
          <div className="flex items-center gap-2">
            {/* BEST SELLER */}
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-700">
              Best Seller
            </span>

            {/* STOCK STATUS */}
            <span
              className={`px-3 py-1 text-xs rounded-full font-medium ${
                inStock
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {inStock ? "In Stock" : "Out of Stock"}
            </span>
          </div>

          {/* TITLE */}
          <h1 className="text-2xl md:text-3xl xl:text-5xl  font-bold text-gray-900">
            {title}
          </h1>

          {/* DESCRIPTION */}
          <p className="text-gray-600 leading-relaxed">{description}</p>

          <Separator />

          {/* SPECS */}
          <div className="space-y-3  font-man ">
            <div className="flex justify-between">
              <span className="text-gray-500">Category</span>
              <span className="font-medium capitalize text-gray-900">
                {category}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Material</span>
              <span className="font-medium capitalize text-gray-900">
                {material}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Dimensions</span>
              <span className="font-medium capitalize text-gray-900">
                {dimensions}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Price</span>
              <span className="font-semibold text-blue-600">${price} / m²</span>
            </div>
          </div>

          <Separator />

          {/* CTA */}
          <div className="flex gap-3">
            {/* Primary Action */}
            <Button
              className="
      w-full flex items-center justify-center gap-2
      bg-linear-to-r from-[#004395] to-[#3B82F6]
      text-white font-medium rounded-xl
      hover:from-[#3B82F6] hover:to-[#004395]
      transition-all duration-300
      hover:-translate-y-1 py-3 lg:py-6 shadow-md hover:shadow-lg
    "
            >
              <FaHeart className="text-sm" />
              Add to Wishlist
            </Button>

            {/* Secondary Action */}
            <Button
              variant="outline"
              className="
    w-full flex py-3 lg:py-6 items-center justify-center gap-2
    rounded-xl border-gray-300 text-gray-700 bg-white
    transition-all duration-300
    hover:bg-blue-50 hover:border-[#3B82F6] hover:text-[#3B82F6]
    hover:-translate-y-1 hover:shadow-md
    active:scale-[0.98]
    group
  "
            >
              <FaFlask className="text-sm transition-transform duration-300 group-hover:rotate-12" />
              Request Sample
            </Button>
          </div>
        </div>
      </div>
      {/* Details Footer */}
      <div className="space-y-6">
        <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mt-12 lg:mt-16  text-gray-900">
          Complementary Selections
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TilesCate.slice(2, 5).map((tile, ind) => (
            <div
              key={ind}
              className="relative h-64 rounded-xl overflow-hidden group shadow-md"
            >
              <Image
                src={tile.image}
                alt={tile.title}
                width={400}
                height={400}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-3 left-4 text-white z-10">
                <h5 className="text-lg font-semibold">{tile.title}</h5>

                <p className="text-sm text-white/80">{tile.feature}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TilesDetailsPage;
