"use client";

function Shimmer() {
  return (
    <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
  );
}

export function SectionSkeleton() {
  return (
    <div className="w-full min-h-screen px-6 py-20 lg:w-[1280px] mx-auto">
      {/* Title */}
      <div className="relative overflow-hidden h-10 w-48 rounded-lg bg-white/5 mb-4">
        <Shimmer />
      </div>
      {/* Subtitle */}
      <div className="relative overflow-hidden h-5 w-full max-w-xl rounded-lg bg-white/5 mb-2">
        <Shimmer />
      </div>
      <div className="relative overflow-hidden h-5 w-2/3 max-w-md rounded-lg bg-white/5 mb-10">
        <Shimmer />
      </div>
      {/* Cards */}
      <div className="flex flex-wrap gap-6 mt-6">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="relative overflow-hidden flex-1 min-w-[260px] h-48 rounded-2xl bg-white/5"
          >
            <Shimmer />
          </div>
        ))}
      </div>
    </div>
  );
}
