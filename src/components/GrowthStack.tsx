interface GrowthData {
  year: string;
  title: string;
  company: string;
  duration: string;
}

const GrowthStack = () => {
  const growthData: GrowthData[] = [
    {
      year: "2017-18",
      title: "UI/UX Foundations",
      company: "PIALGO Solutions",
      duration: "Oct 2017 - Jul 2018",
    },
    {
      year: "2020",
      title: "Full Stack & Research",
      company: "Lithoera Technology",
      duration: "Feb 2020 - Jul 2020",
    },
    {
      year: "2021",
      title: "Enterprise Systems",
      company: "Hindalco",
      duration: "Feb 2021 - Jul 2021",
    },
    {
      year: "2022",
      title: "Enterprise Systems",
      company: "Enaviya IT",
      duration: "Feb 2022 - Dec 2023",
    },
    {
      year: "2023",
      title: "Enterprise Systems",
      company: "MITS Global",
      duration: "Dec 2022 - Mar 2025",
    },
    {
      year: "2025",
      title: "Enterprise Systems",
      company: "Aaneel Infotech",
      duration: "Mar 2025 - Present",
    },
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
      <div className="relative h-3 bg-gradient-to-r from-red-200 to-red-100 rounded-full mb-16 shadow-inner">
        {/* Progress Lines */}
        {growthData.map((_, index) => {
          if (index === 0) return null;
          const { width } = calculatePositions(index, growthData.length);
          return (
            <div
              key={`progress-${index}`}
              className="absolute h-3 bg-red-500 rounded-full transition-all duration-700 ease-in-out"
              style={{ width, left: "85%" }}
            ></div>
          );
        })}

        {/* Timeline Markers */}
        {growthData.map((_, index) => {
          const { position } = calculatePositions(index, growthData.length);
          return (
            <div
              key={`marker-${index}`}
              className="absolute -top-2 w-6 h-6 bg-white border-4 border-red-500 rounded-full shadow-md z-10"
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
              className="absolute top-8 text-xs font-semibold text-red-700 w-24 text-center"
              style={{ left: position, transform: "translateX(-50%)" }}
            >
              {item.year}
            </div>
          );
        })}
      </div>

      {/* Experience Cards */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
        {[...growthData].reverse().map((item, index) => (
          <div
            key={`detail-${index}`}
            className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition w-full max-w-xs"
          >
            <div className="text-sm font-semibold text-red-700">{item.company}</div>
            <div className="text-xs text-gray-600">{item.title}</div>
            <div className="text-xs text-gray-500">{item.duration}</div>
            <div className="text-[10px] text-gray-400 mt-1">{item.year}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GrowthStack;
