import Image from "next/image";
import { Button } from "@heroui/react";
import { useState } from "react";
import GetProducts from "@/utils/GetProducts";

const favorites = [
  "https://i.ibb.co.com/8Dgwy68q/mosaic.jpg",
  "https://i.ibb.co.com/F4Qvm3Qf/mate.jpg",
  "https://i.ibb.co.com/35jWVT5n/wood.jpg",
  "https://i.ibb.co.com/yF51nwBZ/geometric2.png",
];

const collections = [
  {
    title: "Modern Minimalist Kitchen",
    items: 15,
    updated: "2 days ago",
    image: "https://i.ibb.co.com/r2K7hmM2/kitchen.png",
    extra: "+12",
  },
  {
    title: "Industrial Loft Suite",
    items: 11,
    updated: "1 week ago",
    image: "https://i.ibb.co.com/Xr13F9Jz/hero-banner.png",
    extra: "+8",
  },
];

const DashboardUI = () => {
  return (
    <div className="bg-[#f5f6fa] min-h-screen p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Top Stats */}
        <div className="bg-white rounded-xl shadow-sm p-6 flex justify-between text-center">
          {[
            { label: "Saved", value: 24 },
            { label: "Collections", value: 8 },
            { label: "Views", value: 156 },
          ].map((item, i) => (
            <div key={i} className="flex-1">
              <h2 className="text-xl font-semibold text-blue-600">
                {item.value}
              </h2>
              <p className="text-xs text-gray-500 uppercase tracking-wide">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Saved Favorites */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-gray-800">Saved Favorites</h3>
            <button className="text-sm text-blue-600 hover:underline">
              View All →
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {favorites.map((img, i) => (
              <div
                key={i}
                className="relative w-full h-40 rounded-xl overflow-hidden"
              >
                <Image
                  src={img}
                  alt="tile"
                  fill
                  className="object-cover hover:scale-105 transition"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Collections */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-gray-800">My Collections</h3>

            <Button className="bg-blue-600 text-white rounded-full px-4 py-2 text-sm">
              + New Collection
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {collections.map((col, i) => (
              <div
                key={i}
                className="relative rounded-xl overflow-hidden shadow-sm group"
              >
                <div className="relative h-100">
                  <Image
                    src={col.image}
                    alt={col.title}
                    fill
                    className="object-cover group-hover:scale-105 transition"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur p-4 flex justify-between items-end">
                  <div>
                    <h4 className="font-medium text-gray-800">{col.title}</h4>
                    <p className="text-xs text-gray-500">
                      {col.items} items • Updated {col.updated}
                    </p>
                  </div>

                  <span className="text-sm text-gray-500">{col.extra}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Preferences Card */}
        <div className="bg-white rounded-xl p-5 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-xl">
              🎨
            </div>

            <div>
              <h4 className="font-medium text-gray-800">Design Preferences</h4>
              <p className="text-sm text-gray-500">
                Personalize your feed based on your style and favorites.
              </p>
            </div>
          </div>

          <Button variant="outline">Manage Preferences</Button>
        </div>
      </div>
    </div>
  );
};

export default DashboardUI;
