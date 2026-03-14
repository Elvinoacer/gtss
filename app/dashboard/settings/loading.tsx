export default function SettingsLoading() {
  return (
    <div className="animate-pulse space-y-6 p-6 lg:p-10 max-w-4xl mx-auto">
      <div className="h-8 w-32 bg-gray-200 dark:bg-gray-800 rounded-lg" />
      <div className="space-y-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-20 bg-gray-200 dark:bg-gray-800 rounded-xl" />
        ))}
      </div>
    </div>
  );
}
