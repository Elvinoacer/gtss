export default function AnalyticsLoading() {
  return (
    <div className="animate-pulse space-y-6 p-6 lg:p-10 max-w-7xl mx-auto">
      <div className="h-8 w-40 bg-gray-200 dark:bg-gray-800 rounded-lg" />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="h-28 bg-gray-200 dark:bg-gray-800 rounded-xl" />
        ))}
      </div>
      <div className="h-80 bg-gray-200 dark:bg-gray-800 rounded-xl" />
    </div>
  );
}
