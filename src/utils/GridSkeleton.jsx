const GridSkeleton = () => {
  return (
    <div className="grid mt-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="rounded-xl border border-gray-200 p-4 space-y-4"
        >
          {/* Image skeleton */}
          <div className="h-40 w-full rounded-lg bg-gray-200 animate-pulse" />

          {/* Title */}
          <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse" />

          {/* Subtitle */}
          <div className="h-3 w-1/2 bg-gray-200 rounded animate-pulse" />

          {/* Price / info row */}
          <div className="flex justify-between items-center pt-2">
            <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
            <div className="h-8 w-20 bg-gray-200 rounded-lg animate-pulse" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default GridSkeleton;
