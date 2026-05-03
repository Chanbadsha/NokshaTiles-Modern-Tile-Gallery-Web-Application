"use client";

import { Button, Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "motion/react";

const TilesCard = ({ tilesInfo }) => {
  const { title, image, category, price, dimensions, material, id } = tilesInfo;

  const slug = title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");

  const ids = slug + "_" + id;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -6 }}
      className="h-full"
    >
      <Card className="w-full h-full overflow-hidden rounded-2xl border border-gray-100 bg-white hover:shadow-2xl transition-all duration-300 group">
        {/* IMAGE SECTION */}
        <div className="relative h-56 w-full overflow-hidden">
          <span className="absolute capitalize top-3 left-3 z-10 bg-black/60 text-white text-xs px-3 py-1 rounded-full backdrop-blur-md">
            {category}
          </span>

          <motion.div whileHover={{ scale: 1.08 }}>
            <Image
              src={image}
              alt={title}
              width={500}
              height={300}
              className="w-full h-full object-cover transition-transform duration-700"
            />
          </motion.div>

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
          <Card.Footer className="pt-2 flex justify-between items-center">
            <p className="flex items-end gap-1 text-blue-600 font-semibold text-base md:text-lg">
              ${price}
              <span className="text-xs md:text-sm text-gray-500 font-normal">
                /m²
              </span>
            </p>

            <Link
              href={`/tiles-details/${ids}`}
              className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-800 transition-all"
            >
              View Details
              <motion.span whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                <FaArrowRightLong />
              </motion.span>
            </Link>
          </Card.Footer>
        </div>
      </Card>
    </motion.div>
  );
};

export default TilesCard;
