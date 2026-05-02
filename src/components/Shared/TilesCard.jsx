import { Button, Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const TilesCard = ({ tilesInfo }) => {
  const { title, image, category, price, dimensions, material, id } = tilesInfo;
  const slug = title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
  const ids = slug + "_" + id;

  return (
    <Card className="w-full overflow-hidden rounded-2xl border border-gray-100 bg-white hover:shadow-xl transition-all duration-300 group">
      {/* IMAGE SECTION */}
      <div className="relative h-56 w-full overflow-hidden">
        {/* Category Badge */}
        <span className="absolute capitalize top-3 left-3 z-10 bg-black/60 text-white text-xs px-3 py-1 rounded-full backdrop-blur-md">
          {category}
        </span>

        <Image
          src={image}
          alt={title}
          width={500}
          height={300}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="p-5 flex flex-col gap-3">
        <Card.Header className="p-0 space-y-1">
          <Card.Title className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
            {title}
          </Card.Title>

          <Card.Description className="text-sm text-gray-500 leading-relaxed">
            {dimensions} • {material}
          </Card.Description>
        </Card.Header>

        {/* FOOTER */}
        <Card.Footer className="pt-2 flex  justify-between items-center">
          {/* Price */}
          <p className="flex items-end gap-1 text-blue-600 font-semibold text-base md:text-lg">
            ${price}
            <span className="text-xs md:text-sm text-gray-500 font-normal">
              /m²
            </span>
          </p>
          {/* CTA */}
          <Link
            href={`/tiles-details/${ids}`}
            className="inline-flex justify-end items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-800 transition-all group"
          >
            View Details
            <FaArrowRightLong className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </Card.Footer>
      </div>
    </Card>
  );
};

export default TilesCard;
