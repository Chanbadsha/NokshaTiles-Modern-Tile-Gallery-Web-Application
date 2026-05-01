import Link from "next/link";
const NoDataUi = () => {
  return (
    <div className="col-span-full flex items-center justify-center pb-24">
      <div className="text-center max-w-md">
        {/* Icon */}
        <div className="mx-auto w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        {/* Title */}
        <h2 className="text-xl md:text-2xl font-semibold text-gray-700">
          No tiles found
        </h2>

        {/* Description */}
        <p className="text-gray-500 mt-3 leading-relaxed">
          We couldn’t find any tiles matching your search.
          <br />
          Try using different keywords or check spelling.
        </p>

        {/* Optional helper tip */}
        <div className="mt-6 text-sm text-gray-400">
          Example:{" "}
          <span className="font-medium">“marble”, “grey”, “matte”</span>
        </div>

        {/* Optional action hint */}
        <Link
          href="/all-tiles"
          className="mt-6 inline-block px-5 py-2.5 rounded-lg bg-gray-900 text-white text-sm hover:bg-gray-800 transition"
        >
          Reset Search
        </Link>
      </div>
    </div>
  );
};

export default NoDataUi;
