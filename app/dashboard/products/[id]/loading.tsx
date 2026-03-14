export default function ProductDetailLoading() {
  return (
    <div className="animate-pulse space-y-6 p-6 lg:p-10 max-w-6xl mx-auto">
      <div className="h-4 w-64 bg-gray-200 dark:bg-gray-800 rounded" />
      <div className="h-48 bg-gray-200 dark:bg-gray-800 rounded-2xl" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-24 bg-gray-200 dark:bg-gray-800 rounded-xl" />
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="h-64 bg-gray-200 dark:bg-gray-800 rounded-xl" />
        </div>
        <div className="h-64 bg-gray-200 dark:bg-gray-800 rounded-xl" />
      </div>
    </div>
  );
}
