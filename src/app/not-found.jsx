import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#edf2fc] via-white to-[#f9f9ff] px-4">
      {/* 🔵 Background Glow */}
      <div className="absolute w-[400px] h-[400px] bg-blue-200/30 blur-3xl rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[300px] h-[300px] bg-indigo-200/30 blur-3xl rounded-full bottom-[-80px] right-[-80px]" />

      {/* 🧩 Content */}
      <div className="relative z-10 items-center text-center max-w-lg space-y-6">
        {/* 404 */}
        <h1 className="text-5xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#004395] to-[#3B82F6]">
          404
        </h1>

        {/* Title */}
        <h2 className="text-xl  text-center md:text-3xl font-bold text-gray-900">
          This tile went missing 🧩
        </h2>

        {/* Description */}
        <p className="text-gray-500 leading-relaxed text-sm md:text-base">
          The design you’re looking for might have been moved, removed, or never
          existed. But don’t worry — we’ve got plenty of beautiful patterns
          waiting for you.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <Link
            href="/"
            className="
              inline-flex items-center justify-center gap-2
              px-6 py-3 rounded-xl
              bg-linear-to-r from-[#004395] to-[#3B82F6]
              text-white font-medium
              hover:shadow-lg hover:-translate-y-1
              transition-all duration-300
            "
          >
            Home
            <FaArrowRightLong />
          </Link>

          <Link
            href="/all-tiles"
            className="
              inline-flex items-center justify-center
              px-6 py-3 rounded-xl
              border border-gray-300 text-gray-700
              hover:bg-gray-100 hover:-translate-y-1
              transition-all duration-300
            "
          >
            View Collection
          </Link>
        </div>

        {/* Subtle Footer Hint */}
        <p className="text-xs text-gray-400 pt-4">
          Tip: Try searching or exploring categories to find your perfect tile.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
