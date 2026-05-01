"use client";

import { useRouter } from "next/navigation";

export default function SearchBox() {
  const router = useRouter();

  const handleSearch = (e) => {
    const value = e.target.value;
    router.push(`?tiles=${value}`);
  };

  return (
    <input
      onChange={handleSearch}
      className="w-full text-base md:text-lg bg-transparent outline-none px-2"
      placeholder="Search tiles by name..."
    />
  );
}
