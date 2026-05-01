"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function SearchBox() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [value, setValue] = useState(searchParams.get("tiles") || "");

  useEffect(() => {
    const timeout = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());

      if (value.trim()) {
        params.set("tiles", value);
      } else {
        params.delete("tiles");
      }

      router.push(`?${params.toString()}`);
    }, 400); // debounce

    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="w-full text-base md:text-lg bg-transparent outline-none px-2"
      placeholder="Search tiles by name..."
    />
  );
}
