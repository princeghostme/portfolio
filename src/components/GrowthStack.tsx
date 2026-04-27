interface GrowthData {
  year: string;
  title: string;
  company: string;
  duration: string;
  description?: string;
}

const GrowthStack = () => {
  const growthData: GrowthData[] = [
    {
      year: "2025",
      title: "Senior Software Developer",
      company: "DynPro India",
      duration: "Nov 2025 - Present",
      description: "Microservices migration, API Gateway, Entra ID auth"
    },
    {
      year: "2025",
      title: "Software Developer",
      company: "Aaneel Infotech",
      duration: "Apr 2025 - Nov 2025",
      description: "Healthcare SaaS, 10K+ concurrent users"
    },
    {
      year: "2023",
      title: "Software Developer",
      company: "MITS Global",
      duration: "Dec 2023 - Mar 2025",
      description: "Fintech platform, Performance optimization (20-30%)"
    },
    {
      year: "2022",
      title: "Junior Software Developer",
      company: "Enaviya IT",
      duration: "Feb 2022 - Dec 2023",
      description: "Enterprise applications, UI Performance"
    },
    {
      year: "2021",
      title: "Software Developer Trainee",
      company: "Add Innovation",
      duration: "Aug 2021 - Dec 2021",
      description: "AI-based inspection system, Python + .NET"
    }
  ];

  const calculatePositions = (index: number, total: number) => {
    const segment = 100 / (total - 1);
    return {
      position: `${index * segment}%`,
      width: `${segment}%`,
    };
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-14">
      {/* Timeline Visualization */}
      <div className="relative h-3 bg-gradient-to-r from-purple-200 to-purple-100 rounded-full mb-16 shadow-inner">
        {/* Progress Lines */}
        {growthData.map((_, index) => {
          if (index === 0) return null;
          const { width } = calculatePositions(index, growthData.length);
          return (
            <div
              key={`progress-${index}`}
              className="absolute h-3 bg-purple-500 rounded-full transition-all duration-700 ease-in-out"
              style={{ width, left: "-5%" }}
            ></div>
          );
        })}

        {/* Timeline Markers */}
        {growthData.map((_, index) => {
          const { position } = calculatePositions(index, growthData.length);
          return (
            <div
              key={`marker-${index}`}
              className="absolute -top-2 w-6 h-6 bg-white border-4 border-purple-500 rounded-full shadow-md z-10"
              style={{ left: position, transform: "translateX(-50%)" }}
            />
          );
        })}

        {/* Year Labels */}
        {growthData.map((item, index) => {
          const { position } = calculatePositions(index, growthData.length);
          return (
            <div
              key={`year-${index}`}
              className="absolute top-8 text-xs font-semibold text-purple-700 w-24 text-center"
              style={{ left: position, transform: "translateX(-50%)" }}
            >
              {item.year}
            </div>
          );
        })}
      </div>

      {/* Experience Cards */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-items-center">
        {[...growthData].map((item, index) => (
          <div
            key={`detail-${index}`}
            className="bg-white border-2 border-purple-100 rounded-lg p-4 shadow-sm hover:shadow-lg hover:border-purple-300 transition w-full max-w-sm group"
          >
            <div className="text-sm font-bold text-purple-700 group-hover:text-purple-900">{item.company}</div>
            <div className="text-xs font-medium text-gray-700 mt-1">{item.title}</div>
            <div className="text-xs text-gray-600 mt-1">{item.duration}</div>
            {item.description && (
              <div className="text-[10px] text-gray-500 mt-2 italic border-t border-gray-100 pt-2">
                {item.description}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GrowthStack;
