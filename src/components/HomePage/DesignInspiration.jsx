"use client";

import Image from "next/image";
import { motion } from "motion/react";

import floorImg from "@/assets/floor.png";
import gardenImg from "@/assets/garden.png";
import bathTabImg from "@/assets/bathtabe.png";
import kitchenImg from "@/assets/kitchen.png";

const DesignInspiration = () => {
  return (
    <div className="py-16">
      <section className="container mx-auto px-4 text-center">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
            Architectural Inspiration
          </h3>

          <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
            Discover how NakshiTiles transforms ordinary surfaces into timeless
            architectural expressions through light, texture, and pattern. Each
            design is crafted to bring depth, elegance, and harmony into modern
            living spaces.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[180px] md:auto-rows-[220px] lg:auto-rows-[250px]">
          {/* TILE CARD COMPONENT STYLE */}
          {[
            {
              img: kitchenImg,
              title: "Kitchen Concepts",
              desc: "Modern tile layouts designed for elegant kitchen interiors.",
              span: "col-span-2 row-span-2",
            },
            {
              img: bathTabImg,
              title: "Bathroom Elegance",
              desc: "Minimal and luxury tile designs for modern bathrooms.",
              span: "col-span-2",
            },
            {
              img: gardenImg,
              title: "Garden Serenity",
              desc: "Outdoor tile harmony inspired by nature.",
              span: "",
            },
            {
              img: floorImg,
              title: "Floor Elegance",
              desc: "Durable tile patterns for modern interiors.",
              span: "",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className={`overflow-hidden rounded-xl shadow-md group relative ${item.span}`}
            >
              <Image
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

              {/* TEXT */}
              <div className="absolute bottom-0 left-0 p-5 text-left text-white">
                <h3 className="text-lg md:text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-200 mt-1">{item.desc}</p>

                <button className="mt-2 text-xs bg-white/20 backdrop-blur px-3 py-1 rounded-full hover:bg-white/30 transition">
                  Explore Design
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DesignInspiration;
