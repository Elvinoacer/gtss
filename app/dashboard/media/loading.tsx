export default function MediaLoading() {
  return (
    <div className="animate-pulse space-y-6 p-6 lg:p-10 max-w-7xl mx-auto">
      <div className="flex justify-between items-center">
        <div className="h-8 w-44 bg-gray-200 dark:bg-gray-800 rounded-lg" />
        <div className="h-10 w-36 bg-gray-200 dark:bg-gray-800 rounded-lg" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="aspect-square bg-gray-200 dark:bg-gray-800 rounded-xl" />
        ))}
      </div>
    </div>
  );
}
