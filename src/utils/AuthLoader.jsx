const AuthLoader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="flex flex-col items-center gap-5">
        {/* Animated Spinner */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>
          <div className="absolute inset-0 rounded-full border-4 border-t-blue-600 animate-spin"></div>
        </div>

        {/* Brand */}
        <div className="text-center">
          <h1 className="text-xl font-semibold text-gray-900">NakshiTiles</h1>
          <p className="text-sm text-gray-500">Preparing your account...</p>
        </div>

        {/* Skeleton lines */}
        <div className="w-72 space-y-2 mt-2">
          <div className="h-3 bg-gray-200 rounded animate-pulse" />
          <div className="h-3 bg-gray-200 rounded animate-pulse w-5/6 mx-auto" />
          <div className="h-3 bg-gray-200 rounded animate-pulse w-4/6 mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default AuthLoader;
