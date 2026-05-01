const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#edf2fc] via-white to-[#f8faff]">
      <div className="flex flex-col items-center gap-6">
        {/* Spinner */}
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 rounded-full border-4 border-blue-200"></div>
          <div className="absolute inset-0 rounded-full border-4 border-[#3B82F6] border-t-transparent animate-spin"></div>
        </div>

        {/* Text */}
        <p className="text-gray-500 text-sm tracking-wide">
          Loading beautiful tiles...
        </p>
      </div>
    </div>
  );
};

export default Loading;
