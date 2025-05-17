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
      company: "Enaviya Information Technology",
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
    <div className="mx-auto w-full px-4 py-10">
      {/* Timeline Visualization */}
      <div className="relative h-3 bg-red-100 rounded-full mb-12">
        {/* Progress Line */}
        {growthData.map((_, index) => {
          if (index === 0) return null;
          const { width } = calculatePositions(index, growthData.length);
          return (
            <div
              key={`progress-${index}`}
              className="absolute h-3 bg-red-500 rounded-full transition-all duration-700 ease-in-out"
              style={{ width, left: "87%" }}
            ></div>
          );
        })}

        {/* Markers */}
        {growthData.map((_, index) => {
          const { position } = calculatePositions(index, growthData.length);
          return (
            <div
              key={`marker-${index}`}
              className="absolute -top-1.5 w-5 h-5 bg-white border-4 border-red-600 rounded-full shadow"
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
              className="absolute top-6 text-[11px] text-center font-medium text-red-700 w-20"
              style={{ left: position, transform: "translateX(-50%)" }}
            >
              {item.year}
            </div>
          );
        })}
      </div>

      {/* Experience Cards */}
      <div
        className={`grid gap-6 ${
          growthData.length <= 3
            ? "grid-cols-1 md:grid-cols-3"
            : growthData.length <= 4
            ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
            : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        }`}
      >
        {[...growthData].reverse().map((item, index) => (
          <div
            key={`detail-${index}`}
            className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-full bg-red-100">
                <svg
                  className="h-5 w-5 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-base font-semibold text-red-800">
                  {item.company}
                </h4>
                <p className="text-sm text-gray-700 mt-1">{item.title}</p>
                <p className="text-xs text-gray-500 mt-1">{item.duration}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GrowthStack;
