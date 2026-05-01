"use client";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";

const CategoryFilter = ({ category }) => {
  const router = useRouter();

  const handleSearch = () => {
    const value = category.category.toLowerCase();
    router.push(`?tiles=${value}`);
  };
  return (
    <Button
      onClick={handleSearch}
      className="
                    shrink-0 px-4 py-2 rounded-full text-sm md:text-base
                    border border-gray-200 bg-white text-gray-700
                    hover:bg-[#3B82F6] hover:text-white hover:border-[#3B82F6]
                    transition-all duration-300
                  "
    >
      {category.category}
    </Button>
  );
};

export default CategoryFilter;
