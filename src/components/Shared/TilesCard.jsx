import { Button, Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const cardInfo = {
  id: "cat_008",
  title: "Stone Tiles",
  category: "Stone",
  slug: "stone-tiles",
  description: "Natural stone texture for rugged elegance.",
  dimension: "40x40 cm",
  image: "https://i.ibb.co.com/xKQ5KwMT/stone.png",
  feature: "Rugged Elegance",
};

const TilesCard = () => {
  const { title, slug, dimension, feature, image, category } = cardInfo;

  return (
    <Card className="w-full overflow-hidden rounded-2xl border border-gray-100 bg-white hover:shadow-xl transition-all duration-300 group">
      {/* IMAGE SECTION */}
      <div className="relative h-56 w-full overflow-hidden">
        {/* Category Badge */}
        <span className="absolute top-3 left-3 z-10 bg-black/60 text-white text-xs px-3 py-1 rounded-full backdrop-blur-md">
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="p-5 flex flex-col gap-3">
        <Card.Header className="p-0 space-y-1">
          <Card.Title className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
            {title}
          </Card.Title>

          <Card.Description className="text-sm text-gray-500 leading-relaxed">
            {dimension} • {feature}
          </Card.Description>
        </Card.Header>

        {/* FOOTER */}
        <Card.Footer className="pt-2">
          <Link href={`/${slug}`} className="w-full">
            <Button className="w-full rounded-xl bg-gradient-to-r from-[#004395] to-[#3B82F6] text-white font-medium hover:from-[#3B82F6] hover:to-[#004395] transition-all duration-300 hover:-translate-y-1">
              View Details
            </Button>
          </Link>
        </Card.Footer>
      </div>
    </Card>
  );
};

export default TilesCard;
