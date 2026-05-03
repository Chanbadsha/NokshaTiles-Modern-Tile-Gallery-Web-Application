"use client";
import { Button } from "@heroui/react";
import toast from "react-hot-toast";
import { FaFlask, FaHeart } from "react-icons/fa6";

const CtaBtn = () => {
  return (
    <div className="flex gap-3">
      {/* Primary Action */}
      <Button
        onClick={() => toast.success("Added to wishlist")}
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
        onClick={() => toast.success("Sample request submitted")}
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
  );
};

export default CtaBtn;
