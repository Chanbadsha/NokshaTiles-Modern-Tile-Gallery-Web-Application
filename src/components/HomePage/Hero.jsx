import banner from "@/assets/hero-banner.png";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="bg-[#edf2fc]">
      <section className="container  mx-auto px-4 py-8 lg:py-16 flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="font-epi font-bold text-2xl lg:text-3xl  xl:text-5xl leading-tight text-gray-900 max-w-2xl mx-auto lg:mx-0">
            NokshaTiles — Crafted Patterns for Modern Spaces
          </h1>

          <p className="mt-4 lg:mt-6 text-gray-600 text-sm lg:text-base xl:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
            NokshaTiles is a modern tile gallery platform where design meets
            craftsmanship. Explore a curated collection of premium ceramic,
            marble, and patterned tiles designed for contemporary living.
            Discover inspiration through aesthetic layouts, detailed previews,
            and thoughtfully crafted designs to transform your space with style,
            elegance, and creativity.
          </p>

          {/* Buttons */}
          <div className="mt-6 lg:mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
            <Link href="/all-tiles">
              <Button className="flex items-center gap-2 lg:p-6 p-4 text-base lg:text-lg font-semibold rounded-xl bg-linear-to-r from-[#004395] to-[#3B82F6] hover:from-[#3B82F6] hover:to-[#004395] transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-lg">
                Browse Tiles
                <FaArrowRightLong className="text-sm" />
              </Button>
            </Link>

            <Link href="/">
              <Button
                variant="outline"
                className="lg:p-6 p-4 text-base lg:text-lg font-semibold rounded-xl border-gray-300 hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1"
              >
                Explore Design
              </Button>
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 w-full flex justify-center">
          <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl w-11/12 mx-auto md:w-9/12 xl:size-10/12   transition-all duration-500">
            <Image
              src={banner}
              alt="NokshaTiles Hero Banner"
              width={600}
              height={600}
              className="w-full h-full  object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
