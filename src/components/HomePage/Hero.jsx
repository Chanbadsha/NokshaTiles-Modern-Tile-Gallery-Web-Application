"use client";

import banner from "@/assets/hero-banner.png";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div className="bg-[#edf2fc]">
      <section className="container mx-auto px-4 py-8 lg:py-16 flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Content */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h1
            className="font-epi font-bold text-2xl lg:text-3xl xl:text-5xl leading-tight text-gray-900 max-w-2xl mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            NokshaTiles — Crafted Patterns for Modern Spaces
          </motion.h1>

          <motion.p
            className="mt-4 lg:mt-6 text-gray-600 text-sm lg:text-base xl:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            NokshaTiles is a modern tile gallery platform where design meets
            craftsmanship. Explore a curated collection of premium ceramic,
            marble, and patterned tiles designed for contemporary living.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="mt-6 lg:mt-8 flex flex-wrap gap-3 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link href="/all-tiles">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button className="flex items-center gap-2 lg:p-6 p-4 text-base lg:text-lg font-semibold rounded-xl bg-linear-to-r from-[#004395] to-[#3B82F6] shadow-md">
                  Browse Tiles
                  <FaArrowRightLong className="text-sm" />
                </Button>
              </motion.div>
            </Link>

            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button
                  variant="outline"
                  className="lg:p-6 p-4 text-base lg:text-lg font-semibold rounded-xl border-gray-300"
                >
                  Explore Design
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          className="flex-1 w-full flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative overflow-hidden rounded-2xl shadow-lg w-11/12 mx-auto md:w-9/12 xl:size-10/12">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Image
                src={banner}
                alt="NokshaTiles Hero Banner"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Hero;
