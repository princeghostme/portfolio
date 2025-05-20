const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/20 backdrop-blur-sm">
      <div className="text-center space-y-8">
        {/* Glowing animated background */}
        <div className="relative inline-block">
          <div className="absolute -translate-x-5 -z-10">
            <div className="w-40 h-40 rounded-full blur-lg bg-gradient-to-br from-purple-200 to-purple-400 animate-bounce"></div>
          </div>
          {/* Loading text */}
          <h1 className="relative text-4xl font-bold text-purple-800">
            Loading
          </h1>
        </div>

        {/* Animated colored dots */}
        <div className="flex justify-center space-x-2">
          <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce delay-300"></div>
          <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce delay-900"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
