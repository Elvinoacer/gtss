export default function TicketsLoading() {
  return (
    <div className="animate-pulse space-y-6 p-6 lg:p-10 max-w-7xl mx-auto">
      <div className="flex justify-between items-center">
        <div className="h-8 w-48 bg-gray-200 dark:bg-gray-800 rounded-lg" />
        <div className="h-10 w-36 bg-gray-200 dark:bg-gray-800 rounded-lg" />
      </div>
      <div className="h-12 bg-gray-200 dark:bg-gray-800 rounded-xl" />
      <div className="space-y-3">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-16 bg-gray-200 dark:bg-gray-800 rounded-lg" />
        ))}
      </div>
    </div>
  );
}
