import Image from "next/image";
import floorImg from "@/assets/floor.png";
import gardenImg from "@/assets/garden.png";
import bathTabImg from "@/assets/bathtabe.png";
import kitchenImg from "@/assets/kitchen.png";

const DesignInspiration = () => {
  return (
    <div className=" py-16">
      <section className="container mx-auto px-4 text-center">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
            Architectural Inspiration
          </h3>

          <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
            Discover how NakshiTiles transforms ordinary surfaces into timeless
            architectural expressions through light, texture, and pattern. Each
            design is crafted to bring depth, elegance, and harmony into modern
            living spaces.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[180px] md:auto-rows-[220px] lg:auto-rows-[250px]">
          {/* Large Image */}
          <div className="col-span-2 row-span-2 overflow-hidden rounded-xl shadow-md group relative">
            <Image
              src={kitchenImg}
              alt="Kitchen Design"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>

            {/* Text Content */}
            <div className="absolute bottom-0 left-0 p-5 text-left text-white">
              <h3 className="text-lg md:text-xl font-semibold">
                Kitchen Concepts
              </h3>

              <p className="text-sm text-gray-200 mt-1">
                Modern tile layouts designed for elegant kitchen interiors.
              </p>
              <button className="mt-2 text-xs bg-white/20 backdrop-blur px-3 py-1 rounded-full hover:bg-white/30 transition">
                Explore Design
              </button>
            </div>
          </div>

          {/* Top Right */}
          <div className="col-span-2 overflow-hidden rounded-xl shadow-md group relative">
            <Image
              src={bathTabImg}
              alt="Bathroom Design"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>

            {/* Text Content */}
            <div className="absolute bottom-0 left-0 p-5 text-left text-white">
              <h3 className="text-lg md:text-xl font-semibold">
                Bathroom Elegance
              </h3>

              <p className="text-sm text-gray-200 mt-1">
                Minimal and luxury tile designs for modern bathrooms.
              </p>
              <button className="mt-2 text-xs bg-white/20 backdrop-blur px-3 py-1 rounded-full hover:bg-white/30 transition">
                Explore Design
              </button>
            </div>
          </div>

          {/* Bottom Left */}
          <div className="overflow-hidden rounded-xl shadow-md group relative">
            <Image
              src={gardenImg}
              alt="Garden Design"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>

            {/* Text */}
            <div className="absolute text-left bottom-0 left-0 p-4 text-white">
              <h3 className="text-base md:text-lg font-semibold">
                Garden Serenity
              </h3>
              <p className="text-xs text-gray-200 mt-1">
                Outdoor tile harmony inspired by nature.
              </p>
              <button className="mt-2 text-xs bg-white/20 backdrop-blur px-3 py-1 rounded-full hover:bg-white/30 transition">
                Explore Design
              </button>
            </div>
          </div>

          {/* Bottom Right */}
          <div className="overflow-hidden rounded-xl shadow-md group relative">
            <Image
              src={floorImg}
              alt="Floor Design"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>

            {/* Text */}
            <div className="absolute text-left  bottom-0 left-0 p-4 text-white">
              <h3 className="text-base md:text-lg font-semibold">
                Floor Elegance
              </h3>
              <p className="text-xs text-gray-200 mt-1">
                Durable tile patterns for modern interiors.
              </p>
              <button className="mt-2 text-xs bg-white/20 backdrop-blur px-3 py-1 rounded-full hover:bg-white/30 transition">
                Explore Design
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DesignInspiration;
