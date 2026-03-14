export default function QRCodesLoading() {
  return (
    <div className="animate-pulse space-y-6 p-6 lg:p-10 max-w-7xl mx-auto">
      <div className="flex justify-between items-center">
        <div className="h-8 w-40 bg-gray-200 dark:bg-gray-800 rounded-lg" />
        <div className="h-10 w-36 bg-gray-200 dark:bg-gray-800 rounded-lg" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-48 bg-gray-200 dark:bg-gray-800 rounded-2xl" />
        ))}
      </div>
    </div>
  );
}
